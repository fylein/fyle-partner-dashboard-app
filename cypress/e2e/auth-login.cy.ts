// describe('empty spec', () => {
//   it('passes', () => {
//     cy.visit('http://localhost:35533')
//   })
// })
/// 
import environment from 'src/environments/environment.json';
/// <reference types="cypress" />

describe('health check app', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('loads partner-dashboard app', () => {
    cy.url().should('include', '/auth/login')
  })

})
