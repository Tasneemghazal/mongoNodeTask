import { Router } from "express";
import * as usersRouter from "./user.controller.js";
import auth from "../../middlewares/auth.js";
const userRouter = Router();

userRouter.get('/getUsers', usersRouter.getUsers);
userRouter.get('/getUser/:id', usersRouter.getUser);
userRouter.patch('/updateUser',auth, usersRouter.updateUser);
userRouter.patch('/updateUser2/:id', usersRouter.updateUser2);
userRouter.delete('/deleteUser',auth, usersRouter.deleteUser);
export default userRouter;