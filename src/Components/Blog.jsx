import React from 'react'
import { Container } from 'react-bootstrap'
import { Col ,Row } from 'react-bootstrap'
import ab from '../Assets/post-1.jpg'
import cd from '../Assets/post-2.jpg'
import ef from '../Assets/post-3.jpg'



function Blog() {
  return (
    <div className="helicopter">
    <div className='airplane'>
      <Container>
       
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


    
      <div className="blackie"></div>
      
    </div>
   
    </div>
    
  )
}

export default Blog
