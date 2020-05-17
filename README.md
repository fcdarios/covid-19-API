<div align="center">
    <img style="border-radius: 25px;" src="resources/logo.png">
    <h1 align="center">Proyecto final Covid-19</h1>
    <h4><a href="https://drive.google.com/file/d/1AwKEMz10ISvipGdUNJunljwkdjKT1aXS/view?usp=sharing">Documento del proyecto</a></h4>
</div>

## Borre la carpeta de modulos,por lo cual tienen que instalarlos

### Paso 1 Clonar de git
    git clone https://github.com/fcdarios/covid-19-API.git

### Paso 2 Dentro de la carpeta ejecuten estos comandos
    npm init
    npm i express --save
    npm i nodemon -D
    npm i morgan
    npm i --save pg pg-hstore
    npm i --save sequelize
    npm i dotenv --save
    npm i jsonwebtoken bcryptjs

### Paso 3 Dentro de su package.json modifican la parte de scripts para que este de la siguiente forma

    "scripts": {
    "dev": "nodemon src/app.js"
    },

### Paso 4 Crear un archivo ".env" en la raiz del proyecto con lo siguiente
    DB_USER=SuUsario
    DB_PASS=1234
    DB_NAME=covid19
    DB_HOST=localhost
    DB_PORT=5432
    JWT_SECRET=topicosweb

### Paso 5 Crean la base de datos en postgres

### Paso 6 Correr servidor con: 
    npm run dev


## Comandos git

###### 1 Antes de subir cualquier cambio hacer pull
###### 2 Si no quieren subir todos los cambios especificar los archivos en el git add. Sin el -A

    git pull
    git add -A
    git commit -m "Mensaje de cambios realizados"
    git push origin master



### Versiones
- NodeJS v12.16.X
- npm 6.14.X


#### Guardar credenciales de git
    git config credential.helper store
    git pull
