"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _config = _interopRequireDefault(require("./config"));

var _products = _interopRequireDefault(require("./routes/products.routers"));

//configurar  app de express
//importarlo
//ejecutarlo 
var app = (0, _express["default"])(); //settings

app.set('port', _config["default"].port); //middlewares antes de las rutas para comunicar al cliente 

app.use(_express["default"].json());
app.use(_express["default"].urlencoded({
  extended: false
})); //formulario html entender parte del cliente

app.use(_products["default"]); // ------> ruta
//exportar objeto

var _default = app;
exports["default"] = _default;