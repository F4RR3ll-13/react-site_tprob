import React, { Component } from 'react';
import CarouselBox from '../components/CarouselBox';
import Carousel from 'react-bootstrap/Carousel';
import { Card, CardGroup, Container, Button } from 'react-bootstrap';

export default class Home extends Component {
    render() {
        return (
            <>
                <CarouselBox />
                <Container>
                    <h2 className='text-center m-4'>Dream Team</h2>
                    <CardGroup>
                        <Card className='mx-4'>
                            <Card.Img variant='top' src='https://klike.net/uploads/posts/2020-04/1587719791_1.jpg'/>
                            <Card.Body>
                                <Card.Title>Developers</Card.Title>
                                <Card.Text>tut cho-to napisano mnogo</Card.Text>
                                <Button variant='primary'>Team</Button>
                            </Card.Body>
                        </Card>
                        <Card className='mx-4'>
                            <Card.Img variant='top' src='https://memepedia.ru/wp-content/uploads/2018/08/cover1-4.jpg' />
                            <Card.Body>
                                <Card.Title>Developers</Card.Title>
                                <Card.Text>tut cho-to napisano mnogo</Card.Text>
                                <Button variant='primary'>Team</Button>
                            </Card.Body>
                        </Card>
                        <Card className='mx-4'>
                            <Card.Img variant='top' src='https://i.ytimg.com/vi/cyip0m071NY/maxresdefault.jpg' />
                            <Card.Body>
                                <Card.Title>Developers</Card.Title>
                                <Card.Text>tut cho-to napisano mnogo</Card.Text>
                                <Button variant='primary'>Team</Button>
                            </Card.Body>
                        </Card>
                    </CardGroup>
                </Container>
            </>
        )
    }
}