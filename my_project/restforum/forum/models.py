from django.db import models
from django.utils.six import python_2_unicode_compatible

# Create your models here.
@python_2_unicode_compatible
class Topic(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    content = models.CharField(max_length=70)
    user = models.ForeignKey('auth.User',related_name='topics_of',on_delete=models.CASCADE)
    def __str__(self):
        return self.content

@python_2_unicode_compatible
class Comment(models.Model):
    title = models.CharField(max_length=100)
    content = models.TextField(max_length=200)
    created = models.DateTimeField(auto_now_add=True)
    topic = models.ForeignKey('Topic',related_name='comments_of',on_delete=models.CASCADE)
    user = models.ForeignKey('auth.User',related_name='comments_of',on_delete=models.CASCADE,blank=True,null=True)

    def __str__(self):
        return self.title


