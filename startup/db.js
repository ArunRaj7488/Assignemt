const mongoose=require('mongoose');

module.exports = mongoose.connect('mongodb://localhost:27017/categories')
 .then(()=>console.log('Connected to Mongodb'))
 .catch(err=>console.log('Error: ',err));
 