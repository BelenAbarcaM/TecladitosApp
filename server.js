require('dotenv').config();

const express = require('express');
const path = require('path');

const conectarBD = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const tecladoRoutes = require('./routes/entidadRoutes');

const app = express();

// Middleware para parsear JSON en las peticiones (body-parser integrado)
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

async function iniciarServidor() {
  await conectarBD();
}
iniciarServidor();

// Rutas de autenticación: /api/registro, /api/login, /api/verificatoken, /api/usuario-logueado
app.use('/api', authRoutes);

// Rutas del CRUD de teclados: /api/teclados
app.use('/api/teclados', tecladoRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor API escuchando en http://localhost:${PORT}`);
});