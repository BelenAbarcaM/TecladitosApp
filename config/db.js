const mongoose = require('mongoose');
import dotenv from 'dotenv';
dotenv.config();

const uri = proccess.env.MONGO 


async function conectarBD() {
  try {
    await mongoose.connect(uri);
    console.log('Conectado correctamente a MongoDB local con Mongoose');
  } catch (error) {
    console.log('Error conectando con Mongoose:', error.message);
  }
}

module.exports = conectarBD;