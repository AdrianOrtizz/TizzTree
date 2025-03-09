import { Router } from "express";

import userRouter from "./user.routes";
import linkRouter from "./link.routes";

const router = Router();

router.use("/user", userRouter);

router.use("/link", linkRouter);

export default router;
