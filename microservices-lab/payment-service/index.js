const express = require('express');
const app = express();
app.use(express.json());

let payments = [];
let idCounter = 1;

app.get('/', (req, res) => {
    res.json(payments);
});

app.post('/process', (req, res) => {
    const payment = {
        id: idCounter++,
        ...req.body,
        status: "SUCCESS"
    };
    payments.push(payment);
    res.status(201).json(payment);
});

app.get('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const payment = payments.find(p => p.id === id);
    if (!payment) return res.status(404).json({ message: "Not found" });
    res.json(payment);
});

app.listen(8083, () => {
    console.log("Payment Service running on port 8083");
});