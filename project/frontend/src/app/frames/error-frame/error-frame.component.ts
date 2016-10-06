import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'error-frame',
	templateUrl: 'error-frame.component.html'
})

export class ErrorFrameComponent implements OnInit {

	@Input()
	message:string;
	
	ngOnInit() { }
}