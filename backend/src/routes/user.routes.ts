import { Router } from "express";

import userControllers from "../controllers/userControllers";

const userRouter = Router();

userRouter.get("/logIn", userControllers.logIn);
userRouter.get("/", userControllers.getAllUsers);

userRouter.post("/signUp", userControllers.signUp);

userRouter.put("/modify", userControllers.modifyUser);

userRouter.delete("/deleted/:id", userControllers.deleteUser);

export default userRouter;
