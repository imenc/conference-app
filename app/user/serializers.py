from rest_framework import serializers
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth import get_user_model


class UserSerializer(serializers.ModelSerializer):
    id = serializers.SerializerMethodField(
        method_name='get_id', read_only=True)
    email = serializers.SerializerMethodField(
        method_name='get_email', read_only=True)
    name = serializers.SerializerMethodField(
        method_name='get_name', read_only=True)

    class Meta:
        model = get_user_model
        fields = ['id', 'email', 'name', 'is_superuser',
                  'is_active', 'is_staff']

    def get_id(self, obj):
        return obj.id

    def get_email(self, obj):
        return obj.email

    def get_name(self, obj):
        return obj.name


class UserSerializerWithToken(UserSerializer, TokenObtainPairSerializer):
    groups = serializers.SerializerMethodField(method_name='get_groups',
                                               read_only=True)

    class Meta:
        model = get_user_model()
        fields = ['id', 'email', 'name', 'is_superuser',
                  'is_active', 'is_staff', 'groups']

    def get_token(self, obj):
        token = RefreshToken.for_user(obj)
        return str(token.access_token)

    def get_groups(self, user):
        qs_role_names = user.groups.values('id', 'name')
        role_name = list(qs_role_names)
        return role_name
