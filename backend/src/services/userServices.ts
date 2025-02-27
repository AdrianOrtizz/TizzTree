import User from "../models/User";
import { IUserData, ILogInData } from "../helpers/interfaces/userInterfaces";

export default {
  signUp: async (userData: IUserData) => {
    const userEmailExists = await User.findOne({ email: userData.email });
    const userNameExists = await User.findOne({ username: userData.username });

    if (userEmailExists) {
      throw new Error("El email ingresado ya está registrado");
    }

    if (userNameExists) {
      throw new Error("El nombre de usuario ingresado ya está registrado");
    }

    const newUser = await User.create(userData);
    return newUser;
  },

  logIn: async (userData: ILogInData) => {
    const user =
      (await User.findOne({ email: userData.userOrEmail })) ||
      (await User.findOne({ username: userData.userOrEmail }));

    if (!user) throw new Error("El usuario o email ingresado no es válido");

    if (user.password === userData.password) {
      return user;
    } else {
      throw new Error("La contraseña es incorrecta");
    }
  },
};
