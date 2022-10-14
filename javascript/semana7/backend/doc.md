Node JS
es un motor que nos permite ejecutar JS del lado del servidor


```js
#node nombreArchivo.js


#Creando un proyecto
Para poder crear un proyecto en node siempre iniciamos `npm init` este comando nos va a crear el archivo `package.json` este basicamente contiene toda la configuracion

En este archivo podremos instalar dependencias externas, crear comandos, definir entornos.

```json
"scripts": {
    "start":"node index.js"
}```

para usar el comando creado en nuestra consola debemos colocar lo siguiente

```bash
npm start
```
Esto ejecuta el contenido de nuestro archivo index.js