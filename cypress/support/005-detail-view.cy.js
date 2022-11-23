/// <reference types="cypress" />

describe('detail-view', () => {
  beforeEach(() => {
    cy.login()
    cy.visit('/')
  })
  
  it('loads partner-dashboard app : check detail-view', () => {
    cy.wait('@OrgDetails').its('response.statusCode').should('equal', 200)
    cy.getElement('detail-view-tab')
    cy.getElement('search-input-area').type('multi')
    cy.getElement('client-name')
    cy.getElement('active-user-text')
    cy.getElement('total-users-text')
    cy.getElement('client-card-rows')
    cy.getElement('client-card')
    cy.getElement('card-data')
  })
})
