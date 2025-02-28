import User from "../models/User";

import {
  IUserData,
  ILogInData,
  IUserDataToModify,
} from "../helpers/interfaces/userInterfaces";

import { hashPassword, comparePasswords } from "../helpers/hashPassword";

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

    const hashedPassword = await hashPassword(userData.password);

    const newUser = await User.create({
      ...userData,
      password: hashedPassword,
    });
    return newUser;
  },

  logIn: async (userData: ILogInData) => {
    const user =
      (await User.findOne({ email: userData.userOrEmail })) ||
      (await User.findOne({ username: userData.userOrEmail }));

    if (!user) throw new Error("El usuario o email ingresado no es válido");

    const match = await comparePasswords(userData.password, user.password);

    if (match) {
      return user;
    } else {
      throw new Error("La contraseña es incorrecta");
    }
  },

  modifyUser: async (userData: IUserDataToModify) => {
    const user = await User.findById(userData.userID);
    const { dataToUpdate } = userData;

    console.log(userData);
    console.log(user);

    if (!user) throw new Error("No se encontró al usuario");

    if (dataToUpdate.newEmail) user.email = dataToUpdate.newEmail;
    if (dataToUpdate.newUsername) user.username = dataToUpdate.newUsername;
    if (dataToUpdate.newName) user.name = dataToUpdate.newName;
    if (dataToUpdate.newPassword) user.password = dataToUpdate.newPassword;

    await user.save();

    return { message: "Datos actualizados correctamente" };
  },

  deleteUser: async (id: string) => {
    const user = await User.findByIdAndDelete(id);

    if (!user) throw new Error("Usuario no encontrado");

    return { message: "Usuario eliminado correctamente" };
  },
};
