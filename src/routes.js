import express from 'express';
const {validateRegistrationBody,validateLoginBody,Todovalidate,TodoId, validate} = require('./util/validation');
//import authController from './controllers/auth.controller';

import authManager from './util/auth';
export default function setRoutes(app) {

const router = express.Router();
/*
router.post("/register", validateRegistrationBody(),validate, authController.register);
router.post("/login", validateLoginBody(), validate,authController.login);
*/

app.use('/', router);
}