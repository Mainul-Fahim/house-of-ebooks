import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const CheckOut = () => {
    const {id}=useParams();
    const [bookDetails,setBookDetails]=useState([]);
    const [checkOutDetails,setCheckOutDetails]=useState([]);

    useEffect(() =>{
        fetch('http://localhost:5000/books')
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            setBookDetails(data)});
    },[])
    useEffect(() =>{
        // const orderedBook=bookDetails.filter(book=>book.id===id);
        // console.log(orderedBook);
        // setCheckOutDetails(orderedBook);
        // console.log(id);
        fetch(`http://localhost:5000/book/${id}`)
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            setCheckOutDetails(data)});
    },[id])
    return (
        <div>
           <h3>{checkOutDetails.bookName}</h3>
           <h4>{checkOutDetails.price}</h4>
           <Link to={`/orders/${id}`}><Button>Check out</Button></Link>
        </div>
    );
};

export default CheckOut;