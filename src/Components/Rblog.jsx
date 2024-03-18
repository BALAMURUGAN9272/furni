import React from 'react'
import Appbar from './Appbar'
import Sofa from '../Assets/couch.png';
import { Button, Col ,Container,Row } from 'react-bootstrap'
import ab from '../Assets/post-1.jpg'
import cd from '../Assets/post-2.jpg'
import ef from '../Assets/post-3.jpg'
import Sparrow from './Sparrow';
import Furni from './Furni';
import Testimonial from './Testimonial';


function Rblog() {
  return (
    <div>
        <Appbar/>


       <Container className='banner' fluid>
        <Row >
                <Col md={12} lg={6}>
                <div className='bleft '>
                <div className='bone'><div className='bob'><h1>Blog</h1></div>
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

        <Container >
       
        <Row className='luffy'>
            <Col sm={4} md={4}>
            <div className='l1 '>
                <img className='m1 img-fluid' src={ab} />
            </div>
            <h6 >
            <a href="#" className='litre'>First Time Home Owner Ideas
               by<span className='zoro'> Kristin Watson</span>  on <span> <p className='zoro'>Dec 19, 2021</p></span> </a>
            </h6>
            </Col>

            <Col sm={4} md={4}>
            <div className="l2 ">
                <img className='m2 img-fluid' src={cd} />
            </div>
            <h6>
                <a href="#" className='litre'>How To Keep Your Furniture Clean
                  by <span className='zoro'> Robert Fox</span> on <span className='zoro'>Dec 15, 2021</span></a>
            </h6>
            </Col>

            <Col sm={4} md={4}>
            <div className="l3 ">
            <img className='m3 img-fluid' src={ef} />
            </div>
            <h6>
                <a href="#" className='litre'>Small Space Furniture Apartment Ideas
                     by <span className='zoro'>Kristin Watson</span>  on <span className='zoro'>Dec 12, 2021</span> </a>
        
            </h6>
            
            </Col>
            
        </Row>

        <Row className='luffy'>
            <Col sm={4} md={4}>
            <div className='l1 '>
                <img className='m1 img-fluid' src={ab} />
            </div>
            <h6 >
            <a href="#" className='litre'>First Time Home Owner Ideas
               by<span className='zoro'> Kristin Watson</span>  on <span> <p className='zoro'>Dec 19, 2021</p></span> </a>
            </h6>
            </Col>

            <Col sm={4} md={4}>
            <div className="l2 ">
                <img className='m2 img-fluid' src={cd} />
            </div>
            <h6>
                <a href="#" className='litre'>How To Keep Your Furniture Clean
                  by <span className='zoro'> Robert Fox</span> on <span className='zoro'>Dec 15, 2021</span></a>
            </h6>
            </Col>

            <Col sm={4} md={4}>
            <div className="l3 ">
            <img className='m3 img-fluid' src={ef} />
            </div>
            <h6>
                <a href="#" className='litre'>Small Space Furniture Apartment Ideas
                     by <span className='zoro'>Kristin Watson</span>  on <span className='zoro'>Dec 12, 2021</span> </a>
        
            </h6>
            
            </Col>
            
        </Row>


        <Row className='luffy'>
            <Col sm={4} md={4}>
            <div className='l1 '>
                <img className='m1 img-fluid' src={ab} />
            </div>
            <h6 >
            <a href="#" className='litre'>First Time Home Owner Ideas
               by<span className='zoro'> Kristin Watson</span>  on <span> <p className='zoro'>Dec 19, 2021</p></span> </a>
            </h6>
            </Col>

            <Col sm={4} md={4}>
            <div className="l2 ">
                <img className='m2 img-fluid' src={cd} />
            </div>
            <h6>
                <a href="#" className='litre'>How To Keep Your Furniture Clean
                  by <span className='zoro'> Robert Fox</span> on <span className='zoro'>Dec 15, 2021</span></a>
            </h6>
            </Col>

            <Col sm={4} md={4}>
            <div className="l3 ">
            <img className='m3 img-fluid' src={ef} />
            </div>
            <h6>
                <a href="#" className='litre'>Small Space Furniture Apartment Ideas
                     by <span className='zoro'>Kristin Watson</span>  on <span className='zoro'>Dec 12, 2021</span> </a>
        
            </h6>
            
            </Col>
            
        </Row>
        
        
      </Container>

      

      <Testimonial/>
      <Sparrow/>
      <Furni/>
    </div>
  )
}

export default Rblog
