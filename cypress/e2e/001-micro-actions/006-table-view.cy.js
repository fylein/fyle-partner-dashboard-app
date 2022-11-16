/// <reference types="cypress" />

describe('table view', () => {
  beforeEach(() => {
    cy.login()
    cy.visit('/')
  })
  
  it('loads partner-dashboard app : check table-view', () => {
    cy.wait('@OrgDetails').its('response.statusCode').should('equal', 200)
    cy.getElement('table-view-tab').click()
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
    //CheckDecreasing
    cy.getElement('client-name').click()
    //CheckIncreasing
    cy.assertText('active-users-text','Active Users').click()
    cy.getElement('sort-icon-active-users')
    //CheckDecreasing
    cy.getElement('active-users-text').click()
    //CheckIncreasing
    cy.assertText('total-users-text','Total Users').click()
    cy.getElement('sort-icon-total-users')
    //CheckDecreasing
    cy.getElement('total-users-text').click()
    //CheckIncreasing
    cy.assertText('pending-invitation-text','Pending Invitation').click()
    cy.getElement('sort-icon-pending-invitation')
    //CheckDecreasing
    cy.getElement('pending-invitation-text').click()
    //CheckIncreasing
    cy.assertText('incomplete-expenses-text','Incomplete Expenses').click()
    cy.getElement('sort-icon-incomplete-expenses')
    //CheckDecreasing
    cy.getElement('incomplete-expenses-text').click()
    //CheckIncreasing
    cy.assertText('reports-to-approve-text','Reports to Approve').click()
    cy.getElement('sort-icon-reports-to-approve')
    //CheckDecreasing
    cy.getElement('reports-to-approve-text').click()
    //CheckIncreasing
    cy.assertText('pending-reimbursements-text','Pending Reimbursements').click()
    cy.getElement('sort-icon-pending-reimbursements')
    //CheckDecreasing
    cy.getElement('pending-reimbursements-text').click()
    //CheckIncreasing
  })
})
