
const express = require('express');
const app = express();
const port = 3000;

const backend = require('./backend');
const cors = require('cors');
app.use(cors());


app.use(express.json());


backend(app);


app.listen(port, '0.0.0.0', () => {
    console.log(`Server läuft unter http://localhost:${port}`);
});

