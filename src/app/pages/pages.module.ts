import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { NavbarModule } from '../layout/navbar/navbar.module';

@NgModule({
  imports: [CommonModule, NavbarModule],
  providers: [],
  declarations: [PagesComponent],
})
export class PagesModule {}
