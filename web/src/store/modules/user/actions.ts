export interface UserType {
  name: string;
  email: string;
  imgUrl: string;
  isLogged: boolean;
}

export function loginSuccess(user: UserType) {
  return {
    type: "@user/LOGIN_SUCCESS",
    user,
  };
}
