import { TestBed, inject } from '@angular/core/testing';

import { UsersTableComponent } from './users-table.component';

describe('a users-table component', () => {
	let component: UsersTableComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				UsersTableComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([UsersTableComponent], (UsersTableComponent) => {
		component = UsersTableComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});