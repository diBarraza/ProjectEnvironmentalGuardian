from django.shortcuts import render
from .models import *
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json
# Create your views here.
def return_credenciales(request):
    credenciales = Credencial.objects.all()
    credenciales_list = [{
        'id': credencial.id,
        'codigo': credencial.codigo,
        'lote': credencial.lote.id,
        'estado_credencial': credencial.estado.nombre if credencial.estado else 'Sin estado',
        'fecha_creacion': credencial.created_at,
        'fecha_entrega': credencial.fecha_entregada,
        }for credencial in credenciales
    ]
    return JsonResponse({'credenciales': credenciales_list}, safe=False)

def return_credenciales_id(request,id):
    credenciales = Credencial.objects.all()
    print("La id que llega desde el front end es: " + str(id))
    credenciales_list = [{
        'id': credencial.id,
        'codigo': credencial.codigo,
        'lote': credencial.lote.id,
        'estado_credencial': credencial.estado.nombre if credencial.estado else 'Sin estado',
        'fecha_creacion': credencial.created_at,
        'fecha_entrega': credencial.fecha_entregada,
        }for credencial in credenciales
    ]
    return JsonResponse({'credenciales': credenciales_list}, safe=False)

def return_lotes(request):
    lotes = Lotes.objects.all()
    
    lotes_list = []
    for lote in lotes:
        cantidad_credenciales = 0
        crenciales_lote = Credencial.objects.filter(lote = lote)
        cantidad_credenciales = len(crenciales_lote)
        data = {                
        'id': lote.id,
        'tipo': lote.tipo,
        'fecha_emision': lote.created_at,
        'cantidad_credenciales': cantidad_credenciales,
        'estado': lote.estado.nombre,
        'fecha_recepcionado': lote.fecha_recepcionado,
        }
        lotes_list.append(data)
    return JsonResponse({'lotes': lotes_list}, safe=False)

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

@csrf_exempt
def post_crear_credencial(request):
    if request.method == 'POST':
        try:
            # Obtener los datos del cuerpo de la solicitud JSON
            data = json.loads(request.body.decode('utf-8'))
            print(data)
            # Acceder a los valores enviados desde el frontend
            idAlumno = data.get('alumno')
            idEstadoCredencial = data.get('estado_credencial')
            codigoText = data.get('codigo')            
            print(idAlumno)
            print(idEstadoCredencial)
            print(codigoText)
            # Realizar operaciones con los datos
            # ...
            # Devolver una respuesta (puedes personalizar según tus necesidades)
            return JsonResponse({'mensaje': 'Credencial creada exitosamente'}, status=201)
        except json.JSONDecodeError as e:
            return JsonResponse({'error': 'Error al decodificar JSON'}, status=400)
    return JsonResponse({'error': 'Método no permitido'}, status=405)