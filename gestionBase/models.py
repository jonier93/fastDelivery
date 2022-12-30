from django.db import models

class usuarios(models.Model):
    name=models.CharField(max_length=30)
    user=models.CharField(max_length=20, primary_key=True)
    password=models.CharField(max_length=64)
    email=models.CharField(max_length=30)

class paquetes(models.Model):
    servicio=models.IntegerField(primary_key=True)
    date=models.DateField()
    time=models.TimeField()
    length=models.DecimalField(max_digits=5, decimal_places=1)
    width=models.DecimalField(max_digits=5, decimal_places=1)
    height=models.DecimalField(max_digits=5, decimal_places=1)
    weight=models.DecimalField(max_digits=5, decimal_places=1)
    pickupAdd=models.CharField(max_length=20)
    pickupCity=models.CharField(max_length=20)
    recipientName=models.CharField(max_length=20)
    recipientId=models.IntegerField()
    deliveryAdd=models.CharField(max_length=20)
    deliveryCity=models.CharField(max_length=20)

