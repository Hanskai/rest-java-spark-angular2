import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';
import { AppService } from './app.service';
import { Role } from './models/role.model';
@Injectable()
export class RolesService {
    items$: Subject<Role[]>;
    private items: Role[];
    private apiUrl: string;

    constructor(private http: Http, private app: AppService) {
        this.apiUrl = `${app.apiUrl}/roles`;
        this.items = [];
        this.items$ = <Subject<Role[]>>new Subject();
    }
    loadAll(filter?: string) {
        if (!filter)
            filter = '';
        this.http.get(`${this.apiUrl}?filter=${filter}`).map(response => response.json().map(item => new Role(item))).subscribe((roles: Role[]) => {
            this.items = roles;
            this.items$.next(this.items);
        }, error => console.error(error));
        return this.items$;
    }
    load(roleId: number) {
        this.http.get(`${this.apiUrl}/${roleId}`).map(response => new Role(response.json())).subscribe((role: Role) => {
            let notFound = true;
            this.items.forEach((item, index) => {
                if (item.id === role.id) {
                    this.items[index] = role;
                    notFound = false;
                }
            });
            if (notFound) {
                this.items.push(role);
            }
            this.items$.next(this.items);
        }, error => console.error(error));
    }
    create(role: Role) {
        this.http.post(`${this.apiUrl}`, JSON.stringify(role))
            .map(response => new Role(response.json())).subscribe((role: Role) => {
                this.items.push(role);
                this.items$.next(this.items);
            }, error => console.error(error));
    }
    update(role: Role) {
        this.http.put(`${this.apiUrl}/${role.id}`, JSON.stringify(role))
            .map(response => new Role(response.json())).subscribe((role: Role) => {
                this.items.forEach((item, i) => {
                    if (item.id === role.id) { this.items[i] = role; }
                });
                this.items$.next(this.items);
            }, error => console.error(error));
    }
    save(role: Role) {
        if (role.id)
            this.update(role);
        else
            this.create(role);
    }
    remove(roleId: number) {
        this.http.delete(`${this.apiUrl}/${roleId}`).subscribe(response => {
            this.items.forEach((t, i) => {
                if (t.id === roleId) { this.items.splice(i, 1); }
            });
            this.items$.next(this.items);
        }, error => console.error(error));
    }
}