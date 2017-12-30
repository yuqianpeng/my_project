from rest_framework import serializers,request
from blog.models import Post,Category,Tag
from django.contrib.auth.models import User
class CategorySerialzer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ('id','name',)

class TagSerialzer(serializers.ModelSerializer):
    class Meta:
        model = Tag
        fields = ('id','name',)

class PostLCSerializer(serializers.ModelSerializer):
    content = serializers.CharField(write_only=True)
    category = CategorySerialzer()
    tags = TagSerialzer(many=True)
    class Meta:
        model = Post
        fields = ( 'id', 'title','content','category','tags',)
        # extra_kwargs = {'content': {'write_only': True}}
        # write_only_fields = ('content',)

class PostRUDSerializer(serializers.ModelSerializer):
    content = serializers.CharField(write_only=True)
    category = CategorySerialzer()
    tags = TagSerialzer(many=True)
    class Meta:
        model = Post
        fields = ( 'id', 'title', 'content','category','tags',)