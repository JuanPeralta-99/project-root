const express = require('express');
const router = express.Router();


// Credenciales "hardcoded" de ejemplo
const USER = {
email: 'user@example.com',
password: 'Password123' // en producción usar hash y DB
};


// POST /api/login
router.post('/login', (req, res) => {
const { email, password } = req.body || {};


if (!email || !password) {
return res.status(400).json({ success: false, message: 'Faltan credenciales (email y password).' });
}


if (email === USER.email && password === USER.password) {
// Respuesta de éxito. En app real devolver token JWT.
return res.json({ success: true, message: 'Login exitoso', user: { email } });
}


return res.status(401).json({ success: false, message: 'Credenciales inválidas' });
});


module.exports = router;