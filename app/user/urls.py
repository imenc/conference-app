"""
URL mappings for the user API
"""
from django.urls import path
from . import views

app_name = 'user'

urlpatterns = [
    path('login/', views.MyTokenObtainPairView.as_view(),
         name='token_obtain_pair'),
    path('profile/', views.getUserProfile, name='user-profile')
]
