import { Component, OnInit, Input, Output, ViewChild, EventEmitter } from '@angular/core';
import { ModalDirective } from 'ng2-bootstrap/ng2-bootstrap';
import { Account } from './../../models/account.model';
import { AccountService } from './../../shared/account.service';

@Component({
	selector: 'auth-modal',
	templateUrl: 'auth-modal.component.html'
})

export class AuthModalComponent implements OnInit {

	@Input()
	text: string;
	@Input()
	class: string;
	@ViewChild('modal')
	modal: ModalDirective;
	@Output()
	onLogin: EventEmitter<AuthModalComponent>;
	@Output()
	onClose: EventEmitter<AuthModalComponent>;
	@Input()
	hideOnClose?: boolean;

	account: Account;

	constructor() {
		if (this.hideOnClose === undefined)
			this.hideOnClose = true;
		this.account = new Account();
		this.onLogin = new EventEmitter();
		this.onClose = new EventEmitter();
	}

	login() {
		this.onLogin.emit(this);
	}

	close() {
		this.onClose.emit(this);
		if (this.hideOnClose && this.modal.isShown)
			this.modal.hide();
	}

	ngOnInit() {
		this.modal.onHidden.subscribe(() => this.close());
	}
}