"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _app = _interopRequireDefault(require("./app"));

//"dev": "babel-node src/index.js" - ejecutar index
//"dev": "nodemon src/index.js --exec babel-node"
//import './database/connection' -->prueba
//escuchar en el puerto: 
_app["default"].listen(_app["default"].get('port'));

console.log('server on port', _app["default"].get('port'));