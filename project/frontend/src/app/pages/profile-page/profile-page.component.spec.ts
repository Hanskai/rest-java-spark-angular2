import { TestBed, inject } from '@angular/core/testing';

import { ProfilePageComponent } from './profile-page.component';

describe('a profile-page component', () => {
	let component: ProfilePageComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				ProfilePageComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([ProfilePageComponent], (ProfilePageComponent) => {
		component = ProfilePageComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});