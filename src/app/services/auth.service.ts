import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  usersPredefinedCredentials,
  loginUserValues,
} from '../shared/types/user';
import { StoreService } from './store.service';
@Injectable()
export class AuthService {
  predefinedUsers: usersPredefinedCredentials[] = [
    {
      email: 'user@widebotai.com',
      password: 'User@1234',
      accessLevel: 'user',
      address: {
        street: 'Kulas Light',
        suite: 'Apt. 556',
        city: 'Gwenborough',
        zipcode: '92998-3874',
        geo: {
          lat: '-37.3159',
          lng: '81.1496',
        },
      },
      company: {
        name: 'Romaguera-Crona',
        catchPhrase: 'Multi-layered client-server neural-net',
        bs: 'harness real-time e-markets',
      },
      name: 'Leanne Graham',
      phone: '1-770-736-8031 x56442',
      username: 'Bret',
      website: 'hildegard.org',
    },
    {
      email: 'admin@widebotai.com',
      password: 'Admin@1234',
      accessLevel: 'admin',
      address: {
        street: 'Kulas Light',
        suite: 'Apt. 556',
        city: 'Gwenborough',
        zipcode: '92998-3874',
        geo: {
          lat: '-37.3159',
          lng: '81.1496',
        },
      },
      company: {
        name: 'Romaguera-Crona',
        catchPhrase: 'Multi-layered client-server neural-net',
        bs: 'harness real-time e-markets',
      },
      name: 'Leanne Graham',
      phone: '1-770-736-8031 x56442',
      username: 'Bret',
      website: 'hildegard.org',
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

  getProfile(): usersPredefinedCredentials {
    let storedUser = this._store.logedInUser
      .value as usersPredefinedCredentials;
    return this.predefinedUsers[1];
    // return storedUser;
  }

  isAuthenticated() {
    return this._store.logedInUser.getValue();
  }
}
