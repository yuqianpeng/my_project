from django.conf.urls import url,include
from rest_framework.urlpatterns import format_suffix_patterns
from forum import views

urlpatterns = [
    url(r'^topic_retrieve/(?P<pk>[0-9]+)/$',views.Topicdetail.as_view(), name="topic_retrieve"),
    url(r'^topic_list/$',views.TopicList.as_view(),name="topic_list"),
    url(r'^comment_create/$', views.CommentCreat.as_view(), name="comment_create"),
    url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    url(r'^filter_url/(?P<username>.+)/$', views.FilterUrlListView.as_view(),name = "filter_url"),

]
urlpatterns = format_suffix_patterns(urlpatterns)