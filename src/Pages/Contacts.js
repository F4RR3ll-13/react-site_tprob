import React, { Component } from 'react';
import { Container, Form, Button } from 'react-bootstrap';

export default class Contacts extends Component {
    render() {
        return (
            <Container style={{width:'500px'}}>
                <h1 className='text-center'>Contact us</h1>
                <Form>
                    <Form.Group controlId='formBasicEmail'>
                        <Form.Label>Email Adres...</Form.Label>
                        <Form.Control type='email' placeholder='Enter email'/>
                        <Form.Text>texttexttexttexttexttext
                            texttexttexttexttext
                            texttext
                        </Form.Text>
                    </Form.Group>
                    <Form.Group controlId='formBasixPassword'>
                        <Form.Label>some Text</Form.Label>
                        <Form.Control as='textarea' rows='3'/>
                    </Form.Group>
                    <Form.Group controlId='formBasicCheckbox'>
                        <Form.Check typr='checkbox' label='Check me out'/>
                    </Form.Group>
                    <Button variant='dark' type='submit'>Ok</Button>
                </Form>
            </Container>
        )
    }
}