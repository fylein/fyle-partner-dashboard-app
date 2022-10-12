import { ClientRedirectionType } from "../enum/enum.model";

export type ClientLogo = {
  content_type: string;
  download_url: string;
  id: string;
  name: string;
  upload_url: string;
}

export type Client = {
  approval_pending_reports_count: number;
  billed_users_count: number;
  created_at: Date;
  currency: string;
  domain: string;
  enabled_users_count: number;
  id: string;
  incomplete_expenses_count: number;
  is_verified: boolean;
  logo_file: ClientLogo;
  logo_file_id: string;
  name: string;
  pending_reimbursement_amount: number;
  pending_users_count: number;
  updated_at: Date;
  showViewinFyle?: boolean;
};

export type ClientResponse = {
  count: number;
  data: Client[];
};

export type PaginationProperties = {
  limit: number,
  offset: number
};

export interface ClientCardMap {
  [ClientRedirectionType.INCOMPLETE_EXPENSES]: 'incomplete_expenses_count',
  [ClientRedirectionType.REPORTS_TO_APPROVE]: 'approval_pending_reports_count',
  [ClientRedirectionType.PENDING_REIMBURSEMENTS]: 'pending_reimbursement_amount',
  [ClientRedirectionType.ACTIVE_USERS]: 'billed_users_count',
  [ClientRedirectionType.TOTAL_USERS]: 'enabled_users_count',
  [ClientRedirectionType.PENDING_INVITATION]: 'pending_users_count'
}

export interface TableColumn {
  field: string;
  header: string
  sort: boolean;
}
