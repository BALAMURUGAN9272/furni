import React from 'react'
import Appbar from './Appbar'
import Sofa from '../Assets/couch.png';
import { Button, Col ,Container,Row } from 'react-bootstrap'
import { CiLocationOn } from "react-icons/ci";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosMailUnread } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";

function Contact() {
  return (
    <div>
      <Appbar/>


      <Container className='banner' fluid>
        <Row >
                <Col md={12} lg={6}>
                <div className='bleft '>
                <div className='bone'><div className='bob'><h1>Contact Us</h1></div>
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

        <Container className='rossi'>
            <Row>
                <Col>

                <div className='locationhd'>
                  <div className='locationlt'>
                  <FaLocationDot />
              {/* < CiLocationOn />  */}
              
              </div>
                  <div className='locationrt'>43 Raymouth Rd. Baltemoer, London 3910</div>
                </div>
              
              
                </Col>

                <Col>

<div className='locationhd'>
  <div className='locationlt'>
  <IoIosMailUnread />

</div>
  <div className='locationrt'>info@yourdomain.com</div>
</div>


</Col>

<Col>

<div className='locationhd'>
  <div className='locationlt'>
  
  <FaPhoneAlt />

</div>
  <div className='locationrt'>+1 294 3925 3939</div>
</div>


</Col>
                
            </Row>
        </Container>
    </div>
  )
}

export default Contact
