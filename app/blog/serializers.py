from rest_framework import serializers
from . models import Article, ArticleCat
from hashid_field.rest import HashidSerializerCharField


class ArticleCatSerializer(serializers.ModelSerializer):
    """Serialzer for Article Categories"""
    id = HashidSerializerCharField(source_field='blog.ArticleCat.id')

    class Meta:
        model = ArticleCat
        fields = (
            'id', 'title', 'image', 'paragraph1', 'paragraph2', 'article_cat',
            'created_at', 'is_shown'
        )


class ArticleSerializer(serializers.ModelSerializer):
    """Serializer for Articles"""
    id = HashidSerializerCharField(source_field='blog.Article.id')
    article_cat = HashidSerializerCharField(source_field='blog.ArticleCat.id')
    class Meta:
        model = Article
        fields = '__all__'
