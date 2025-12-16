var express = require('express');
var app = express();

app.use(express.json());

let products = [];

// GET all products
app.get('/products', (req, res) => {
    res.json(products);
});

// POST add product
app.post('/addproducts', (req, res) => {
    const { id, name, number } = req.body;

    products.push({
        id: Number(id),
        name,
        number: Number(number)
    });

    res.send('data stored');
});

// PUT update product
app.put('/products/:id', (req, res) => {
    
    const { id,name, number } = req.body;

    const product = products.find(p => p.id === Number(req.params.id));

    if (!product) {
        return res.status(404).send('Product not found'); 
    }

    product.name = name;
    product.number = number;

    res.json(product);
});
app.patch('/products/:id', (req, res) => {
    const id = Number(req.params.id);
    const { name, number } = req.body;

    const product = products.find(p => p.id === id);

    if (!product) {
        return res.status(404).send('Product not found');
    }

    // update only if value exists
    if (name !== undefined) {
        product.name = name;
    }
    if (number !== undefined) {
        product.number = Number(number);
    }

    res.json(product);
});
app.delete('/products/:id', (req, res) => {
    const id = Number(req.params.id);

    const index = products.findIndex(p => p.id === id);

    if (index === -1) {
        return res.status(404).send('Product not found');
    }

    products.splice(index, 1);

    res.send('Product deleted');
});


app.listen(3000, () => {
    console.log('server is starting');
});
