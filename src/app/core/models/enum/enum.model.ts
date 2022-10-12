export enum RedirectLink {
    FYLE_HELP = 'https://help.fylehq.com/en/collections/215867-integrations-with-fyle',
    FYLE_ADMIN = '/app/admin/#/admin_tasks',
    INCOMPLETE_EXPENSES = '/app/admin/#/company_expenses?search_model=W3siZXhwZW5zZV9zdGF0ZSI6W3sibGFiZWwiOiJJbmNvbXBsZXRlIiwidmFsdWUiOiJEUkFGVCIsIiQkaGFzaEtleSI6Im9iamVjdDo4MzQifV19XQ%3D%3D&org_id=$ORG_ID&search_query=#list-view-content-header-id',
    REPORTS_TO_APPROVE = '/app/admin/#/company_reports/?state=approvals',
    PENDING_REIMBURSEMENTS = '/app/admin/#/company_payments?state=processing'
}

export enum ClientView {
    DETAIL = 'Detail',
    TABLE = 'Table'
}

export enum ClientRedirectionType {
    INCOMPLETE_EXPENSES = 'Incomplete Expenses',
    REPORTS_TO_APPROVE = 'Reports To Approve',
    PENDING_REIMBURSEMENTS = 'Pending Reimbursements'
}
