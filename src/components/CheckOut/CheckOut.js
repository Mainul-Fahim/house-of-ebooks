import React, { useContext, useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import './CheckOut.css';

const CheckOut = () => {
    const [loggedInUser,setLoggedInUser]=useContext(UserContext);
    const {id}=useParams();
    const [bookDetails,setBookDetails]=useState([]);
    const [checkOutDetails,setCheckOutDetails]=useState([]);
    const [checkOutDate,setCheckOutDate]=useState({orderDate:new Date()});
    const [orderDetails,setOrderDetails]=useState({});

    useEffect(() =>{
        fetch('https://limitless-plateau-92194.herokuapp.com/books')
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            setBookDetails(data)});
    },[])
    useEffect(() =>{
        
        fetch(`https://limitless-plateau-92194.herokuapp.com/book/${id}`)
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            const {bookName,authorName,price,imageUrl}=data;
            const bookData={bookName,authorName,price,imageUrl};
            console.log(bookData);
            setOrderDetails(bookData);
            setCheckOutDetails(data)});
    },[id])
    const handleCheckOut=()=>{

        const orderedBook={...loggedInUser,...checkOutDate,...orderDetails};
        fetch('https://limitless-plateau-92194.herokuapp.com/addOrders',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(orderedBook)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
        });
    }
    return (
        <div className="checkout">
           <h3>{checkOutDetails.bookName}</h3>
           <h4>{checkOutDetails.price}</h4>
           <Link to={`/orders`}><Button onClick={handleCheckOut}>Check out</Button></Link>
        </div>
    );
};

export default CheckOut;