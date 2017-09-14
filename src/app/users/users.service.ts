import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UsersService {
    private http: Http;
    private url: string = 'https://jsonplaceholder.typicode.com/users';
    constructor(private _http: Http) {
        this.http = _http;
    }    

    getUsers() {
        return this.http.get(this.url).map( res => {
            return res.json()
        });        
    }
}