export class Role {
    id: number;
    name: string;
    static titles: any = { 
        id: 'ID', 
        name: 'Name' 
    };
    constructor(obj?: any) {
        if (obj) {
            this.id = +obj.id;
            this.name = obj.name;
        }
    }
}