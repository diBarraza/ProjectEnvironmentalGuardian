from django.db import models

# Create your models here.

class Alumno(models.Model):
  nombre = models.TextField()
  rut = models.IntegerField()
  dv = models.IntegerField()
  edad = models.IntegerField()
  def __str__(self):
      return self.nombre

class EstadoCredencial(models.Model):
  nombre = models.CharField(max_length=20)
  descripcion = models.TextField()
  create_at = models.DateTimeField(auto_now_add=True)
  def __str__(self):
      return self.nombre

class Credencial(models.Model):
  codigo = models.CharField(max_length=20)    
  alumno = models.ForeignKey(Alumno, on_delete=models.CASCADE)
  estado = models.ForeignKey(EstadoCredencial, on_delete=models.CASCADE)
  created_at = models.DateTimeField(auto_now_add=True)
  def __str__(self):
      return self.codigo