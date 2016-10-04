import { Component, OnInit, Input, Output, ViewChild, EventEmitter } from '@angular/core';
import { ModalDirective } from 'ng2-bootstrap/ng2-bootstrap';

@Component({
	selector: 'confirm-modal',
	templateUrl: 'confirm-modal.component.html'
})

export class ConfirmModalComponent implements OnInit {

	@Input()
	title?: string;
	@Input()
	message: string;
	@Input()
	text: string;
	@Input()
	class: string;
	@ViewChild('modal')
	modal: ModalDirective;
	@Output()
	onYes: EventEmitter<ConfirmModalComponent>;
	@Output()
	onClose: EventEmitter<ConfirmModalComponent>;
	@Input()
	hideOnClose?: boolean;

	yes() {
		this.onYes.emit(this);
	}

	close() {
		this.onClose.emit(this);
		if (this.hideOnClose && this.modal.isShown)
			this.modal.hide();
	}

	constructor() {
		if (this.hideOnClose === undefined)
			this.hideOnClose = true;
		this.onYes = new EventEmitter();
		this.onClose = new EventEmitter();
	}

	ngOnInit() {
		if (!this.title)
			this.title = this.text;
		this.modal.onHidden.subscribe(() => this.close());
	}
}