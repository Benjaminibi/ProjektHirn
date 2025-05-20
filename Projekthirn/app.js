
const express = require('express');
const app = express();
const port = 3000;

const backend = require('./backend');

app.use(express.json());


backend(app);


app.listen(port, '0.0.0.0', () => {
    console.log(`Server läuft unter http://localhost:${port}`);
});

//To-do: Die erste Page etwas ändern, damit Cannot GET / nicht da steht und zusätzlich die Addresse ändern, damit man nicht die IP Adresse und Port des Servers eingeben muss um sich mit dem zu verbinden