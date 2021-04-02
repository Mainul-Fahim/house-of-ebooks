import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Books = (props) => {
   const {bookName,_id,imageUrl,authorName,price}=props.book;
    return (
        <div className="col-md-4 pl-5 pt-5 mt-5">
            <img style={{height:'200px'}} src={imageUrl} alt=""/>
            <h4>{bookName}</h4>
            <h5>{authorName}</h5>
            <Row>
                <Col><p>{price}</p></Col>
                <Col><Link to={`/checkout/${_id}`}><Button>Buy Now</Button></Link></Col>
                {/* <Link to={`/pickRIde/${ride_name}`}>{ride_name}</Link> */}
            </Row>
        </div>
    );
};

export default Books;