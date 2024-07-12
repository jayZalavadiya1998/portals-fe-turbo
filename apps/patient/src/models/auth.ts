export interface ILoginRequest {
  username: string;
  password: string;
}

export interface IPatientSignUpRequest extends ILoginRequest {
  roles: string[];
}

export interface IUser {
  first_name: string;
  last_name: string;
}

export interface ILoginResponse {
  token: string;
  user: IUser;
}
export interface ILocalUser extends IUser {
  permission_list: Record<string, string[]>;
  roles: string[];
}
