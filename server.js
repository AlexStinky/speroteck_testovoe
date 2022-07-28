require('dotenv').config();

const express = require('express');

const { add, add2 } = require('./routes/add');
const { get } = require('./routes/get');
const { getData } = require('./scripts/parser');

const app = express();

app.set('port', process.env.PORT);
app.use('/add', add);
app.use('/add2', add2);
app.use('/db', get);

app.get('/csv', async () => await getData('https://reqres.in/api/users'));

const port = app.get('port');

app.listen(port, () =>
    console.log(`Server started on port ${port}`)
);