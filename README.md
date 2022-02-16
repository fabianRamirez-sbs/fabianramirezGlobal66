## Build Setup

# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# Tecnologías
"vue": "^2.5.2",
"vuex": "^3.6.2",
"vue-router": "^3.0.1",
"axios": "^0.21.1",
"vuetify": "^2.4.5",

# Descripción
El manejo de la información a si como su obtención se realizó en un módulo (pokeapiStore.js) del store. Donde hay métodos como:

    - GET_pokemons(): obtiene un arregló de elementos Pokemos.
    - GET_pokemon(): obtienes la descripción de un Pokemon.
    - POST_ratings(): inserta un nuevo Pokemon a un arreglo de favoritos.


La aplicación está segmentada por vistas y módulos generales.
La aplicación está generada a partir del framework progresivo Vuetify. Las transiciones y animaciones están generadas en css.

Se implementaron características de SM6 + y validaciones de eslint.


