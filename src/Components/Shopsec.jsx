import React from 'react'
import { Button, Col ,Container,Row } from 'react-bootstrap'
import picone from '../Assets/product-1.png'
import cross from '../Assets/cross.svg'
import pictwo from '../Assets/product-2.png'
import picthree from '../Assets/product-3.png'
import Appbar from './Appbar'


function Shopsec() {
  return (
    <div>
        <Appbar/>
        <Container className='bannershop' fluid>
        <Row >
                <Col md={12} lg={6}>
                <div className='bleft '>
                <div className='bone'><div className='bob'><h1>Shop <span className='d-block'></span></h1></div>
                <div className='boc'>
                </div>
                <div>
                           </div>
                
               </div>
             
            </div>
        </Col>
        <Col md={10} lg={6}>
        <div className='bright'></div>
           
            </Col>
       
        </Row>
        </Container>
        <Container>
            <Row>
      <Col md={12} lg={3}>
                <div className=''>
                <div className="pione ">
                        <img src={picone} className='lucky '/>
                        <h3 className="product-tittle">Nordic chair</h3>
                        <strong className='product-price'>$%50.00</strong>
                       
                    </div>
                    </div>
                    </Col>
                    <Col md={12} lg={3}>
                    <div className=''>
                <div className="pione ">
                        <img src={pictwo} className='lucky '/>
                        <h3 className="product-tittle">Kruzo aero chair</h3>
                        <strong className='product-price'>$%78.00</strong>
                        
                    </div>
                    </div>
                    
                    </Col>
                    <Col md={12} lg={3}>
                    <div className=''>
                <div className="pione ">
                        <img src={picthree} className='lucky '/>
                        <h3 className="product-tittle">Kruzo aero chair</h3>
                        <strong className='product-price'>$%43.00</strong>
                       
                    </div>
                    </div>
                    
                    </Col>
                    <Col md={12} lg={3}>
                <div className=''>
                <div className="pione ">
                        <img src={picone} className='lucky '/>
                        <h3 className="product-tittle">Aweaome chair</h3>
                        <strong className='product-price'>$%50.00</strong>
                      
                    </div>
                    </div>
                    </Col>
               </Row>


               <Row>
      <Col md={12} lg={3}>
                <div className=''>
                <div className="pione ">
                        <img src={picone} className='lucky '/>
                        <h3 className="product-tittle">Nordic chair</h3>
                        <strong className='product-price'>$%50.00</strong>
                       
                    </div>
                    </div>
                    </Col>
                    <Col md={12} lg={3}>
                    <div className=''>
                <div className="pione ">
                        <img src={pictwo} className='lucky '/>
                        <h3 className="product-tittle">Kruzo aero chair</h3>
                        <strong className='product-price'>$%78.00</strong>
                       
                    </div>
                    </div>
                    
                    </Col>
                    <Col md={12} lg={3}>
                    <div className=''>
                <div className="pione ">
                        <img src={picthree} className='lucky '/>
                        <h3 className="product-tittle">Kruzo aero chair</h3>
                        <strong className='product-price'>$%43.00</strong>
                      
                    </div>
                    </div>
                    
                    </Col>
                    <Col md={12} lg={3}>
                <div className=''>
                <div className="pione ">
                        <img src={picone} className='lucky '/>
                        <h3 className="product-tittle">Aweaome chair</h3>
                        <strong className='product-price'>$%50.00</strong>
                       
                    </div>
                    </div>
                    </Col>
               </Row>
     </Container>
    </div>
  )
}

export default Shopsec
