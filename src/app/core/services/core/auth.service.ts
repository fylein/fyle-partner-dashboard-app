import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { StorageService } from './storage.service';
import { Token } from '../../models/misc/token.model';
import { MinimalUser } from '../../models/db/user.model';
import { UserService } from '../misc/user.service';
import { Router } from '@angular/router';
import * as Sentry from '@sentry/angular';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private apiService: ApiService,
    private router: Router,
    private storageService: StorageService,
    private userService: UserService
  ) {}

  isLoggedIn(): boolean | null {
    return this.userService.getUserProfile() !== null;
  }

  logout(redirect?: boolean): void {
    Sentry.configureScope(scope => scope.setUser(null));
    this.storageService.remove('user');

    if (redirect) {
      this.router.navigate(['auth/login']);
    }
  }

  login(code: string): Observable<Token> {
    return this.apiService.post('/auth/login/', { code: code });
  }

  refreshAccessToken(refreshToken: string): Observable<Token> {
    return this.apiService.post('/auth/refresh/', { refresh_token: refreshToken });
  }

  getAccessToken(): string | null {
    const user: MinimalUser | null = this.userService.getUserProfile();

    return user ? user.access_token : null;
  }

  updateAccessToken(accessToken: string): string | null {
    const user: MinimalUser | null = this.userService.getUserProfile();

    if (user) {
      user.access_token = accessToken;
      this.userService.storeUserProfile(user);
      return accessToken;
    }

    return null;
  }

  getRefreshToken(): string | null {
    const user: MinimalUser | null = this.userService.getUserProfile();

    return user ? user.refresh_token : null;
  }

  checkLoginStatusAndLogout(): void {
    if (this.isLoggedIn()) {
      this.logout();
    }
  }
}
