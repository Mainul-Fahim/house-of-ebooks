import React, { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import Admin from '../Admin/Admin';
import './ManageBooks.css';

const ManageBooks = (props) => {
    const [books, setBooks] = useState([]);
    useEffect(() => {
        fetch('https://limitless-plateau-92194.herokuapp.com/books')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setBooks(data)});
    }, [])
   
   const deleteBook=id=>{
        console.log(id);
        fetch(`https://limitless-plateau-92194.herokuapp.com/delete/${id}`,{
            method: 'DELETE'
        })
        .then(res=>res.json())
        .then(result =>{
            console.log("deleted",result);
            const deletedBook =document.getElementById('deletedBook');
            deletedBook.style.display = 'none';
        })
   }
   
    return (
        <div className="row">
            <div className="col-md-3">
                <Admin></Admin>
            </div>
            <div className="col-md-9 managebook">
                <h1>Manage Books</h1>
                <br/>
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Book Name</th>
                            <th>Author Name</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                            {
                                books.map(book =><tr id="deletedBook">
                                    <td>{book._id}</td>
                                    <td>
                                    {book.bookName}</td>
                                    <td>{book.authorName}</td>
                                    <td>{book.price}</td>
                                    <td><Button onClick={() =>deleteBook(book._id)}>Delete</Button></td></tr>)
                            }
                       
                        
                    </tbody>
                </Table>
            </div>
        </div>
    );
};

export default ManageBooks;