export interface User {
  fullName: string;
  email: string;
}

export interface UserAuthenticationData {
  email: string;
  password: string;
}

export interface UserRegistrationData extends User {
  password: string;
}

export interface UserServerResponse extends UserRegistrationData {
  id: string;
}

export interface UserAuthData extends User {
  token: string;
}
