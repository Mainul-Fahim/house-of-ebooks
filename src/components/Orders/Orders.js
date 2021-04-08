import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { UserContext } from '../../App';
import Header from '../Header/Header';
import './Orders.css';

const Orders = () => {
   const [loggedInUser,setLoggedInUser]=useContext(UserContext);
   const{id}=useParams();
   const [orders,setOrders]=useState([]);
   useEffect(() =>{
    fetch('http://localhost:5000/orders?email='+loggedInUser.email)
    .then(res=>res.json())
    .then(data=>{
        console.log(data);
        setOrders(data)});
   },[id])
    return (
        <div>
            <Header></Header>
            <h3 style={{textAlign:"center",marginTop:"3%"}}>Ordered Books</h3>
            {
                orders.map(order=><div className="orders">
                    <h4>Name: {order.name}</h4>
                    <p>Email: {order.email}</p>
                    <h4>Book Name: {order.bookName}</h4>
                    <p><strong>Book Price: {order.price}</strong></p>
                </div>)
            }
        </div>
    );
};

export default Orders;