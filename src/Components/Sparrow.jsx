import React from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Button, Container } from 'react-bootstrap'
import { Col ,Row } from 'react-bootstrap'
import { FaPaperPlane } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa";


function Sparrow() {
  return (
    <div className='classy'>
       
       
     <Container className='masssy'>
      
    
    
        <Row >
          
        
          
       
            <Col lg={4} >


            <span className='fw-bold'><FaRegEnvelope />
 Subscribe to Newsletter</span>
           <input type="text" className='first' name="
           enter your name" id="enter your name" placeholder='Enter Your Name' />
        
      
      
            
            </Col>
            <Col lg={4}>
            <span className='fw-bold'>Enter your email</span>
            <input type="text" className='first' name="
           enter your name" id=" " placeholder='Enter Your Mail' />


           
            
       
      
                 
            </Col>
            <Col lg={2}>
            <Button className='pooja'><    FaPaperPlane /></Button></Col>
        </Row>
     </Container>
    </div>
  )
}

export default Sparrow
