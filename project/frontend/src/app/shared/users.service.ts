import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';
import { AppService } from './app.service';
import { User } from './../models/user.model';
@Injectable()
export class UsersService {
    items$: Subject<User[]>;
    private items: User[];
    private apiUrl: string;

    constructor(private http: Http, private app: AppService) {
        this.apiUrl = `${app.apiUrl}/users`;
        this.items = [];
        this.items$ = <Subject<User[]>>new Subject();
    }
    loadAll() {
        this.http.get(`${this.apiUrl}`).map(response => response.json().map(item => new User(item))).subscribe((users: User[]) => {
            this.items = users;
            this.items$.next(this.items);
        }, error => console.error(error));
        return this.items$;
    }
    load(userId: number) {
        this.http.get(`${this.apiUrl}/${userId}`).map(response => new User(response.json())).subscribe((user: User) => {
            let notFound = true;
            this.items.forEach((item, index) => {
                if (item.id === user.id) {
                    this.items[index] = user;
                    notFound = false;
                }
            });
            if (notFound) {
                this.items.push(user);
            }
            this.items$.next(this.items);
        }, error => console.error(error));
    }
    create(user: User) {
        this.http.post(`${this.apiUrl}`, JSON.stringify(user))
            .map(response => new User(response.json())).subscribe((user: User) => {
                this.items.push(user);
                this.items$.next(this.items);
            }, error => console.error(error));
    }
    update(user: User) {
        this.http.put(`${this.apiUrl}/${user.id}`, JSON.stringify(user))
            .map(response => new User(response.json())).subscribe((user: User) => {
                this.items.forEach((item, i) => {
                    if (item.id === user.id) { this.items[i] = user; }
                });
                this.items$.next(this.items);
            }, error => console.error(error));
    }
    remove(userId: number) {
        this.http.delete(`${this.apiUrl}/${userId}`).subscribe(response => {
            this.items.forEach((t, i) => {
                if (t.id === userId) { this.items.splice(i, 1); }
            });
            this.items$.next(this.items);
        }, error => console.error(error));
    }
}