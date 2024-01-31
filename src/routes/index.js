const express = require('express');
const routerDegree = require('./degree.router');
const routerStundent = require('./student.router');
const routerCountry = require('./country.router');
const router = express.Router();

// colocar las rutas aquí
router.use('/degrees', routerDegree)
router.use('/students', routerStundent)
router.use('/countries',routerCountry)

module.exports = router;