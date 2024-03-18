import React from 'react'
import { Button, Col ,Container,Row } from 'react-bootstrap'
import picone from '../Assets/product-1.png'
import cross from '../Assets/cross.svg'
import pictwo from '../Assets/product-2.png'
import picthree from '../Assets/product-3.png'

function Products() {
  return (
    <div className='productsection'>
      <Container>
        <Row className='display-flex'>
            <Col md={12} lg={3}>
                <div className=''>
                    <h2 className=' anaconda'>Crafted with excellent material.</h2>
                    <p className=''>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</p>
                    <Button   className="butthree">Explore</Button>
                    
                </div>
                </Col>
                <Col md={12} lg={3}>
                <div className='pitwo'>
                <div className="pione ">
                    <div className='yours'>
                        <img src={picone} className='lucky '/>
                        <h3 className="yours product-tittle">Nordic chair</h3>
                        <strong className='product-price'>$%50.00</strong>
                        </div>   
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
            </Row>
            </Container>
      
    </div>
  )
}

export default Products
