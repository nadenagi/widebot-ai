import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  usersPredefinedCredentials,
  loginUserValues,
} from '../shared/types/user';
import { StoreService } from './store.service';
import { Observable } from 'rxjs';
@Injectable()
export class AuthService {
  predefinedUsers: usersPredefinedCredentials[] = [
    {
      email: 'user@widebotai.com',
      password: 'User@1234',
      accessLevel: 'user',
    },
    {
      email: 'admin@widebotai.com',
      password: 'Admin@1234',
      accessLevel: 'admin',
    },
  ];

  constructor(private _store: StoreService) {}

  checkUserExist(
    userCredentials: loginUserValues
  ): usersPredefinedCredentials | undefined {
    return this.predefinedUsers.find((user) => {
      return (
        user.email === userCredentials.email &&
        user.password === userCredentials.password
      );
    });
  }

  getProfile(): Promise<usersPredefinedCredentials | undefined> {
    let storedUser =
      this._store.logedInUser.getValue() as Observable<usersPredefinedCredentials>;
    return storedUser.toPromise();
  }

  isAuthenticated(){
    return this._store.logedInUser.getValue();
  };
}
