import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useEffect } from 'react';
import "../../App.css";

const Navbars = () => {

  let user = localStorage.getItem('Id');
  let navigate = useNavigate(); 
  const [firstname,setFirstName] = useState("");
  const [lastname,setLastName] = useState("");
  const [photo,setPhoto] = useState("");

  useEffect(() => {
    loadUser();
}, []);

  const Logout = () => {

    localStorage.clear();
    navigate("/");

  }
  const loadUser = async () => {
    let result = await axios.get(`http://localhost:3000/users/${user}`);
    setFirstName(result.data.firstname);
    setLastName(result.data.lastname);
    setPhoto(result.data.photo);
  }

  return (
    <div className='App'>
      <Navbar bg="light" expand="lg" style={{marginTop:"10px"}}>
        <Container>
          <Navbar.Brand href="#home" id="head">DIGITAL LIBRARY</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to={`/home`} id="heading">Home</Nav.Link>
              <Nav.Link as={Link} to="/about"id="heading">About</Nav.Link>
              <Nav.Link as={Link} to="/departments/dept" id="heading">Materials</Nav.Link>
        <Nav.Link as={Link} to={`/user/${user}`} title="Your Profile"
         id="heading">{firstname} {lastname}</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
        <button  className='btn btn-primary' onClick={Logout} style={{marginRight:"20px"}}>Logout</button>
      </Navbar>
    </div>
  );
}

export default Navbars;



