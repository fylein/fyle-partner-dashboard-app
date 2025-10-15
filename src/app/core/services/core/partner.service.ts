import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cacheable } from 'ts-cacheable';
import { PartnerOrg } from '../../models/db/partner-org.model';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class PartnerService {

  isRebranded: boolean = false;

  constructor(
    private apiService: ApiService
  ) { }

  @Cacheable()
  getPartnerOrg(orgId: string | undefined): Observable<PartnerOrg> {
    return this.apiService.get(`/partner/`, {
      primary_org_id: orgId
    });
  }

  setIsRebranded(isRebranded: boolean): void {
    this.isRebranded = isRebranded;
  }

  getIsRebranded(): boolean {
    return this.isRebranded;
  }

  getAssetsBrandId(): string {
    return this.isRebranded ? 'sage' : 'fyle';
  }

  createPartnerOrg(): Observable<PartnerOrg> {
    return this.apiService.put('/partner/', {});
  }
}
