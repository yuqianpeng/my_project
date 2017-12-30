from django.db import models

# Create your models here.
from django.utils.six import python_2_unicode_compatible
@python_2_unicode_compatible
class Post(models.Model):

    title = models.CharField(max_length=100)
    context = models.TextField()
    created = models.DateTimeField(auto_now_add=True)

    category = models.ForeignKey('Category')
    tags = models.ManyToManyField('Tag')
    def __str__(self):
        return self.title
@python_2_unicode_compatible
class Category(models.Model):
    name = models.CharField(max_length=100)
    def __str__(self):
        return self.name

@python_2_unicode_compatible
class Tag(models.Model):
    name = models.CharField(max_length=100)
    def __str__(self):
        return self.name