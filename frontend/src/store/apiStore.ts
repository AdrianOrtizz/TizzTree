import { create } from "zustand";
import axios, { AxiosResponse } from "axios";

import {
  CreateUserPayload,
  UserCreated,
  ApiState,
} from "../helpers/interfaces/apiStoreInterfaces";

const url = "http://localhost:3000";

const useApiStore = create<ApiState>((set) => ({
  createUserLoading: false,
  createUserError: null,
  createUserSuccess: null,
  actualUser: null,

  resetApi: () => {
    set({
      createUserLoading: false,
      createUserError: null,
      createUserSuccess: null,
    });
  },

  createUser: async (userData: CreateUserPayload) => {
    set({
      createUserLoading: true,
      createUserError: null,
      createUserSuccess: null,
    });

    try {
      const response: AxiosResponse<UserCreated> = await axios.post(
        `${url}/user/signUp`,
        userData
      );

      set({
        createUserLoading: false,
        createUserSuccess: true,
        actualUser: response.data,
      });
    } catch (error: any) {
      set({
        createUserLoading: false,
        createUserError: error.response.data.message,
      });
    }
  },
}));

export default useApiStore;
