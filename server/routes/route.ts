const express = require('express');
const router = express.Router();
const shoppingContrll = require('../controllers/shopping');

const {getAllCategories, addOrderList} = shoppingContrll

router.get('/categories', getAllCategories)

router.post('/save', addOrderList)

module.exports = {
    routes: router
}