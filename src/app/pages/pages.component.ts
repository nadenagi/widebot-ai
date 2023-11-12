import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarModule } from '../layout/navbar/navbar.module';

@Component({
  selector: 'app-pages',
  standalone: true,
  imports: [CommonModule,NavbarModule],
  templateUrl: './pages.component.html',
  styleUrl: './pages.component.scss'
})
export class PagesComponent {

}
