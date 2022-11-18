/// <reference types="cypress" />

import environment from '../../src/environments/environment.json';

declare global {
  namespace Cypress {
    interface Chainable {
      login(): void;
      getElement(attributeName: string): Cypress.Chainable<JQuery<HTMLElement>>;
      assertText(attributeName: string, text: string): void;
      setupHttpListeners(): void;
      checkSorted(attributeName: string): boolean;
      checkSortedDescending(attributeName: string): void;
      checkSortedAscending(attributeName: string): void;
    }
  }
}

function setupInterceptor(method: 'GET' | 'POST', url: string, alias: string) {
  cy.intercept({
    method: method,
    url: `**${url}**`,
  }).as(alias);
}

Cypress.Commands.add('setupHttpListeners', () => {
  // This helps cypress to wait for the http requests to complete with 200, regardless of the defaultCommandTimeout (10s)
  setupInterceptor('GET', '/api/partner/orgs/', 'OrgDetails');
});

Cypress.Commands.add('assertText', (attributeName: string, text: string) => {
  cy.getElement(attributeName).should('include.text', text)
})

Cypress.Commands.add('getElement', (attributeName: string) => {
  return cy.get(`[data-cy=${attributeName}]`);
})

function checkSorted(attributeName: string, temp: Number, flag: boolean, type: 'descending' | 'ascending'){
  cy.getElement(attributeName).each(($el,index) => {
    cy.getElement(attributeName).eq(index).then(element=>{
      var current_element: number = 0;
      current_element =+ element.text();
      current_element = current_element || 0;
      if(type==='descending')
        cy.wrap(temp).should('be.gte', current_element);
      else if(type==='ascending')
        cy.wrap(temp).should('be.lte', current_element);
      temp=current_element;
    })
  })
}

Cypress.Commands.add('checkSortedDescending', (attributeName: string) => {
  checkSorted(attributeName,Infinity,true,'descending');
})

Cypress.Commands.add('checkSortedAscending', (attributeName: string) => {
  checkSorted(attributeName,0,true,'ascending');
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
  cy.setupHttpListeners();
})
