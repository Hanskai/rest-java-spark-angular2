import { Component, Output, Input, ViewChild, EventEmitter, ElementRef } from '@angular/core';
import { ModalDirective } from 'ng2-bootstrap/ng2-bootstrap';
import { User } from './../../shared/models/user.model';
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
	focusElement: ElementRef;
	@Output()
	onClose: EventEmitter<ModalComponent>;
	@Input()
	hideOnClose?: boolean;

	@Output()
	onLogin: EventEmitter<AuthModalComponent>;

	private userTitles: any = User.titles;
	account: User;

	constructor() {
		super();
		this.onLogin = new EventEmitter();
	}

	ngOnInit() {
		super.ngOnInit();
		this.account = new User();
	}
	
	login() {
		this.onLogin.emit(this);
		return false;
	}
}