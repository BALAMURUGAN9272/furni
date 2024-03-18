import React from 'react'
import { Col ,Container,Row } from 'react-bootstrap'
import truck from '../Assets/truck.svg'
import bag from '../Assets/bag.svg'
import time from '../Assets/support.svg'
import hassle from '../Assets/return.svg'
import worm from '../Assets/why-choose-us-img.jpg'


function Choose() {
  return (
    <div className='apple '>
      <Container >

        <Row className='justify-content-between 'my={7}>
            <Col>
        <Col lg={6}>
           <h2 className='anaconda'>Why choose Us</h2>
           <p className='africa'>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</p>

        </Col>
        <Row>
            <Col sm={6} >
                <div className="feature">
                    <div className="icon ">
                        <img className='img-fluid' src={truck} />
                        <h3 className='anaconda'>Fast and free shipping</h3>
                        <p className='africa'>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
                    </div>
                </div>
            </Col>
            <Col sm={6}> <div className="feature">
                    <div className="icon ">
                        <img className='img-fluid' src={bag} />
                        <h3 className='anaconda'>Easy to shop</h3>
                        <p className='africa'>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
                    </div>
                </div>
                </Col>
            <Col sm={6}>
            <div className="feature">
                    <div className="icon ">
                        <img className='img-fluid' src={time} />
                        <h3 className='anaconda'>24/7 suppourt</h3>
                        <p className='africa'>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
                    </div>
                </div>
            </Col>
            <Col sm={6}> <div className="feature">
                    <div className="icon ">
                        <img className='img-fluid' src={hassle} />
                        <h3 className='anaconda'>Hassle free returns</h3>
                        <p className='africa'>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
                    </div>
                </div></Col>
               
        </Row>
               

        </Col>
        <Col>
        <div className="wrap ">
            <img src={worm} width={450} />
        </div>
        </Col>
        </Row>
      
      </Container>
    </div>
  )
}

export default Choose;
