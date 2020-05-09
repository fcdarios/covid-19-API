<div align="center">
    <img style="border-radius: 25px;" src="resources/logo.png">
    <h1 align="center">Proyecto final Covid-19</h1>
    <h4><a href="https://drive.google.com/file/d/1AwKEMz10ISvipGdUNJunljwkdjKT1aXS/view?usp=sharing">Documento del proyecto</a></h4>
</div>

##### Si no funciona al clonar instalen los modulos, tambien para ya no agregar la carpeta de modulos al repositorio

#### Crear un archivo ".env" en la raiz del proyecto con lo siguiente
    
    DB_USER=SuUsario
    DB_PASS=1234
    DB_NAME=covid19
    DB_HOST=localhost
    DB_PORT=5432

### Clonar de git
    git clone https://github.com/fcdarios/covid-19.git

## Instalacion
    npm init
    npm install express --save
    npm install nodemon -D
    npm install morgan
    npm install --save pg pg-hstore
    npm install --save sequelize
    npm install dotenv --save
 ###### No requeridos aun   
    npm install jsonwebtoken (Autentificacion)
    npm install ejs (Opcional para vistas)

### Versiones
- NodeJS v12.16.X
- npm 6.14.X


## Comandos    
    npx nodemon app.js 


#### Guardar credenciales de git
    git config credential.helper store
    git pull