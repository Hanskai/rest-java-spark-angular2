import { TestBed, inject } from '@angular/core/testing';

import { ProfileFrameComponent } from './profile-frame.component';

describe('a profile-frame component', () => {
	let component: ProfileFrameComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				ProfileFrameComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([ProfileFrameComponent], (ProfileFrameComponent) => {
		component = ProfileFrameComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});