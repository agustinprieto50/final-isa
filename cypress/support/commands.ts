/// <reference types="cypress" />

// cypress/support/commands.ts

Cypress.Commands.add('loginByApi', (username: string, password: string) => {
    const baseUrl = Cypress.config('baseUrl') ?? 'http://localhost:8080';
    cy.request({
      method: 'POST',
      url: `${baseUrl}/api/authenticate`,
      body: {
        username,
        password
      }
    }).then((response) => {
      // Expect the login request to be successful
      expect(response.status).to.eq(200);

      // Extract the token from the response (modify this according to your API response structure)
      const token = response.body.id_token;

      // Set the token to session storage
      cy.window().then((win) => {
        win.sessionStorage.setItem('jhi-authenticationToken', `"${token}"`);
      });

      cy.visit('http://localhost:8080');
    });
  });