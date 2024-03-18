import React from 'react'
import Button from 'react-bootstrap/Button';
import Sofa from '../Assets/couch.png';
import { Col ,Container,Row } from 'react-bootstrap'

function Banner() {
  return (
    <div >
      <Container className='banner' fluid>
        <Row >
                <Col md={12} lg={6}>
                <div className='bleft '>
                <div className='bone'><div className='bob'><h1>Modern Interior <span className='d-block'>Design Studio</span></h1></div>
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
        </Container>

    </div>
  )
}

export default Banner
