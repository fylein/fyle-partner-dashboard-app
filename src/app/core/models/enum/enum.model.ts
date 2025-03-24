export enum RedirectLink {
    FYLE_HELP = 'https://https://www.fylehq.com/help/en/collections/3675716-fyle-for-partners',
    FYLE_ADMIN = '/app/admin/#/admin_tasks',
    INCOMPLETE_EXPENSES = '/app/admin/#/company_expenses?search_model=W3siZXhwZW5zZV9zdGF0ZSI6W3sibGFiZWwiOiJJbmNvbXBsZXRlIiwidmFsdWUiOiJEUkFGVCIsIiQkaGFzaEtleSI6Im9iamVjdDo4MzQifV19XQ%3D%3D&org_id=$ORG_ID&search_query=#list-view-content-header-id',
    REPORTS_TO_APPROVE = '/app/admin/#/company_reports/?state=approvals',
    PENDING_REIMBURSEMENTS = '/app/admin/#/company_payments?state=processing',
    ACTIVE_USERS = '/app/admin/#/company_users/current_users?search_model=W3sib3Vfc3RhdHVzIjpbeyJsYWJlbCI6IkFjdGl2ZSIsInZhbHVlIjoiXCJBQ1RJVkVcIiIsIiQkaGFzaEtleSI6Im9iamVjdDo2MTEifV19XQ%3D%3D',
    TOTAL_USERS = '/app/admin/#/company_users/current_users?search_model=W3sib3Vfc3RhdHVzIjpbeyJsYWJlbCI6IkFjdGl2ZSIsInZhbHVlIjoiXCJBQ1RJVkVcIiIsIiQkaGFzaEtleSI6Im9iamVjdDo4NDUifSx7ImxhYmVsIjoiUGVuZGluZyIsInZhbHVlIjoiXCJQRU5ESU5HX0RFVEFJTFNcIiIsIiQkaGFzaEtleSI6Im9iamVjdDo4NTIifV19XQ%3D%3D',
    PENDING_INVITATION = '/app/admin/#/company_users/current_users?search_model=W3sib3Vfc3RhdHVzIjpbeyJsYWJlbCI6IlBlbmRpbmciLCJ2YWx1ZSI6IlwiUEVORElOR19ERVRBSUxTXCIiLCIkJGhhc2hLZXkiOiJvYmplY3Q6MTI0MiJ9XX1d'
}

export enum ClientView {
    DETAIL = 'Detail',
    TABLE = 'Table'
}

export enum ClientRedirectionType {
    INCOMPLETE_EXPENSES = 'Incomplete Expenses',
    REPORTS_TO_APPROVE = 'Reports To Approve',
    PENDING_REIMBURSEMENTS = 'Pending Reimbursements',
    ACTIVE_USERS = 'Active Users',
    TOTAL_USERS = 'Total Users ',
    PENDING_INVITATION = 'Pending Invitation',
    FYLE_ADMIN = 'Fyle Admin'
}

export enum PageNavigation {
    CHANGE = 'CHANGE',
    FORWARD = 'FORWARD',
    BACKWARD = 'BACKWARD',
    FIRST = 'FIRST',
    LAST = 'LAST'
}
