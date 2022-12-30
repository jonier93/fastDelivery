import React from "react";
import '../static/css/styleHome.css'
import imagen from '../static/images/mensajeria.jpg'

function Home () {
    return(
        <div>            
            <div id="blockIcono">                
                <img id="imgIcono" src="https://th.bing.com/th/id/R.5164e713b5314213f1a247328442d09c?rik=90aTM2p7PQGxbg&riu=http%3a%2f%2ftransportesabadell.com%2fwp-content%2fuploads%2f2016%2f06%2fservicio-paqueteria-rapido-sabadell.png&ehk=hvcSNoW%2ft51cxX6H5Nxol0VZujBGUdIY9mcgH6ADWZc%3d&risl=&pid=ImgRaw&r=0"></img>
            </div>
            <h1 id="titleHome" style={{fontSize:"50px"}}> Servicio de Paquetería </h1>
            <p>Somos una empresa de mensajería, domicilios y paquetería, que nos apoyamos en nuestra plataforma tecnológica para el desarrollo de nuestros servicios tanto para el cliente como nuestros mensajeros. Atreves de nuestra plataforma y la App, los clientes y los mensajeros llevan una trazabilidad de los servicios, permitiendo así integrarlos y optimizar tiempos de entrega.</p>
            <div class="row" style={{alignItems:"center"}}>
                <div class="col-4" >
                    <img id="imgGif" src="https://media4.giphy.com/media/f5pl07530eL8Hoqmw6/giphy.gif"></img>
                </div>      
                <div class="col-8" >
                    <img id="imgHome" src={imagen}></img>                    
                </div>  
            </div>  
            
            <p> Un buen servicio de entrega a domicilio, es algo cada vez más demandado y apreciado por los consumidores. Y aquí no estamos hablando solamente de tiendas online, aunque la compra en línea crece por momentos, y un ‘ecommerce’ lleva el servicio de reparto asociado a la compra. 
            Sorprende a tus clientes realizando las entregas de tus domicilios, productos, comidas, medicinas, licores o lo que comercialices en tiempo récord.
            ¡Y vamos más allá! Transportamos tus documentos importantes, radicamos tus facturas y todo lo que tu empresa pueda necesitar.</p>
            <iframe id="video" src="https://www.youtube.com/embed/wsv8MpoJRrs?autoplay=1&mute=1" title="Youtube video" frameborder="0" ></iframe>                            
        </div>
    )
}

export default Home