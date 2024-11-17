
const { name } = require("ejs");
const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(express.static("node_modules"));


const data = [
    {id: 1, name: "iphone 10", price: 850, isActive:true,isHome:true, imageUrl: "1.jpeg"},
    {id: 2, name: "iphone 11", price: 880, isActive:false,isHome:true, imageUrl: "2.jpg"},
    {id: 3, name: "iphone 12", price: 910, isActive:true, isHome:false,imageUrl: "3.jpg"},
    {id: 4, name: "iphone 13", price: 950, isActive:true,isHome:false, imageUrl: "4.jpg"},
    {id: 5, name: "iphone 14", price: 980, isActive:false,isHome:true, imageUrl: "5.jpeg"},
    {id: 6, name: "iphone 15", price: 1010, isActive:true,isHome:true, imageUrl: "6.jpeg"},
];

//routes
app.use("/products/:id", function(req, res) {
    const urun = data.find(u => u.id == req.params.id);
    res.render("product-details", urun);
});

app.use("/products", function(req, res) {
    res.render("products", {
        urunler: data
    });
});

app.use("/", function(req, res) {
    res.render("index",{
        urunler: data
    });
});



app.listen(3000, () => {
    console.log("listening on port 3000");
})