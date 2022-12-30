import {sha256} from 'crypto-hash'

async function logear() { 
    let passwordHash = await sha256(document.getElementById("inputPassword").value)
    return new Promise((resolve, reject) => {
        let obj = {
            email: document.getElementById("inputEmail").value,
            password: passwordHash
        }
        fetch("/logear/", {
            method: "POST",
            headers:{
                "Content-Type":"application/json",            
            },
            body: JSON.stringify(obj)
        })
        .then(resp => resp.text())
        .then(data => { 
            resolve(data)  
            if (data == "ok") {
                localStorage['email'] = obj.email
                localStorage['password'] = passwordHash 
                window.location.href = "/listOrder" 
            }  
            else {
                alert("correo y/o contraseña incorrecta") 
            }                  
        })
        .catch(err => {
            reject("error: " + err)            
        })     
        }) 
}

export async function getData() {
  let datos = await logear();
  return datos
}

