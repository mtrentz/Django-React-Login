from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from .serializers import RegistrationSerializer
from rest_framework.permissions import IsAuthenticated


@api_view(['POST'])
def registration_view(request):
    if request.method == 'POST':
        serializer = RegistrationSerializer(data=request.data)
        if serializer.is_valid():
            data = serializer.save()
        else:
            data = serializer.errors
        return Response(data)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def permission_test_view(request):
    return Response({'message': 'Permission test'})
