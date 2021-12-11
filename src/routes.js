import express from 'express';
const {validateRegistrationBody,validateLoginBody,validateProductBody, validateOrderBody, validate} = require('./util/validation');
import authController from './controllers/auth.controller';
import ProductController from './controllers/product.controller';
import orderController from './controllers/order.controller';
import authManager from './util/auth';
export default function setRoutes(app) {

const router = express.Router();
//authRoute
router.post("/register", validateRegistrationBody(),validate, authController.register);
router.post("/login", validateLoginBody(), validate,authController.login);
//productRoute
router.route('/product').post(validateProductBody(),validate,ProductController.create);
router.route('/product').get(ProductController.getAll);
router.route('/product/:id').get(ProductController.get);
router.route('/product/:id').put(validateProductBody(),validate,ProductController.put);
router.route('/product/:id').delete(ProductController.delete);

//orderRoute
router.route('/order').post(validateOrderBody(),validate, orderController.create);
router.route('/order').get(orderController.getAll);
router.route('/order/:id').get(orderController.get);
router.route('/order/:id').put(validateOrderBody(),validate,orderController.put);
router.route('/order/:id').delete(orderController.delete);

app.use('/', router);
}