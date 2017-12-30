#coding:utf8
from django.shortcuts import render

# Create your views here.
from forum.models import Topic,Comment
from forum.serializers import TopicListSerializers,TopicRetrieveSerializer,CommentCreateSerializers
from rest_framework import generics
from django.contrib.auth.models import User

from rest_framework import permissions

from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.reverse import reverse

from rest_framework import renderers
from rest_framework.response import Response
from rest_framework.throttling import UserRateThrottle,AnonRateThrottle
# from abc import CustomAnonRateThrottle
from rest_framework.views import APIView
import django_filters.rest_framework
from django.contrib.auth.models import User
from serializers import Userserializers
from rest_framework import generics
from rest_framework.filters import OrderingFilter,SearchFilter

class TopicList(generics.ListAPIView):
    queryset = Topic.objects.all()
    serializer_class = TopicListSerializers
    permission_classes = (permissions.AllowAny,)
    throttle_classes = (UserRateThrottle,AnonRateThrottle,)
    filter_backends = (OrderingFilter,SearchFilter,)
    ordering_fields = ('user',)
    # ordering_fields = '__all__'#显示所有可排序选项
    # ordering = ('-user') #默认系统直接排序
    search_fields = ('content','id',)
    # search_fields = ('=content','id',) 加等号是精确匹配

    # def get_queryset(self):
    '''
    在url后直接加用户名...+/admin/
    '''
    #     user = 1
    #     return Topic.objects.filter(user=user)
        # return Topic.objects.filter(user__username='admin')
        # return Topic.objects.filter(user__id=1)
    # def get_queryset(self):
    #     """
    #     url后面../?username=admin/
    #     Optionally restricts the returned purchases to a given user,
    #     by filtering against a `username` query parameter in the URL.
    #     """
    #     queryset = Topic.objects.all()
    #     username = self.request.query_params.get('username', None)
    #     # username = self.request.query_params.get('username', 'user') #单引号
    #
    #     if username is not None:
    #         queryset = Topic.objects.filter(user__username=username)
    #     return queryset

class Topicdetail(generics.RetrieveAPIView):
    queryset = Topic.objects.all()
    serializer_class = TopicRetrieveSerializer
    permission_classes = (permissions.AllowAny,)

class CommentCreat(generics.CreateAPIView):
    queryset = Comment.objects.all()
    serializer_class = CommentCreateSerializers
    permission_classes = (permissions.AllowAny,)
    def perform_create(self, serializers):
        if  self.request.user.is_anonymous():
            serializers.save()
        else:
            serializers.save(user=self.request.user)

class FilterUrlListView(generics.ListAPIView):
    serializer_class = TopicListSerializers

    def get_queryset(self):
        username = self.kwargs['username']
        return Topic.objects.filter(user__username=username)