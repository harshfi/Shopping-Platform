const express=require('express');
const router=express.Router();
const Product=require("../model/product")
const Review = require("../model/review");
const {validateReview}=require('../middleware');

router.post('/products/:id/review',validateReview,async(req,res)=>{
   try  
{    const {id}=req.params;
    const {rating,comment}=req.body;
    const product= await Product.findById(id);
    
    const review= new Review({rating,comment});
   
     product.reviews.push(review);
       await review.save();
       await product.save();

res.redirect(`/products/${id}`);
}
catch (e) {
  res.status(500).render('error', { err: e.message });
}
})


module.exports=router;
