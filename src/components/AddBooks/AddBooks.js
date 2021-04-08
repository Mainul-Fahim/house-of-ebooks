import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import Admin from '../Admin/Admin';
import './AddBooks.css';

const AddBooks = () => {

    const { register, handleSubmit, watch, errors } = useForm();
    const [imageUrl,setImageUrl]=useState(null);
    const onSubmit = data => {
        console.log(data);
        const bookData={
            bookName: data.bookName,
            //id: data.id,
            authorName:data.authorName,
            price:data.price,
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
        .then(res =>{
            console.log(res)})
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
        <div className="row">
            <div className="col-md-3 addleft">
                <Admin></Admin>
            </div>
            <div className="col-md-9 addbook">
            <h1>Add Books</h1>
            <br/>
            <form onSubmit={handleSubmit(onSubmit)}>
                <h5>Book Name</h5>
                <input name="bookName" placeholder="Book Name" ref={register} />
                <br/>
                <h5>Author Name</h5>
                <input name="authorName" placeholder="Author Name" ref={register({ required: true })} />
                <br/>
                <h5>Price</h5>
                <input name="price" placeholder="Price" ref={register} />
                <br/>
                <h5>Add Photo</h5>
                <input name="example" type="file" onChange={handleImageUpload}/>
                {errors.exampleRequired && <span>This field is required</span>}
                <br/>
                <input type="submit" />
            </form>
            </div>
        </div>
    );
};

export default AddBooks;