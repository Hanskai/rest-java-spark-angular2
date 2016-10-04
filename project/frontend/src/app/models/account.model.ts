import { Role } from './role.model';

export class Account {
    id: number;
    username: string;
    password: string;
    roles: Role[];
    constructor(obj?: any) {
        if (obj) {
            this.id = +obj.id;
            this.username = obj.username;
            this.password = obj.password;
            this.roles = [];
            for (let role of obj.roles)
                this.roles.push(new Role(role));
        }
    }
}