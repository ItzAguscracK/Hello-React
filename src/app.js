require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const morgan = require('morgan');
const db = require('./database/mongoose.js');
    //Conexion a la DB
    db.then(() => console.log('DB Connected'));
    
    //Crear App
    const app = express();
    
    //Build
    app.use(express.static('public'));
    app.get('/', (req, res) => {
      res.sendFile(path.join(__dirname, 'public', 'index.html'));
    });

    app.use(express.json());
    app.use(cors());
    app.use(morgan('dev'));
    app.use('/api', require('./api/routes/note'));
    
    // Error 404 not found
    app.use((req, res, next) => {
      const err = new Error('Not found');
      err.status = 404;
      next(err);
    });

    // Errores distintos a 404
    app.use((err, req, res, next) => {
      res.status(err.status || 500);
      res.json({ error: err.message });
    });

    //Alojamiento web
    app.listen(process.env.PORT, () => {
        console.log("Servidor alojado en el puerto: " + process.env.PORT)
    });




