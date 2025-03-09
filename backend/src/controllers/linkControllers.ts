import { Request, Response } from "express";

import linkServices from "../services/linkServices";

export default {
  addLink: async (req: Request, res: Response) => {
    const { title, url, image, userID } = req.body;

    try {
      const newLink = await linkServices.addLink({ title, url, image, userID });
      res.status(201).json(newLink);
    } catch (error: unknown) {
      res
        .status(400)
        .json({ message: (error as any)?.message || "Error desconocido" });
    }
  },

  modifyLink: async (req: Request, res: Response) => {
    const { title, url, image, linkID } = req.body;
    const update = { title, url, image };

    try {
      const linkModified = await linkServices.modifyLink({
        update,
        linkID,
      });
      res.status(200).json(linkModified);
    } catch (error: unknown) {
      res
        .status(400)
        .json({ message: (error as any)?.message || "Error desconocido" });
    }
  },

  deleteLink: async (req: Request, res: Response) => {
    const { userID, linkID } = req.body;

    try {
      const deleted = await linkServices.deleteLink({ userID, linkID });
      res.status(200).json(deleted);
    } catch (error: unknown) {
      res
        .status(400)
        .json({ message: (error as any)?.message || "Error desconocido" });
    }
  },
};
