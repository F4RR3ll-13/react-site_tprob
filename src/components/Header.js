import React, { Component } from 'react';
import { Container, Form, FormControl, Nav, Navbar, Button } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from '../Pages/Home';
import About from '../Pages/About';
import Contacts from '../Pages/Contacts';
import Blog from '../Pages/Blog';
import logo from './logo192.png';

export default class Header extends Component {
    render() {
        return (
            <>
                <Router>
                    <Navbar sticky='top' collapseOnSelect expand='md' bg='dark' variant='dark'>
                        <Container>
                            <Navbar.Brand href="/">
                                <img
                                    src={logo}
                                    height='30'
                                    width='30'
                                    className='d-inline-block align-top'
                                    alt='Logo'
                                />{' '}
                                React Site
                            </Navbar.Brand>
                            <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                            <Navbar.Collapse id='responsive-navbar-nav'>
                                <Nav className='mr-auto'>
                                    <Nav.Link as={Link} to='/'>Home</Nav.Link>
                                    <Nav.Link as={Link} to='/about'>About us</Nav.Link>
                                    <Nav.Link as={Link} to='/contacts'>Contacts</Nav.Link>
                                    <Nav.Link as={Link} to='/blog'>Blog</Nav.Link>
                                </Nav>
                                <Form className="d-flex">
                                    <FormControl
                                        type='text'
                                        placeholder='Поиск'
                                        className="d-inline mx-2"
                                    />
                                    <Button variant="outline-info">Поиск</Button>
                                </Form>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </Router>
                <Router>
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route exact path='/about' component={About} />
                        <Route exact path='/contacts' component={Contacts} />
                        <Route exact path='/blog' component={Blog} />
                    </Switch>
                </Router>
            </>
        )
    }
}