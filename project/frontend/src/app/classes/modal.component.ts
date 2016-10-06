import { Component, OnInit, Input, Output, ViewChild, EventEmitter, ElementRef } from '@angular/core';
import { ModalDirective } from 'ng2-bootstrap/ng2-bootstrap';

export class ModalComponent implements OnInit {

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

	constructor() {
		if (this.hideOnClose === undefined)
			this.hideOnClose = true;
		this.onClose = new EventEmitter();
	}

	ngOnInit() {
		this.modal.onHidden.subscribe(() => this.close());
		this.modal.onShown.subscribe(() => this.focusElement.nativeElement.focus());
	}

	close() {
		this.onClose.emit(this);
		if (this.hideOnClose && this.modal.isShown)
			this.modal.hide();
		return false;
	}
}