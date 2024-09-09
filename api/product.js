const mongoose = require('mongoose');

// Definir el esquema del producto
const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  page: {
    type: String, // Asegúrate de definir el tipo correcto para la página
    required: true,
  }
});

// Crear el modelo de producto
const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;
