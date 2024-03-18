const express = require('express');
const registerController = require('../controllers/register');
const verifyController = require('../controllers/verify');
const usersController = require('../controllers/users');
const productController = require('../controllers/myProduct')
const router = express.Router();

router.post('/api/register', registerController.register);
router.post('/api/verify', registerController.verify);
router.post('/api/login', verifyController.login);
router.get('/api/users', usersController.getUserProfile);

router.get('/api/products', productController.getProducts);

module.exports = router;
