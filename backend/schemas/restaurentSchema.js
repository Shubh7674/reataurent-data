var mongoose = require('mongoose');


var restaurentSchema = new mongoose.Schema(
    {
        _id:Schema.Types.ObjectId,
        address:
        {
            building:Number,
            coord:{
                type:[Number],
                default:[-73.98241999999999,40.579505]
            },
            street:String,
            zipcode:String
        },
        borough:String,
        cuisine:String,
        grades:[
            {
                date:{
                    type:Date,
                    default:new Date().toISOString()
                },
                grade:{
                type:String,
                default:'A'
            },
                score:{
                    type:Number,
                    default:5
                }
            }
        ],
            name: String,
            restaurant_id:{type:Number,default:48809003}
    });

var Model = mongoose.model('Model', restaurentSchema);