import {sha256} from 'crypto-hash'

export async function registrar(name, user, password, email){  
    let passwordHash = await sha256(password)

    let obj = {
        name:name,
        user:user,
        password:passwordHash,
        email:email
    }
    fetch('/newUser/', {
        method:"post",
        headers:{'Content-Type':'application/json'},
        body: JSON.stringify(obj)
    })
    .then(resp => resp.text())
    .then(data => {        
        if(data == "ok"){
            alert("User created")
            window.location.href="/login"                        
        }
        else {
            alert("User or email already exists")
        }        
    })
    .catch(err => alert(err))
}

export function validarDatos(){
    let name = document.getElementById('inputName').value
    let user = document.getElementById('inputUser').value
    let password = document.getElementById('inputPassword2').value
    let email = document.getElementById('inputEmail2').value
    let accept = document.getElementById("accept").checked
    let error = 0
    
    if(accept == false) {
        error = 1
        alert("You must accept the conditions")
    }
    if (name != ""){
        if (name.match("^[ a-zA-ZáéíóúÁÉÍÓÚ]+$")==null) {
            error = 1
            alert("Only letters are allowed in the name box")
        }         
    }
    else {
        error = 1
        alert("You must enter a name")
    }

    if (user != "") {
        if(user.match(/^\S*$/)==null) {
            error = 1
            alert("You must enter a valid user")
        }              
    }
    else {
        error = 1
        alert("You must enter a user")
    }

    if (password != "") {
        if (password.length < 8) {
            alert("Password can't be less than 8 characters")    
            error = 1    
        }
        else if (password.match(/(?=(.*[0-9]))(?=.*[\!@#$%^&*()\\[\]{}\-_+=|:;"'<>,./?])(?=.*[a-z])(?=(.*[A-Z]))(?=(.*)).{8,}/)==null) {
            error = 1
            alert("The password must include letters, lowercase, uppercase, numbers and special character")
        }                       
    }
    else {
        error = 1
        alert("You must enter a password") 
    }
    
    if (email != "") {
        if(email.match(/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/) == null) {
            error = 1
            alert("You must enter a valid email") 
        }              
    }
    else {
        error = 1
        alert("You must enter a email")  
    }    

    if (error == 0){
        registrar(name, user, password, email)
    }    
}
