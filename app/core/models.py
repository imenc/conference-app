from django.conf import settings    # noqa
from django.db import models
from django.contrib.auth.models import (
    AbstractBaseUser,
    BaseUserManager,
    PermissionsMixin,
)


class UserManager(BaseUserManager):
    """Manager for users."""

    def create_user(self, email, password=None, **extra_fields):
        """Create, save and return a new user."""
        if not email:
            raise ValueError('User must have an email address.')
        user = self.model(email=self.normalize_email(email), **extra_fields)
        user.set_password(password)
        user.save(using=self._db)

        return user

    def create_superuser(self, email, password):
        """Create and return a new superuser."""
        user = self.create_user(email, password)
        user.is_staff = True
        user.is_superuser = True
        user.save(using=self._db)

        return user


class User(AbstractBaseUser, PermissionsMixin):
    """User in the system."""
    email = models.EmailField(max_length=255, unique=True)
    name = models.CharField(max_length=255)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)

    objects = UserManager()

    USERNAME_FIELD = 'email'


class Provinces(models.Model):
    prov_id = models.AutoField(primary_key=True)
    prov_name = models.CharField(max_length=255, blank=True, null=True)
    locationid = models.IntegerField(blank=True, null=True)
    status = models.IntegerField(blank=True, null=True)

    class Meta:
        managed = True
        db_table = 'provinces'
        verbose_name = 'Province'
        verbose_name_plural = 'Provinces'

    def __str__(self):
        return self.prov_name


class Cities(models.Model):
    city_id = models.AutoField(primary_key=True)
    city_name = models.CharField(max_length=255, blank=True, null=True)
    prov_id = models.ForeignKey(Provinces, to_field='prov_id',
                                db_column='prov_id', on_delete=models.CASCADE,
                                blank=True, null=True)

    class Meta:
        managed = True
        db_table = 'cities'
        verbose_name = 'City'
        verbose_name_plural = 'Cities'

    def __str__(self):
        return self.city_name


class Districts(models.Model):
    dis_id = models.AutoField(primary_key=True)
    dis_name = models.CharField(max_length=255, blank=True, null=True)
    city_id = models.ForeignKey(Cities, to_field='city_id',
                                db_column='city_id', on_delete=models.CASCADE,
                                blank=True, null=True)

    class Meta:
        managed = True
        db_table = 'districts'
        verbose_name = 'District'
        verbose_name_plural = "Districts"

    def __str__(self):
        return self.dis_name


class Subdistricts(models.Model):
    subdis_id = models.AutoField(primary_key=True)
    subdis_name = models.CharField(max_length=255, blank=True, null=True)
    dis_id = models.ForeignKey(Districts, to_field='dis_id',
                               db_column='dis_id', on_delete=models.CASCADE,
                               blank=True, null=True)

    class Meta:
        managed = True
        db_table = 'subdistricts'
        verbose_name = 'Sub District'
        verbose_name_plural = "Sub Districts"

    def __str__(self):
        return self.subdis_name
