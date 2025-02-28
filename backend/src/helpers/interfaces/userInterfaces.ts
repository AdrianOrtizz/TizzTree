export interface IUserData {
  username: string;
  image?: string;
  name?: string;
  email: string;
  password: string;
}

export interface ILogInData {
  userOrEmail: string;
  password: string;
}

export interface IUserDataToModify {
  userID: string;
  dataToUpdate: {
    newUsername?: string;
    newName?: string;
    newEmail?: string;
    newPassword?: string;
  };
}
