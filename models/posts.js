const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    username:{type:String,required:true},
    heading:{type:String},
    description:{type:String}
})

module.exports = mongoose.model('Posts',postSchema)

