const express = require('express');

const app = express();
const port = 3333;

app.get('/', (req, res) => res.send('Applicaiton API placeholder'));

// eslint-disable-next-line
app.listen(port, () => console.log(`Application API listening on port ${port}!`));
