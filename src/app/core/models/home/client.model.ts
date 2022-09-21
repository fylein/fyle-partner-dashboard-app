export type Client = {
  name: string;
  id: string;
  logo_download_url: string;
  pending_invitations: number;
  active_users_count: number;
  total_users_count: number;
  incomplete_card_expenses_count: number;
  reports_to_approve_count: number;
  pending_reimbursement_amount: number;
  currency: string;
};
