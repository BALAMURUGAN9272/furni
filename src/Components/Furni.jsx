import React from 'react'
import {Button, Container } from 'react-bootstrap'
import { Col ,Row } from 'react-bootstrap'
import { FaFacebook } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";

function Furni() {
  return (
    <div className='february'>
      <Container>
        <Row>
            <Col lg={3}>
                <a href="#" className='january'><h3>Furni.</h3></a>

                <p className='rubber'>Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant</p>

                 <div className='hood'><a href="#" className='face'><FaFacebook />
</a></div>
                 <div className='hood2'><a href="#" className='face2'><CiTwitter />
</a></div>
                 <div className='hood3'><a href="#" className='face3'><FaInstagram />
</a></div>
                 <div className='hood4'><a href="#" className='face4'><CiLinkedin />

</a></div>
            </Col>



            <Col>
            <ul className='baby'>
              <li className='doll'>About</li>
              <li  className='doll'>Services</li>
              <li  className='doll'>Blog</li>
              <li  className='doll'>Contact us</li>
            </ul>
            </Col>

            <Col>
            <ul className='baby'>
              <li className='doll'>Support</li>
              <li  className='doll'>Knowledge</li>
              <li  className='doll'>Live Chat</li>
              
            </ul>
            </Col>


            <Col>
            <ul className='baby'>
              <li className='doll'>Jobs</li>
              <li  className='doll'>Our team</li>
              <li  className='doll'>Leaership</li>
              <li  className='doll'>Privacy policy</li>
            </ul>
            </Col>

            <Col>
            <ul className='baby'>
              <li className='doll'>Nordic chair</li>
              <li  className='doll'>Kruzo Aero</li>
              <li  className='doll'>Ergonomic chair</li>
              
            </ul>
            </Col>
        </Row>
      </Container>
      <div className="lusi">
        <p className='zoro'>Copyright ©2024. All Rights Reserved. — Designed with love by bala.co <br /> Distributed By ThemeWagon</p>
      </div>
    </div>
  )
}

export default Furni
