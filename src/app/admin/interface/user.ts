export interface User {
    id?:          string;
    email?:       string;
    password?:    string;
    fullName?:    string;
    userName?:    string;
    address?:     string;
    city?:        string;
    phone?:       string;
    country?:     string;
    token?:       string;
    roles?:       Roles[];
    isActive?:    boolean;
}

export enum Roles {
  admin = 'admin',
  superUser = 'super-user',
  user = 'user',
}

