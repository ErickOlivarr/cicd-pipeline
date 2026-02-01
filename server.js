const express = require('express');
const app = express();
app.get('/', (req, res) => {
    res.json({
        status: 200,
        message: 'hello world con un cambio'
    });
});

app.get('/health', (req, res) => {
    res.status(200).send('OK');
});
app.listen(8080, () => {
    console.log('server running on port 8080 listo pruebaaa ok final vamos aaaaafrrefref ahora siiii wowwww la prueba yaaaaa ahora con 3 pipelines');
});
