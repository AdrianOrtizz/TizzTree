import { Response, Request } from "express";

import userServices from "../services/userServices";

import { ILogInData } from "../helpers/interfaces/userInterfaces";

export default {
  signUp: async (req: Request, res: Response) => {
    const { username, email, password } = req.body;

    try {
      const newUser = await userServices.signUp({
        username,
        email,
        password,
      });

      res.status(201).json(newUser);
    } catch (error: unknown) {
      res
        .status(400)
        .json({ message: (error as any)?.message || "Error desconocido" });
    }
  },

  logIn: async (req: Request, res: Response) => {
    const { userOrEmail, password } = req.query;

    try {
      const user = await userServices.logIn({
        userOrEmail,
        password,
      } as ILogInData);
      res.status(200).json(user);
    } catch (error: unknown) {
      res
        .status(400)
        .json({ message: (error as any)?.message || "Error desconocido" });
    }
  },

  modifyUser: async (req: Request, res: Response) => {
    const { userID, dataToUpdate } = req.body;

    try {
      const modified = await userServices.modifyUser({ userID, dataToUpdate });
      res.status(201).json(modified);
    } catch (error: unknown) {
      res
        .status(400)
        .json({ message: (error as any)?.message || "Error desconocido" });
    }
  },

  deleteUser: async (req: Request, res: Response) => {
    const { id } = req.query;
    try {
      const deleted = await userServices.deleteUser(id as string);
      res.status(200).json(deleted);
    } catch (error: unknown) {
      res
        .status(400)
        .json({ message: (error as any)?.message || "Error desconocido" });
    }
  },

  getAllUsers: async (req: Request, res: Response) => {
    try {
      const users = await userServices.getAllUsers();
      res.status(200).json(users);
    } catch (error: unknown) {
      res
        .status(400)
        .json({ message: (error as any)?.message || "Error desconocido" });
    }
  },
};
