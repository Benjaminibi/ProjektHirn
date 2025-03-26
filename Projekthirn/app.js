const express = require('express');
const app = express();
const port = 3000;

// Middleware für JSON-Parsing
app.use(express.json());

// Routen einbinden
const usersRouter = require('./routes/users');  // Importiere users.js
app.use('/users', usersRouter);  // Registriere die Route unter /users

// Standard-Route
app.get('/', (req, res) => {
    res.send('Willkommen bei meiner API!');
});

// Swagger-Dokumentation einbinden
const swaggerSetup = require('./swagger');
swaggerSetup(app);

// Server starten
app.listen(port, () => {
    console.log(`Server läuft auf http://localhost:${port}`);
});
