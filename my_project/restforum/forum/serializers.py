from rest_framework import serializers
from forum.models import Topic,Comment
from django.contrib.auth.models import User
from rest_framework.validators import UniqueTogetherValidator

class Userserializers(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ("id",'username',)

class CommentSerializers(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = ('id','content','created',)

class CommentCreateSerializers(serializers.ModelSerializer):
    user = Userserializers(read_only=True)
    class Meta:
        model = Comment
        fields = ('id','content','created','topic','user',)


class TopicListSerializers(serializers.ModelSerializer):
    user = Userserializers()
    class Meta:
        model = Topic
        fields = ('id','content','created','user',)


class TopicRetrieveSerializer(serializers.ModelSerializer):
    comments_of = CommentSerializers(many=True)
    user = Userserializers()
    class Meta:
        model = Topic
        fields = ('id','content','created','user','comments_of',)







