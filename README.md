# Bienvenido a Cat Rescue mobile 👋

La app mobile para adopcion de gatitos y tips de cuidados.

## Inicio

Luego de clonar el repositorio:

1. Instalar dependencias

Asegure de tener el cmd o powershell en la carpeta del proyecto y ejecute para instalar las dependencias de la app

```bash
npm install
```

2. Iniciar la app de manera local

La app esta construido con React Native y Expo, con lenguaje TypeScript XML (tsx).
Expo es un framework que me permite ejecutar y probar la aplicación localmente. rápida y sencilla sin necesidad de hacer un build de un APK (ejecutable) sin ninguna configuración compleja.

Para poder probar la app desde un telefono de manera local, tenemos que tener instalado Expo Go en el dispositivo.

```bash
 npx expo start
```

Al ejecutar este comando, la consola nos devolverá un código QR, el cual debemos leer con la aplicación de Expo Go

```bash
 expo start --andriod
```

Esta es una alternativa a la anterior. Si el lector de QR no nos funciona, podemos conectar el telefono por usb a la computadora, ejecutar el comando por consola.

Para mayor información para otros comandos ver el package.json

## Pantallas

La app contiene:

-Splash screen. Es la pantalla de loading que vemos cuando se carga la aplicación.

-Index. Pantalla de inicio, la cual nos pregunta si queremos iniciar sesión o crear una cuenta.

-Crear Cuenta. Esta pantalla nos permite crearnos una cuenta.

-Iniciar Sesión. En esta pantalla podemos iniciar sesión con el usuario creado en crear cuenta. También tenemos un boton para redirigirnos al registro si no lo hicimos antes.

-Home. Pantalla dashboard de la cuenta registrada. Por el momento solo muestra un saludo, el cual es dinámico (saluda por nombre al usuario).

## Funcionalidades

-Route. Todas las pantallas estan routeadas para poder navegar entre ellas según la lógica que corresponda a cada una. Usamos el metodo de useRouter de Expo ya que native no tiene incorporado un sistema de paginacion como Next.js

-UserContext. Es una funcionalidad global creada con un Hook de React useContext. Combinada con el Hook useState, permite que la app pueda crear usuarios, validar el inicio de sesion. En caso de que el usuario ya exista, devuelve un error.

-handleLogin y handleRegister son dos funcionalidades locales que gracias al userContext me permiten iniciar sesion o crear un usuario. Las funciones verifican que el usuario exista y que las credenciales coincidan.

-handleLogout. Nos permite cerrar sesión y nos redirige al index.
