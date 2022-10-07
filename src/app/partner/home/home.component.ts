import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ClientRedirectionType, ClientView } from 'src/app/core/models/enum/enum.model';
import { Client, PaginationProperties } from 'src/app/core/models/home/client.model';
import { HomeService } from 'src/app/core/services/home/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  isLoading: boolean = true;

  isDetailViewActive: boolean = true;

  ClientView = ClientView;

  clientRedirectionTypes: ClientRedirectionType[] = [ClientRedirectionType.INCOMPLETE_CARD_EXPENSES, ClientRedirectionType.REPORTS_TO_APPROVE, ClientRedirectionType.PENDING_REIMBURSEMENTS];

  clients: Client[];

  allClients: Client[];

  form: FormGroup = this.formBuilder.group({
    search: []
  });

  constructor(
    private formBuilder: FormBuilder,
    private homeService: HomeService
  ) { }

  switchView(clientView: ClientView): void {
    if (clientView === ClientView.DETAIL) {
      this.isDetailViewActive = true;
    } else {
      this.isDetailViewActive = false;
    }
  }

  private setupSearchListener(): void {
    this.form.controls.search.valueChanges.subscribe((searchTerm: string) => {
      if (searchTerm) {
        this.clients = this.clients.filter(client => client.org_name.toLowerCase().includes(searchTerm.toLowerCase()));
      } else {
        this.clients = this.allClients.concat();
      }
    });
  }

  private setupPage(): void {
    const paginationProperties: PaginationProperties = {
      limit: 50,
      offset: 0
    };

    this.homeService.getClients(paginationProperties).subscribe((clients) => {
      this.clients = clients.data;
      this.allClients = clients.data;

      this.setupSearchListener();
      this.isLoading = false;
    });
  }

  ngOnInit(): void {
    this.setupPage();
  }

}
