//configurar  app de express

//importarlo
import express from 'express';
import config from './config';
import cors from 'cors'

import productsRoutes from './routes/products.routers';


//ejecutarlo 
const app = express();
//import './database/connection' -->prueba
app.use(cors())


//settings

app.set('port', config.port);

//middlewares antes de las rutas para comunicar al cliente 
app.use(express.json());
app.use(express.urlencoded({extended: false})); //formulario html entender parte del cliente


app.use(productsRoutes); // ------> ruta

// app.get('/', (req, res)=>{
//     res.render('login.ejs')
// })

//exportar objeto
export default app;

// ------------------------------------------

//establecer motor de plantillas
// app.set('view engine', 'ejs');

//invocar el bcryptjs
// const bcryptjs = require('bcryptjs');

//var. se sesion
// const session = require('express-session');
// app.use(session({
//     secret: 'secret',
//     resave: true,
//     saveUninitialized: true
// }));


