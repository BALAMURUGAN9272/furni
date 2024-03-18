import React from 'react'
import { Container } from 'react-bootstrap'
import { Col ,Row } from 'react-bootstrap'
import Carousel from 'react-bootstrap/Carousel';
import girl from '../Assets/person-1.png'

function Testimonial() {
  return (
    <div className='cuddle'>
        <Container>
        <h1 className='mill'>Testimonial</h1>
              <Row className='align-item-center justify-content-center'>
               
            <Col lg={12}>
            <Carousel>
      <Carousel.Item interval={2000} >
       <div className='fly' > 
          <p className='anaconda2 '>“Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer convallis volutpat dui quis scelerisque.”</p>
      </div>
      <div className='bull'>
            <div className='smal'>
           
            </div>
            
         </div>
        
        <Carousel.Caption>

          
        <h5 className='guest'>maria jones</h5>

        <p className='guest'>CEO, Co-Founder, XYZ Inc</p>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <div className='fly'>
      <p className='anaconda2'>“Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer convallis volutpat dui quis scelerisque.”</p>
      </div>
      <div className='bull'>
            <div className='smal '>
               
            </div>
         </div>
        <Carousel.Caption>
        <h5 className='guest'>maria jones</h5>
          <p className='guest'>CEO, Co-Founder, XYZ Inc</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
     <div className='fly ' >
      <p className='anaconda2'>“Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer convallis volutpat dui quis scelerisque.”</p>
      </div>
      <div className='bull '>
            <div className='smal '>
                
            </div>
         </div>
        <Carousel.Caption>
        <h5 className='guest'>maria jones</h5>
        <p className='guest'>CEO, Co-Founder, XYZ Inc</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
            </Col>
        </Row>
        </Container>
    </div>
  )
}

export default Testimonial
