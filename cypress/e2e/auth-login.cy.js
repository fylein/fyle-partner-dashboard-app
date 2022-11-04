/// <reference types="cypress" />

describe('auth login', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  it('loads partner-dashboard app', () => {
    cy.url().should('include', '/auth/login')
    // cy.getElement('[data-cy="heading"]',"Partner's Portal")
    // cy.getElement('[data-cy="subheading"]', 'Login to your account')
    // cy.getElement('[data-cy="submit"]', "Signin With Fyle")
    
    cy.assertText('heading',"Partner's Portal")
    cy.assertText('subheading', 'Login to your account')
    cy.assertText('submit', "Signin With Fyle")
    
  })
})
