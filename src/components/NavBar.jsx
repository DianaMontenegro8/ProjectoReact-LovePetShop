import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
const NavBar = () => {
    return (
        <Navbar  className="header" variant="dark">
            <Container fluid>
                <Link to="/Inicio" className="navbar-brand">Love PetShop</Link>
                <Nav className="me-auto">
                <Link to="/Quem Somos" className="nav-link">Quem Somos</Link>
                <Link to="/Nossos Serviços" className="nav-link">Nossos Serviços</Link>
                <Link to="/Registro" className="nav-link">Registro</Link>
                <Link to="/Clientes" className="nav-link"> Clientes </Link>
                    
                </Nav>

                <Nav className="me-auto">
                
                </Nav>
            </Container>
        </Navbar>
    )
}

export default NavBar;