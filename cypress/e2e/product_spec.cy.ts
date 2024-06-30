// const baseUrl = Cypress.config('baseUrl') ?? 'http://localhost:8080';

describe('Product E2E Test', () => {

  beforeEach(() => {
    cy.loginByApi('admin', 'admin');

    cy.visit(Cypress.config('baseUrl') ?? 'http://localhost:8080');

    cy.window().then((win) => {
      const token = win.sessionStorage.getItem('jhi-authenticationToken');
      expect(token).to.exist;
    });

    cy.get('#entity-menu').should('be.visible').click();
    cy.get('[href="/product"]').should('be.visible').click();
  });

  it('should create a new product', () => {
    cy.get('[data-cy="entityCreateButton"]').click();
    cy.get('[data-cy="name"]').type('Fender Guitar');
    cy.get('[data-cy="description"]').type('A Fender guitar');
    cy.get('[data-cy="price"]').type('1200');
    cy.get('[data-cy="stock"]').type('100');
    cy.get('[data-cy="dateAdded"]').type('2024-06-01');
    cy.get('[data-cy="lastUpdated"]').type('2024-06-01');
    cy.get('#save-entity').click();
    cy.get('table').should('contain', 'Fender Guitar');
    cy.get('table').should('contain', '1200');
    cy.get('table').should('contain', '100');
  });

  it('should edit an existing product', () => {
    cy.get('table').contains('td', 'Fender Guitar').parent().find('[data-cy="entityEditButton"]').click();
    cy.get('[data-cy="name"]').clear().type('Gibson Guitar');
    cy.get('[data-cy="price"]').clear().type('900');
    cy.get('#save-entity').click();
    cy.get('table').should('contain', 'Gibson Guitar');
    cy.get('table').should('contain', '900');
    cy.get('table').should('contain', '100');
  });

  it('should delete a product', () => {
    cy.get('table').contains('td', 'Gibson Guitar').parent().find('[data-cy="entityDeleteButton"]').click();
    cy.get('[data-cy="entityConfirmDeleteButton"]').click();
    cy.get('table').should('not.contain', 'Gibson Guitar');
  });
});
