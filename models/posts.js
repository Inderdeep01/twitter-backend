const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    username:{type:String,required:true},
    heading:{type:String},
    description:{type:String}
})
<<<<<<< HEAD
 
module.exports=mongoose.model('Posts',postSchema)
=======

module.exports = mongoose.model('Posts',postSchema)
>>>>>>> 66131fa60b8657324da2deec82a44a49c49903f5
