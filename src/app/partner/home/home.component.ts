import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ClientRedirectionType, ClientView } from 'src/app/core/models/enum/enum.model';
import { Client, PageScroll } from 'src/app/core/models/home/client.model';
import { Paginator } from 'src/app/core/models/misc/paginator.model';
import { PaginatorService } from 'src/app/core/services/core/paginator.service';
import { HomeService } from 'src/app/core/services/home/home.service';
import { TrackingService } from 'src/app/core/services/integration/tracking.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  isLoading: boolean = true;

  showHeaderShadow: boolean;

  showFooterShadow: boolean = true;

  isDetailViewActive: boolean = this.homeService.getActiveView() === ClientView.DETAIL ? true : false;

  ClientView = ClientView;

  clientRedirectionTypes: ClientRedirectionType[] = [ClientRedirectionType.INCOMPLETE_EXPENSES, ClientRedirectionType.REPORTS_TO_APPROVE, ClientRedirectionType.PENDING_REIMBURSEMENTS];

  clients: Client[];

  allClients: Client[];

  clientsCount: number;

  totalActiveUsers: number;

  limit: number;

  offset: number;

  form: FormGroup = this.formBuilder.group({
    search: []
  });

  hideLogo: boolean;

  isSimpleSearchTracked: boolean;

  private sessionStartTime = new Date();

  isSearchFocused: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private homeService: HomeService,
    private paginatorService: PaginatorService,
    private trackingService: TrackingService
  ) { }

  pageScrollHandler(pageScroll: PageScroll) {
    this.showHeaderShadow = pageScroll.headerShadow;
    this.showFooterShadow = pageScroll.footerShadow;
  }

  clearSearch(): void {
    this.form.reset();
  }

  switchView(clientView: ClientView): void {
    const presentView = this.isDetailViewActive;
    if (clientView === ClientView.DETAIL) {
      this.isDetailViewActive = true;
    } else {
      this.isDetailViewActive = false;
    }

    if (this.isDetailViewActive !== presentView) {
      this.showHeaderShadow = false;
      this.showFooterShadow = true;

      this.trackingService.onSwitchHomeView(clientView);

      const differenceInMs = new Date().getTime() - this.sessionStartTime.getTime();
      this.trackingService.trackTimeSpent(clientView, {durationInSeconds: Math.floor(differenceInMs / 1000)});
      this.sessionStartTime = new Date();
    }

    this.homeService.storeActiveView(clientView);
  }

  private setupSearchListener(): void {
    this.form.controls.search.valueChanges.subscribe((searchTerm: string) => {

      if (!this.isSimpleSearchTracked) {
        this.trackingService.onSimpleSearch(this.homeService.getActiveView());
        this.isSimpleSearchTracked = true;
      }

      if (searchTerm) {
        this.clients = this.allClients.filter(client => client.name.toLowerCase().includes(searchTerm.toLowerCase()));
      } else {
        this.clients = this.allClients.concat();
      }
    });
  }

  setupPage(paginator: Paginator): void {
    this.isLoading = true;

    // Store page size when user changes it
    if (this.limit !== paginator.limit) {
      this.paginatorService.storePageSize(paginator.limit);
    }

    this.limit = paginator.limit;
    this.offset = paginator.offset;

    this.homeService.getClients(paginator).subscribe((clients) => {
      this.clients = clients.data;
      this.allClients = clients.data;
      this.clientsCount = clients.count;
      this.totalActiveUsers = clients.data.map(client => client.billed_users_count).reduce((sum: number, current: number) => sum + current, 0);

      this.hideLogo = clients.data.find(client => client.logo_file_id && client.logo_file?.download_url) ? false : true;

      this.setupSearchListener();
      this.isLoading = false;
    });
  }

  ngOnInit(): void {
    const paginator: Paginator = this.paginatorService.getPageSize();
    this.setupPage(paginator);
  }

}
