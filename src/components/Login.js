import React from 'react'
import logo from '../img/logo.jpg'

function Login() {
    const handleClick = () =>
    alert('Login Success')

    return (
        <div>
            <div>
                <h1 class = 'welcome'>Welcome to FASHSECRET! </h1>
                <p>Please login to view our amazing contents</p>
            </div>
             <div class = 'login'>
            <img class = 'logo' src ={logo} alt ='logo'/>

            <fieldset class = 'form'>
            <h2>Login</h2>

            <div class= 'inputs'>
            <label class='label'>Email </label><br/>
            <input type = 'email' placeholder ='Email'></input><br/>
            <br />
            <label class ='label'>Password</label><br/>
            <input type ='password' placeholder = 'password'></input>
            </div>

            <button type = 'submit' onClick= {handleClick}>Login</button>
            
            </fieldset>
            
            
        </div>

        </div>
       
    )
}

export default Login
