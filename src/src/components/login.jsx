import React from "react";
import '../static/css/styleLogin.css'
import {getData} from "../static/js/scriptLogin";
import imgLogin from '../static/images/login.png'

export function Login () {        
    return(   
      <div class="container">
        <div class="row">
          <div class="col-2">  </div>
          <div class="col-8">   
            <form id="formLogin">     
              <img id="imagenLogin" src={imgLogin}></img> 
              <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" class="form-control" id="inputEmail" aria-describedby="emailHelp" placeholder="Enter your email" />
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" class="form-control" id="inputPassword" placeholder="Enter your password" />
              </div>
              <button type="button" id="btnLogin" onClick={getData} class="btn btn-primary btn-lg"> Login </button>
            </form>
          </div>
          <div class="col-2"> </div>    
        </div> 
      </div>  
    )
}
