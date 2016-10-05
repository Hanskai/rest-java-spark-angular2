import { TestBed, inject } from '@angular/core/testing';

import { ConfigFrameComponent } from './config-frame.component';

describe('a config-frame component', () => {
	let component: ConfigFrameComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				ConfigFrameComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([ConfigFrameComponent], (ConfigFrameComponent) => {
		component = ConfigFrameComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});