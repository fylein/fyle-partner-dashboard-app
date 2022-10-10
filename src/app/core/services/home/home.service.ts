import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cacheable } from 'ts-cacheable';
import { ClientResponse, PaginationProperties } from '../../models/home/client.model';
import { ApiService } from '../core/api.service';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(
    private apiService: ApiService
  ) { }

  @Cacheable()
  getClients(paginationProperties: PaginationProperties): Observable<ClientResponse> {
    return this.apiService.get(`/partner/orgs/`, paginationProperties);
  }
}
