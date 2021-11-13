from django.urls import path
from .views import registration_view, permission_test_view, logout_view


urlpatterns = [
    path('register/', registration_view, name='register'),
    path('logout/', logout_view, name='logout'),
    path('test/', permission_test_view, name='test'),
]
