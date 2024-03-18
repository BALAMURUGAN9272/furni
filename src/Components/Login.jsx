import React from 'react'
import { Col ,Container,Row } from 'react-bootstrap'
import { FiShoppingCart } from "react-icons/fi";
import * as yup from 'yup'
import {useFormik} from 'formik'
import axios from 'axios'
import { Navigate } from 'react-router';
import { NavLink } from 'react-router-dom';

const schema=yup.object().shape({
  username:yup 
  .string()
  .min(3,'minimum three letters')
  .required('username is required'),

  email:yup
  .string()
  .email('invalid email id ')
  .required('email must required'),
 
  password:yup
  .string()
  .required('six digit must'),

})

function Login({user,setuser}) {
  
    const {handleBlur,isSubmitting,handleChange,handleSubmit,values,errors} = useFormik({
      initialValues:{
        username:'',
        email:'',
        password:''
       },
       validationSchema:schema,
        onSubmit:async(values,actions) =>{
          try{
            const res =await axios.post('http://localhost:3002/api/login',values)
            if(res.statusText='OK'){
             setuser(res.data)
             console.log(user)
             setTimeout(() => {
               
               
             }, 1000);
            }
         }
         catch(err){
           console.log(err.data.message)
         }
        }
    })
  return (
    <div>
      <Container className='rocky'>

      <Row>
        <Col className='lovedone'>
  {
    user ?(<Navigate to='/' />):(
        
    <div className='saitama'>
    <div className='onepunch'> 
    <form  onSubmit={handleSubmit} method="post">
    <p className='basket'><FiShoppingCart /></p>
  <input className='luv1' onChange={handleChange} onBlur={handleBlur} value={values.username} placeholder='username' type="text"  id='username' name='username'  />
     <p>{errors.username}</p>
  <input className='luv1'  onChange={handleChange} onBlur={handleBlur} value={values.email} placeholder='email' type="text"  id='email' name='email'  />
     <p>{errors.email}</p>
  <input className='luv1' onChange={handleChange} onBlur={handleBlur} value={values.password} placeholder='password' type="text"  id='password' name='password'  />
     <p>{errors.password}</p>
  <button type='submit' className='enter' disabled={isSubmitting}>Login</button>
  
  </form>
  </div>
  <div className="home1"><NavLink className='contact' to='/Signin'>Don't Have an account ? Signin</NavLink></div>
  </div>
    )
    
  }
    </Col>

  </Row>
   </Container>
  </div>

    
  
  )
}

export default Login;
