import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { usersPredefinedCredentials } from '../shared/types/user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  logedInUser = new BehaviorSubject({
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
  });
  language = new BehaviorSubject('en');

  constructor(private router: Router) {}

  userLogin(user: usersPredefinedCredentials) {
    this.logedInUser.next(user);
  }

  logoutUser() {
    this.logedInUser.next({
      email: '',
      password: '',
      accessLevel: '',
      address: {
        street: '',
        suite: '',
        city: '',
        zipcode: '',
        geo: {
          lat: '',
          lng: ''
        }
      },
      company: {
        name: '',
        catchPhrase: '',
        bs: ''
      },
      name: '',
      phone: '',
      username: '',
      website: ''
    });
    this.router.navigateByUrl('/login');
  }
}
