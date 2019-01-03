'use strict';

const knex = require('../knex');

let searchTerm = 's';
// knex
//   .select('notes.id', 'title', 'content')
//   .from('notes')
//   .modify(queryBuilder => {
//     if (searchTerm) {
//       queryBuilder.where('title', 'like', `%${searchTerm}%`);
//     }
//   })
//   .orderBy('notes.id')
//   .then(results => {
//     console.log(JSON.stringify(results, null, 2));
//   })
//   .catch(err => {
//     console.error(err);
//   });

// knex ('notes')
//   .insert({
//     title: 'More title', 
//     content: 'More content'
// })
//   .then(console.log);


const searchId = 12;

knex
  .select()
  .from('notes')
  .where('id', `${searchId}`)
  .then(results => {
    console.log(results[0]);
  });