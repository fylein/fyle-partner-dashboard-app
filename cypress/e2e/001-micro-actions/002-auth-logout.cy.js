/// <reference types="cypress" />

describe('auth logout', () => {
  beforeEach(() => {
    cy.login()
    cy.visit('/')
  })

  it('in partner-dashboard app : check logo/Home-text/username then log out', () => {
    cy.getElement('fyle-logo')
    cy.assertText('header-home-text', 'Home')
    cy.getElement('user-name')
    cy.getElement('profile-dropdown').click()
    cy.getElement('signout-button').click()
    cy.url().should('include', '/auth/login')
  })
})
