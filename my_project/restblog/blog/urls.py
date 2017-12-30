#coding:utf8
from django.conf.urls import url,include
from rest_framework.urlpatterns import format_suffix_patterns
from blog import views

urlpatterns = [
    url(r'^post_list/$',views.PostList.as_view(),name="post_list"),
    url(r'^post_rud/(?P<pk>[0-9]+)/$',views.Postdetail.as_view(),name='post_rud'),

]
urlpatterns = format_suffix_patterns(urlpatterns)
#as_view()是表示类