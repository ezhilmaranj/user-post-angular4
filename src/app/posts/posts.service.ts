import {Injectable} from '@angular/core';
import {Http} from '@angular/http';


@Injectable()
export class PostsService {
    http: Http;
    
    url = 'https://jsonplaceholder.typicode.com/posts';


    constructor(http: Http) {
        this.http = http;        
    }

    getPosts(userId) {
        let url;
        if(userId && userId.length > 0) {
           url = this.url + '?userId='+ userId; 
        }else{
            url = this.url;
        }
        return this.http.get(url).map(posts => posts.json());
    }

    getPost(id) {    
        return this.http.get(this.url+'/'+ id).map(posts => posts.json());
    }
}