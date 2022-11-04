/// <reference types="cypress" />

import environment from '../../src/environments/environment.json';

declare global {
  namespace Cypress {
    interface Chainable {
      login(): void;
    }
  }
}

function setupInterceptor(method: 'GET' | 'POST', url: string, alias: string) {
  cy.intercept({
    method: method,
    url: `**${url}**`,
  }).as(alias);
}

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
  window.localStorage.setItem('user', JSON.stringify(user))
  window.localStorage.setItem('workspaceId', environment.e2e_tests.workspace_id)

  // cy.login() will be used in all tests, hence adding http listener here
})