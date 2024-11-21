# IFTS 16 MOBILE

Instrucciones de la aplicacion. Es una aplicacion para recibir tips de cuidados y adopcion de gatitos.

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
    npx expo start
   ```

Requiere tener instalado EXPO en el celular donde se quiere probar. Hay que scannear un codigo QR, o bien enchufar via USB el celular a la computadora, y ejecutar:

npx expo start --android

## Estructura del proyecto

1er pantalla- Splash screen con el LOGO del proyecto.

2da pantalla- Pantalla de bienvenida con dos botones: login y registrar.

3er pantalla- Login

4ta pantalla- Registro

5ta pantalla- HOME

## Funcionalidades

El proyecto hace uso de Context de React, por lo que se puede crear un usuario y contraseña real, el cual se puede luego probar en la pantalla de login.
Nota: No trabaja con base de datos, pero si es un estado temporal gracias al hook de React.

Validacion1: Si se crea exitosamente un usuario, el sistema da un alerta de usuario creado exitosamente

Validacion2: Si el login no es exitoso, el sistema dara un alerta

Pagina Dinamica: La pantalla HOME muestra el nombre del usuario con el que se hizo login de manera dinamica.

## Lenguaje

Se trabajo con typescript, por lo que todos los componentes son de extension .tsx


