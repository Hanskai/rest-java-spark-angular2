import { TestBed, inject } from '@angular/core/testing';

import { UserModalComponent } from './user-modal.component';

describe('a user-modal component', () => {
	let component: UserModalComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				UserModalComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([UserModalComponent], (UserModalComponent) => {
		component = UserModalComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});