import React from 'react'
import {auto} from './Layout.module.css'

import 'bootstrap/dist/css/bootstrap.min.css';

import {Navbar, Nav} from 'react-bootstrap'

export default function Router() {
  return (
    <div>
      
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
        <Navbar.Brand href="/">Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link className={auto} href="/subfolder/personnal/mobile"> Business</Nav.Link>
                <Nav.Link href="/subfolder/business">About Us</Nav.Link>
            <Nav.Link href="/subfolder/explore">Explore </Nav.Link>
              
          </Nav>
                
        </Navbar.Collapse>
      </Navbar>


    </div>
  )
}
