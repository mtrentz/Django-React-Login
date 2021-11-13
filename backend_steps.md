python -m venv venv

venv\Scripts\activate
ou
source venv/bin/activate

pip install django djangorestframework django-cors-headers djangorestframework-simplejwt

django-admin startproject backend .

python manage.py startapp users

> Adicionar 'rest_framework' e 'users' no installed_apps

> Garantir que permissao é AllowAny

> Adicionar o default auth pro JWT pro rest framework

> No main urls.py colocar os urls do jwt

python manage.py makemigrations && python manage.py migrate

python manage.py runserver

> Postman: POST pra localhost:8000/api/token/ -> conferir que ta pedindo autenticação

> Criar um superuser admin/admin

> Tentar POST com payload {"username": "admin", "password": "admin"}

> Conferir o que o token mostra no jwt.io -> ID = 1

python manage.py shell

> Import user 
from django.contrib.auth.models import User

> Mostrar que o id do user criado é 1, como mostra no jwt.io
User.objects.all()[0]
User.objects.all()[0].id

> Adicionar config do SIMPLE-JWT pra lifetime e tals

> Registrar /users/ no urls do backend

> Criar um serializer para registration

> Criar uma API view POST pra registration

> Criar o URL pra view

> Testar cadastrar usuarios. Tentar com mesmo email, senhas nao matching e 1 que funciona.

> Criar uma nova view dentro do users mesmo como teste. Colocar GET e só pra quem está authenticated. Registrar no urls

> Tentar fazer um test GET sem passar o JWT. Mostrar que pede permissao. Pegar dai um auth token, passar com param com Bearer e o token

> Fazer o registration serializer gerar tokens pro user criado. Retornar ele tanto no serializar qnt nos views.