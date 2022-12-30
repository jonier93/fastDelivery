"""app URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from app.controller import homePage
from app.controller import register, logear, newOrder, update, message, edit, delete

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', homePage),
    path('home/', homePage),
    path('register/', homePage),
    path('login/', homePage),    
    path('contact/', homePage),
    path('createOrder/', homePage),
    path('listOrder/', homePage),
    path('logear/', logear),
    path('newUser/', register),
    path('newOrder/', newOrder),
    path('update/', update),    
    path('message/', message),
    path('editOrder/', edit),
    path('deleteOrder/', delete)
]
