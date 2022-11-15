/// <reference types="cypress" />

describe('table view', () => {
  beforeEach(() => {
    cy.login()
    cy.visit('/')
  })
  
  it('loads partner-dashboard app : check table-view', () => {
    cy.wait('@OrgDetails').its('response.statusCode').should('equal', 200)
    cy.getElement('search-input-area').type('fyle')
    cy.getElement('clear-search').click()
    cy.getElement('search-input-area').type('multi')
    cy.getElement('clear-search').click()
  })
})
