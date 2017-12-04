import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';

@Injectable()
export class UserService {

    private user: Promise<User>;

    constructor(private http: HttpClient) {

    }

    getUser(): Promise<User> {
        if (!this.user) {
            this.user = this.http.get<User>('/api/current-user').toPromise();
        }
        return this.user;
    }
}
