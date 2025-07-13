@echo off
cd ..\..\..
call .venv\Scripts\activate.bat
py src\khoj\manage.py collectstatic --noinput
deactivate
cd khoj\interface\web
