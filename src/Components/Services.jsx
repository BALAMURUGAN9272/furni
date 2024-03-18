import React from 'react'
import Appbar from './Appbar'
import Sofa from '../Assets/couch.png';
import { Button, Col ,Container,Row } from 'react-bootstrap'
import truck from '../Assets/truck.svg'
import bag from '../Assets/bag.svg'
import time from '../Assets/support.svg'
import hassle from '../Assets/return.svg'
import Products from './Products';
import Testimonial from './Testimonial';
import Sparrow from './Sparrow';
import Furni from './Furni';

function Services() {
  return (
    <div>
        <Appbar/>
             

        <Container className='banner' fluid>
        <Row >
                <Col md={12} lg={6}>
                <div className='bleft '>
                <div className='bone'><div className='bob'><h1>Services</h1></div>
                <div className='boc'><p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</p>
                </div>
                <div>
               <div className='butone'> <button  type="button" className="botone ">Shop Now</button></div>
               <div className='buttwo'><button type="button" className="bottwo">Base class</button></div>
                </div>
                
               </div>
             
            </div>
        </Col>
        <Col md={10} lg={6}>
        <div className='bright'><img src={Sofa} className='img-fluid'/></div>
           
            </Col>
       
        </Row>


        
        </Container >

        <Container className='pissoff'>
        <Row>
            <Col sm={6} lg={3} >
                <div className="feature">
                    <div className="icon ">
                        <img className='img-fluid' src={truck} />
                        <h3 className='anaconda'>Fast and free shipping</h3>
                        <p className='africa'>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
                    </div>
                </div>
            </Col>
            <Col sm={6} lg={3}> <div className="feature">
                    <div className="icon ">
                        <img className='img-fluid' src={bag} />
                        <h3 className='anaconda'>Easy to shop</h3>
                        <p className='africa'>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
                    </div>
                </div>
                </Col>
            <Col sm={6} lg={3}>
            <div className="feature">
                    <div className="icon ">
                        <img className='img-fluid' src={time} />
                        <h3 className='anaconda'>24/7 suppourt</h3>
                        <p className='africa'>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
                    </div>
                </div>
            </Col>
            <Col sm={6} lg={3}>
                 <div className="feature">
                    <div className="icon ">
                        <img className='img-fluid' src={hassle} />
                        <h3 className='anaconda'>Hassle free returns</h3>
                        <p className='africa'>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
                    </div>
                </div></Col>
               
       
            <Col sm={6} lg={3}>
                <div className="feature">
                    <div className="icon ">
                        <img className='img-fluid' src={truck} />
                        <h3 className='anaconda'>Fast and free shipping</h3>
                        <p className='africa'>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
                    </div>
                </div>
            </Col>
            <Col sm={6} lg={3}>
                 <div className="feature">
                    <div className="icon ">
                        <img className='img-fluid' src={bag} />
                        <h3 className='anaconda'>Easy to shop</h3>
                        <p className='africa'>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
                    </div>
                </div>
                </Col>
            <Col sm={6} lg={3}>
            <div className="feature">
                    <div className="icon ">
                        <img className='img-fluid' src={time} />
                        <h3 className='anaconda'>24/7 suppourt</h3>
                        <p className='africa'>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
                    </div>
                </div>
            </Col>
            <Col sm={6} lg={3}> 
            <div className="feature">
                    <div className="icon ">
                        <img className='img-fluid' src={hassle} />
                        <h3 className='anaconda'>Hassle free returns</h3>
                        <p className='africa'>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
                    </div>
                </div></Col>
               
        </Row>


        </Container>

        <Products/>
        <Testimonial/>
        <Sparrow/>
        <Furni/>
    </div>
  )
}

export default Services
