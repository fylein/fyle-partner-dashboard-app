/// <reference types="cypress" />

describe('simple search', () => {
  beforeEach(() => {
    cy.login()
    cy.visit('/')
  })
  
  it('loads partner-dashboard app : check search input area', () => {
    cy.wait('@OrgDetails').its('response.statusCode').should('equal', 200)
    cy.getElement('search-input-area').type('fyle')
    cy.getElement('client-card')
    cy.getElement('clear-search').click()
    cy.getElement('search-input-area').type('multi')
    cy.getElement('client-card-rows').should('have.length', 3)
    cy.getElement('clear-search').click()
    cy.getElement('search-input-area').type('invalid')
    cy.getElement('zero-state-img')
    cy.getElement('clear-search').click()
    cy.getElement('client-card')
  })
})
