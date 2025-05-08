export interface CreateUserPayload {
  username: string;
  email: string;
  password: string;
}

export interface UserCreated {
  username: string;
  email: string;
  password: string;
}

export interface ApiState {
  createUserLoading: boolean;
  createUserError: string | null;
  createUserSuccess: true | null;
  actualUser: UserCreated | null;
  resetApi: () => void;
  createUser: (userData: CreateUserPayload) => Promise<void>;
}
