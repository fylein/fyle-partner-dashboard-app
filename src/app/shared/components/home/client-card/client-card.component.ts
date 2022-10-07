import { Component, Input, OnInit } from '@angular/core';
import { MinimalUser } from 'src/app/core/models/db/user.model';
import { ClientRedirectionType, RedirectLink } from 'src/app/core/models/enum/enum.model';
import { Client, ClientCardMap } from 'src/app/core/models/home/client.model';
import { WindowService } from 'src/app/core/services/core/window.service';
import { UserService } from 'src/app/core/services/misc/user.service';


@Component({
  selector: 'app-client-card',
  templateUrl: './client-card.component.html',
  styleUrls: ['./client-card.component.scss']
})
export class ClientCardComponent implements OnInit {

  clientRedirectionTypes: ClientRedirectionType[] = [ClientRedirectionType.INCOMPLETE_CARD_EXPENSES, ClientRedirectionType.REPORTS_TO_APPROVE, ClientRedirectionType.PENDING_REIMBURSEMENTS];

  clientCardMap: ClientCardMap = {
    [ClientRedirectionType.INCOMPLETE_CARD_EXPENSES]: 'incomplete_card_expenses_count',
    [ClientRedirectionType.REPORTS_TO_APPROVE]: 'reports_to_approve_count',
    [ClientRedirectionType.PENDING_REIMBURSEMENTS]: 'pending_reimbursement_amount'
  };

  private readonly clusterDomain: string = this.userService.getClusterDomain();

  @Input() clients: Client[];

  private readonly redirectionUrlMap = {
    [ClientRedirectionType.INCOMPLETE_CARD_EXPENSES]: RedirectLink.INCOMPLETE_CARD_EXPENSES,
    [ClientRedirectionType.REPORTS_TO_APPROVE]: RedirectLink.REPORTS_TO_APPROVE,
    [ClientRedirectionType.PENDING_REIMBURSEMENTS]: RedirectLink.PENDING_REIMBURSEMENTS
  };

  constructor(
    private userService: UserService,
    private windowService: WindowService
  ) { }

  openOrg(org_id: string): void {
    const url = `${this.clusterDomain}${RedirectLink.FYLE_ADMIN}?org_id=${org_id}`;
    this.windowService.openInNewTab(url);
  }

  redirect(clientRedirectionType: ClientRedirectionType, org_id: string): void {
    const url = `${this.clusterDomain}${this.redirectionUrlMap[clientRedirectionType]}?org_id=${org_id}`;
    this.windowService.openInNewTab(url);
  }

  ngOnInit(): void {
  }

}
