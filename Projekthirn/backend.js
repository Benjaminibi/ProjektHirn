
const express = require('express');
const path = require('path');
const fs = require('fs');
const router = express.Router();
const dataPath = path.join(__dirname, 'data', 'pdfLinks.json');
let pdfLinks = [];
try {
    const rawData = fs.readFileSync(dataPath, 'utf8');
    pdfLinks = JSON.parse(rawData);
} catch (err) {
    console.error('Fehler beim Laden der JSON-Datei:', err);
}
const backend = (app) => {
    app.use('/pdfs', express.static(path.join(__dirname, 'public', 'pdfs')));

    app.get('/:lappen', (req, res) => {
        const requestedLobe = req.params.lappen.toLowerCase();

        const found = pdfLinks.find(entry =>
            entry.title.toLowerCase() === requestedLobe
        );

        if (found) {
            res.json({
                id: found.id,
                name: found.title,
                url: `/pdfs/${path.basename(found.url)}`
            });
        } else {
            res.status(404).json({ error: 'PDF nicht gefunden' });
        }
    });

};

module.exports = backend;
