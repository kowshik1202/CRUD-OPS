var express = require('express');
var app = express();
app.get('/',(req,res)=>{
    res.send("<h1><marquee>HELLO,WORLD!❤️</marquee></h1>");
});
var products =[
    {
        id:1,
        name:'kick'
    },
    {
        id:2,
        name:'jee1'
    },
    {
        id:3,
        name:'suri'
    },
    {
        id:4,
        name:'radha'
    }
];
app.get('/products',(req,res)=>{
    res.json(products);
    
})
app.get('/products/:id',(req,res)=>{
    const new1=products.filter(item=>item.id.toString() === req.params.id);
    return res.send(new1);


})
app.post('/addproducts',(req,res) =>{
    
})
app.listen(5000,() =>{
    console.log("SERVER1 IS RUNNING")
});