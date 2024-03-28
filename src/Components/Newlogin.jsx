import React from 'react'
import jojo from '../Assets/login-bg.png'
import * as yup from 'yup'
import { useFormik } from 'formik'
import axios from 'axios'

import { Col ,Container,Row } from 'react-bootstrap'
import { Navigate } from 'react-router-dom'




const schema=yup.object().shape({
    
    email:yup
    .string()
    .email('invalid email id')
    .required('email must required'),
    password:yup
    .string()
    .min(6,'six digit must'),
  
    
})

function Newlogin({user,setuser}){
    const {handleBlur,isSubmitting,handleChange,handleSubmit,values,errors} = useFormik({
        initialValues:{
          username:'',
          email:'',
          password:''
         },
         validationSchema:schema,
          onSubmit:async(values,actions) =>{
            try{
              const res =await axios.post('http://localhost:3002/api/users',values)
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
        
        
      {   
    user ?(<Navigate to='/' />):(



       <div class="login">
         <img src={jojo} alt="image" class="login__bg"/>

         <form action="" onSubmit={handleSubmit} method="post" class="login__form">
            <h1 class="login__title">Login</h1>

            <div class="login__inputs">
               <div class="login__box">
                  <input type="email" onChange={handleChange} onBlur={handleBlur} placeholder="Email ID" name='email' id='email'required class="login__input"/>
                  <p>{errors.email}</p>
                  <i class="ri-mail-fill"></i>
               </div>

               <div class="login__box">
                  <input type="password" onChange={handleChange} onBlur={handleBlur} placeholder="Password" name='password' id='password' required class="login__input"/>
                  <p>{errors.password}</p>
                  <i class="ri-lock-2-fill"></i>
               </div>
            </div>

            <div class="login__check">
               <div class="login__check-box">
                  <input type="checkbox" class="login__check-input" id="user-check"/>
                  <label for="user-check" class="login__check-label">Remember me</label>
               </div>

               <a href="#" class="login__forgot">Forgot Password?</a>
            </div>

            <button type="submit" class="login__button" disabled={isSubmitting}>Login</button>

            <div class="login__register">
               Don't have an account? <a href="/signin">Register</a>
            </div>
         </form>
      </div>
    )
}   



    </div>
  )
}

export default Newlogin;