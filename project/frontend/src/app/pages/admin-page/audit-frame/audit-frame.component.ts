import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'audit-frame',
	templateUrl: 'audit-frame.component.html'
})

export class AuditFrameComponent implements OnInit {
	title: string = 'Admin: Audit';
	ngOnInit() { }
}