from django.urls import path
from .views import  *

urlpatterns = [
    path('about/', about, name='about')
]