const express = require('express');
const app = express();
const port = 3000;

// Middleware für JSON-Parsing
app.use(express.json());

// Routen einbinden
const usersRouter = require('./users');  // Importiere users.js
app.use('/users', usersRouter);  // Registriere die Route unter /users

// Standard-Route

app.get('/', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>PDF-Zugriff</title>
        </head>
        <body style="font-family:sans-serif; text-align:center; margin-top:50px;">
            <h1>Willkommen bei meiner API</h1>
            <a href="https://example.com/datei.pdf" target="_blank">
                <button style="font-size: 1.2em; padding: 10px 20px;">PDF öffnen</button>
            </a>
        </body>
        </html>
    `);
});


// Swagger-Dokumentation einbinden
const swaggerSetup = require('./swagger');
swaggerSetup(app);
const pdfsRouter = require('./routes'); // ← das lädt die Route
app.use('/pdfs', pdfsRouter);                // ← das registriert sie unter /pdfs



// Server starten
app.listen(port, () => {
    console.log(`Server läuft auf http://localhost:${port}`);
});
