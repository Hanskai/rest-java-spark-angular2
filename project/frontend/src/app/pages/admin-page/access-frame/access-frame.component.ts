import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'access-frame',
	templateUrl: 'access-frame.component.html'
})

export class AccessFrameComponent implements OnInit {
	private title: string = 'Admin: Access';
	ngOnInit() { }
}