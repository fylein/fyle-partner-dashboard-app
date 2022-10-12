import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ClientRedirectionType } from 'src/app/core/models/enum/enum.model';
import { Client, TableColumn } from 'src/app/core/models/home/client.model';
import { HomeService } from 'src/app/core/services/home/home.service';

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

  constructor(
    private homeService: HomeService
  ) { }

  showOrHideViewInFyle(client: Client, isRowHovered: boolean) {
    client.showViewinFyle = isRowHovered;
  }

  redirect(clientRedirectionType: ClientRedirectionType, org_id: string): void {
    this.homeService.redirect(clientRedirectionType, org_id);
  }

  ngOnInit(): void {
  }

}
