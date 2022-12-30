
export function sendMessage(){
    let obj = {
        email:document.getElementById("inputEmail").value,
        phone:document.getElementById("inputPhone").value,
        message:document.getElementById("inputMessage").value,
    }
    fetch('/message/', {
        method: "POST",
        headers:{"Content-Type":"application/json", },
        body: JSON.stringify(obj)
    })
    .then(resp => resp.text())
    .then(data => alert(data))
    .catch(err => alert("Error: " + err))
}