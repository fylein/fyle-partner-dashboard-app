/// <reference types="cypress" />

describe('paginator', () => {
  beforeEach(() => {
    cy.login()
    cy.visit('/')
  })
  
  it('loads partner-dashboard app : checks paginator/items per page/next-previous pages', () => {
    cy.wait('@OrgDetails').its('response.statusCode').should('equal', 200)
    cy.getElement('paginator')
    cy.getElement('page-number-text')
    cy.getElement('show-text')
    cy.getElement('paginator-dropdown').click()
    cy.get('.p-dropdown-items').within(() => {
      cy.get('.p-ripple').eq(2).contains('100 Items')
      cy.get('.p-ripple').eq(1).contains('50 Items')
      cy.get('.p-ripple').eq(0).contains('20 Items').click()
    })
    cy.getElement('page-text')
    cy.getElement('page-number')
    cy.getElement('right-button').click()
    cy.wait('@OrgDetails').its('response.statusCode').should('equal', 200)
    cy.assertText('page-number-text','Page 2 of 2')
    cy.getElement('left-button').click()
    cy.wait('@OrgDetails').its('response.statusCode').should('equal', 200)
    cy.assertText('page-number-text','Page 1 of 2')
    cy.getElement('last-page-button').click()
    cy.wait('@OrgDetails').its('response.statusCode').should('equal', 200)
    cy.assertText('page-number-text','Page 2 of 2')
    cy.getElement('first-page-button').click()
    cy.wait('@OrgDetails').its('response.statusCode').should('equal', 200)
    cy.assertText('page-number-text','Page 1 of 2')
  })
})
