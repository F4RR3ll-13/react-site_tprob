import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import mountsImg from '../assets/mount.jpg';
import mountsdImg from '../assets/mountd.jpg';
import mountssImg from '../assets/mounts.jpg';

export default class CarouselBox extends Component {
   render() {
      return (
         <Carousel>
            <Carousel.Item>
               <img
                  className='d-block w-100'
                  src={mountsImg}
                  alt='mount'
               />
               <Carousel.Caption>
                  <h3>Mounts Image</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste, cupiditate!</p>
               </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
               <img
                  className='d-block w-100'
                  src={mountsdImg}
                  alt='mount'
               />
               <Carousel.Caption>
                  <h3>Mounts Image</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste, cupiditate!</p>
               </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
               <img
                  className='d-block w-100'
                  src={mountssImg}
                  alt='mount'
               />
               <Carousel.Caption>
                  <h3>Mounts Image</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste, cupiditate!</p>
               </Carousel.Caption>
            </Carousel.Item>
         </Carousel>
      )
   }
}