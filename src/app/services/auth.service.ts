import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

type usersPredefinedCredentials = {
  email: string;
  password: string;
  accessLevel: string;
};

type loginUserValues = {
  email: string;
  password: string;
};

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

  constructor(private http: HttpClient) {}

  checkUserExist(userCredentials: loginUserValues): usersPredefinedCredentials | undefined {
    return this.predefinedUsers.find(user => {
      return user.email === userCredentials.email && user.password === userCredentials.password
    });
  }
}
