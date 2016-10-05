import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'config-frame',
	templateUrl: 'config-frame.component.html'
})

export class ConfigFrameComponent implements OnInit {
	title: string = 'Admin: Config';
	ngOnInit() { }
}