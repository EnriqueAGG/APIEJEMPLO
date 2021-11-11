"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateProduct = exports.getTotal = exports.getProducts = exports.getProductById = exports.deleteProduct = exports.createNewDatosProducts = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _database = require("../database");

//controllers - las acciones de los usuarios
//exporta el archivo/funcion  res.send('products!!!');
var getProducts = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var pool, result;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return (0, _database.getConnection)();

          case 3:
            pool = _context.sent;
            _context.next = 6;
            return pool.request().query(_database.queries.getAllProducts);

          case 6:
            result = _context.sent;
            // console.log(result);
            res.json(result.recordset);
            _context.next = 14;
            break;

          case 10:
            _context.prev = 10;
            _context.t0 = _context["catch"](0);
            res.status(500); //error del servidor

            res.send(_context.t0.message);

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 10]]);
  }));

  return function getProducts(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}(); //añadir datos post


exports.getProducts = getProducts;

var createNewDatosProducts = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var _req$body, marca, modelo, numeroserie, ubicacion, usuarioRed, estatus, sucursal, numeroActivoFijo, asignado, costo, ip, macAddress, SO, pool;

    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _req$body = req.body, marca = _req$body.marca, modelo = _req$body.modelo, numeroserie = _req$body.numeroserie, ubicacion = _req$body.ubicacion, usuarioRed = _req$body.usuarioRed, estatus = _req$body.estatus, sucursal = _req$body.sucursal, numeroActivoFijo = _req$body.numeroActivoFijo, asignado = _req$body.asignado, costo = _req$body.costo, ip = _req$body.ip, macAddress = _req$body.macAddress, SO = _req$body.SO; //datos que el cliente esta enviando
            //validacion de campos

            if (!(marca == null || modelo == null)) {
              _context2.next = 3;
              break;
            }

            return _context2.abrupt("return", res.status(400).json({
              msg: 'Bad Request. Please Fill all fields'
            }));

          case 3:
            _context2.prev = 3;
            _context2.next = 6;
            return (0, _database.getConnection)();

          case 6:
            pool = _context2.sent;
            _context2.next = 9;
            return pool.request().input('marca', _database.sql.VarChar, marca).input('modelo', _database.sql.VarChar, modelo).input('numeroserie', _database.sql.VarChar, numeroserie).input('ubicacion', _database.sql.Text, ubicacion).input('usuarioRed', _database.sql.VarChar, usuarioRed).input('estatus', _database.sql.VarChar, estatus).input('sucursal', _database.sql.VarChar, sucursal).input('numeroActivoFijo', _database.sql.VarChar, numeroActivoFijo).input('asignado', _database.sql.Text, asignado).input('costo', _database.sql.Decimal, costo).input('ip', _database.sql.VarChar, ip).input('macAddress', _database.sql.VarChar, macAddress).input('SO', _database.sql.VarChar, SO).query(_database.queries.createNewProduct);

          case 9:
            res.json('marca, modelo, numeroserie, ubicacion, usuarioRed, estatus, sucursal, numeroActivoFijo, asignado, costo, ip,  macAddress, SO');
            _context2.next = 16;
            break;

          case 12:
            _context2.prev = 12;
            _context2.t0 = _context2["catch"](3);
            res.status(500);
            res.send(_context2.t0.message);

          case 16:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[3, 12]]);
  }));

  return function createNewDatosProducts(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}(); //producto por id 


exports.createNewDatosProducts = createNewDatosProducts;

var getProductById = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var id, pool, result;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            //funcion de id en rutas :id
            id = req.params.id;
            _context3.next = 3;
            return (0, _database.getConnection)();

          case 3:
            pool = _context3.sent;
            _context3.next = 6;
            return pool.request().input("Id", id).query(_database.queries.getProductById);

          case 6:
            result = _context3.sent;
            res.send(result.recordset[0]);

          case 8:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function getProductById(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}(); //borrar


exports.getProductById = getProductById;

var deleteProduct = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var id, pool, result;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            //funcion de id en rutas :id
            id = req.params.id;
            _context4.next = 3;
            return (0, _database.getConnection)();

          case 3:
            pool = _context4.sent;
            _context4.next = 6;
            return pool.request().input("Id", id).query(_database.queries.deleteProduct);

          case 6:
            result = _context4.sent;
            res.sendStatus(204); //respuesta vacia

          case 8:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function deleteProduct(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}(); //contar


exports.deleteProduct = deleteProduct;

var getTotal = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var pool, result;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return (0, _database.getConnection)();

          case 2:
            pool = _context5.sent;
            _context5.next = 5;
            return pool.request().query(_database.queries.getTotal);

          case 5:
            result = _context5.sent;
            res.json(result.recordset[0]['']);

          case 7:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function getTotal(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}(); //actualizar 


exports.getTotal = getTotal;

var updateProduct = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res) {
    var _req$body2, marca, modelo, numeroserie, ubicacion, usuarioRed, estatus, sucursal, numeroActivoFijo, asignado, costo, ip, macAddress, SO, id, pool;

    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _req$body2 = req.body, marca = _req$body2.marca, modelo = _req$body2.modelo, numeroserie = _req$body2.numeroserie, ubicacion = _req$body2.ubicacion, usuarioRed = _req$body2.usuarioRed, estatus = _req$body2.estatus, sucursal = _req$body2.sucursal, numeroActivoFijo = _req$body2.numeroActivoFijo, asignado = _req$body2.asignado, costo = _req$body2.costo, ip = _req$body2.ip, macAddress = _req$body2.macAddress, SO = _req$body2.SO;
            id = req.params.id;

            if (!(marca == null || modelo == null)) {
              _context6.next = 4;
              break;
            }

            return _context6.abrupt("return", res.status(400).json({
              msg: 'Bad Request. Please Fill all fields'
            }));

          case 4:
            _context6.next = 6;
            return (0, _database.getConnection)();

          case 6:
            pool = _context6.sent;
            _context6.next = 9;
            return pool.request().input('marca', _database.sql.VarChar, marca).input('modelo', _database.sql.VarChar, modelo).input('numeroserie', _database.sql.VarChar, numeroserie).input('ubicacion', _database.sql.Text, ubicacion).input('usuarioRed', _database.sql.VarChar, usuarioRed).input('estatus', _database.sql.VarChar, estatus).input('sucursal', _database.sql.VarChar, sucursal).input('numeroActivoFijo', _database.sql.VarChar, numeroActivoFijo).input('asignado', _database.sql.Text, asignado).input('costo', _database.sql.Decimal, costo).input('ip', _database.sql.VarChar, ip).input('macAddress', _database.sql.VarChar, macAddress).input('SO', _database.sql.VarChar, SO).input('id', _database.sql.Int, id).query(_database.queries.updateProduct);

          case 9:
            res.json({
              marca: marca,
              modelo: modelo,
              numeroserie: numeroserie,
              ubicacion: ubicacion,
              usuarioRed: usuarioRed,
              estatus: estatus,
              sucursal: sucursal,
              numeroActivoFijo: numeroActivoFijo,
              asignado: asignado,
              costo: costo,
              ip: ip,
              macAddress: macAddress,
              SO: SO
            });

          case 10:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));

  return function updateProduct(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();

exports.updateProduct = updateProduct;