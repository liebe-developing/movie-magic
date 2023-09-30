from django.shortcuts import render
from rest_framework import viewsets
from .serializers import *
from .models import *

# Create your views here.

class ActorView(viewsets.ModelViewSet):
    serializer_class = ActorsSerializer
    queryset = Actors.objects.all()


class DirectorView(viewsets.ModelViewSet):
    serializer_class = DirectorSerializer
    queryset = Director.objects.all()


class CategoryView(viewsets.ModelViewSet):
    serializer_class = CategorySerializer
    queryset = Category.objects.all()


class VideoView(viewsets.ModelViewSet):
    serializer_class = VideoSerializer
    queryset = Video.objects.all()


class SerialView(viewsets.ModelViewSet):
    serializer_class = SerialSerializer
    queryset = Serial.objects.all()


class SeasonView(viewsets.ModelViewSet):
    serializer_class = SeasonSerializer
    queryset = Season.objects.all()


class CinematicView(viewsets.ModelViewSet):
    serializer_class = CinematicSerializer
    queryset = Cinematic.objects.all()
