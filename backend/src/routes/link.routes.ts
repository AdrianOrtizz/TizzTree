import { Router } from "express";

import linkControllers from "../controllers/linkControllers";

const linkRouter = Router();

linkRouter.get("/:username", linkControllers.getUserLinks);

linkRouter.post("/", linkControllers.addLink);

linkRouter.delete("/", linkControllers.deleteLink);

linkRouter.put("/", linkControllers.modifyLink);

export default linkRouter;
