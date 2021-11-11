// tiene las URL    


import { Router } from 'express' // crear url

import { getProducts, createNewDatosProducts, getProductById, deleteProduct, getTotal, updateProduct, getUsu } from '../controllers/products.controllers' // archivo exportado - son rutas

const router = Router()

router.post("/login", getUsu);//login

router.get("/products", getProducts);// ruta mas simlple de leer

router.post("/products", createNewDatosProducts ); //crear

router.get("/products/count", getTotal ); //contar

router.get("/products/:id", getProductById); // buscar por ID

router.delete("/products/:id", deleteProduct);//borrar

router.put("/products/:id", updateProduct);//actualiar



export default router // exportar las rutas
