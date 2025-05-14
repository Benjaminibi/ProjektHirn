
const express = require('express');
const app = express();
const port = 3000;

const backend = require('./backend');

app.use(express.json());


backend(app);


app.listen(port, '0.0.0.0', () => {
    console.log(`Server läuft unter http://localhost:${port}`);
});

// ich will es aber so machen, das wenn man den Code sieht, dass man einfach darauf kommt, dass ich es war, indem man Methoden verwendet, die wir regelmäßig im Unterricht verwendeten oder so.
