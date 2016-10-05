import { Role } from './role.model';

export class User {
    id: number;
    username: string;
    password: string;
    roles: Role[];
    static titles: any = { 
        id: 'ID', 
        username: 'Username', 
        password: 'Password', 
        roles: 'Roles' 
    };
    constructor(obj?: any) {
        if (obj) {
            console.log(obj);
            this.id = +obj.id;
            this.username = obj.username;
            this.password = obj.password;
            this.roles = [];
            for (let role of obj.roles)
                this.roles.push(new Role(role));
        }
    }

    get isAdmin() {
        return this.roles && this.roles.filter((role) => role.name === 'admin').length;
    }

    get isUser() {
        return this.roles && this.roles.filter((role) => role.name === 'user').length;
    }

    get isManager() {
        return this.roles && this.roles.filter((role) => role.name === 'manager').length;
    }
}