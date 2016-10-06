import { Component, OnInit, EventEmitter, Input, Output, ViewChild, ElementRef } from '@angular/core';
import { ModalComponent } from './../../../../../classes/modal.component';
import { User } from './../../../../../shared/models/user.model';
import { ModalDirective } from 'ng2-bootstrap/ng2-bootstrap';

@Component({
	selector: 'user-modal',
	templateUrl: 'user-modal.component.html'
})

export class UserModalComponent extends ModalComponent {

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

	@Input()
	title: string;
	@Output()
	onSave: EventEmitter<UserModalComponent>;

	user: User;
	userTitles: any;

	constructor() {
		super();
		this.user = new User();
		this.userTitles = User.titles;
		this.onSave = new EventEmitter();
	}

	save() {
		this.onSave.emit(this);
		return false;
	}
}