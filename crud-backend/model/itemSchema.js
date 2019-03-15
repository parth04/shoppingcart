const mongoose = require('mongoose');

const itemSchema = mongoose.Schema({
    itemName:{
        type:String,
        require:true,
        unique: true,
        timestamps: true
    },

    itemQuantity:{
        type:Number,
        require:true,
        timestamps: true
    },

    itemBought:{
        type:Boolean,
        require:true,
        timestamps: true
    },

    itemPrice:{
        type:Number,
        require:true,
        timestamps: true
    },
})

const item = module.exports = mongoose.model('itemCollection', itemSchema);