from django.contrib import admin
from .models import Productos, Usuarios
# Register your models here.

admin.site.register(Usuarios)
admin.site.register(Productos)