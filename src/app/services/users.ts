import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private _HttpClient: HttpClient) {}

  getUsers(filter?: string) {
    let queryParams;

    if (filter) {
      queryParams = new HttpParams().append('username', filter);
    }

    return this._HttpClient.get('https://jsonplaceholder.typicode.com/users', {
      params: queryParams,
    });
  }

  deleteUser(userID: number) {
    this._HttpClient
      .delete(`https://jsonplaceholder.typicode.com/users/${userID}`)
      .subscribe(() => console.log('user deleted'));
  }
}
