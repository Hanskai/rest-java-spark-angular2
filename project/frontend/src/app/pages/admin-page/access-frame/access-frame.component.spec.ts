import { TestBed, inject } from '@angular/core/testing';

import { AccessFrameComponent } from './access-frame.component';

describe('a access-frame component', () => {
	let component: AccessFrameComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				AccessFrameComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([AccessFrameComponent], (AccessFrameComponent) => {
		component = AccessFrameComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});