// import PropTypes from 'prop-types'
import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import { Link } from "react-router-dom";

const Navbar1 = () => {
    // static propTypes = {}


    return (
        <div>
            <Navbar className='fixed-top' bg="dark" variant="dark" expand="lg">
                <Container fluid>
                    <Navbar.Brand href="#">NewsMonkey</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Link className='nav-link' to='/'> Home</Link>
                            <Link className='nav-link' to='/business'> Business</Link>
                            <Link className='nav-link' to='/entertainment'> Entertainment</Link>
                            <Link className='nav-link' to='/general'> General</Link>
                            <Link className='nav-link' to='/health'> Health</Link>
                            <Link className='nav-link' to='/science'> Science</Link>
                            <Link className='nav-link' to='/sports'> Sports</Link>
                            <Link className='nav-link' to='/technology'> Technology</Link>




                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>




        </div>
    )

}

export default Navbar1