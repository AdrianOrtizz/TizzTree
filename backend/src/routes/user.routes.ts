import { Router } from "express";

import userControllers from "../controllers/userControllers";

const userRouter = Router();

userRouter.get("/logIn", userControllers.logIn);

userRouter.post("/signUp", userControllers.registerUser);

export default userRouter;
