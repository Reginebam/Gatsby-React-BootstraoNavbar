import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import {Navbar, Nav} from 'react-bootstrap'

export default function NavbarPersonnal() {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link href="/subfolder/personnal/mobile"> Mobile</Nav.Link>

              
          </Nav>
                
        </Navbar.Collapse>
      </Navbar>



    </div>
  )
}
