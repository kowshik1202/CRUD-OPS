var express = require('express');
var app = express();
app.get('/',(req,res)=>{
    res.send("HELLO WORLD!");
})
const products =[
    {
        id:1,
        name:'suri'
    },
    {
        id:2,
        name:'radha'
    }
];
app.get('/products',(req,res)=>{
    res.json(products);
})

app.listen(5000,()=>console.log('server is running'));
















