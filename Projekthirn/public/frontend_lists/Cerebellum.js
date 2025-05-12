const express = require('express');
const router = express.Router();

router.get('/parietallappen', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="de">
        <head>
            <meta charset="UTF-8">
            <title>Parietallappen</title>
            <style>
                body {
                    font-family: sans-serif;
                    max-width: 700px;
                    margin: 40px auto;
                    padding: 20px;
                    text-align: center;
                    background-color: #f9f9f9;
                    border-radius: 10px;
                    box-shadow: 0 0 10px rgba(0,0,0,0.1);
                }
                a.button {
                    display: inline-block;
                    margin-top: 20px;
                    padding: 12px 24px;
                    background-color: #007bff;
                    color: white;
                    text-decoration: none;
                    border-radius: 6px;
                    transition: background-color 0.3s;
                }
                a.button:hover {
                    background-color: #0056b3;
                }
            </style>
        </head>
        <body>
            <h1>Parietallappen</h1>
            <p>Der Parietallappen verarbeitet sensorische Reize und spielt eine Rolle bei der räumlichen Orientierung.</p>
            <p><a href="/pdfs/parietallappen" target="_blank">🧠 PDF öffnen</a></p>
            <a class="button" href="/">Zurück zur Hauptseite</a>
        </body>
        </html>
    `);
});

module.exports = router;