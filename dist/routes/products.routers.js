"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _products = require("../controllers/products.controllers");

// tiene las URL    
// crear url
// archivo exportado - son rutas
var router = (0, _express.Router)();
router.get("/products", _products.getProducts); // ruta mas simlple de leer

router.post("/products", _products.createNewDatosProducts); //crear

router.get("/products/count", _products.getTotal); //contar

router.get("/products/:id", _products.getProductById); // buscar por ID

router["delete"]("/products/:id", _products.deleteProduct); //borrar

router.put("/products/:id", _products.updateProduct); //actualiar

var _default = router; // exportar las rutas

exports["default"] = _default;