// to keep the bot running

const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('yeet');
});

app.listen(3000, () => console.log('yeet'));
