import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ClientRedirectionType, ClientView } from 'src/app/core/models/enum/enum.model';
import { Client } from 'src/app/core/models/home/client.model';
import { Paginator } from 'src/app/core/models/misc/paginator.model';
import { PaginatorService } from 'src/app/core/services/core/paginator.service';
import { HomeService } from 'src/app/core/services/home/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  isLoading: boolean = true;

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

  constructor(
    private formBuilder: FormBuilder,
    private homeService: HomeService,
    private paginatorService: PaginatorService
  ) { }

  switchView(clientView: ClientView): void {
    if (clientView === ClientView.DETAIL) {
      this.isDetailViewActive = true;
    } else {
      this.isDetailViewActive = false;
    }

    this.homeService.storeActiveView(clientView);
  }

  private setupSearchListener(): void {
    this.form.controls.search.valueChanges.subscribe((searchTerm: string) => {
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
