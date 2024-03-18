import React from 'react'
import { Col ,Container,Row } from 'react-bootstrap'
import picone from '../Assets/product-1.png'
import cross from '../Assets/cross.svg'
import pictwo from '../Assets/product-2.png'
import picthree from '../Assets/product-3.png'

function Product() {
  return (
    <div className='productsection'>
      <Container>
        <Row className='display-flex'>
            <Col md={12} lg={3}>
                <div className=''>
                    <h2 className=' mb-4 section-tittle'>Crafted with excellent material.</h2>
                    <p className='mb-4'>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</p>
                    <p><button variant='light' type="button" className="butthree">Explore</button></p>
                    
                </div>
                </Col>
                <Col md={12} lg={3}>
                <div className=''>
                <div className="pione ">
                        <img src={picone} className='img-fluid product-thumbnail '/>
                        <h3 className="product-tittle">Nordic chair</h3>
                        <strong className='product-price'>$%50.00</strong>
                        <span className='icon-cross'>
                            <img src={cross} className='img-fluid'/>
                        </span>
                    </div>
                    </div>
                    </Col>
                    <Col md={12} lg={3}>
                    <div className=''>
                <div className="pione ">
                        <img src={pictwo} className='img-fluid product-thumbnail '/>
                        <h3 className="product-tittle">Kruzo aero chair</h3>
                        <strong className='product-price'>$%78.00</strong>
                        <span className='icon-cross'>
                            <img src={cross} className='img-fluid'/>
                        </span>
                    </div>
                    </div>
                    
                    </Col>
                    <Col md={12} lg={3}>
                    <div className=''>
                <div className="pione ">
                        <img src={picthree} className='img-fluid product-thumbnail '/>
                        <h3 className="product-tittle">Kruzo aero chair</h3>
                        <strong className='product-price'>$%43.00</strong>
                        <span className='icon-cross'>
                            <img src={cross} className='img-fluid'/>
                        </span>
                    </div>
                    </div>
                    
                    </Col>
            </Row>
            </Container>
      
    </div>
  )
}

export default Product
