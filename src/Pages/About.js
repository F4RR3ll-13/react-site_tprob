import React, { Component } from 'react';
import { Col, Container, Nav, Row, Tab } from 'react-bootstrap';

export default class About extends Component {
    render() {
        return (
            <Container>
                <Tab.Container id='left-tabs-example' defaultActiveKey='first'>
                    <Row>
                        <Col sm={3}>
                            <Nav variant='pills' className='flex-column mt-2'>
                                <Nav.Item>
                                    <Nav.Link eventKey='first'>Design</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey='second'>Team</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey='third'>Progr</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey='fourth'>Food</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey='fifth'>Picture</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col sm={9}>
                            <Tab.Content className='mt-3'>
                                <Tab.Pane eventKey='first' bg='dark'>
                                    <img  src='https://www.freeshows.ru/i/news/img20210301_000.jpg' height='430' width='770' />
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex inventore provident impedit adipisci quia. Consequuntur, ipsa! Recusandae possimus soluta minus.</p>
                                </Tab.Pane>
                                <Tab.Pane eventKey='second'>
                                    <img src='https://s0.rbk.ru/v6_top_pics/media/img/5/18/756233535903185.jpg' height='430' width='770' />
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex inventore provident impedit adipisci quia. Consequuntur, ipsa! Recusandae possimus soluta minus.</p>
                                </Tab.Pane>
                                <Tab.Pane eventKey='third'>
                                    <img src='https://m-strana.ru/upload/resize_cache/iblock/7cb/1024_700_1/7cbdfc5abab3e8b0f64613c3641c3021.jpg' height='430' width='770' />
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex inventore provident impedit adipisci quia. Consequuntur, ipsa! Recusandae possimus soluta minus.</p>
                                </Tab.Pane>
                                <Tab.Pane eventKey='fourth'>
                                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa6Ry2C_TcsUTbQEQ--AjeGZBA5e-SO1zHKVuxs_9AnL5bXGWdNwDdYqwJCmzmDz_KOMg&usqp=CAU' height='430' width='770' />
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex inventore provident impedit adipisci quia. Consequuntur, ipsa! Recusandae possimus soluta minus.</p>
                                </Tab.Pane>
                                <Tab.Pane eventKey='fifth'>
                                    <img src='https://klona.ru/images/uploaded/1c218e02a1b382a6a0c7c112328722df.jpg' height='430' width='770' />
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex inventore provident impedit adipisci quia. Consequuntur, ipsa! Recusandae possimus soluta minus.</p>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </Container>
        )
    }
}