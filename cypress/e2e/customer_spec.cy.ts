// cypress/e2e/customer_spec.cy.ts
const baseUrl = Cypress.config('baseUrl') ?? 'http://localhost:8080';

describe('Customer E2E Test', () => {

  beforeEach(() => {
    cy.loginByApi('admin', 'admin');

    cy.visit(baseUrl);

    cy.window().then((win) => {
      const token = win.sessionStorage.getItem('jhi-authenticationToken');
      expect(token).to.exist;
    });

    cy.get('#entity-menu').should('be.visible').click();
    cy.get('[href="/customer"]').should('be.visible').click();
  });

  it('should create a new customer', () => {
    cy.get('[data-cy="entityCreateButton"]').click();
    cy.get('[data-cy="firstName"]').type('John');
    cy.get('[data-cy="lastName"]').type('Doe');
    cy.get('[data-cy="email"]').type('john.doe@example.com');
    cy.get('[data-cy="phone"]').type('1234567890');
    cy.get('#save-entity').click();
    cy.get('table').should('contain', 'John');
    cy.get('table').should('contain', 'Doe');
    cy.get('table').should('contain', 'john.doe@example.com');
  });

  it('should edit an existing customer', () => {
    cy.get('table').contains('td', 'John').parent().find('[data-cy="entityEditButton"]').click();
    cy.get('[data-cy="lastName"]').clear().type('Smith');
    cy.get('#save-entity').click();
    cy.get('table').should('contain', 'John');
    cy.get('table').should('contain', 'Smith');
  });

  it('should delete a customer', () => {
    cy.get('table').contains('td', 'John').parent().find('[data-cy="entityDeleteButton"]').click();
    cy.get('[data-cy="entityConfirmDeleteButton"]').click();
    cy.get('table').should('not.contain', 'John');
  });
});
