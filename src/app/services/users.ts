import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RawUsers } from '../shared/types/user';

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

  updateUser(updatedUser: RawUsers) {
    this._HttpClient
      .put(`https://jsonplaceholder.typicode.com/users/${updatedUser.id}`, {
        ...updatedUser,
      })
      .subscribe(() => console.log('user updated'));
  }

  addUser(newUser: RawUsers) {
    this._HttpClient
      .post(`https://jsonplaceholder.typicode.com/users`, {
        ...newUser,
      })
      .subscribe(() => console.log('user updated'));
  }
}
