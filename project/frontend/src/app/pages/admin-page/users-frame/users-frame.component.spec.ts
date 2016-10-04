import { TestBed, inject } from '@angular/core/testing';

import { UsersFrameComponent } from './users-frame.component';

describe('a users-frame component', () => {
	let component: UsersFrameComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				UsersFrameComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([UsersFrameComponent], (UsersFrameComponent) => {
		component = UsersFrameComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});