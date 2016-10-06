import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'users-frame',
	templateUrl: 'users-frame.component.html'
})

export class UsersFrameComponent implements OnInit {

	private title: string = 'Admin: Users';
	
	ngOnInit() { }
}