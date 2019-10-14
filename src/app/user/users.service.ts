import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { tap } from 'rxjs/operators';
import { IUsersResponse } from '../models/IUser.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(private http: HttpClient) {}

  getUsers = () => {

    const params = new HttpParams().set('results', '50').set('nat', 'br');

    return this.http
      .get(environment.api.randomuser.url, {params})
      .pipe(
        tap((data: IUsersResponse) => {
          sessionStorage.setItem('users', JSON.stringify(data.results));
        })
      );
  };

  getUser = loginUsername => {
    return JSON.parse(sessionStorage.getItem('users')).find(
      user => user.login.username === loginUsername
    );
  };
}
