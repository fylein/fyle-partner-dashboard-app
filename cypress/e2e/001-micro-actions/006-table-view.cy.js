/// <reference types="cypress" />

describe('table view', () => {
  beforeEach(() => {
    cy.login()
    cy.visit('/')
  })
  
  it('loads partner-dashboard app : check table-view', () => {
    cy.wait('@OrgDetails').its('response.statusCode').should('equal', 200)
    cy.getElement('table-view-tab').click()
    cy.getElement('paginator-dropdown').click()
    cy.get('.p-dropdown-items').within(() => {
      cy.get('.p-ripple').eq(0).contains('20 Items').click()
    })
    cy.getElement('search-input-area').type('fyle')
    cy.getElement('data-row-head')
    cy.getElement('row-data')
    cy.getElement('clear-search').click()
    cy.getElement('search-input-area').type('multi')
    cy.getElement('row-data')
    cy.getElement('clear-search').click()
    cy.getElement('search-input-area').type('invalid')
    cy.getElement('zero-state-img')
    cy.getElement('clear-search').click()
    cy.getElement('row-data')
    cy.assertText('client-name','Client Name').click()
    cy.getElement('sort-icon-client-name')
    cy.getElement('client-name').click()
    cy.assertText('active-users-text','Active Users').click()
    cy.getElement('sort-icon-active-users')
    //CheckSorting
    cy.getElement('active-users-text').click()
    //CheckIncreasing
    cy.getElement('active-users-text').click()
    cy.checkSortedAscending('sort-active-users')
    cy.getElement('active-users-text').click()
    //CheckDecreasing
    cy.checkSortedDescending('sort-active-users')
    cy.assertText('total-users-text','Total Users').click()
    cy.getElement('sort-icon-total-users')
    cy.getElement('total-users-text').click()
    cy.getElement('view-hover-total-user')
    cy.getElement('view-svg-total-user')
    //CheckSorting
    cy.getElement('total-users-text').click()
    //CheckIncreasing
    cy.checkSortedAscending('sort-total-users')
    cy.getElement('total-users-text').click()
    //CheckDecreasing
    cy.checkSortedDescending('sort-total-users')
    cy.assertText('pending-invitation-text','Pending Invitation').click()
    cy.getElement('sort-icon-pending-invitation')
    cy.getElement('pending-invitation-text').click()
    cy.getElement('view-hover-pending-invitation')
    cy.getElement('view-svg-pending-invitation')
    //CheckSorting
    cy.getElement('pending-invitation-text').click()
    //CheckIncreasing
    cy.checkSortedAscending('sort-pending-users')
    cy.getElement('pending-invitation-text').click()
     //CheckDecreasing
    cy.checkSortedDescending('sort-pending-users')
    cy.assertText('incomplete-expenses-text','Incomplete Expenses').click()
    cy.getElement('sort-icon-incomplete-expenses')
    cy.getElement('incomplete-expenses-text').click()
    cy.getElement('view-hover-incomplete-expenses')
    cy.getElement('view-svg-incomplete-expenses')
    cy.assertText('reports-to-approve-text','Reports to Approve').click()
    cy.getElement('sort-icon-reports-to-approve')
    cy.getElement('reports-to-approve-text').click()
    cy.getElement('view-hover-pending-reports')
    cy.getElement('view-svg-pending-reports')
    cy.assertText('pending-reimbursements-text','Pending Reimbursements').click()
    cy.getElement('sort-icon-pending-reimbursements')
    cy.getElement('pending-reimbursements-text').click()
    cy.getElement('view-hover-pending-reimbursements')
    cy.getElement('view-svg-pending-reimbursements')
  })
})