"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.queries = void 0;
// exportar las consultas de las BD
var queries = {
  getAllProducts: 'SELECT * FROM Products',
  createNewProduct: "INSERT INTO Products (marca, modelo, numeroserie, ubicacion, usuarioRed, estatus, sucursal, numeroActivoFijo, asignado, costo, ip,  macAddress, SO) VALUES (@marca, @modelo, @numeroserie, @ubicacion, @usuarioRed, @estatus, @sucursal, @numeroActivoFijo, @asignado, @costo, @ip,  @macAddress, @SO)",
  getProductById: "Select * FROM Products Where Id = @Id",
  deleteProduct: "DELETE FROM [alamecenamiento].[dbo].[Products] WHERE Id = @Id",
  getTotal: "SELECT COUNT(*) FROM PRODUCTS",
  updateProduct: "UPDATE Products SET marca = @marca, numeroserie = @numeroserie,usuarioRed = @usuarioRed, estatus = @estatus, sucursal = @sucursal, numeroActivoFijo = @numeroActivoFijo,  asignado = @asignado,costo = @costo , ip = @ip,  macAddress = @macAddress, SO = @SO WHERE Id = @Id"
};
exports.queries = queries;