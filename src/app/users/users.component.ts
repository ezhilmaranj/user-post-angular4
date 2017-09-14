import { Component } from '@angular/core';
import { UsersService }  from './users.service';


@Component({
    selector: 'users',
    templateUrl: './users.component.html'
})
export class UsersComponent {
    usersService: UsersService;
    users;
    
    constructor(usersService: UsersService) {
        this.usersService = usersService;
        this.getUsers();
    }

    getUsers() {
        this.usersService.getUsers().subscribe(response => {
            this.users = response;
            console.log(response);
        });
    }
}