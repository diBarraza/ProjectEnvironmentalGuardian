from calendar import c
from email.policy import default
from pyexpat import model
from django.db import models

import Credenciales

# Create your models here.

class Estado_usuario(models.Model):
  nombre = models.CharField(max_length=20)
  descripcion = models.TextField()
  create_at = models.DateTimeField(auto_now_add=True)
  def __str__(self):
      return self.nombre
    
class Sede(models.Model):
  nombre = models.CharField(max_length=20)
  descripcion = models.TextField()
  create_at = models.DateTimeField(auto_now_add=True)
  def __str__(self):
    return self.nombre

class Alumno(models.Model):
  rut = models.IntegerField()
  dv = models.IntegerField()
  nombre = models.TextField(null = True,default=None)
  apellido_paterno = models.TextField(null = True,default=None)
  apellido_materno = models.TextField(null = True,default=None)
  sexo = models.CharField(max_length=1,null = True,default=None)
  edad = models.IntegerField()
  estado_usuario = models.ForeignKey(Estado_usuario, on_delete=models.CASCADE , null = True,default=None)
  unidad_carrera = models.TextField(null = True,default=None)
  anio_ingreso = models.IntegerField(null = True,default=None)
  sede = models.ForeignKey(Sede, on_delete=models.CASCADE , null = True,default=None)
  condicion = models.TextField(null = True,default=None)
  nacionalidad = models.TextField(null = True,default=None)
  fecha_nacimiento = models.DateField(null = True,default=None)
  foto_link = models.TextField(null = True,default=None)
  def __str__(self):
      return str(self.rut)

class EstadoCredencial(models.Model):
  nombre = models.CharField(max_length=20)
  descripcion = models.TextField()
  create_at = models.DateTimeField(auto_now_add=True)
  def __str__(self):
      return self.nombre

class Estado_lote(models.Model):
  nombre = models.CharField(max_length=20)
  descripcion = models.TextField()
  create_at = models.DateTimeField(auto_now_add=True)
  def __str__(self):
      return self.nombre
class Lotes(models.Model):
  tipo = models.CharField(max_length=20)
  created_at = models.DateTimeField(auto_now_add=True)
  estado = models.ForeignKey(Estado_lote, on_delete=models.CASCADE , null = True,default=None)
  fecha_recepcionado = models.DateField(null = True,default=None,blank = True)
  cantidad_credenciales = models.IntegerField()
  def __str__(self):
    return str(self.id) + "-"+ self.tipo + "-" + str(self.cantidad_credenciales)

class Solicitud(models.Model):
  alumno = models.ForeignKey(Alumno, on_delete=models.CASCADE)
  estado = models.ForeignKey(EstadoCredencial, on_delete=models.CASCADE)
  created_at = models.DateTimeField(auto_now_add=True)
  

class Credencial(models.Model):
  codigo = models.CharField(max_length=20)    
  estado = models.ForeignKey(EstadoCredencial, on_delete=models.CASCADE)
  lote = models.ForeignKey(Lotes, on_delete=models.CASCADE , null = True,default=None)
  solicitud = models.ForeignKey(Solicitud, on_delete=models.CASCADE,null = True,default=None)
  created_at = models.DateTimeField(auto_now_add=True)
  fecha_entregada = models.DateField(null = True,default=None,blank = True)
  def __str__(self):
      return self.codigo
    
