import { Component, OnInit, Input, Output, ViewChild, EventEmitter, ElementRef } from '@angular/core';
import { ModalDirective } from 'ng2-bootstrap/ng2-bootstrap';
import { ModalComponent } from './../../classes/modal.component';

@Component({
	selector: 'confirm-modal',
	templateUrl: 'confirm-modal.component.html'
})

export class ConfirmModalComponent extends ModalComponent {

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

	@Input()
	title?: string;
	@Input()
	message: string;
	@Output()
	onYes: EventEmitter<ConfirmModalComponent>;

	yes() {
		this.onYes.emit(this);
	}

	constructor() {
		super();
		this.onYes = new EventEmitter();
	}

	ngOnInit() {
		super.ngOnInit();
		if (!this.title)
			this.title = this.text;
	}
}