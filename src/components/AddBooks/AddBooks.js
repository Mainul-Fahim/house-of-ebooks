import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
const AddBooks = () => {

    const { register, handleSubmit, watch, errors } = useForm();
    const [imageUrl,setImageUrl]=useState(null);
    const onSubmit = data => {
        console.log(data);
        const bookData={
            name: data.name,
            imageUrl: imageUrl,
        };
        const url=`http://localhost:5000/addBooks`;
        fetch(url,{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bookData)
        })
        .then(res =>console.log(res))
    };
    
    const handleImageUpload=event=>{
            console.log(event.target.files);
           const imageData=new FormData();
           imageData.set('key','72441dede61096c05221caead391c12a');
           imageData.append('image',event.target.files[0]);

           axios.post('https://api.imgbb.com/1/upload', imageData)
          .then(function (response) {
            setImageUrl(response.data.data.display_url);
          })
          .catch(function (error) {
            console.log(error);
          });
    }
    
    return (
        <div>
            <h1>Add Books</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                
                <input name="name" defaultValue="Book Name" ref={register} />
                <br/>
                <input name="exampleRequired" ref={register({ required: true })} />
                <br/>
                <input name="example" defaultValue="test" ref={register} />
                <br/>
                <input name="example" type="file" onChange={handleImageUpload}/>
                {errors.exampleRequired && <span>This field is required</span>}
                <br/>
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddBooks;