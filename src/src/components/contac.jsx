import React, {Component} from "react";
import { sendMessage } from "../static/js/scriptContact";
import '../static/css/styleContact.css'
import imgContact from '../static/images/contact.png'

export class Contact extends Component {
    render(){
        return(
            <div class="row">
                <div class="col-2" />
                <div class="col-8" > 
                    <form id="formContact">
                        <img id="imgContact" src={imgContact}></img> 
                        <div class="form-group">
                            <label for="exampleInputEmail1"> Email </label>
                            <input type="text" class="form-control" id="inputEmail" aria-describedby="emailHelp" placeholder="Enter your email" />
                        </div>
                        <div class="form-group">
                            <label for="exampleInputEmail1"> Phone number </label>
                            <input type="text" class="form-control" id="inputPhone" aria-describedby="emailHelp" placeholder="Enter your phone number" />
                        </div>
                        <div class="form-group" id="blockSmall">
                            <label for="exampleInputPassword1"> Message </label>
                            <textarea class="form-control" id="inputMessage" placeholder="Enter your Message" />                 
                        </div>
                        <button type="button" onClick={sendMessage} class="btn btn-primary btn-lg" id="btnMessage"> Send </button>
                    </form>
                </div>
                <div class="col-2" /> 
            </div>
        )
    }
}