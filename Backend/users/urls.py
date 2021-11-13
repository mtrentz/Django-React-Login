from django.urls import path
from .views import registration_view, permission_test_view


urlpatterns = [
    path('register/', registration_view, name='register'),
    path('test/', permission_test_view, name='test'),
]
