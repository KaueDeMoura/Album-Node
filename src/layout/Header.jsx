import HeaderStyle from '../styles/Header';

import React from 'react';

import Container from 'react-bootstrap/Container';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { CiCamera } from "react-icons/ci";


function OffcanvasExample() {
  return (
    <>
      {[false].map((expand) => (
        <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3">
          <Container fluid>
            <Navbar.Brand href="#"><CiCamera /> Album</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="top" // Alterando a propriedade placement para "top"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  About
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>

                Add some information about the album below, the author, or any other background context. Make it a few sentences long so folks can pick up some informative tidbits. Then, link them off to some social networking sites or contact information.
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Contanto
                </Offcanvas.Title>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#">Follow on Twitter</Nav.Link>
                  <Nav.Link href="#">Like on Facebook</Nav.Link>
                  <Nav.Link href="#">Email </Nav.Link>

                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default OffcanvasExample;
