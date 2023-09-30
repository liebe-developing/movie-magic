from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.views import APIView
from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
from django.contrib.auth import authenticate, login

from .serializers import UserSerializer
from .models import User

# Create your views here.

class UserView(viewsets.ModelViewSet):
    serializer_class = UserSerializer
    queryset = User.objects.all()


class UserRegisterView(APIView):
    permission_classes = [AllowAny]

    def post(self,request):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            return Response(serializer.data , status=status.HTTP_201_CREATED)
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)


class UserLoginView(APIView):
    permission_classes = [AllowAny]

    def post(self,request):
        phone = request.data.get('phone')
        password = request.data.get('password')
        user = authenticate(request, username = phone , password = password)
        if user is not None:
            login(request,user)
            serializer = UserSerializer(user)
            return  Response(serializer.data)
        return Response({'error' : 'Invalid credentials'},status=status.HTTP_401_UNAUTHORIZED)
