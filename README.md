# conference-app
[![forthebadge made-with-python](http://ForTheBadge.com/images/badges/made-with-python.svg)](https://www.python.org/)

[![Visual Studio Code](https://img.shields.io/badge/--007ACC?logo=visual%20studio%20code&logoColor=ffffff)](https://code.visualstudio.com/)  &
[![official JetBrains project](http://jb.gg/badges/official.svg)](https://www.jetbrains.com/pycharm/)



## Features
- Not described yet

## Techstack
Tech stack using in **conference-app** :
- [Python](https://www.python.org) - Back end main programming language
- [Django](https://www.djangoproject.com) - Python framework
- [DRF](https://www.django-rest-framework.org) - Rest API framework
- [ReactJS](https://reactjs.org) - Front End UI library
- [NextJS](https://nextjs.org) - React framework for production
- [MySQL](https://www.mysql.com) - RDBMS
- [Docker](https://www.docker.com) - Containerization Platform

## Developing conference-app on your windows/mac OS
> Note: Firstly install & run docker desktop on host. Git enabled on terminal is a must

```sh
git https://github.com/imenc/conference-app.git
cd conference-app
docker-compose build
docker-compose up
```
> To shutdown the container, after pressing ctrl + C do the following

```shell
docker-compose down
```

## To do list
- [x] Create docker compose for Apps
- [x] Create docker compose for Db
- [x] Create git hub action configuration
- [x] Change default user name login to email login
- [x] Add /api/user/login end pont

## Deployment Environment
- [http://localhost:8000/admin/](http://localhost:8000/admin/) - Development Server

## Python console command for creating fixtures
```python
./manage.py dumpdata core.Provinces --indent 4 > fixtures/core_provinces.json
./manage.py dumpdata core.Cities --indent 4 > fixtures/core_cities.json  
./manage.py dumpdata core.Districts --indent 4 > fixtures/core_districts.json
./manage.py dumpdata core.Subdistricts --indent 4 > fixtures/core_sub_districts.json
```

## Docker compose command for app migration related
```shell
docker-compose run --rm app sh -c "python manage.py makemigrations"
docker-compose run --rm app sh -c "python manage.py migrate"
```

## Docker compose command for load data fixtures
```shell
docker-compose run --rm app sh -c "python manage.py loaddata fixtures/core_provinces.json --app core.Provinces"
docker-compose run --rm app sh -c "python manage.py loaddata fixtures/core_cities.json --app core.Cities"
docker-compose run --rm app sh -c "python manage.py loaddata fixtures/core_districts.json --app core.Districts"
docker-compose run --rm app sh -c "python manage.py loaddata fixtures/core_sub_districts.json --app core.Subdistricts"
```

## Docker compose command for linting
```shell
docker-compose run --rm app sh -c "flake8"
```