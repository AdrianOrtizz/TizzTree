import User from "../models/User";
import { IUserData } from "../helpers/interfaces/userInterfaces";

export default {
  registerUser: async (userData: IUserData) => {
    const userExists = await User.findOne({ email: userData.email });

    if (userExists) {
      throw new Error("El usuario ya existe");
    }

    const newUser = await User.create(userData);
    return newUser;
  },
};
