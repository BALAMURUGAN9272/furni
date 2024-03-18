import React from 'react'
import { Col ,Container,Row } from 'react-bootstrap'
import pot from '../Assets/img-grid-2.jpg'
import hot from '../Assets/img-grid-3.jpg'
import sofa from '../Assets/img-grid-1.jpg'
function Popoular() {
  return (
    <div className='colony' >
      <Container >
        <Row >
            <Col className='picture' lg={7} >
              <div>
            <div >
                <img className="small" src={pot} />
              </div>
              <div className='mark'>
              
                
             
              <div className='medium'> </div> 
              </div>
              </div>
            
              

            </Col>




            <Col lg={5}>
            <h1 className='anaconda'>We Help You Make Modern Interior Design</h1>

            <p className='zoro'>Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada</p>
             <Row className='zoro' >
               <Col>
               <ul>
                <li>Donec vitae odio quis nisl dapibus malesuada</li>
                <li>Donec vitae odio quis nisl dapibus malesuada</li>
               </ul>
               </Col>
               <Col>
               <ul>
                <li>Donec vitae odio quis nisl dapibus malesuada</li>
                <li>Donec vitae odio quis nisl dapibus malesuada</li>
               </ul>
               </Col>
              

              </Row>
              <div className='butone'> <button variant='light' type="button" className="botthree ">Explore  </button></div>
           
            </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Popoular
