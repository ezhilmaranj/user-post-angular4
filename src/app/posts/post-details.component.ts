import { Component } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import { PostsService } from './posts.service';


@Component({
    selector: 'post',
    templateUrl: './post-details.component.html'
})
export class PostDetailsComponent {

    activatedRoute: ActivatedRoute;
    postsService: PostsService;
    id;
    post;

    constructor(postsService: PostsService, activatedRoute: ActivatedRoute){
        this.activatedRoute = activatedRoute;
        this.postsService = postsService;
        this.getPost();
    }

    getPost() {
        this.activatedRoute.params.subscribe(params => {
            this.id = params['id'];
        });
        
        this.postsService.getPost(this.id).subscribe(post => {            
            this.post = post;
        });
    }

}