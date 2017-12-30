from django.contrib import admin
# Register your models here.

from blog.models import Post,Category,Tag


class PostAdmin(admin.ModelAdmin):
    list_display = ('title', 'context','category',)
admin.site.register(Post, PostAdmin)

class CategoryAdmin(admin.ModelAdmin):
    list_display = ('name',)
admin.site.register(Category,CategoryAdmin)

class TagAdmin(admin.ModelAdmin):
    list_display = ('name',)
admin.site.register(Tag,TagAdmin)
