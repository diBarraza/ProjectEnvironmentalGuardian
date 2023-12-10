from django.contrib import admin
from .models import Feature, Card
# Register your models here.

# Registramos el modelo Feature en el admin
admin.site.register(Feature)

admin.site.site_header = "Guardian Admin"
admin.site.site_title = "Guardian Admin Portal"
admin.site.register(Card)
    