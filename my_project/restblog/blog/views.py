from django.shortcuts import render

# Create your views here.
from blog.models import Post
from blog.serializers import PostLCSerializer,PostRUDSerializer,CategorySerialzer
from rest_framework import generics
from django.contrib.auth.models import User

from rest_framework import permissions

from rest_framework.decorators import api_view
from rest_framework.reverse import reverse

from rest_framework import renderers
from rest_framework.response import Response

class PostList(generics.ListCreateAPIView):
    queryset = Post.objects.all()
    serializer_class = PostLCSerializer
    permission_classes = (permissions.AllowAny,)



class Postdetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Post.objects.all()
    serializer_class = PostRUDSerializer
    permission_classes = (permissions.AllowAny,)
    def list(self, request):
        queryset = self.get_queryset()
        serializer = PostRUDSerializer(queryset, many=True)
        return Response(serializer.data)