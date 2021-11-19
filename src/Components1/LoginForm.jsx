import React from 'react'
import './LoginForm.css'

function LoginForm() {
    return (
        <div id="main">
        <div class="container" >
    <div class="row">
        <div class="col">
            <div class="form-login">
            <h4><i class="fa fa-sign-in"></i>Welcome Admin</h4>
            <input type="email" id="userName" class="form-control input-sm chat-input" placeholder="username" required/>
            <br/>
            <input type="password" id="userPassword" class="form-control input-sm chat-input" placeholder="password"  required/>
            <br/>
            <div class="wrapper">
            <span class="group-btn">     
                <a href="/HeaderComponent" class="btn btn-primary btn-md" >login <i class="fa fa-sign-in" ></i></a>
              
            </span>
            </div>
            </div>
        
        </div>
    </div>
</div>
            
        </div>
    )
}

export default LoginForm
