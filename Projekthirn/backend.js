const express = require('express');
const path = require('path');
const fs = require('fs');
const dataPath = path.join(__dirname, 'data', 'pdfLinks.json');


let pdfLinks = [];
    try {
        const rawData = fs.readFileSync(dataPath, 'utf8');
        pdfLinks = JSON.parse(rawData);
    } catch (err) {
        console.error('Fehler beim Laden der JSON-Datei:', err);
}

const backend = (app) => {
        //statische Verwendung der PDFs
    app.use('/backend_asset', express.static(path.join(__dirname, 'public', 'backend_asset')));

        // Dies ist die dynamische Routing Methode, die verwendet wird, wobei "lappen" der Platzhalter ist
    app.get('/:lappen', (req, res) => {
            //hier wird der eingegebene Pfad angenommen und automatisch auf kleingeschrieben gesetzt, damit keine Fehler durch groß- und Kleinschreibung entstehen
        const requestedLobe = req.params.lappen.toLowerCase();
            //Jetzt wird ein Platzhalter "found" mittels Methode .find() von der PDFLinks.json Datei gefüllt und überprüft, ob .title mit dem eingegeben Titel übereinstimmt.
        const found = pdfLinks.find(entry =>
            entry.title.toLowerCase() === requestedLobe
        );

        if (!found) {
            return res.status(404).json({ error: 'PDF nicht gefunden' });
        }
            //Dies ist dann die Ausgabe, id, Titel und URL wird aanggezeiigt je nach dem eingegebenen Titel
        res.json({
            id: found.id,
            name: found.title,
            url: `/backend_asset/${path.basename(found.url)}`
        });
    });
};

module.exports = backend;
