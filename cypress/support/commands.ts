/// <reference types="cypress" />

import environment from '../../src/environments/environment.json';

declare global {
  namespace Cypress {
    interface Chainable {
      login(): void;
      getElement(attributeName: string): Cypress.Chainable<JQuery<HTMLElement>>;
      assertText(attributeName: string, text: string): void;
    }
  }
}

Cypress.Commands.add('assertText', (attributeName: string, text: string) => {
  cy.getElement(attributeName).should('include.text', text)
})

Cypress.Commands.add('getElement', (attributeName: string) => {
  return cy.get(`[data-cy=${attributeName}]`);
})

Cypress.Commands.add('login', () => {
  const user = {
    email: 'ashwin.t@fyle.in',
    refresh_token:environment.e2e_tests.refresh_token,
    expires_in: 3600,
    full_name: "Ashwin",
    user_id: "xyz",
    org_id:environment.e2e_tests.org_id,
    env:environment.e2e_tests.env,
    org_name: "XYZ Org"
  };
  window.localStorage.setItem('user', JSON.stringify(user))
})
