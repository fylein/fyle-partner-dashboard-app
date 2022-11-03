import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Cacheable } from 'ts-cacheable';
import { ClientRedirectionType, ClientView, RedirectLink } from '../../models/enum/enum.model';
import { ClientResponse } from '../../models/home/client.model';
import { Paginator } from '../../models/misc/paginator.model';
import { ApiService } from '../core/api.service';
import { StorageService } from '../core/storage.service';
import { WindowService } from '../core/window.service';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private readonly redirectionUrlMap = {
    [ClientRedirectionType.INCOMPLETE_EXPENSES]: RedirectLink.INCOMPLETE_EXPENSES,
    [ClientRedirectionType.REPORTS_TO_APPROVE]: RedirectLink.REPORTS_TO_APPROVE,
    [ClientRedirectionType.PENDING_REIMBURSEMENTS]: RedirectLink.PENDING_REIMBURSEMENTS,
    [ClientRedirectionType.ACTIVE_USERS]: RedirectLink.ACTIVE_USERS,
    [ClientRedirectionType.TOTAL_USERS]: RedirectLink.TOTAL_USERS,
    [ClientRedirectionType.PENDING_INVITATION]: RedirectLink.PENDING_INVITATION,
    [ClientRedirectionType.FYLE_ADMIN]: RedirectLink.FYLE_ADMIN
  };

  constructor(
    private apiService: ApiService,
    private storageService: StorageService,
    private windowService: WindowService
  ) { }

  getClients(paginationProperties: Paginator): Observable<ClientResponse> {
    return this.apiService.get(`/partner/orgs/`, paginationProperties);
  }

  redirect(clientRedirectionType: ClientRedirectionType, org_id: string): void {
    const url = `${environment.fyle_app_url}${this.redirectionUrlMap[clientRedirectionType]}&org_id=${org_id}`;
    // Hack alert - org_id needs to be passed exactly as 2nd query param for Incomplete Expense :(
    this.windowService.openInNewTab(url.replace('$ORG_ID', org_id));
  }

  storeActiveView(activeView: ClientView): void {
    this.storageService.set('active-view', activeView);
  }

  getActiveView(): ClientView {
    const activeView: ClientView | null = this.storageService.get('active-view');
    return activeView ? activeView : ClientView.DETAIL;
  }
}
