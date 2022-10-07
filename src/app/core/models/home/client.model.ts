import { ClientRedirectionType } from "../enum/enum.model";

export type Client = {
  org_name: string;
  org_id: string;
  logo_download_url: string;
  pending_invitations: number;
  active_users_count: number;
  total_users_count: number;
  incomplete_card_expenses_count: number;
  reports_to_approve_count: number;
  pending_reimbursement_amount: number;
  currency: string;
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
  [ClientRedirectionType.INCOMPLETE_CARD_EXPENSES]: 'incomplete_card_expenses_count',
  [ClientRedirectionType.REPORTS_TO_APPROVE]: 'reports_to_approve_count',
  [ClientRedirectionType.PENDING_REIMBURSEMENTS]: 'pending_reimbursement_amount'
}
