import { Component, OnInit } from '@angular/core';
import { UsersService } from './../../../../shared/users.service';
import { User } from './../../../../models/user.model';

@Component({
	selector: 'users-table',
	templateUrl: 'users-table.component.html',
	styleUrls: ['./users-table.component.scss']
})

export class UsersTableComponent implements OnInit {
	private userTitles: any = User.titles;
	private users: User[];
	constructor(private usersService: UsersService) {
		this.usersService.items$.subscribe((users: User[]) => this.users = users);
	}
	ngOnInit() {
		this.usersService.loadAll();
	}
}