import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ClientRedirectionType, RedirectLink } from 'src/app/core/models/enum/enum.model';
import { Client, PageScroll, TableColumn } from 'src/app/core/models/home/client.model';
import { HomeService } from 'src/app/core/services/home/home.service';
import { TrackingService } from 'src/app/core/services/integration/tracking.service';
import { environment } from 'src/environments/environment';
import { WindowService } from 'src/app/core/services/core/window.service';
import { TranslocoService } from '@jsverse/transloco';

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

  columns: TableColumn[];

  currentMonth: string;

  constructor(
    private homeService: HomeService,
    private trackingService: TrackingService,
    private windowService: WindowService,
    private translocoService: TranslocoService
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
    const monthNames = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];
    this.currentMonth = this.translocoService.translate(`clientTable.${monthNames[new Date().getMonth()]}`);

    this.columns = [
      {
        field: 'name',
        header: this.translocoService.translate('clientTable.clientName'),
        sort: true
      },
      {
        field: 'billed_users_count',
        header: this.translocoService.translate('clientTable.activeUsers'),
        sort: true
      },
      {
        field: 'enabled_users_count',
        header: this.translocoService.translate('clientTable.totalUsers'),
        sort: true
      },
      {
        field: 'pending_users_count',
        header: this.translocoService.translate('clientTable.pendingInvitation'),
        sort: true
      },
      {
        field: 'incomplete_expenses_count',
        header: this.translocoService.translate('clientTable.incompleteExpenses'),
        sort: true
      },
      {
        field: 'approval_pending_reports_count',
        header: this.translocoService.translate('clientTable.reportsToApprove'),
        sort: true
      },
      {
        field: 'pending_reimbursement_amount',
        header: this.translocoService.translate('clientTable.pendingReimbursements'),
        sort: true
      }
    ];
  }

}
