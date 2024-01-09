from django.contrib import admin
from .models import Credencial, Alumno, EstadoCredencial
# Register your models here.

admin.site.register(Credencial)
admin.site.register(Alumno)
admin.site.register(EstadoCredencial)