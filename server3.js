var express = require('express');
var app =express();
app.use(express.json())
app.get('/',(req,res)=>{
    res.send("HELLO,WORLD!");
})
var products =[
    {
        id:1,
        name:'kick'
    },
    {
        id:2,
        name:'jee1',
        mobilenumber:987654321
    },
    {
        id:3,
        name:'radha',
        mobilenumber:1234567890
    }
];
app.get('/products/:id',(req,res)=>{
    const newData = products.filter(items=>items.id.toString() === req.params.id)
    res.send(newData);
})
app.get('/pname/:name',(req,res)=>{
    var productname=products.filter(items=>items.name === req.params.name)
    res.send(productname);
})
app.get('/mno/:mobilenumber',(req,res)=>{
    var mnumber = products.filter(item=>item.mobilenumber === Number(req.params.mobilenumber))
    res.send(mnumber);

})
app.get('/products/:id/:name', (req, res) => {
    const list1 = products.filter(
        item =>
            item.id.toString() === req.params.id &&
            item.name === req.params.name
    );

    res.send(list1);
});

app.post('/addproducts',(req,res)=>{
    const {id,name,mobilenumber} =req.body;
    products.push({
        id,
        name,
        mobilenumber

    });
    console.log(id,name,mobilenumber);
    res.send("data stored");
})
app.get('/products',(req,res)=>{
    res.json(products);
})

app.listen(5000,()=>{
    console.log('server isrunning');
})
