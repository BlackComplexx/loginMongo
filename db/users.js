require('./db');
const { Schema, model } = require('mongoose');

const Datos2 = new Schema({

    username: {
         type: String
     },
 
     password: {
         type: String
     },
 
     suspend: {
         type: Boolean // Users is banned
     },
   });

   module.exports = model('loginbasic', Datos2);