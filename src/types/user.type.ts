export interface User {
  name: string;
  email: string;
}

export interface UserRegistrationData extends User {
  password: string;
}
