from django.shortcuts import render     # noqa
from rest_framework import viewsets
from . models import Article, ArticleCat    # noqa
from . serializers import ArticleCatSerializer, ArticleSerializer   # noqa


class ArticleCat(viewsets.ModelViewSet):
    """View for manage Article Categories APIs"""
    serializer_class = ArticleCatSerializer
    queryset = ArticleCat.objects.all()

    def get_queryset(self):
        """Retrieve articles for anonymous user"""
        return self.queryset.order_by('id')


class ArticleViewSet(viewsets.ModelViewSet):
    """View for manage Article APIs"""
    serializer_class = ArticleSerializer
    queryset = Article.objects.all()

    def get_queryset(self):
        """Retrieve articles for anonymous user."""
        return self.queryset.order_by('-id')
