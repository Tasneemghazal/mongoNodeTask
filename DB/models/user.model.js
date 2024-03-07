import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    },
    age:{
        type:Number,
    },
    confirmEmail:{
        type:Boolean,
        default:false,
    },
    gender:{
        type:String,
        enum:['male','female'],
        default:'male',
    }
},{
    timestamps:true,
})
export const userModel = mongoose.model('User',userSchema);