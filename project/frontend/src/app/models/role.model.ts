export class Role {
    id: number;
    name: string;
    constructor(obj?: any) {
        if (obj) {
            this.id = +obj.id;
            this.name = obj.name;
        }
    }
}