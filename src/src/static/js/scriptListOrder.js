export function linkCreateOrder (){
    window.location.href = "/createOrder"
}

export function update(){
    return new Promise((resolve, reject) => {
    let obj = {
        email: localStorage['email'],
        password: localStorage['password']
    }
    fetch("/update/", {
        method:"post",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(obj)
    })    
    .then(res => res.json())
    .then(data => { if(data.servicio!=""){ 
            resolve(data)  
        }
        else {
            alert("Error con credenciales")
        }          
      }) 
      .catch(err => alert("Error" + err)) 
    }) 
}

export async function getData() {
  let datos = await update();
  return datos
}
