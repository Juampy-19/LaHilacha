const express = require('express');
const app = express();

//Middlewares.

//Llamando a las rutas.
let homeRoute = require('./routes/homeRouter');
let pizzasRoute = require('./routes/pizzasRouter');
let empanadasRoute = require('./routes/empanadasRouter');

//Rutas APIS.
const apiProductsRouter = require('./routes/api/products');

//Recursos estáticos.
app.use(express.static('public'));

//Template engine.
app.set('view engine', 'ejs');
app.set('views', './views');

//Rutas.
app.use('/', homeRoute);
app.use('/', pizzasRoute);
app.use('/', empanadasRoute);

//APIS.
app.use('/api/products', apiProductsRouter);

app.listen(3001, console.log('Servidor corriendo en el puerto 3001 🚀'));