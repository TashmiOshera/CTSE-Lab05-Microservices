const express = require('express');
const app = express();
app.use(express.json());

let payments = [];
let idCounter = 1;

// GET all payments
app.get('/payments', (req, res) => {
    res.json(payments);
});

// POST process payment
app.post('/payments/process', (req, res) => {
    const payment = {
        id: idCounter++,
        ...req.body,
        status: "SUCCESS"
    };
    payments.push(payment);
    res.status(201).json(payment);
});

// GET payment by ID
app.get('/payments/:id', (req, res) => {
    const payment = payments.find(p => p.id == req.params.id);
    if (payment) {
        res.json(payment);
    } else {
        res.status(404).json({ message: "Payment not found" });
    }
});

app.listen(8083, () => {
    console.log("Payment Service running on port 8083");
});