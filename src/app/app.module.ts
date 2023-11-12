import { NgModule, importProvidersFrom } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { LoginFormComponent } from './pages/login/login-form/login-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './services/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { AdminModule } from './pages/dashboard/admin.module';
import { AuthGuard } from './shared/guards/auth.guard';
import { NgxPermissionsModule } from 'ngx-permissions';
import { PagesModule } from './pages/pages.module';
import { UserService } from './services/users';
import { TranslateLoader, TranslateModule } from  '@ngx-translate/core';
import { TranslateHttpLoader } from  '@ngx-translate/http-loader';

@NgModule({
  declarations: [AppComponent, LoginComponent, LoginFormComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    AdminModule,
    PagesModule,
  ],
  providers: [
    AuthService,
    AuthGuard,
    UserService,
    importProvidersFrom(NgxPermissionsModule.forRoot()),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
