const express = require('express');

const app = express();

app.get('/', (req, res) => {
    console.log(req);
    res.json('hello');
});

app.listen(3000, () => {
    console.log('server started');
});
