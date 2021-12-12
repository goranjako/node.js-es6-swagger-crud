"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = setRoutes;

var _express = _interopRequireDefault(require("express"));

var _auth = _interopRequireDefault(require("./controllers/auth.controller"));

var _product = _interopRequireDefault(require("./controllers/product.controller"));

var _order = _interopRequireDefault(require("./controllers/order.controller"));

var _auth2 = _interopRequireDefault(require("./util/auth"));

var _require = require('./util/validation'),
    validateRegistrationBody = _require.validateRegistrationBody,
    validateLoginBody = _require.validateLoginBody,
    validateProductBody = _require.validateProductBody,
    validateOrderBody = _require.validateOrderBody,
    validate = _require.validate;

function setRoutes(app) {
  var router = _express["default"].Router(); //authRoute


  router.post("/register", validateRegistrationBody(), validate, _auth["default"].register);
  router.post("/login", validateLoginBody(), validate, _auth["default"].login); //productRoute

  router.route('/product').post(_auth2["default"].verifyToken, validateProductBody(), validate, _product["default"].create);
  router.route('/product').get(_auth2["default"].verifyToken, _product["default"].getAll);
  router.route('/product/:id').get(_auth2["default"].verifyToken, _product["default"].get);
  router.route('/product/:id').put(_auth2["default"].verifyToken, validateProductBody(), validate, _product["default"].put);
  router.route('/product/:id')["delete"](_auth2["default"].verifyToken, _product["default"]["delete"]); //orderRoute

  router.route('/order').post(_auth2["default"].verifyToken, validateOrderBody(), validate, _order["default"].create);
  router.route('/order').get(_auth2["default"].verifyToken, _order["default"].getAll);
  router.route('/order/:id').get(_auth2["default"].verifyToken, _order["default"].get);
  router.route('/order/:id').put(_auth2["default"].verifyToken, validateOrderBody(), validate, _order["default"].put);
  router.route('/order/:id')["delete"](_auth2["default"].verifyToken, _order["default"]["delete"]);
  app.use('/', router);
}