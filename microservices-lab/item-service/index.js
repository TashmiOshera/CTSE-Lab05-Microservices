const express = require('express');
const app = express();
app.use(express.json());

let items = ["Book", "Laptop", "Phone"];

app.get('/', (req, res) => {
    res.json(items);
});

app.post('/', (req, res) => {
    const { name } = req.body;
    items.push(name);
    res.status(201).json({ message: "Item added", item: name });
});

app.get('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    if (id < 0 || id >= items.length) {
        return res.status(404).json({ message: "Item not found" });
    }
    res.json(items[id]);
});

app.listen(8081, () => {
    console.log("Item Service running on port 8081");
});