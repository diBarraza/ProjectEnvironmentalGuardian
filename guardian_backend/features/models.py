from django.db import models

# Create your models here.

# Un modelo que tenga un texto y descripción

class Feature(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()

    def __str__(self):
        return self.title   