import { signOut } from "firebase/auth";
import React from "react";
import logo from '../../../images/logo.png';
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";
import CustomLink from "../CustomLink/CustomLink";

const Header = () => {
  const [user, loading, error] = useAuthState(auth);
  return (
    // Header
    <Navbar sticky="top" bg="white" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/"><img style={{height: '30px'}} src={logo} alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={CustomLink} to="/">Home</Nav.Link>
            <Nav.Link as={CustomLink} to="/about">About Me</Nav.Link>
            <Nav.Link as={CustomLink} to="/blogs">Blogs</Nav.Link>
            {
              user ? <button onClick={() => signOut(auth)} className="btn btn-light text-black">Log Out</button> 
              : 
              <>
                <Nav.Link as={CustomLink} to="/login">Login</Nav.Link>
                <Nav.Link as={CustomLink} to="/register">Register</Nav.Link>
              </>
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
