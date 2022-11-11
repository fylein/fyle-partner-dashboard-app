import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ClientRedirectionType, RedirectLink } from 'src/app/core/models/enum/enum.model';
import { Client, PageScroll, TableColumn } from 'src/app/core/models/home/client.model';
import { HomeService } from 'src/app/core/services/home/home.service';
import { TrackingService } from 'src/app/core/services/integration/tracking.service';
import { environment } from 'src/environments/environment';
import { WindowService } from 'src/app/core/services/core/window.service';

@Component({
  selector: 'app-client-table',
  templateUrl: './client-table.component.html',
  styleUrls: ['./client-table.component.scss']
})
export class ClientTableComponent implements OnInit {

  @Input() clients: Client[];

  @Input() isLoading: boolean;

  @Input() form: FormGroup;

  @Input() hideLogo: boolean;

  @Output() pageScrollHandler = new EventEmitter<PageScroll>();

  ClientRedirectionType = ClientRedirectionType;

  columns: TableColumn[] = [
    {
      field: 'name',
      header: 'Client Name',
      sort: true
    },
    {
      field: 'billed_users_count',
      header: 'Active Users',
      sort: true
    },
    {
      field: 'enabled_users_count',
      header: 'Total Users',
      sort: true
    },
    {
      field: 'pending_users_count',
      header: 'Pending Invitation',
      sort: true
    },
    {
      field: 'incomplete_expenses_count',
      header: 'Incomplete Expenses',
      sort: true
    },
    {
      field: 'approval_pending_reports_count',
      header: 'Reports to Approve',
      sort: true
    },
    {
      field: 'pending_reimbursement_amount',
      header: 'Pending Reimbursements',
      sort: true
    }
  ];

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

  showOrHideViewInFyle(client: Client, isRowHovered: boolean) {
    client.showViewinFyle = isRowHovered;
  }

  openOrg(org_id: string): void {
    const url = `${environment.fyle_app_url}${RedirectLink.FYLE_ADMIN}?org_id=${org_id}`;
    this.trackingService.onClickViewEvent(ClientRedirectionType.FYLE_ADMIN);
    this.windowService.openInNewTab(url);
  }

  redirect(clientRedirectionType: ClientRedirectionType, org_id: string): void {
    this.trackingService.onClickViewEvent(clientRedirectionType);
    this.homeService.redirect(clientRedirectionType, org_id);
    event?.stopPropagation();
  }

  ngOnInit(): void {
  }

}
