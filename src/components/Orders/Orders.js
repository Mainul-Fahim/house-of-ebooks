import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { UserContext } from '../../App';

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
            {
                orders.map(order=><div>
                    <h4>Name: {order.name}</h4>
                    <h4>Email: {order.email}</h4>
                    <h4>Book Name: {order.bookName}</h4>
                    <h4>Book Price: {order.price}</h4>
                </div>)
            }
        </div>
    );
};

export default Orders;