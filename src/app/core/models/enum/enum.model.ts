export enum RedirectLink {
    FYLE_HELP = 'https://help.fylehq.com/en/collections/215867-integrations-with-fyle',
    FYLE_ADMIN = '/app/admin/#/admin_tasks',
    INCOMPLETE_CARD_EXPENSES = '/app/admin/#/company_expenses?search_model=W3siZXhwZW5zZV9zdGF0ZSI6W3sibGFiZWwiOiJVbnJlcG9ydGVkIiwidmFsdWUiOiJDT01QTEVURSIsIiQkaGFzaEtleSI6Im9iamVjdDoyNDIyIn1dfSx7ImV4cGVuc2VfYWNjb3VudF90eXBlIjpbeyJsYWJlbCI6IkNvcnBvcmF0ZSBDYXJkIiwidmFsdWUiOiJQRVJTT05BTF9DT1JQT1JBVEVfQ1JFRElUX0NBUkRfQUNDT1VOVCIsIiQkaGFzaEtleSI6Im9iamVjdDoyNzU2In1dfV0%3D&search_query=#list-view-content-header-id',
    REPORTS_TO_APPROVE = '/app/admin/#/company_reports/?state=approvals',
    PENDING_REIMBURSEMENTS = '/app/admin/#/company_payments?state=processing'
}

export enum ClientView {
    DETAIL = 'Detail',
    TABLE = 'Table'
}

export enum ClientRedirectionType {
    INCOMPLETE_CARD_EXPENSES = 'Incomplete Card Expenses',
    REPORTS_TO_APPROVE = 'Reports To Approve',
    PENDING_REIMBURSEMENTS = 'Pending Reimbursements'
}
