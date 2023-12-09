from django.shortcuts import render
from django.http import JsonResponse

def mi_vista_json(request):
    data = {'mensaje': 'Hola desde Django JSON!'}
    return JsonResponse(data)

# Create your views here.
