import React, { useContext } from 'react';
import { Button,Col,Nav, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';

import '../Header/Header.css';

const Header = () => {
    
    const [loggedInUser,setLoggedInUser]=useContext(UserContext);
    return (
        <div>
            <Row>
                <Col className="header-logo">
                    <br/>
                    <h3>House Of E-Books</h3>
                </Col>
                <Col>
                <Nav fill variant="pills" className="justify-content-end mt-4 mr-5" activeKey="/home">
                <Nav.Item>
                    <Nav.Link ><Link to="/home">Home</Link></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link><Link to="/orders">Orders</Link></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link><Link to="/admin">Admin</Link></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-2">Contact</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link>
                    {loggedInUser.email ?loggedInUser.email:<Link to="/login"><Button>Login</Button></Link>}
                    </Nav.Link>
                </Nav.Item>
            </Nav></Col>
            </Row>
        </div>
    );
};

export default Header;