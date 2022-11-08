/// <reference types="cypress" />

describe('auth logout', () => {
  beforeEach(() => {
    cy.login()
    cy.visit('/')
  })

  it('in partner-dashboard app', () => {
    cy.assertImage("fyle-logo")
    cy.assertText('header-home-text',"Home")
    cy.getElement("user-name")
  })

  it('logging out', () => {
    cy.onClick("profile-dropdown")
    cy.onClick("signout-button")
  })
})
