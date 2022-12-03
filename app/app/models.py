from __future__ import unicode_literals
from django.db import models
from hashid_field import HashidAutoField


class AbstractModel(models.Model):
    id = HashidAutoField(primary_key=True)
    created_by = models.ForeignKey('core.User', on_delete=models.PROTECT,
                                   related_name='%(class)s_creator', null=True)
    created_at = models.DateTimeField(auto_now_add=True, null=True)
    updated_by = models.ForeignKey('core.User', on_delete=models.PROTECT,
                                   related_name='%(class)s_updater', null=True)
    updated_at = models.DateTimeField(auto_now=True, null=True)

    class Meta:
        abstract = True

    @property
    def hashid(self):
        return self.id