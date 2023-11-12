import {
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { NgxPermissionsService } from 'ngx-permissions';

@Injectable()
export class AuthGuard {
  constructor(
    private router: Router,
    private _auth: AuthService,
    private permissionsService: NgxPermissionsService
  ) {}

  canActivate(): boolean {
    let user = this._auth.getProfile();
    if (user) {
      this.permissionsService.flushPermissions();
      this.permissionsService.addPermission([user.accessLevel]);
      return true;
    } else {
      this.permissionsService.flushPermissions();
      return false;
    }
  }

  canActivateChild() {
    if (this._auth.isAuthenticated()) {
      return true;
    }

    this.router.navigate(['/login']);
    return false;
  }
}
