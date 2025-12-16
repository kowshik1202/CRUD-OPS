var express = require('express');
var app = express();

app.get('/', function(req, res) {
    res.send("<h1><marquee>LIST OF PRODUCTS</marquee></h1>");
});

const products = [
    { id: 1, name: 'iphone 14 plus' },
    { id: 2, name: 'iphone 13' },
    { id: 3, name: 'samsung z fold series' }
];

app.get('/products', (req, res) => {
    res.json(products);
});

app.get('/products/:name', (req, res) => {
    
    const newData = products.filter(item => item.name === req.params.name);
    return res.send(newData);
});
const items =[
    {
        id:143,
        name:'I LOVE YOU'

    },
    {
        id:123,
        name:'NUMBERS'
    },
    {
        id:156,
        name:'numbers1'
    }
]
app.get('/items',(req,res)=>{
    res.json(items);
});
app.get('/items/:id',(req,res)=>{
    const newData1 = items.filter(item => item.id.toString() === req.params.id);
    return res.send(newData1);
})

app.listen(5000, () => console.log('server is running'));
