import connectDB from "../../DB/connection.js";
import router from "./auth/auth.router.js"
import userRouter from "./user/user.router.js";
const initApp =(app,express)=>{
    connectDB();
    app.use(express.json());
    app.use("/auth",router);
    app.use("/user",userRouter);
    app.use("*",(req,res)=>{
        return res.json({message:"page not found"});
    })
}
export default initApp;