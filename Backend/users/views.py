from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from .serializers import RegistrationSerializer
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework import status


@api_view(['POST'])
def registration_view(request):
    if request.method == 'POST':
        serializer = RegistrationSerializer(data=request.data)
        if serializer.is_valid():
            data = serializer.save()
        else:
            data = serializer.errors
        return Response(data)


@api_view(['POST'])
def logout_view(request):
    try:
        refresh = RefreshToken(request.data['refresh'])
        refresh.blacklist()
        return Response({'detail': 'Logged out'})
    except Exception as e:
        return Response({'error': str(e)}, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def permission_test_view(request):
    return Response({'message': 'Permission test'})
