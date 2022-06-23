"""
URL mappings for the blog app.
"""
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views


router = DefaultRouter()
router.register('articles', views.ArticleViewSet)
router.register('articles-categories', views.ArticleViewSet)

app_name = 'blog'

urlpatterns = [
    path('', include(router.urls)),
]
