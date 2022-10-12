import { Component, Input, OnInit } from '@angular/core';
import { ClientRedirectionType, RedirectLink } from 'src/app/core/models/enum/enum.model';
import { Client, ClientCardMap } from 'src/app/core/models/home/client.model';
import { WindowService } from 'src/app/core/services/core/window.service';
import { HomeService } from 'src/app/core/services/home/home.service';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-client-card',
  templateUrl: './client-card.component.html',
  styleUrls: ['./client-card.component.scss']
})
export class ClientCardComponent implements OnInit {

  clientRedirectionTypes: ClientRedirectionType[] = [ClientRedirectionType.INCOMPLETE_EXPENSES, ClientRedirectionType.REPORTS_TO_APPROVE, ClientRedirectionType.PENDING_REIMBURSEMENTS];

  ClientRedirectionType = ClientRedirectionType;

  clientCardMap: ClientCardMap = {
    [ClientRedirectionType.INCOMPLETE_EXPENSES]: 'incomplete_expenses_count',
    [ClientRedirectionType.REPORTS_TO_APPROVE]: 'approval_pending_reports_count',
    [ClientRedirectionType.PENDING_REIMBURSEMENTS]: 'pending_reimbursement_amount',
    [ClientRedirectionType.ACTIVE_USERS]: 'billed_users_count',
    [ClientRedirectionType.TOTAL_USERS]: 'enabled_users_count',
    [ClientRedirectionType.PENDING_INVITATION]: 'pending_users_count'
  };

  @Input() clients: Client[];

  @Input() isLoading: boolean;

  private readonly months: string[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  currentMonth: string = this.months[new Date().getMonth()];

  constructor(
    private homeService: HomeService,
    private windowService: WindowService
  ) { }

  openOrg(org_id: string): void {
    const url = `${environment.fyle_app_url}${RedirectLink.FYLE_ADMIN}?org_id=${org_id}`;
    this.windowService.openInNewTab(url);
  }

  redirect(clientRedirectionType: ClientRedirectionType, org_id: string): void {
    this.homeService.redirect(clientRedirectionType, org_id);
  }

  ngOnInit(): void {
  }

}
