# miapp/urls.py
from django.urls import path
from Credenciales.views import *

urlpatterns = [
    path('get_alumnos/', return_alumnos , name='get_alumnos'),
    path('get_estados_credenciales/', return_estado_credencial, name='get_estados_credenciales'),
    path('get_credenciales/', return_credenciales, name='return_credenciales'),
    path('get_credenciales/<int:id>/', return_credenciales_id, name='return_credenciales_id'),
    path('post_crear_credencial/', post_crear_credencial, name='post_crear_credencial'),
    path('get_lotes/', return_lotes, name='return_lotes'),
    # Agrega más rutas según sea necesario
]
