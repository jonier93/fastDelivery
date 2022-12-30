export function editOrder(servicio){
    let obj = {
        servicio: servicio,
        date: document.getElementById("date").value,
        time: document.getElementById("time").value,
        length: document.getElementById("length").value,
        width: document.getElementById("width").value,
        height: document.getElementById("height").value,
        weight: document.getElementById("weight").value,
        pickupAdd: document.getElementById("pickupAdd").value,
        pickupCity: document.getElementById("pickupCity").value,
        recipientName: document.getElementById("recipientName").value,
        recipientId: document.getElementById("recipientId").value,
        deliveryAdd: document.getElementById("deliveryAdd").value,
        deliveryCity: document.getElementById("deliveryCity").value,
    }       
    fetch("/editOrder/", {
        method:"post",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(obj)
    })
    .then(resp => resp.text())
    .then(data => {
        alert(data)
        //window.history.back();
        window.location.href = "/listOrder" 
    })
    .catch(err => alert(err))
}

export function deleteOrder(servicio){ 
    let obj = {
        servicio: servicio
    } 
    fetch("/deleteOrder/", {
        method:"post",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(obj)
    })
    .then(resp => resp.text())
    .then(data => {
        alert(data)
        window.location.href = "/listOrder" 
    })
    .catch(err => alert(err))

}