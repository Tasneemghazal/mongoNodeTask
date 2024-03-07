import { userModel } from '../../../DB/models/user.model.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
export const SignUp = async (req, res) => {
    try {
        const {name,email,password} = req.body;
        const hashPassword = await bcrypt.hash(password,parseInt(process.env.SALTROUND))
        const createUser = await userModel.create({name,email,password:hashPassword});
        return res.json({ message: "success", createUser });
    } catch (error) {
        if(error.code == 11000){
            return res.json({ message: "user already exist"});
        }
        return res.status(500).json({ message: "error", error: error });
    }
};
export const SignIn = async (req, res) => {
    try {
        const {email,password} = req.body;
        const user = await userModel.findOne({email});
        if(!user){
            return res.status(400).json({ message: "invalid email"});
        }
        const check = await bcrypt.compare(password,user.password);
        if(!check){
            return res.json({message:"invalid password"});
        }
        const token = jwt.sign({id:user._id},process.env.LOGINTOKEN,{expiresIn:'1h'})
        return res.json({ message: "success", token });
    } catch (error) {
        return res.status(500).json({ message: "error", error: error });
    }
};
