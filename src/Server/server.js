//budget API
const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;


app.use(cors());

const budget = require('./myBudget.json');
console.log('the type of budget is', typeof budget)

console.log(budget);



app.get('/budget', (req, res) => {
    res.json(budget);
})

app.listen(port, () => {
    console.log('API served at http://localhost:${port}');
});


