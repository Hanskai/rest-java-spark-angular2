import { Injectable } from '@angular/core';
import { Headers, Http, URLSearchParams } from '@angular/http';
import { User } from './models/user.model';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';
import { AppService } from './app.service';

@Injectable()
export class AccountService {

    account$: Subject<User>;
    account: User;
    private apiUrl: string;

    constructor(private http: Http, private app: AppService) {
        this.apiUrl = `${app.apiUrl}/account`;
        this.account$ = <Subject<User>>new Subject();
    }

    login(account: User) {
        this.http.get(`${this.apiUrl}?filter=${account.username}`)
            .map(response => response.json().map(item => new User(item))).subscribe((accounts: User[]) => {
                try {
                    this.http.get(`${this.apiUrl}/${accounts[0].id}`)
                        //this.http.post(`${this.apiUrl}`, JSON.stringify(account))
                        .map(response => new User(response.json())).subscribe((user: User) => {
                            this.account = user;
                            this.account$.next(this.account);
                        }, error => console.error('Could not login.'));
                } catch (error) {
                    console.error(error);
                }
            }, error => console.error('Could not login.'));
    }

    logout() {
        setTimeout(() => {
            this.account = null;
            this.account$.next(this.account);
        });
    }

    update(account: User) {
        setTimeout(() => {
            this.account = account;
            this.account$.next(this.account);
        });
    }
}