export class user {
    public id: number;
    public name: string;
    public email: string;
    public password: string;
    public user: boolean;

    constructor(id, inputName, inputEmail, inputPassword, inputUser){
        this.id = id;
        this.name = inputName;
        this.email = inputEmail;
        this.password = inputPassword;
        this.user = inputUser;
    }
}

export interface UserInterface {
    id?: number;
    name: string;
    email: string;
    password: string;
    user?: boolean;
}
