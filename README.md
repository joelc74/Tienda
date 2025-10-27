<h1>Tienda Informática</h1>

<p>INTRODUCCIÓN:
Este proyecto nace de la necesidad de desarrollar una aplicación para gestionar una tienda informática desde dentro, con la intención 
de controlar adecuadamente la gestión de proveedores y a su vez los pedidos a realizar por parte de los empleados a cargo de cada tienda.</p>
<p>ANALISIS:
Para este ejercicio se ha pensado en guardar el nombre de cada sucursal de tienda, dirección, email y teléfono.
En cuanto a los empleados: nombre, apellidos, tipo_empleado  (Administrador,usuario), email, teléfono,
de los proveedores nos interesa conocer: nombre, cif, dirección, email, teléfono y por ultimo los productos que 
comercializara cada tienda, donde registraremos: nombre, descripción, precio_venta, precio_compra. La motivación
de este proyecto es meramente didáctica, se realiza con el fin de implementar una aplicación en el ámbito logístico.</p>

<h2>PRE-REQUISITOS</h2>
<p> - Node.js 20+: 'https://nodejs.org/en/download'
    - MySQL 8+: 'https://dev.mysql.com/downloads/installer/'
    - Ionic CLI: 'npm install -g @ionic/cli'
    - Git: 'https://git-scm.com/downloads'
...  </p>

<h2> # Instalación:</h2>
   <p> # Clonar el repositorio
    'https://github.com/joelc74/Tienda.git'</p>

<h2> # Configurar el backend</h2>
<p>- 1- Entra en la carpeta /backend,
   - 2- Instala dependencias y arranca el servidor:
    'npm install'
    'npm start'

  El backend se ejecutará en http://localhost:8080 
  El backend arranca con el archivo index.js 'node index.js'</p>

  <h2>Configurar el frontend</h2>
  <p> -1- Entra en la carpeta /frontend
      -2- Instala dependencias:
        'npm install'
      -3- Arranca el servidor de desarrollo:
        'ionic serve'
  La app se abrirá en http://localhost:8100   </p>

  <p> # Ejecutando pruebas básicas 
  
    Comprueba que puedes acceder a los endpoints desde POSTMAN: 
    ENLACE ENDPOINTS POSTMAN: https://documenter.getpostman.com/view/48544346/2sB3QJPWbD 
    
    **GET** http://localhost:8080/api/tienda
    **POST** http://localhost:8080/api/tienda
    **PUT** http://localhost:8080/api/tienda/2
    **DEL** http://localhost:8080/api/tienda/1
    **GET** http://localhost:8080/api/empleado
    **POST** http://localhost:8080/api/empleado
    **PUT** http://localhost:8080/api/empleado/1
    **DEL** http://localhost:8080/api/empleado/1
    **GET** http://localhost:8080/api/proveedor
    **POST** http://localhost:8080/api/proveedor
    **PUT** http://localhost:8080/api/proveedor/1
    **DEL** http://localhost:8080/api/proveedor/1
    **GET** http://localhost:8080/api/producto
    **POST** http://localhost:8080/api/producto
    **PUT** http://localhost:8080/api/producto/1
    **DEL** http://localhost:8080/api/producto/1

    # Colecciones de POSTMAN
    Colecciones públicas con los endpoints del backend:
    * Tienda
    * Empleado
    * Proveedor
    * Producto
    # Todos los endpoints usan la misma API base:
    http://localhost:8080/api
    
    </p>

<p>IMPLEMENTACIÓN:
Para esta tarea he usado las siguientes herramientas:
- Para el desarrollo de la aplicación opté por:
o Node.js: es un entorno de código abierto, multi-plataforma, entorno
de ejecución de JavaScript que ejecuta código JavaScript fuera de un
navegador web.
o Express o Express.js: es un marco de aplicación web para Node.js,
lanzado como software gratuito y de código abierto bajo la Licencia
MIT. Está diseñado para crear aplicaciones web y API. Se le ha llamado el marco de servidor estándar para Node.js.
o NPM: es un administrador de paquetes para el lenguaje de programación JavaScript. Es el administrador de paquetes predeterminado
para el entorno de tiempo de ejecución de JavaScript Node.js.
Consiste en un cliente (línea de comando), también llamado npm, y
una base de datos en línea de paquetes públicos y privados pagos,
llamado registro npm.
o MySQL: es un sistema de gestión de bases de datos relacionales de
código abierto.
o Sequelize: es un ORM para Nodejs que te permitirá agilizar bastante
tus desarrollos que incluyan bases de datos relacionales como
MySQL.
o Postman: es un entorno de desarrollo de APIs que nos permite diseñar, probar y monitorizar servicios REST.
Ionic: Framework de conjunto de herramientas para crear aplicaciones nativas de iOS y Android, así como aplicaciones web progresivas
para dispositivos móviles, usando bibliotecas web, marcos y lenguajes familiares.
o Visual Studio Code: Como IDE de desarrollo, dada su versatilidad.
Elegí dentro del programa usar el (MVC) MODELO, VISTA Y CONTROLADOR
para el manejo de las clases.</p>



