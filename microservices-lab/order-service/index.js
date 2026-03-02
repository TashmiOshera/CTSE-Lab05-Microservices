const express = require('express');
const app = express();
app.use(express.json());

let orders = [];
let idCounter = 1;

app.get('/', (req, res) => {
    res.json(orders);
});

app.post('/', (req, res) => {
    const order = {
        id: idCounter++,
        ...req.body,
        status: "PENDING"
    };
    orders.push(order);
    res.status(201).json(order);
});

app.get('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const order = orders.find(o => o.id === id);
    if (!order) return res.status(404).json({ message: "Not found" });
    res.json(order);
});

app.listen(8082, () => {
    console.log("Order Service running on port 8082");
});