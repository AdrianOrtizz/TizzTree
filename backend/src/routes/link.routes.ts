import { Router } from "express";

import linkControllers from "../controllers/linkControllers";

const linkRouter = Router();

linkRouter.post("/", linkControllers.addLink);

linkRouter.delete("/", linkControllers.deleteLink);

linkRouter.put("/", linkControllers.modifyLink);

export default linkRouter;
