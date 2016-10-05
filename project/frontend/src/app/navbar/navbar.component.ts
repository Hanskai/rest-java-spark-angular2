import { Component, OnInit } from '@angular/core';
import { AccountService } from './../shared/account.service';
import { AuthModalComponent } from './../modals/auth-modal/auth-modal.component';
import { User } from './../models/user.model';
import { ConfirmModalComponent } from './../modals/confirm-modal/confirm-modal.component';

@Component({
	selector: 'navbar',
	templateUrl: 'navbar.component.html',
	styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit {

	constructor(private accountService: AccountService) {

	}

	ngOnInit() { }

	get account() {
		return this.accountService.account;
	}

	login(authModal: AuthModalComponent) {
		let subscribe = this.accountService.account$.subscribe(
			(account: User) => {
				authModal.modal.hide();
				subscribe.unsubscribe();
			},
			(error: any) => {
				subscribe.unsubscribe();
			}
		)
		this.accountService.login(authModal.account);
	}

	logout(confirmModal: ConfirmModalComponent) {
		let subscribe = this.accountService.account$.subscribe(
			() => {
				confirmModal.modal.hide();
				subscribe.unsubscribe();
			},
			(error: any) => {
				subscribe.unsubscribe();
			}
		)
		this.accountService.logout();
	}
}