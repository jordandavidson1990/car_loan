const express = require('express');
const app = express();
const fetch = require('node-fetch');
const cors = require('cors');

app.use(cors())

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.get('/getInfo', (req, res) => {
    const url = 'https://www.arnoldclark.com/used-cars/search.json'
    fetch(url).then(jsonData => jsonData.json())
        .then(data => res.json(data))
}
)

app.listen(3001, function () {
    console.log(`App is listening on port ${this.address().port}`);
})