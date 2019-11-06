const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    name:{ type:String,required:true },
    child:[ { type:String } ],
    parent:{ type:String, default: null }
});

module.exports = mongoose.model("Categories",categorySchema);
