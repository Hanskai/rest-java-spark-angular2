import { TestBed, inject } from '@angular/core/testing';

import { AdminPageComponent } from './admin-page.component';

describe('a admin-page component', () => {
	let component: AdminPageComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				AdminPageComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([AdminPageComponent], (AdminPageComponent) => {
		component = AdminPageComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});