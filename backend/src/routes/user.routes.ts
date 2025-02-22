import { Router } from "express";

import userControllers from "../controllers/userControllers";

const userRouter = Router();

userRouter.post("/", userControllers.registerUser);

export default userRouter;
