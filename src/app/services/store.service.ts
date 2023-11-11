import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { usersPredefinedCredentials } from '../shared/types/user';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  logedInUser = new BehaviorSubject({});

  constructor() {}

  userLogin(user: usersPredefinedCredentials) {
    this.logedInUser.next(user)
  }
  logoutUser(){
    this.logedInUser.next({})
  }
}
