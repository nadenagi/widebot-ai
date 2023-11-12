import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit, OnDestroy {
  languageSubscription = new Subscription();
  languge: string = 'en';
  constructor(private _store: StoreService) {
    this.languageSubscription = _store.language.subscribe((data) => this.languge = data);
  }

  ngOnInit(): void {}

  switchLanguage() {
    this._store.language.next(this.languge == 'en' ? 'ar' : 'en')
  }

  logout() {
    this._store.logoutUser();
  }

  ngOnDestroy(): void {
    this.languageSubscription.unsubscribe();
  }
}
