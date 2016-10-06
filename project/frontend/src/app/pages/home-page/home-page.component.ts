import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'home-page',
	templateUrl: 'home-page.component.html'
})

export class HomePageComponent implements OnInit {

	private title: string = 'Home';
	private date: Date = new Date();
	
	ngOnInit() { }
}