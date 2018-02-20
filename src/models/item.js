const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Item = new Schema({
    nombre: { type: String },
    apellido: { type: String },
    celular: { type: Number },
    correo: { type: String },
    pase: { type: Boolean },
    consulta: { type: Boolean }
}, {
  collection: 'items'
});

module.exports = mongoose.model('Item', Item);
