from django.shortcuts import render
from .models import Credencial,Alumno,EstadoCredencial
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

def return_alumnos(request):
    alumnos = Alumno.objects.all()
    alumnos_list = [{
        'id': alumno.id,
        'nombre': alumno.nombre,
        'rut': str(alumno.rut) + "-" + str(alumno.dv),
        }for alumno in alumnos
    ]
    return JsonResponse({'alumnos': alumnos_list}, safe=False)
    
def return_estado_credencial(request):
    estados_credencial = EstadoCredencial.objects.all()
    estados_credencial_list = [{
            'id':e.id,
            'nombre':e.nombre,
            'descripcion':e.descripcion,   
        }for e in estados_credencial
    ]
    return JsonResponse({'estados_credenciales': estados_credencial_list}, safe=False)