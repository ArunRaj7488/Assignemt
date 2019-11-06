const router = require('express').Router();
const Categories = require('../models/category');

router.get("/", async (req, res)=>{
    const categories = await Categories.find();
    res.send({status: true, totalCount: categories.length, categories})
})
router.get("/:category", async (req, res)=>{
    const category = await Categories.find({name: req.params.category});
    if(!category) return res.status(404).send({status: false, result: `No Category Found`})
    res.send({status: true, category})
})

router.post('/',async(req,res)=>{
    let category = await Categories.findOne({category:req.body.name})
    if(category) return res.status(400).send('Category is already exist');

    category = new Categories(req.body)
    await category.save();
    
    res.send(category);
})

module.exports=router