/// <reference types="cypress" />

import environment from '../../src/environments/environment.json';

declare global {
  namespace Cypress {
    interface Chainable {
      login(): void;
      getElement(check1: string, check2:string): void;
    }
  }
}

Cypress.Commands.add('getElement', (check1:string,check2:string) => {
  cy.get(check1).should('include.text', check2)
})

Cypress.Commands.add('login', () => {
  const user = {
    email: 'ashwin.t@fyle.in',
    access_token: environment.e2e_tests.access_token,
    refresh_token: environment.e2e_tests.refresh_token,
    full_name: 'Ashwin',
    user_id: 'xyz',
    org_id: environment.e2e_tests.org_id,
    org_name: 'XYZ Org'
  };
})