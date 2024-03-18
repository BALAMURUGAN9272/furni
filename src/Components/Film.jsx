import React from 'react';
import kamoi from '../Assets/product-1.png'
import rasik from '../Assets/product-2.png'
import lingesh from '../Assets/product-3.png'
import { Col ,Container,Row } from 'react-bootstrap'


function Film() {
  return (
    <div className='toy'>
        <Container>
            <Row>

                <Col lg={4} >
                    <div>
                        <div className='imgbox'>
                    <div className='pro1'><img className='pro3' src={kamoi} /></div>
                    </div>
                    <div className='pro2'> <h6 className='anaconda'>Nordic Chair</h6>
                <p className='zoro'>Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio</p>
                <button className='puzzle'>readmore</button>
                </div>
               
                </div>
                
               
                </Col>

                <Col lg={4}>
                    <div> 
                    <div className='imgbox'>              
                 <div className='pro1'><img  className='pro3' src={rasik} /></div>
                 </div>
                 <div className='pro2'><h6 className='anaconda'>Kruzo Aero Chair</h6>
                <p className='zoro'>Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio</p>
                <button className='puzzle'>readmore</button>
                </div>
                
                </div>

                </Col>
                <Col lg={4}>
                    <div>
                    <div className='imgbox'>
                <div className='pro1'> <img className='pro3' src={lingesh} /></div>
                </div>
                 <div className='pro2'><h6 className='anaconda'>
Ergonomic Chair</h6>
                <p className='zoro'>Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio</p>
                </div>
                <button className='puzzle'>readmore</button>
                </div>
                </Col>
            </Row>
        </Container>
      
    </div>
  )
}

export default Film
