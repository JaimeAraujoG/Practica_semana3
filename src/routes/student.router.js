const { getAll, create, getOne, remove, update } = require('../controllers/student.controllers');
const express = require('express');

const routerStundent = express.Router();

routerStundent.route('/')
    .get(getAll)
    .post(create);

routerStundent.route('/:id')
    .get(getOne)
    .delete(remove)
    .put(update);

module.exports = routerStundent;