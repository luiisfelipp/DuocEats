const express = require('express');
const cors = require('cors'); // Importa cors
const connectDB = require('./db');
const User = require('./user'); // Asegúrate de que la ruta sea correcta
const Product = require('./product'); // Importa el modelo de productos

const app = express();

// Conectar a la base de datos
connectDB();

// Middleware para parsear JSON
app.use(express.json());

// Configurar CORS
app.use(cors());

// Rutas para usuarios
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

app.get('/users', async (req, res) => {
  try {
    const users = await User.find(); // Obtener todos los usuarios
    res.status(200).json(users);
  } catch (err) {
    console.error('Error al obtener usuarios:', err); // Agregar logging para depurar
    res.status(500).json({ message: 'Error en el servidor' });
  }
});

app.delete('/users/:id', async (req, res) => {
  try {
    const userId = req.params.id;
    await User.findByIdAndDelete(userId);
    res.status(200).json({ message: 'Usuario eliminado con éxito' });
  } catch (err) {
    console.error('Error al eliminar usuario:', err);
    res.status(500).json({ message: 'Error en el servidor' });
  }
});

// Ruta para actualizar un usuario
app.put('/users/:id', async (req, res) => {
  try {
    const userId = req.params.id;
    const { email, password } = req.body;

    // Verificar que los datos necesarios estén presentes
    if (!email || !password) {
      return res.status(400).json({ message: 'Email y contraseña son requeridos' });
    }

    // Actualizar el usuario
    const updatedUser = await User.findByIdAndUpdate(userId, { email, password }, { new: true });

    // Verificar si el usuario existe
    if (!updatedUser) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }

    res.status(200).json({ message: 'Usuario actualizado con éxito', updatedUser });
  } catch (err) {
    console.error('Error al actualizar usuario:', err);
    res.status(500).json({ message: 'Error en el servidor' });
  }
});

// Rutas para productos
app.post('/products', async (req, res) => {
  try {
    const { name, price, image, page } = req.body;
    const newProduct = new Product({ name, price, image, page });
    await newProduct.save();
    res.status(201).json({ product: newProduct });
  } catch (err) {
    console.error('Error al agregar producto:', err);
    res.status(500).json({ message: 'Error en el servidor' });
  }
});


// Ruta para obtener todos los productos
// En tu archivo server.js
app.get('/products', async (req, res) => {
  try {
    const page = req.query.page;
    const query = page ? { page } : {}; // Filtra por página si se proporciona
    const products = await Product.find(query);
    res.status(200).json(products);
  } catch (err) {
    console.error('Error al obtener productos:', err);
    res.status(500).json({ message: 'Error en el servidor' });
  }
});

app.delete('/products/:id', async (req, res) => {
  try {
    const productId = req.params.id;
    await Product.findByIdAndDelete(productId);
    res.status(200).json({ message: 'Producto eliminado con éxito' });
  } catch (err) {
    console.error('Error al eliminar producto:', err);
    res.status(500).json({ message: 'Error en el servidor' });
  }
});

// Configurar el puerto y escuchar solicitudess
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));
