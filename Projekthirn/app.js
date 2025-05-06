const express = require('express');
const app = express();
const port = 3000;


app.use(express.json());
app.use(express.static('public'));


const usersRouter = require('./users');
app.use('/users', usersRouter);



app.get('/', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="de">
        <head>
            <title>PDF-Zugriff</title>
        </head>
        <body style="font-family:sans-serif; text-align:center; margin-top:50px;">
            <h1>Willkommen bei meiner API</h1>
         
<img src="/frontend_asset/Gehirn.png" alt="Gehirn.png" usemap="#image-map">

<map name="image-map">
    <area target="_blank" alt="Occipital_Lobe" title="Occipital_Lobe" href="https://example.com/datei.pdf" coords="536,132,599,234,605,287,585,330,553,334,529,328,509,325,492,323,473,325,478,251,507,180,515,166,522,154,526,138" shape="poly">
    <area target="_blank" alt="Temporal_Lobe" title="Temporal_Lobe" href="https://example.com/datei.pdf" coords="360,198,477,247,470,323,350,364,310,363,278,383,258,396,231,404,210,403,193,396,156,369,150,341,169,302,197,273,283,237,307,225,321,220" shape="poly">
    <area target="_blank" alt="Cerebellum" title="Cerebellum" href="https://example.com/datei.pdf" coords="350,364,488,325,551,335,553,378,535,407,514,432,493,449,472,459,433,463,404,460,388,456,363,427,348,401" shape="poly">
    <area target="_blank" alt="Parietal_Lobe" title="Parietal_Lobe" href="backend_asset/Parietallappen.pdf" coords="357,35,432,46,492,83,533,124,509,170,492,210,477,246,367,197,317,217,271,241,286,159,305,110,331,78" shape="poly">
    <area target="_blank" alt="Frontal_Lobe" title="Frontal_Lobe" href="https://example.com/datei.pdf" coords="327,36,244,44,188,56,148,73,103,93,65,119,44,144,27,169,19,196,17,216,24,245,28,262,40,290,63,315,91,333,124,342,146,339,179,286,216,263,251,244,273,242,282,153,338,60,352,37" shape="poly">
    <area target="_blank" alt="Brain_stem" title="Brain_stem" href="https://example.com/datei.pdf" coords="318,414,412,504,440,499,345,404,341,368,308,369,295,375,289,386,299,405" shape="poly">
</map>
        </body>
        </html>
    `);
});


const swaggerSetup = require('./swagger');
swaggerSetup(app);
const pdfsRouter = require('./routes');
app.use('/pdfs', pdfsRouter);



// Server starten
app.listen(port, () => {
    console.log(`Server läuft auf http://localhost:${port}`);
});
