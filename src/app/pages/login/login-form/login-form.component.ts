import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {
  loginForm!: FormGroup;
  loading: boolean = false;
  failedLogin: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private _auth: AuthService,
    private _store: StoreService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: new FormControl('', Validators.required),
      password: new FormControl('', [
        Validators.required,
        Validators.pattern(
          '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{8,}'
        ),
      ]),
    });
  }

  login() {
    this.loading = true;
    setTimeout(() => {
      let user = this._auth.checkUserExist(this.loginForm.value);
      if (user) {
        this._store.userLogin(user);
        user.accessLevel == 'admin'
          ? this.router.navigateByUrl('pages/dashboard')
          : this.router.navigateByUrl('pages/user');
      } else {
        this.failedLogin = true;
      }
      this.loading = false;
    }, 1000);
  }
}
