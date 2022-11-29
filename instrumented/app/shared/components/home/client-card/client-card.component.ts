import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ClientRedirectionType, RedirectLink } from 'src/app/core/models/enum/enum.model';
import { Client, ClientCardMap, PageScroll } from 'src/app/core/models/home/client.model';
import { WindowService } from 'src/app/core/services/core/window.service';
import { HomeService } from 'src/app/core/services/home/home.service';
import { TrackingService } from 'src/app/core/services/integration/tracking.service';
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
    [ClientRedirectionType.PENDING_INVITATION]: 'pending_users_count',
    [ClientRedirectionType.FYLE_ADMIN]: 'id'
  };

  @Input() clients: Client[];

  @Input() isLoading: boolean;

  @Input() form: FormGroup;

  @Output() pageScrollHandler = new EventEmitter<PageScroll>();

  private readonly months: string[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  readonly currentMonth: string = this.months[new Date().getMonth()];

  constructor(
    private homeService: HomeService,
    private trackingService: TrackingService,
    private windowService: WindowService
  ) { }

  onWindowScroll(event: any) {
    // Make header and footer active incase of scroll
    this.pageScrollHandler.emit({headerShadow: true, footerShadow: true});

    if (event.target.offsetHeight + event.target.scrollTop >= event.target.scrollHeight) {
      // Make footer shadow hidden incase the user reaches to the bottom
      this.pageScrollHandler.emit({headerShadow: true, footerShadow: false});
    }

    if (event.target.scrollTop === 0) {
      // Make header shadow hidden incase the user didn't scroll
      this.pageScrollHandler.emit({headerShadow: false, footerShadow: true});
    }
  }

  openOrg(org_id: string): void {
    const url = `${environment.fyle_app_url}${RedirectLink.FYLE_ADMIN}?org_id=${org_id}`;
    this.trackingService.onClickViewEvent(ClientRedirectionType.FYLE_ADMIN);
    this.windowService.openInNewTab(url);
  }

  redirect(clientRedirectionType: ClientRedirectionType, org_id: string): void {
    this.trackingService.onClickViewEvent(clientRedirectionType);
    this.homeService.redirect(clientRedirectionType, org_id);
  }

  ngOnInit(): void {
  }

}
