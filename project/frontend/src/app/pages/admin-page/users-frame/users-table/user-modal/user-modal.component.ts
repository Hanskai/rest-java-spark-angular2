import { Component, OnInit, EventEmitter, Input, Output, ViewChild, ElementRef } from '@angular/core';
import { ModalComponent } from './../../../../../classes/modal.component';
import { User } from './../../../../../shared/models/user.model';
import { ModalDirective } from 'ng2-bootstrap/ng2-bootstrap';
import { RolesService } from './../../../../../shared/roles.service';
import { Role } from './../../../../../shared/models/role.model';

@Component({
	selector: 'user-modal',
	templateUrl: 'user-modal.component.html',
	styleUrls: ['./user-modal.component.scss']
})

export class UserModalComponent extends ModalComponent {

	@Input()
	text: string;
	@Input()
	class: string;
	@ViewChild('modal')
	modal: ModalDirective;
	@ViewChild('focusElement')
	focusElement: ElementRef;
	@Output()
	onClose: EventEmitter<ModalComponent>;
	@Input()
	hideOnClose?: boolean;

	@Input()
	title: string;
	@Output()
	onSave: EventEmitter<UserModalComponent>;

	user: User;
	roles: any[];
	userTitles: any;

	constructor(private rolesService: RolesService) {
		super();
		this.user = new User();
		this.userTitles = User.titles;
		this.onSave = new EventEmitter();
		this.rolesService.items$.subscribe((roles: Role[]) => this.roles = roles);
	}

	ngOnInit() {
		super.ngOnInit();
		this.rolesService.loadAll();
		this.modal.onShown.subscribe(() => {
			for (let role of this.roles)
				role.checked=this.user.roles.filter(userRole=>userRole.id==role.id).length>0;
		});
	}

	save() {
		this.user.roles=this.roles.filter(role=>role.checked).map(role=>new Role(role));
		console.log(this.user);
		this.onSave.emit(this);
		return false;
	}
}