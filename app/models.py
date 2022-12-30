from django.db import models

class usuarios(models.Model):
    nombre=models.CharField(max_length=20)
    usuario=models.CharField(max_length=20)
    contrasena=models.CharField(max_length=20)
    email=models.CharField(max_length=30)