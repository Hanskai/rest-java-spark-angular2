import { TestBed, inject } from '@angular/core/testing';

import { ErrorFrameComponent } from './error-frame.component';

describe('a error-frame component', () => {
	let component: ErrorFrameComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				ErrorFrameComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([ErrorFrameComponent], (ErrorFrameComponent) => {
		component = ErrorFrameComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});