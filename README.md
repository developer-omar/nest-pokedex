<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

# Ejecutar en desarrollo

1. Clonar el repositorio
2. Ejecutar
```
yarn install
```
3. Tener nest CLI instalado
```
npm i -g @nestjs/cli
```
4. Levantar la base de datos
```
docker compose up -d
```
5. Levantar Nest para pruebas
```
yarn start:dev
```
6. Reconstruir la base de datos con la semilla
```
http://localhost:3000/api/v2/seed
```

7. Detener la base de datos
```
docker compose down
```

## Stack Usado
* MongoDB
* Nest

