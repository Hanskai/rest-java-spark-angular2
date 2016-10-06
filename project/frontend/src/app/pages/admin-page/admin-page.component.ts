import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'admin-page',
	templateUrl: 'admin-page.component.html'
})

export class AdminPageComponent implements OnInit {

	private title: string = 'Admin';

	constructor(private router: Router) {
	}
	
	ngOnInit() { }
}