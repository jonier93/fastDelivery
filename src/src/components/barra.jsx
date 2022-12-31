import React from "react";
import '../static/css/styleBarra.css'

export function Barra () {
    return(        
      <div >
        <nav className='barra' class="navbar navbar-expand-lg" >
          <div class="container-fluid">
            <a class="navbar-brand" href="/home">FastDelivery</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="/home">Home</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active"  href="/register">Register</a>
                </li>
                <li class="nav-item dropdown">
                  <a class="nav-link active dropdown-toggle" href="/login" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Login
                  </a>
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" onClick={logear} > Client </a></li>
                    <li><a class="dropdown-item" onClick={logear} > Administrator </a></li>
                    <li><a class="dropdown-item" onClick={signOff}> Sign off </a></li>
                  </ul>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" href="/contact"> Contact </a>
                </li>
              </ul>
              <form class="d-flex" role="search">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button class="btn btn-outline-success" type="submit">Search</button>
              </form>
            </div>
          </div>
        </nav>               
      </div>
    )
}

function signOff(){
  localStorage["email"] = "";
  localStorage["password"] = "";
  alert("Cesion cerrada")
  window.location.href="/login"
}

function logear() {
  if(localStorage["email"] == "" || localStorage["email"] == undefined ) {
    window.location.href="/login"
  }
  else {    
    window.location.href="/listOrder"
  }
  
}