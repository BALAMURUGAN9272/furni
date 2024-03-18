import React from 'react'
import { Button } from 'bootstrap'
import { FiShoppingCart } from "react-icons/fi";
import axios from 'axios'
import * as yup from 'yup'
import { useFormik } from 'formik';
const schema=yup.object().shape({
  username:yup
  .string()
  .min(3,'minimum three letters')
  .required('username is required'),

  email:yup
  .string()
  .required('email id is required')
  .email('invalid email id'),


  password:yup
  .string()
  .min(6,'minimum six digits')
  .required('enter password')



})

function Signin() {
  const {handleBlur,isSubmitting,handleChange,handleSubmit,values,errors}=useFormik({
    initialValues:{
      username:'',
      email: '',
      password:''
    },
    validationSchema:schema,
    onSubmit:async(values)=>{
      console.log(values);
      try{
         const res =await axios.post('http://localhost:3002/api/users',values)
         if(res.statusText='OK'){
          console.log(res.data)
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
       
      <div className='saitama'>
        <div className='onepunch'> 
        <form  onSubmit={handleSubmit} method="post">
        <p className='basket'><FiShoppingCart /></p>
      <input className='luv1' onChange={handleChange} onBlur={handleBlur} value={values.username} placeholder='Username' type="text"  id='username' name='username'  />
         <p className='fan'>{errors.username}</p>
      <input className='luv1'  onChange={handleChange} onBlur={handleBlur} value={values.email} placeholder='Email' type="text"  id='email' name='email'  />
         <p className='fan'>{errors.email}</p>
      <input className='luv1' onChange={handleChange} onBlur={handleBlur} value={values.password} placeholder='Password' type="text"  id='password' name='password'  />
         <p className='fan'>{errors.password}</p>
      <button type='submit' className='enter' >Signin</button>
      
      </form>
      </div>
      
      </div>
      
    </div>
  )
}

export default Signin;
