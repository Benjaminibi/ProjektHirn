const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');

const dataPath = path.join(__dirname, '../data/pdfLinks.json');

/**
 * @swagger
 * /pdfs:
 *   get:
 *     summary: Liste von PDF-Links abrufen
 *     description: Gibt eine Liste von PDF-Dateien zurück, die auf dem Server gespeichert sind.
 *     responses:
 *       200:
 *         description: Erfolgreich abgerufen
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   title:
 *                     type: string
 *                   url:
 *                     type: string
 */
router.get('/', (req, res) => {
    fs.readFile(dataPath, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).json({ error: 'Fehler beim Lesen der PDF-Links.' });
        }
        res.json(JSON.parse(data));
    });
});

module.exports = router;
