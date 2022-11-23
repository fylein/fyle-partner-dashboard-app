/// <reference types="cypress" />

const assertElementList = ['view-svg-pending-reimbursements', 'view-hover-pending-reimbursements', 'sort-icon-pending-reimbursements', 'view-svg-pending-reports', 'view-hover-pending-reports', 'sort-icon-reports-to-approve', 'view-svg-incomplete-expenses', 'view-hover-incomplete-expenses', 'sort-icon-incomplete-expenses', 'view-svg-pending-invitation', 'view-hover-pending-invitation', 'sort-icon-pending-invitation', 'sort-icon-client-name', 'sort-icon-active-users', 'sort-icon-total-users', 'view-hover-total-user', 'view-svg-total-user'];

describe('table view', () => {
  beforeEach(() => {
    cy.login()
    cy.visit('/')
    cy.wait('@OrgDetails').its('response.statusCode').should('equal', 200)
    cy.getElement('table-view-tab').click()
    cy.getElement('paginator-dropdown').click()
    cy.get('.p-dropdown-items').within(() => {
    cy.get('.p-ripple').eq(0).contains('20 Items').click()
    })
  })
  
  it('loads partner-dashboard app : check table-view assertions', () => {
    cy.assertText('client-name','Client Name').click()
    cy.getElement('client-name').click()
    cy.assertText('active-users-text','Active Users').click()
    cy.assertText('total-users-text','Total Users').click()
    cy.getElement('total-users-text').click()
    cy.assertText('pending-invitation-text','Pending Invitation').click()
    cy.getElement('pending-invitation-text').click()
    cy.assertText('incomplete-expenses-text','Incomplete Expenses').click()
    cy.getElement('incomplete-expenses-text').click()
    cy.assertText('reports-to-approve-text','Reports to Approve').click()
    cy.getElement('reports-to-approve-text').click()
    cy.assertText('pending-reimbursements-text','Pending Reimbursements').click()
    cy.getElement('pending-reimbursements-text').click()
    assertElementList.forEach(item => cy.getElement(item));
  })

  it('loads partner-dashboard app : check table-view sorting', () => {
    cy.getElement('active-users-text').click()
    // Check ascending sorting
    cy.checkSortedAscending('sort-active-users')
    cy.getElement('active-users-text').click()
    // Check descending sorting
    cy.checkSortedDescending('sort-active-users')
    // Check sorting ascending
    cy.getElement('total-users-text').click()
    cy.checkSortedAscending('sort-total-users')
    // Check sorting descending
    cy.getElement('pending-invitation-text').click()
    cy.getElement('pending-invitation-text').click()
    cy.checkSortedDescending('sort-pending-users')
  })
})