"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _compression = _interopRequireDefault(require("compression"));

var _express = _interopRequireDefault(require("express"));

var _helmet = _interopRequireDefault(require("helmet"));

var _xssClean = _interopRequireDefault(require("xss-clean"));

var _cors = _interopRequireDefault(require("cors"));

var _hpp = _interopRequireDefault(require("hpp"));

var _path = _interopRequireDefault(require("path"));

var _expressRateLimit = _interopRequireDefault(require("express-rate-limit"));

var _swaggerUiExpress = _interopRequireDefault(require("swagger-ui-express"));

var swaggerDocument = _interopRequireWildcard(require("../documentation/openapi.json"));

var _morgan = _interopRequireDefault(require("morgan"));

var _expressMongoSanitize = _interopRequireDefault(require("express-mongo-sanitize"));

var _dotenv = _interopRequireDefault(require("dotenv"));

var _errorHandler = require("./util/errorHandler");

var _routes = _interopRequireDefault(require("./routes"));

var _db = require("./config/db");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var app = (0, _express["default"])();

_dotenv["default"].config();

(0, _db.connectDB)(); // enable cors

var corsOption = {
  origin: true,
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
  exposedHeaders: ["x-auth-token"]
};
app.use((0, _cors["default"])(corsOption)); //use swagger-doc

app.use('/api-docs', _swaggerUiExpress["default"].serve, _swaggerUiExpress["default"].setup(swaggerDocument)); // view engine setup

app.set("views", _path["default"].join(__dirname, "views"));
app.set("view engine", "jade");
app.use((0, _morgan["default"])("dev"));
app.use(_express["default"].json());
app.use(_express["default"].urlencoded({
  extended: true
}));
app.use(_express["default"]["static"](_path["default"].join(__dirname, "public")));
app.use((0, _helmet["default"])()); // Set security headers

app.use((0, _xssClean["default"])()); // Prevent xss attacks

app.use((0, _hpp["default"])()); // Prevent http param polution

app.use((0, _compression["default"])());
app.use((0, _expressMongoSanitize["default"])()); // Sanitize request
// Rate limiting

var limiter = (0, _expressRateLimit["default"])({
  windowMs: 10 * 60 * 1000,
  // 10 minuates
  max: 100 // 100 requests

});
app.use(limiter); // routes setup

(0, _routes["default"])(app); // Catch all route

app.use("*", function (req, res) {
  res.status(404).json({
    error: "Not a valid route"
  });
}); // error handler

app.use(_errorHandler.notFound);
app.use(_errorHandler.errorHandler);
var _default = app;
exports["default"] = _default;