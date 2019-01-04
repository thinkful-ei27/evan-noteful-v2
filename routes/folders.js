'use strict';

const express = require('express');
const knex = require('../knex');
const router = express.Router();



router.get('/', (req, res, next) => {
  knex
    .select('id', 'name')
    .from('folders')
    .orderBy('folders.id')
    .then(results => {
      res.json(results);
    })
    .catch(err => next(err));
});

router.get('/:id', (req, res, next) => {
  const id = req.params.id;

  knex
    .select()
    .from('folders')
    .where('id', `${id}`)
    .orderBy('id')
    .then(([results]) => {
      res.json(results);
    })
    .catch(err => {
      next(err);
    });
});

router.put('/:id', (req, res, next) => {
  const id = req.params.id;
  const updateObj = {};

  if (req.body.name) {
    updateObj.name = req.body.name;
  }
  knex 
    .select('folders.id', 'name')
    .where('id', `${id}`)
    .update(updateObj, ['id', 'name'])
    .then(results => {
      if (results) {
        res.json(results);
      } else {
        next();
      }
    })
    .catch(err => {
      next(err);
    });
});

router.post('/', (req, res, next) => {
  const { name } = req.body;
  const newFolder = {name};

  if (!newFolder.name) {
    const err = new Error('Missing `name` in request body');
    err.status = 400;
    return next(err);
  } 

  knex('folders')
    .insert(newFolder, ['id', 'name'])
    .then(results => {
      res.location(`http://${req.headers.host}/folders/${results.id}`)
        .status(201).json(results[0]);
    })
    .catch(err => next(err));
});

router.delete('/:id', (req, res, next) => {
  const id = req.params.id;

  knex('notes')
    .where('id', `${id}`)
    .del()
    .then( () => res.sendStatus(204))
    .catch(err => {
      next(err);
    });

});

module.exports = router;