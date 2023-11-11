import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { NgxPermissionsService } from 'ngx-permissions';

@Injectable()
export class AuthGuard  {
  constructor(
    private router: Router,
    private _auth: AuthService,
    private permissionsService: NgxPermissionsService
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean | UrlTree> {
    return new Promise((resolve) => {
      this._auth
        .getProfile()
        .then(async (data: any) => {
          await this.permissionsService.flushPermissions();
  
          let user = data.data;
          await this.permissionsService.addPermission([data.accessLevel]);
  
          resolve(true);
        })
        .catch(function (error) {
          resolve(false);
        });
    });
  }

  canActivateChild() {
    if (this._auth.isAuthenticated()) {
      return true;
    }

    this.router.navigate(['/login']);
    return false;
  }
}
