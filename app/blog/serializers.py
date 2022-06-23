from rest_framework import serializers
from . models import Article, ArticleCat


class ArticleCatSerializer(serializers.ModelSerializer):
    """Serialzer for Article Categories"""
    class Meta:
        model = ArticleCat
        fields = '__all__'


class ArticleSerializer(serializers.ModelSerializer):
    """Serializer for Articles"""
    class Meta:
        model = Article
        fields = '__all__'
