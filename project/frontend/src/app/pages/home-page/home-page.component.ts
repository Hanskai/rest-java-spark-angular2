import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'home-page',
	templateUrl: 'home-page.component.html'
})

export class HomePageComponent implements OnInit {
	date: Date = new Date();
	ngOnInit() { }
}