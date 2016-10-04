import { Component, Output, Input, ViewChild, EventEmitter } from '@angular/core';
import { ModalDirective } from 'ng2-bootstrap/ng2-bootstrap';
import { Account } from './../../models/account.model';
import { ModalComponent } from './../../classes/modal.component';

@Component({
	selector: 'auth-modal',
	templateUrl: 'auth-modal.component.html'
})

export class AuthModalComponent extends ModalComponent {

	@Input()
	text: string;
	@Input()
	class: string;
	@ViewChild('modal')
	modal: ModalDirective;
	@ViewChild('focusElement')
	focusElement: any;
	@Output()
	onClose: EventEmitter<ModalComponent>;
	@Input()
	hideOnClose?: boolean;

	@Output()
	onLogin: EventEmitter<AuthModalComponent>;

	account: Account;

	constructor() {
		super();
		this.account = new Account();
		this.onLogin = new EventEmitter();
	}

	login() {
		this.onLogin.emit(this);
	}
}