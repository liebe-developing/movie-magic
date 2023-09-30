from rest_framework import serializers

from .models import *


class ActorsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Actors
        fields = '__all__'


class DirectorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Director
        fields = '__all__'

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'


class VideoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Video
        fields = '__all__'


class SerialSerializer(serializers.ModelSerializer):
    class Meta:
        model = Serial
        fields = '__all__'


class SeasonSerializer(serializers.ModelSerializer):
    class Meta:
        model = Season
        fields = '__all__'




class CinematicSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cinematic
        fields = '__all__'