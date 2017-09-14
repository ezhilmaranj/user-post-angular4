import {Component} from '@angular/core';
import {PostsService} from './posts.service';
import {Router, ActivatedRoute} from '@angular/router';
import {UsersService} from '../users/users.service';



@Component({
    selector: 'posts',
    templateUrl: './posts.component.html'
})
export class PostsComponent {
    posts;
    post;
    id;
    users;
    selectedUser;
    postsService: PostsService;
    usersService: UsersService;
    
    constructor(
        private _postsService: PostsService, 
            private _activatedRoute: ActivatedRoute,
            private _usersService: UsersService) {
        this.postsService = _postsService;
        this.usersService = _usersService;    
        this.getPosts();
        this.getUsers();
    }

    getPosts() {
        this.postsService.getPosts(this.selectedUser).subscribe(posts => {            
            this.posts = posts;
        });
    }    

    getUsers() {
        this.usersService.getUsers().subscribe(users => {                 
            this.users = users;
        });
    }
}