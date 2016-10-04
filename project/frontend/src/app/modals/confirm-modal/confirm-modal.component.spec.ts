import { TestBed, inject } from '@angular/core/testing';

import { ConfirmModalComponent } from './confirm-modal.component';

describe('a confirm-modal component', () => {
	let component: ConfirmModalComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				ConfirmModalComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([ConfirmModalComponent], (ConfirmModalComponent) => {
		component = ConfirmModalComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});