import { Injectable } from '@angular/core';
import { Headers, Http, URLSearchParams } from '@angular/http';
import { Account } from './../models/account.model';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { AppService } from './app.service';

@Injectable()
export class AccountService {

    login$: Subject<Account>;
    logout$: Subject<boolean>;
    apiUrl: string;
    account: Account;

    constructor(private http: Http, private app: AppService) {
        this.apiUrl = `${app.apiUrl}/account`;
        this.login$ = <Subject<Account>>new Subject();
        this.logout$ = <Subject<boolean>>new Subject();
    }

    login(user: Account) {
        this.http.get(`${this.apiUrl}?filter=${user.username}`)
            .map(response => response.json().map(item => new Account(item))).subscribe(accounts => {
                try {
                    this.http.get(`${this.apiUrl}/${accounts[0].id}`)
                        //this.http.post(`${this.apiUrl}`, JSON.stringify(user))
                        .map(response => response.json()).subscribe(item => {
                            this.account = new Account(item);
                            this.login$.next(this.account);
                        }, error => console.error('Could not login.'));
                } catch (error) {
                    console.error(error);
                }
            }, error => console.error('Could not login.'));
        return this.login$;
    }

    logout() {
        this.account = null;
        this.logout$.next(true);
        return this.logout$;
    }
}