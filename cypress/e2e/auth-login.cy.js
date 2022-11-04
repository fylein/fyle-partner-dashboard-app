/// <reference types="cypress" />

describe('auth login', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('loads partner-dashboard app', () => {
    cy.url().should('include', '/auth/login')
    cy.get('[data-cy="heading"]').should('include.text', "Partner's Portal")
    cy.get('[data-cy="subheading"]').should('include.text', 'Login to your account')
    cy.get('[data-cy="submit"]').click()
  })

})
