import { Component, OnInit } from '@angular/core';
import { Account } from './../../../models/account.model';
import { AccountService } from './../../../shared/account.service';

@Component({
	selector: 'profile-frame',
	templateUrl: 'profile-frame.component.html'
})

export class ProfileFrameComponent implements OnInit {
	title: string = 'Account: Profile';
	account: Account;
	constructor(private accountService: AccountService) {
		this.account = this.accountService.account;
	}
	ngOnInit() {
	}
	update() {
		let subscribe = this.accountService.update(this.account).subscribe(
			() => {
				subscribe.unsubscribe();
			},
			(error: any) => {
				subscribe.unsubscribe();
			}
		)
	}
}