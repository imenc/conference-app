from django.db import models
from django.contrib.auth import get_user_model


class ArticleCat(models.Model):
    """Article Categories Object"""
    title = models.CharField(max_length=200)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        managed = True
        db_table = 'article_cat'
        verbose_name = 'Article Category'
        verbose_name_plural = 'Article Categories'

    def __str__(self):
        return self.title


class Article(models.Model):
    """Article Object"""
    user = models.ForeignKey(get_user_model(), on_delete=models.CASCADE,
                             null=True, blank=True)
    title = models.CharField(max_length=200, blank=False, null=False)
    image = models.ImageField(null=True, blank=True,
                              default='/placeholder.png')
    paragraph1 = models.TextField(blank=True, null=True,
                                  verbose_name='Paragraph 1')
    paragraph2 = models.TextField(blank=True, null=True,
                                  verbose_name='Paragraph 2')
    article_cat = models.ForeignKey(ArticleCat, on_delete=models.CASCADE,
                                    null=True, blank=True,
                                    verbose_name='Article Categories')
    created_at = models.DateTimeField(auto_now_add=True)
    is_shown = models.BooleanField(default=True)

    class Meta:
        managed = True
        db_table = 'article'
        verbose_name = 'Article'
        verbose_name_plural = 'Articles'

    def __str__(self):
        return self.title
