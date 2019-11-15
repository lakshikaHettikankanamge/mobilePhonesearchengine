mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
    //_id: mongoose.Schema.Types.ObjectId,
    name:{
        brand:String,
        model:String
    }, 
    //thumbnail:Buffer,
    tot_rating:Number,
    ratings: [
        {
            numberOfStars: Number,
            //user: { 
            //    type: mongoose.Schema.Types.ObjectId, 
            //    ref: 'User'
            //}, 
            created: { 
                type: Date,
                default: Date.now
            }
        }
    ],
    specs:{
        processor:String,
        battery:String,
        RAM:String,
        memory:String
    }, 
    date:{
        type:Date,
        default:Date.now
    }
});

module.exports = Item = mongoose.model('item',ItemSchema);