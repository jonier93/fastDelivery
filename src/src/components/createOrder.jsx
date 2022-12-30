import React from "react";
import '../static/css/styleCreateOrder.css'
import imgOrder from "../static/images/order.png"
import {newOrder} from '../static/js/scriptCreateOrder'

export function CreateOrder() {
    return(
        <div>
            <img id="imgOrder" src={imgOrder} />
            <form class="row g-3" id="formOrder">            
                <div class="col-md-6">
                    <label for="validationDefault01" class="form-label">Date</label>
                    <input type="date" class="form-control" id="date" min="1990-01-01" max="2040-12-31" required />
                </div>
                <div class="col-md-6">
                    <label for="validationDefault02" class="form-label">Time</label>
                    <input type="time" class="form-control" id="time" required />
                </div>
                <div class="col-md-3">
                    <label for="validationDefaultUsername" class="form-label">Length</label>
                    <div class="input-group">
                    <input type="number" class="form-control" id="length" required />
                    </div>
                </div>
                <div class="col-md-3">
                    <label for="validationDefault03" class="form-label">Width</label>
                    <input type="number" class="form-control" id="width" required />
                </div>
                <div class="col-md-3">
                    <label for="validationDefault04" class="form-label">Height</label>
                    <input type="number" class="form-control" id="height" required />
                </div>
                <div class="col-md-3">
                    <label for="validationDefault05" class="form-label">Weight</label>
                    <input type="number" class="form-control" id="weight" required />
                </div>
                <div class="col-md-6">
                    <label for="validationDefault03" class="form-label">Pickup address</label>
                    <input type="text" class="form-control" id="pickupAdd" required />
                </div>
                <div class="col-md-6">
                    <label for="validationDefault04" class="form-label">Pickup city</label>
                    <select class="form-select" id="pickupCity" required>
                    <option selected disabled value="">Choose...</option>
                    <option>Arauca</option>  <option>Armenia</option>  <option>Barranquilla</option> <option>Bogotá</option> <option>Bucaramanga</option> <option>Cali</option> <option>Cartagena</option> <option>Cúcuta</option> <option>Florencia</option> <option>Ibagué</option> <option>Inírida</option> <option>Leticia</option> <option>Manizales</option>  <option>Medellín</option>  <option>Mitú</option> <option>Mocoa</option> <option>Montería</option> <option>Neiva</option> <option>Pasto</option> <option>Pereira</option> <option>Popayán</option> <option>Puerto Carreño</option> <option>Quibdó</option> <option>Riohacha</option> <option>San Andrés</option> <option>San José del Guaviare</option> <option>Santa Marta</option> <option>Sincelejo</option> <option>Tunja</option> <option>Valledupar</option> <option>Villavicencio</option> <option>Yopal</option>
                    </select>
                </div>
                <div class="col-md-6">
                    <label for="validationDefault05" class="form-label">Recipient's name</label>
                    <input type="text" class="form-control" id="recipientName" required />
                </div>
                <div class="col-md-6">
                    <label for="validationDefault01" class="form-label">Recipient ID</label>
                    <input type="number" class="form-control" id="recipientId" required />
                </div>
                <div class="col-md-6">
                    <label for="validationDefault02" class="form-label">Delivery address</label>
                    <input type="text" class="form-control" id="deliveryAdd" required />
                </div>
                <div class="col-md-6">
                    <label for="validationDefault04" class="form-label">Delivery city</label>
                    <select class="form-select" id="deliveryCity" required>
                    <option selected disabled value="">Choose...</option>
                    <option>Arauca</option>  <option>Armenia</option>  <option>Barranquilla</option> <option>Bogotá</option> <option>Bucaramanga</option> <option>Cali</option> <option>Cartagena</option> <option>Cúcuta</option> <option>Florencia</option> <option>Ibagué</option> <option>Inírida</option> <option>Leticia</option> <option>Manizales</option>  <option>Medellín</option>  <option>Mitú</option> <option>Mocoa</option> <option>Montería</option> <option>Neiva</option> <option>Pasto</option> <option>Pereira</option> <option>Popayán</option> <option>Puerto Carreño</option> <option>Quibdó</option> <option>Riohacha</option> <option>San Andrés</option> <option>San José del Guaviare</option> <option>Santa Marta</option> <option>Sincelejo</option> <option>Tunja</option> <option>Valledupar</option> <option>Villavicencio</option> <option>Yopal</option>
                    </select>
                </div> 
                <div class="col-12">
                    <button type="button" onClick={newOrder} id="btnCreateOrder" class="btn btn-primary btn-lg" >Create Order</button>
                </div>              
            </form>
        </div>        
    )
}