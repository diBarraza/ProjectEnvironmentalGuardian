from django.db import models

# Create your models here.

# Un modelo que tenga un texto y descripción

class Feature(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()

    def __str__(self):
        return self.title  

class Card(models.Model):
    title = models.CharField(max_length=100)
    visitCount = models.TextField()
    description = models.TextField()
    # description_general nullable
    description_general = models.TextField(null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    def __str__(self):
        return self.title 