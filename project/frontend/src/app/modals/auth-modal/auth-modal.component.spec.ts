import { TestBed, inject } from '@angular/core/testing';

import { AuthModalComponent } from './auth-modal.component';

describe('a auth-modal component', () => {
	let component: AuthModalComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				AuthModalComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([AuthModalComponent], (AuthModalComponent) => {
		component = AuthModalComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});