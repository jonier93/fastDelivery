from django.http import HttpResponse
from django.template.loader import get_template
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json, random
from gestionBase.models import usuarios, paquetes
from django.shortcuts import render, redirect
from django.core.mail import send_mail
from django.conf import settings

def homePage(request):
    plantilla = get_template('index.html')
    return HttpResponse(plantilla.render())

@csrf_exempt 
def register(request):
    datos = json.loads(request.body) #convertimos a JSON
    #print(datos["name"], datos["user"], datos["password"], datos["email"])
    verification = usuarios.objects.filter(email=datos["email"]) | usuarios.objects.filter(user=datos["user"])
    if verification:        
        return HttpResponse("error")        
    else:
        user = usuarios(datos["name"], datos["user"], datos["password"], datos["email"])
        user.save()
        return HttpResponse("ok")        

@csrf_exempt 
def logear(request):
    datos = json.loads(request.body)
    user = usuarios.objects.filter(email=datos["email"], password=datos["password"])
    if user:
        state = "ok"         
    else:
        state = "error"
    return HttpResponse(state) 

@csrf_exempt 
def newOrder(request):
    datos = json.loads(request.body)
    servicio = int(random.uniform(1, 1000000))
    paquete = paquetes(servicio, datos["date"], datos["time"], datos["length"], datos["width"], datos["height"], datos["weight"], datos["pickupAdd"], datos["pickupCity"], datos["recipientName"], datos["recipientId"], datos["deliveryAdd"], datos["deliveryCity"])
    paquete.save()
    return HttpResponse("Orden creada")

@csrf_exempt
def update(request):
    datos = json.loads(request.body)
    user = usuarios.objects.filter(email=datos["email"], password=datos["password"])
    obj = []
    if user:
        productos = paquetes.objects.all() 
        for dato in productos:
            obj.append({"servicio":dato.servicio, "date":dato.date, "time":dato.time, "length":dato.length, "width":dato.width, "height":dato.height, "weight":dato.weight, "pickupAdd":dato.pickupAdd, "pickupCity":dato.pickupCity, "recipientName":dato.recipientName, "recipientId":dato.recipientId, "deliveryAdd":dato.deliveryAdd, "deliveryCity":dato.deliveryCity})       
    else:
        #print("Usuario y/o contraseña incorrectas")
        obj ={"servicio":""} 
    return JsonResponse(obj, safe=False)

@csrf_exempt
def message(request):
    data = json.loads(request.body)
    subject = "Solicitud de Cliente"
    emailIn = data["email"]
    numberPhone = data["phone"]
    message = "Mensaje: " + data["message"] + "\n" + "Contacto de correo: " + emailIn + "\n" + "Contacto de celular: " + numberPhone
    emailOut = settings.EMAIL_HOST_USER
    recipient = ['jonietrporras@gmail.com']
    send_mail(subject, message, emailOut, recipient)
    return HttpResponse("Correo enviado exitosamente")

@csrf_exempt
def edit(request):
    datos = json.loads(request.body)
    paquete = paquetes(datos["servicio"], datos["date"], datos["time"], datos["length"], datos["width"], datos["height"], datos["weight"], datos["pickupAdd"], datos["pickupCity"], datos["recipientName"], datos["recipientId"], datos["deliveryAdd"], datos["deliveryCity"])
    paquete.save()
    return HttpResponse("Orden editada")

@csrf_exempt
def delete(request):
    datos = json.loads(request.body)
    paquete = paquetes.objects.filter(servicio=datos["servicio"]).delete()
    return HttpResponse("Orden eliminada")