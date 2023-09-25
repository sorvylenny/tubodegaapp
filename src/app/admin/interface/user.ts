export interface User {
    ok?:          boolean;
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
}

export enum Roles {
    admin =     "Admin",
    superUser = "SuperUser",
    user =      "User",
}

