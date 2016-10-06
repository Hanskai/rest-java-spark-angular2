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
            this.id = +obj.id;
            this.username = obj.username;
            this.password = obj.password;
            this.roles = obj.roles && obj.roles.length ? obj.roles.map((role: any) => new Role(role)) : [];
        }
    }
    get rolesAsString() {
        return this.roles && this.roles.length ? this.roles.map((role: Role) => role.name).join(', ') : '';
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