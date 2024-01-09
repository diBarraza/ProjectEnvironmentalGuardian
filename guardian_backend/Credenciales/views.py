from django.shortcuts import render
from .models import Credencial
from django.http import JsonResponse
from django.core.serializers import serialize
# Create your views here.
def return_credenciales(request):
    credenciales = Credencial.objects.all()
    credenciales_list = [{
        'id': credencial.id,
        'codigo': credencial.codigo,
        'alumno': credencial.alumno.nombre,
        'rut': str(credencial.alumno.rut) + "-" + str(credencial.alumno.dv),
        'estado': credencial.estado.nombre,
        
        }for credencial in credenciales
    ]
    return JsonResponse({'credenciales': credenciales_list}, safe=False)