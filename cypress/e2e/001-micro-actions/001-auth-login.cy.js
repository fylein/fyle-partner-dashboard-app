/// <reference types="cypress" />

describe('auth login', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('loads partner-dashboard app', () => {
    cy.url().should('include', '/auth/login')
    cy.assertText('heading',"Partner's Portal")
    cy.assertText('subheading', 'Login to your account')
    cy.assertText('submit', "Signin With Fyle")
  })
})
