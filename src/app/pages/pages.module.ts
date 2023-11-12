import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { NavbarModule } from '../layout/navbar/navbar.module';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  imports: [CommonModule, NavbarModule, AppRoutingModule],
  providers: [],
  declarations: [PagesComponent],
})
export class PagesModule {}
