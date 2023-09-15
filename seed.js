const mongoose=require('mongoose');
const Product =require("./model/product.js")


mongoose.connect('mongodb://127.0.0.1:27017/shopping-app')
 .then(()=>{console.log("db connected")})
 .catch((err)=>console.log(err));


const products=[
    {
        name:"Iphone 11",
        img:"https://images.unsplash.com/photo-1512054502232-10a0a035d672?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80" ,
        price: 300,
        desc:"Powerful. Beautiful. Durable. Check out the new iPhone 14 Pro, iPhone 14 Pro Max, iPhone"
    },
    {
        name:"Nike shoes",
        img:"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/cbddd67b-444b-4a7c-b458-20643ab89b1b/custom-nike-dunk-high-by-you-shoes.png" ,
        price: 200,
        desc:"A shoe is an item of footwear intended to protect and comfort the human foot. Though the human foot can adapt to varied terrains and climate conditions, it is vulnerable, and shoes provide protection. Form was originally tied to function but over time shoes also became fashion items."
    },
    {
        name:"Rolex watch",
        img:"https://sugermint.com/wp-content/uploads/2022/06/Rolex-watch.jpg" ,
        price: 600,
        desc:"Wide range of selection from Digital, Analog, Sports watches. Top Collections. Buy now! Easy & Fast Delivery. Best Deals. Top Brands. Huge Selection. No Cost EMI Available. Great Offers. Low Prices."
    },
    {
        name:"Drone",
        img:"https://dji-official-fe.djicdn.com/cms/uploads/a656cc79725b55d02616072360469ffd.png" ,
        price: 500,
        desc:"1/1.3-inch CMOS Wide-Angle Camera 1/1.3-inch CMOS Medium-Tele Camera"
    },
    {
        name:" More Drone",
        img:"https://images.unsplash.com/photo-1473968512647-3e447244af8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHJvbmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60" ,
        price: 500,
        desc:"1/1.3-inch CMOS Wide-Angle Camera 1/1.3-inch CMOS Medium-Tele Camera"
    },

]

Product.insertMany(products)
 .then(()=>{
    console.log('Product seeded');
 });
 