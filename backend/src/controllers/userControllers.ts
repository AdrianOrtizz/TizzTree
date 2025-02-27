import { Response, Request } from "express";

import userServices from "../services/userServices";

import { ILogInData } from "../helpers/interfaces/userInterfaces";

export default {
  registerUser: async (req: Request, res: Response) => {
    const { username, email, password } = req.body;

    try {
      const newUser = await userServices.registerUser({
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
};
