
from django.http import JsonResponse

from .models import Card

def mi_vista_json(request):
    data = {'mensaje': 'First message from Django!'}
    return JsonResponse(data)

# Create your views here.

def nine_cards(request):
    ultimas_nueve_tarjetas = Card.objects.all().order_by('-id')[:9] 
    # Convertir las tarjetas a una lista de diccionarios
    tarjetas_list = [
        {
            'id': tarjeta.id,
            'title': tarjeta.title,
            'description': tarjeta.description,
            'visitCount': tarjeta.visitCount,
            'description_general': tarjeta.description_general,
            'Fecha creación': tarjeta.created_at
            # Agrega todos los campos que desees incluir
        }
        for tarjeta in ultimas_nueve_tarjetas
    ]

    # Devolver la respuesta como JSON
    return JsonResponse({'ultimas_nueve_tarjetas': tarjetas_list}, safe=False)