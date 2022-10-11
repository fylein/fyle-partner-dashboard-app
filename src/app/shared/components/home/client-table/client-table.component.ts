import { Component, Input, OnInit } from '@angular/core';
import { Client, TableColumn } from 'src/app/core/models/home/client.model';

@Component({
  selector: 'app-client-table',
  templateUrl: './client-table.component.html',
  styleUrls: ['./client-table.component.scss']
})
export class ClientTableComponent implements OnInit {

  @Input() clients: Client[];

  @Input() isLoading: boolean;

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
      field: 'incomplete_card_expenses_count',
      header: 'Incomplete Card Expenses',
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

  constructor() { }

  showOrHideViewInFyle(client: Client, isRowHovered: boolean) {
    client.showViewinFyle = isRowHovered;
  }

  ngOnInit(): void {
  }

}
