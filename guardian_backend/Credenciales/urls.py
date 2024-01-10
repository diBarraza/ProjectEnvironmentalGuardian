# miapp/urls.py
from django.urls import path
from Credenciales.views import *

urlpatterns = [
    path('get_alumnos/', return_alumnos , name='get_alumnos'),
    path('get_estados_credenciales/', return_estado_credencial, name='get_estados_credenciales'),
    path('get_credenciales/', return_credenciales, name='return_credenciales'),
    path('post_crear_credencial/', post_crear_credencial, name='post_crear_credencial'),
    # Agrega más rutas según sea necesario
]
