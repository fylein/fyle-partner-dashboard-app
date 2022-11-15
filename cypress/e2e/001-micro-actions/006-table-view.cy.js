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
  })
})
