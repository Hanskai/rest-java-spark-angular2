import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'auth-modal',
	templateUrl: 'auth-modal.component.html'
})

export class AuthModalComponent implements OnInit {

	@Input()
	text: string;
	@Input()
	class: string;

	ngOnInit() { }
}