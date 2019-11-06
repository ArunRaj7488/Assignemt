const category=require('../routes/category');
const express=require('express');

module.exports=(app)=>{
    app.use(express.json());
    app.use('/api/v1',category);
}