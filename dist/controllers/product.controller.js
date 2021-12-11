"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _product = _interopRequireDefault(require("../services/product.sevice"));

var ProductController = /*#__PURE__*/function () {
  function ProductController() {
    (0, _classCallCheck2["default"])(this, ProductController);
  }

  (0, _createClass2["default"])(ProductController, [{
    key: "getAll",
    value: // Get all
    function () {
      var _getAll = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
        var docs;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _product["default"].getAll();

              case 3:
                docs = _context.sent;
                return _context.abrupt("return", res.status(200).json(docs));

              case 7:
                _context.prev = 7;
                _context.t0 = _context["catch"](0);
                return _context.abrupt("return", res.status(400).json(_context.t0.message));

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 7]]);
      }));

      function getAll(_x, _x2) {
        return _getAll.apply(this, arguments);
      }

      return getAll;
    }() // Insert

  }, {
    key: "create",
    value: function () {
      var _create = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res, next) {
        var product, obj;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                product = {
                  code: req.body.code,
                  name: req.body.name,
                  description: req.body.description,
                  price: req.body.price,
                  currency: req.body.currency,
                  quantity: req.body.quantity,
                  isfreeshipping: req.body.isfreeshipping
                };
                _context2.next = 4;
                return _product["default"].addProduct(product);

              case 4:
                obj = _context2.sent;
                return _context2.abrupt("return", res.status(200).json({
                  success: true,
                  message: " Product is Created successfully."
                }));

              case 8:
                _context2.prev = 8;
                _context2.t0 = _context2["catch"](0);
                res.status(422).json(_context2.t0.message);

              case 11:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 8]]);
      }));

      function create(_x3, _x4, _x5) {
        return _create.apply(this, arguments);
      }

      return create;
    }() // Get by id

  }, {
    key: "get",
    value: function () {
      var _get = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
        var obj;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _context3.next = 3;
                return _product["default"].getById({
                  _id: req.params.id
                });

              case 3:
                obj = _context3.sent;

                if (!obj) {
                  _context3.next = 8;
                  break;
                }

                return _context3.abrupt("return", res.status(200).json(obj));

              case 8:
                return _context3.abrupt("return", res.status(400).json({
                  error: "Product not found"
                }));

              case 9:
                _context3.next = 14;
                break;

              case 11:
                _context3.prev = 11;
                _context3.t0 = _context3["catch"](0);
                return _context3.abrupt("return", res.status(400).json({
                  error: "Product not found"
                }));

              case 14:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[0, 11]]);
      }));

      function get(_x6, _x7) {
        return _get.apply(this, arguments);
      }

      return get;
    }() // Update by id

  }, {
    key: "put",
    value: function () {
      var _put = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
        var data, id, product;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                data = {
                  code: req.body.code,
                  name: req.body.name,
                  description: req.body.description,
                  price: req.body.price,
                  currency: req.body.currency,
                  quantity: req.body.quantity,
                  isfreeshipping: req.body.isfreeshipping
                };
                id = req.params.id;
                _context4.prev = 2;
                _context4.next = 5;
                return _product["default"].update(id, data);

              case 5:
                product = _context4.sent;
                return _context4.abrupt("return", res.status(200).json({
                  success: true,
                  message: " Product is Updated successfully."
                }));

              case 9:
                _context4.prev = 9;
                _context4.t0 = _context4["catch"](2);
                return _context4.abrupt("return", res.status(400).json({
                  success: false,
                  message: "Product does not exist!"
                }));

              case 12:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, null, [[2, 9]]);
      }));

      function put(_x8, _x9) {
        return _put.apply(this, arguments);
      }

      return put;
    }() // Delete by id

  }, {
    key: "delete",
    value: function () {
      var _delete2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.prev = 0;
                _context5.next = 3;
                return _product["default"]["delete"]({
                  _id: req.params.id
                });

              case 3:
                return _context5.abrupt("return", res.json({
                  success: true,
                  message: " Product is Deleted successfully."
                }));

              case 6:
                _context5.prev = 6;
                _context5.t0 = _context5["catch"](0);
                return _context5.abrupt("return", res.status(400).json({
                  success: false,
                  message: "Product does not exist!"
                }));

              case 9:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, null, [[0, 6]]);
      }));

      function _delete(_x10, _x11) {
        return _delete2.apply(this, arguments);
      }

      return _delete;
    }()
  }]);
  return ProductController;
}();

var _default = new ProductController();

exports["default"] = _default;