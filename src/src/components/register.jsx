import React, { Component } from "react";
import '../static/css/styleRegister.css'
import {validarDatos} from '../static/js/scriptRegister'
import imgRegister from '../static/images/register.png'

export class Register extends Component {
    render(){
        return(
            <div class="row">
                <div class="col-1" />
                <div class="col-10" > 
                    <form id="formRegister">
                        <img id="imgRegister" src={imgRegister} />
                        <div class="form-group">
                            <label for="exampleInputEmail1"> Full Name </label>
                            <input type="text" class="form-control" id="inputName" aria-describedby="emailHelp" placeholder="Enter your name" />
                        </div>
                        <div class="form-group">
                            <label for="exampleInputEmail1"> User </label>
                            <input type="text" class="form-control" id="inputUser" aria-describedby="emailHelp" placeholder="Enter your user" />
                        </div>
                        <div class="form-group" id="blockSmall">
                            <label for="exampleInputPassword1">Password </label>
                            <input type="password" class="form-control" id="inputPassword2" placeholder="Enter your password" />
                            <small id="emailHelp" class="form-text text-muted"> Include letters, numbers and a at least 8 characters  </small>                  
                        </div>
                        <div class="form-group">
                            <label for="exampleInputEmail1"> Email </label>
                            <input type="text" class="form-control" id="inputEmail2" aria-describedby="emailHelp" placeholder="Enter your email" />
                        </div>
                        <div class="form-group">
                            <input type="radio" id="accept" name="groupSelect" checked/> <label > Acepto las condiciones </label> 
                        </div>
                        <div class="form-group">
                            <input type="radio" name="groupSelect"/> <label > No acepto las condiciones </label> 
                        </div>
                        <button type="button" onClick={validarDatos} class="btn btn-primary btn-lg" id="btnRegistrar"> Registrar </button>
                    </form>
                </div>
                <div class="col-1" /> 
            </div>
        )
    }
}
