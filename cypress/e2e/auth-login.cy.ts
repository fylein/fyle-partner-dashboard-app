/// <reference types="cypress" />

describe('health check app', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('loads partner-dashboard app', () => {
    cy.url().should('include', '/auth/login')
  })

})
