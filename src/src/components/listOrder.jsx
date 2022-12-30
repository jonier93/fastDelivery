import React, {Component, useState} from "react";
import '../static/css/styleListOrder.css'
import { linkCreateOrder, update } from "../static/js/scriptListOrder";
import { ModifyOrder } from "./modifyOrder";

window.history.pushState(null, null, document.URL);
window.addEventListener('popstate', function(event) {
   window.location.replace(``);
});

export function ListOrder(){   
    
    function updateState (servicios) {
        let newState = <div className="tabla">        
                <div id="blockBtnCreate">
                    <div className="btnList"><button type="button" id="btnUpdate"  onClick={() => {
                                                                                                update()
                                                                                                .then(data => {
                                                                                                    let newState = updateState(data)
                                                                                                    setEstado(estado=newState)                                                                                                    
                                                                                                })  
                                                                                            }
                        } class="btn btn-primary"> Consult </button></div>
                    <div className="btnList"><button type="button" id="btnCreateOrder" onClick={linkCreateOrder} class="btn btn-success"> Create order </button></div>
                </div>                
                <div class="row" id="titleTable">                    
                    <div class="col-2"> <th> Service </th> </div>
                    <div class="col-2"> <th> Date </th> </div>
                    <div class="col-3"> <th> Delivery City </th> </div>
                    <div class="col-3"> <th> Delivery address </th> </div>
                    <div class="col-2"> <th> Status </th> </div>                       
                </div>
                    {servicios.map((data) => (
                        <div class="row" id="servicesTable">
                            <div class="col-2"> <a id="link"  onClick={() => {     
                                                                            window.history.replaceState(null, "title", "editOrder")                              
                                                                            setEstado(estado=<ModifyOrder service={data} />)
                                                                        } 
                                }> {data.servicio} </a> </div>
                            <div class="col-2"> {data.date} </div>
                            <div class="col-3"> {data.deliveryCity} </div>
                            <div class="col-3"> {data.deliveryAdd}  </div>
                            <div class="col-2"> "Ok" </div>    
                        </div>
                    ))}                                                                                                  
               </div>
        return newState
    }

    let init = <div className="tabla">        
                <div id="blockBtnCreate">
                    <div className="btnList"><button type="button" id="btnUpdate"  onClick={() => {
                                                                                                update()
                                                                                                .then(data => {
                                                                                                    let newState = updateState(data)
                                                                                                    setEstado(estado=newState)                                                                                                    
                                                                                                })                                                                                                
                                                                                            }
                        } class="btn btn-primary"> Consult </button></div>
                    <div className="btnList"><button type="button" id="btnCreateOrder" onClick={linkCreateOrder} class="btn btn-success"> Create order </button></div>
                </div>                
                <div class="row" id="titleTable">                    
                    <div class="col-2"> <th> Service </th> </div>
                    <div class="col-2"> <th> Date </th> </div>
                    <div class="col-3"> <th> Delivery City </th> </div>
                    <div class="col-3"> <th> Delivery address </th> </div>
                    <div class="col-2"> <th> Status </th> </div>                       
                </div>                                                                                          
            </div>
    let [estado, setEstado] = useState(init)

    return(
        <div>
            {estado}
        </div>
    )
}
