import { Component, OnInit } from '@angular/core';
import { User } from './../../../models/user.model';
import { AccountService } from './../../../shared/account.service';

@Component({
	selector: 'profile-frame',
	templateUrl: 'profile-frame.component.html'
})

export class ProfileFrameComponent implements OnInit {
	private title: string = 'User: Profile';
	private account: User;
	private userTitles: any = User.titles;
	constructor(private accountService: AccountService) {
		this.account = this.accountService.account;
	}
	ngOnInit() {
	}
	update() {
		let subscribe = this.accountService.account$.subscribe(
			(user: User) => {
				this.account = user;
				subscribe.unsubscribe();
			},
			(error: any) => {
				subscribe.unsubscribe();
			}
		)
		this.accountService.update(this.account);
	}
}