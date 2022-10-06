import { Component, OnInit } from '@angular/core';
import { ClientRedirectionType, ClientView } from 'src/app/core/models/enum/enum.model';

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

  constructor() { }

  switchView(clientView: ClientView): void {
    if (clientView === ClientView.DETAIL) {
      this.isDetailViewActive = true;
    } else {
      this.isDetailViewActive = false;
    }
  }

  ngOnInit(): void {
    this.isLoading = false;
  }

}
