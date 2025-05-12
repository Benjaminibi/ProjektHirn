const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');

const dataPath = path.join(__dirname, '../data/pdfLinks.json');

router.get('/', (req, res) => {
    fs.readFile(dataPath, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).json({ error: 'Fehler beim Lesen der PDF-Links.' });
        }
        res.json(JSON.parse(data));
    });
});

module.exports = router;
