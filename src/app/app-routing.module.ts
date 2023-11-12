import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { AuthGuard } from './shared/guards/auth.guard';
import { PagesComponent } from './pages/pages.component';
import { ngxPermissionsGuard } from 'ngx-permissions';

const routes: Routes = [
  { path: '', redirectTo: '/pages/user', pathMatch: 'full' },
  { path: 'login', component: LoginComponent, data: { title: 'Login' } },
  {
    path: 'pages',
    component: PagesComponent,
    data: { title: 'app' },
    canActivate: [AuthGuard],
    canActivateChild: [ngxPermissionsGuard],
    children: [
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./pages/dashboard/admin.module').then((m) => m.AdminModule),
        data: {
          title: 'admin',
          permissions: {
            only: ['admin'],
            redirectTo: '/login',
          },
        },
        canActivate: [ngxPermissionsGuard],
      },
      {
        path: 'user',
        loadChildren: () =>
          import('./pages/user/user.module').then((m) => m.UserModule),
        data: {
          title: 'user',
          permissions: {
            only: ['user', 'admin'],
            redirectTo: '/login',
          },
        },
        canActivate: [ngxPermissionsGuard],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
