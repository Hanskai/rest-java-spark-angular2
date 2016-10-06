import { Component, OnInit } from '@angular/core';
import { UsersService } from './../../../../shared/users.service';
import { User } from './../../../../shared/models/user.model';
import { UserModalComponent } from './user-modal/user-modal.component';
import { ConfirmModalComponent } from './../../../../modals/confirm-modal/confirm-modal.component';

@Component({
	selector: 'users-table',
	templateUrl: 'users-table.component.html',
	styleUrls: ['./users-table.component.scss']
})

export class UsersTableComponent implements OnInit {

	private userTitles: any = User.titles;
	private users: User[];
	private user: User;
	private searchText: string = '';

	constructor(private usersService: UsersService) {
		this.usersService.items$.subscribe((users: User[]) => this.users = users);
	}

	ngOnInit() {
		this.usersService.loadAll(this.searchText);
	}

	openModal(userModal: UserModalComponent, user?: User) {
		if (!user)
			user = new User({});
		this.user = new User(user);
		userModal.user = this.user;
		userModal.modal.show();
	}

	save(userModal: UserModalComponent) {
		let subscribe = this.usersService.items$.subscribe(
			() => {
				userModal.modal.hide();
				subscribe.unsubscribe();
			},
			(error: any) => {
				subscribe.unsubscribe();
			}
		);
		this.usersService.save(userModal.user);
	}

	remove(userModal: ConfirmModalComponent) {
		let subscribe = this.usersService.items$.subscribe(
			() => {
				userModal.modal.hide();
				subscribe.unsubscribe();
			},
			(error: any) => {
				subscribe.unsubscribe();
			}
		);
		this.usersService.remove(this.user.id);
	}

	search() {
		this.usersService.loadAll(this.searchText);
	}
}