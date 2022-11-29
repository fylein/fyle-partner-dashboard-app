import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cacheable } from 'ts-cacheable';
import { PartnerOrg } from '../../models/db/partner-org.model';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class PartnerService {

  constructor(
    private apiService: ApiService
  ) { }

  @Cacheable()
  getPartnerOrg(orgId: string | undefined): Observable<PartnerOrg> {
    return this.apiService.get(`/partner/`, {
      primary_org_id: orgId
    });
  }

  createPartnerOrg(): Observable<PartnerOrg> {
    return this.apiService.put('/partner/', {});
  }
}
