from django.db import models

# Create your models here.
class Productos(models.Model):
  nombre = models.CharField(max_length=50)
  descripcion = models.CharField(max_length=50)
  disponible = models.BooleanField()
  fechaIncorporacion = models.DateField()
  correoProveedor = models.EmailField()

   
  

# Create your models here.

class Usuarios(models.Model):
  nombre = models.CharField(max_length=50)
  clave = models.CharField(max_length=50)
  suscrito = models.BooleanField()
  correo = models.EmailField()

  


class CategoriaProd(models.Model):

    nombre = models.CharField(max_length= 50)
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now_add=True)

  

  


  






    
     

# Create your models here.
