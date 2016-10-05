import { TestBed, inject } from '@angular/core/testing';

import { AuditFrameComponent } from './audit-frame.component';

describe('a audit-frame component', () => {
	let component: AuditFrameComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				AuditFrameComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([AuditFrameComponent], (AuditFrameComponent) => {
		component = AuditFrameComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});