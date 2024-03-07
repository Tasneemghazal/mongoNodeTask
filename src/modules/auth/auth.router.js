import { Router } from "express";
import * as authController from "./auth.controller.js";
const router = Router();

router.post('/addUser',authController.SignUp);
router.post('/signIn',authController.SignIn);


export default router;