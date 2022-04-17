import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import CustomLink from "../CustomLink/CustomLink";

const Header = () => {
  return (
    <Navbar sticky="top" bg="white" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">Cure</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={CustomLink} to="/">Home</Nav.Link>
            <Nav.Link as={CustomLink} to="/about">About</Nav.Link>
            <Nav.Link as={CustomLink} to="/login">Login</Nav.Link>
            <Nav.Link as={CustomLink} to="/signup">Signup</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
