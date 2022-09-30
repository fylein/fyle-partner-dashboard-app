import { Injectable } from '@angular/core';
import { ApiService } from '../core/api.service';
import { StorageService } from '../core/storage.service';
import { MinimalUser } from '../../models/db/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private storageService: StorageService,
    private apiService: ApiService
  ) { }

  storeUserProfile(userProfile: MinimalUser): void {
    this.storageService.set('user', userProfile);
  }

  getUserProfile(): MinimalUser | null {
    return this.storageService.get('user');
  }
}
