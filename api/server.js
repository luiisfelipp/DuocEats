const express = require('express');
const cors = require('cors'); // Importa cors
const connectDB = require('./db');
const User = require('./user'); // Asegúrate de que la ruta sea correcta

const app = express();

// Conectar a la base de datos
connectDB();

// Middleware para parsear JSON
app.use(express.json());

// Configurar CORS
app.use(cors());

// Ruta para registrar un nuevo usuario
app.post('/register', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Verificar que los datos necesarios estén presentes
    if (!email || !password) {
      return res.status(400).json({ message: 'Email y contraseña son requeridos' });
    }

    // Verificar que el email tenga el formato correcto
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: 'Email no válido' });
    }

    // Crear un nuevo usuario
    const user = new User({ email, password });
    await user.save();

    res.status(201).json({ message: 'Usuario registrado con éxito' });
  } catch (err) {
    console.error('Error al registrar usuario:', err); // Agregar logging para depurar
    res.status(500).json({ message: 'Error en el servidor' });
  }
});

// Ruta para obtener todos los usuarios
app.get('/users', async (req, res) => {
  try {
    const users = await User.find(); // Obtener todos los usuarios
    res.status(200).json(users);
  } catch (err) {
    console.error('Error al obtener usuarios:', err); // Agregar logging para depurar
    res.status(500).json({ message: 'Error en el servidor' });
  }
});

// Configurar el puerto y escuchar solicitudes
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));
