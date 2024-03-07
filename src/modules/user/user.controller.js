import { userModel } from "../../../DB/models/user.model.js"
import jwt from 'jsonwebtoken';
export const getUsers = async(req,res) =>{
    try{
        const users = await userModel.find();
        return res.json({message:"success",users:users});
    }catch(err){
        return res.json({message:"error",err:err});
    }
    
}
export const getUser = async(req,res) =>{
    try{
        const {id}= req.params;
        const user = await userModel.findById(id);
        if(!user){
            return res.json({message:"user not found"});
        }
        return res.json({message:"success",user});
    }catch(err){
        return res.json({message:"error",err:err});
    }
    
}
export const updateUser = async(req,res) =>{ //using updateOne & token
    try{
        const {name}= req.body;
        const user = await userModel.updateOne({_id:req.userId},{name:name});
        if(!user.modifiedCount){
            return res.json({message:"user not found"});
        }
        return res.json({message:"success",user});
    }catch(err){
        return res.json({message:"error",err:err});
    }
    
}
export const updateUser2 = async(req,res) =>{ // using findByIdAndUpdate
    try{
        const {id}= req.params;
        const {name} = req.body;
        const user = await userModel.findByIdAndUpdate(id,name);
        if(!user.modifiedCount){
            return res.json({message:"user not found"});
        }
        return res.json({message:"success",user});
    }catch(err){
        return res.json({message:"error",err:err});
    }
    
}
export const deleteUser = async(req,res) =>{
    try{
        const user = await userModel.deleteOne({_id:req.userId});
        if(!user.deletedCount){
            return res.json({message:" user not found"});
        }
         return res.json({message:"success",user});
    }catch(err){
        return res.json({message:"error",err:err.stack});
    }
    
}


