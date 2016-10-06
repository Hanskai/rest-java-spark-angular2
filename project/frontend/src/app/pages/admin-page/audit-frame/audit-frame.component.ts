import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'audit-frame',
	templateUrl: 'audit-frame.component.html'
})

export class AuditFrameComponent implements OnInit {

	private title: string = 'Admin: Audit';
	
	ngOnInit() { }
}