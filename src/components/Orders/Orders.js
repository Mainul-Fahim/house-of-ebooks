import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Orders = () => {
   
   const{id}=useParams();
   const [orders,setOrders]=useState([]);
   useEffect(() =>{
    fetch(`http://localhost:5000/orders/${id}`)
    .then(res=>res.json())
    .then(data=>{
        console.log(data);
        setOrders(data)});
   },[id])
    return (
        <div>
            <h3>{orders.bookName}</h3>
        </div>
    );
};

export default Orders;