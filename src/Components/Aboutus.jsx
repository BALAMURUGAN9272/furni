import React from 'react'
import Appbar from './Appbar'
import Sofa from '../Assets/couch.png';
import { Col ,Container,Row } from 'react-bootstrap'
import Choose from './Choose';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import young from '../Assets/person_1.jpg'
import teen from '../Assets/person_2.jpg'
import childish from '../Assets/person_3.jpg'
import aged from '../Assets/person_4.jpg'
import Testimonial from './Testimonial';
import Sparrow from './Sparrow';
import Furni from './Furni';

function Aboutus() {
  return (
    <div className='porn'>
      <Appbar/>

      <Container className='banner' fluid>
        <Row >
                <Col md={12} lg={6}>
                <div className='bleft '>
                <div className='bone'><div className='bob'><h1>About Us</h1></div>
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
        <Choose/>

        <Container className='plumcake' fluid>
               <h1 className='plumhead'>Our Team</h1>

            <Row>
                <Col lg={3} className='crd'>
                <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={young} />
      <Card.Body>
        <Card.Title> <li className='lawson' >Lawson Arnold</li></Card.Title>
        <p className='zoro'>CEO,Founder,Atty</p>
        <Card.Text>
        <p className='zoro'>Separated they live in. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean..</p>
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>



                </Col>


                <Col  lg={3} className='crd'>

                <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={teen} />
      <Card.Body>
        <Card.Title><li className='lawson' >Lawson Arnold</li></Card.Title>
        <p className='zoro'>CEO,Founder,Atty</p>
        <Card.Text>
        <p className='zoro'>Separated they live in. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
                
                </Col>

                <Col lg={3}>
                <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={childish} />
      <Card.Body>
        <Card.Title><li className='lawson' >Jeremy Walker</li></Card.Title>
        <p className='zoro'>CEO,Founder,Atty</p>
        <Card.Text>
          <p className='zoro'>Separated they live in. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>


                </Col>


                <Col lg={3}>
                <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={aged} />
      <Card.Body>
        <Card.Title><li className='lawson' >Patrick White</li></Card.Title>
        <p className='zoro'>CEO,Founder,Atty</p>
        <Card.Text>
        <p className='zoro'>Separated they live in. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>


                </Col>


            </Row>
        </Container>


        <Testimonial/>
        <Sparrow/>
        <Furni/>
    </div>
  )
}

export default Aboutus
