const express = require('express');
const app = express();
const fetch = require('node-fetch');
const cors = require('cors');

app.use(cors())

// fetching on the frontend gives a cors issue so made request on backed while using cors()
app.get('/getInfo', (req, res) => {
    // fetches min and max from the response.req.query
    const min = res.req.query.min_price
    const max = res.req.query.max_price
    const url = `https://www.arnoldclark.com/used-cars/search.json?payment_type=monthly&min_price=${min}&max_price=${max}&sort_order=monthly_payment_up`
    fetch(url).then(jsonData => jsonData.json())
        .then(data => res.json(data))
}
)

app.listen(3001, function () {
    console.log(`App is listening on port ${this.address().port}`);
})