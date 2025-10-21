const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/auth');


const app = express();
const PORT = process.env.PORT || 3000;


app.use(cors({ origin: 'http://localhost:5173' })); // ajustar al puerto del frontend
app.use(express.json());


app.use('/api', authRoutes);


app.get('/', (req, res) => res.json({ msg: 'API funcionando' }));


app.listen(PORT, () => console.log(`Backend escuchando en http://localhost:${PORT}`));