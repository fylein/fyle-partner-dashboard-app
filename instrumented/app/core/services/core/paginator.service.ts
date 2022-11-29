import { Injectable } from '@angular/core';
import { Paginator } from '../../models/misc/paginator.model';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class PaginatorService {

  constructor(
    private storageService: StorageService
  ) { }

  getPageSize(): Paginator {
    const defaultPageSize = 50;

    return {
      limit: this.storageService.get('page-size.home') || defaultPageSize,
      offset: 0
    };
  }

  storePageSize(pageSize: number): void {
    this.storageService.set('page-size.home', pageSize);
  }
}
