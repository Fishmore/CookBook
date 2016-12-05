import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Rx';

import { AuthService } from './authentication/auth.service';

@Component({
  selector: 'cb-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnDestroy {
  isAuthenticated = false;
  private subscription: Subscription;

  constructor(private authService: AuthService) {
    this.subscription = this.authService.isAuthenticated().subscribe(
      authStatus => this.isAuthenticated = authStatus
    );
  }

  isAuth() {
    return this.isAuthenticated;
  }

  onLogout() {
    this.authService.logout();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
