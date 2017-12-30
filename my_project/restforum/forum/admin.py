from django.contrib import admin

# Register your models here.
from forum.models import Topic,Comment

class TopicAdmin(admin.ModelAdmin):
    list_display = ('content','user','created',)
admin.site.register(Topic, TopicAdmin)

class CommentAdmin(admin.ModelAdmin):
    list_display = ('id','title','content','topic',)
admin.site.register(Comment,CommentAdmin)