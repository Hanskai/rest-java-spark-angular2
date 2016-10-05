import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'account-page',
	templateUrl: 'account-page.component.html'
})

export class AccountPageComponent implements OnInit {
	title: string = 'Account';
	constructor(private router: Router) {
	}
	ngOnInit() { }
}