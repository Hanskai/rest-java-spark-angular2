import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'profile-frame',
	templateUrl: 'profile-frame.component.html'
})

export class ProfileFrameComponent implements OnInit {
	title: string = 'Account: Profile';
	ngOnInit() { }
}