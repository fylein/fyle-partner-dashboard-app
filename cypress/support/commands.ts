/// <reference types="cypress" />

import environment from '../../src/environments/environment.json';

declare global {
  namespace Cypress {
    interface Chainable {
      login(): void;
      getElement(attributeName: string): Cypress.Chainable<JQuery<HTMLElement>>;
      assertText(attributeName: string, text: string): void;
      onClick(attributeName: string): void;
      assertImage(attributeName: string): void;
      
    }
  }
}

Cypress.Commands.add('assertText', (attributeName: string, text: string) => {
  cy.getElement(attributeName).should('include.text', text)
})

Cypress.Commands.add('getElement', (attributeName: string) => {
  return cy.get(`[data-cy=${attributeName}]`);
})

Cypress.Commands.add('onClick', (attributeName: string) => {
  return cy.get(`[data-cy=${attributeName}]`).click();
})

Cypress.Commands.add('assertImage', (attributeName: string) => {
  return cy.get(`[data-cy=${attributeName}]`);
})

Cypress.Commands.add('login', () => {
  const user = {
    email: 'ashwin.t@fyle.in',
    access_token:"eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2Njc4MTIyNjksImlzcyI6IkZ5bGVBcHAiLCJ1c2VyX2lkIjoidXNxeXdvMGYzbkJZIiwib3JnX3VzZXJfaWQiOiJvdVZMT1lQOGxlbE4iLCJvcmdfaWQiOiJvcjc5Q29iOTdLU2giLCJyb2xlcyI6IltcIkZZTEVSXCIsXCJWRVJJRklFUlwiLFwiUEFZTUVOVF9QUk9DRVNTT1JcIixcIkZJTkFOQ0VcIixcIkFETUlOXCIsXCJBVURJVE9SXCIsXCJBQ0NPVU5UQU5UXCIsXCJBUFBST1ZFUlwiXSIsInNjb3BlcyI6IltdIiwidHBhX2lkIjoidHBheFJlSDJPeTZ5eSIsInRwYV9uYW1lIjoiUGFydG5lciBEYXNoYm9hLi4iLCJhbGxvd2VkX0NJRFJzIjoiW10iLCJ2ZXJzaW9uIjoiMyIsImNsdXN0ZXJfZG9tYWluIjoiXCJodHRwczovL3N0YWdpbmcuZnlsZS50ZWNoXCIiLCJleHAiOjE2Njc4MTU4Njl9.FqtkgAm3NIDty9Cu6gfHgXIuwCRxwgmBwJ8zJjg5z-E",
    refresh_token:"eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2Njc4MDEwMjgsImlzcyI6IkZ5bGVBcHAiLCJvcmdfdXNlcl9pZCI6Ilwib3VWTE9ZUDhsZWxOXCIiLCJ0cGFfaWQiOiJcInRwYXhSZUgyT3k2eXlcIiIsInRwYV9uYW1lIjoiXCJQYXJ0bmVyIERhc2hib2EuLlwiIiwiY2x1c3Rlcl9kb21haW4iOiJcImh0dHBzOi8vc3RhZ2luZy5meWxlLnRlY2hcIiIsImV4cCI6MTk4MzE2MTAyOH0.aeuWalFT7B17hI1MycoUiMz4ZKtZ9JeRt5c2bDWdb6E",
    expires_in: 3600,
    full_name:"Ashwin",
    user_id:"usqywo0f3nBY",
    org_id:"or79Cob97KSh",
    org_name:"Fyle For Arkham Asylum"
  };
  window.localStorage.setItem('user', JSON.stringify(user))


})

