describe('Order E2E Test', () => {
    beforeEach(() => {
      cy.loginByApi('admin', 'admin');
  
      cy.visit(Cypress.config('baseUrl') ?? 'http://localhost:8080');
  
      cy.window().then((win) => {
        const token = win.sessionStorage.getItem('jhi-authenticationToken');
        expect(token).to.exist;
      });
  
      cy.get('#entity-menu').should('be.visible').click();
      cy.get('[href="/order"]').should('be.visible').click();
    });
  
    it('should create a new order', () => {
      cy.get('[data-cy="entityCreateButton"]').click();
      cy.get('[data-cy="orderDate"]').type('2024-06-30T03:12'); // Ajusta el formato de fecha y hora según sea necesario
      cy.get('[data-cy="status"]').select('PENDING');
      cy.get('[data-cy="totalAmount"]').type('100');
      cy.get('[data-cy="customer"]').type('1'); // Asumiendo que el campo 'customer' es un identificador numérico
      cy.get('#save-entity').click();
      cy.get('table').should('contain', '30 Jun 2024');
      cy.get('table').should('contain', 'PENDING');
      cy.get('table').should('contain', '100');
    });
  
    it('should edit an existing order', () => {
      cy.get('table').contains('td', '30 Jun 2024 03:12:00').parent().find('[data-cy="entityEditButton"]').click();
      cy.get('[data-cy="status"]').select('COMPLETED');
      cy.get('#save-entity').click();
      cy.get('table').should('contain', '30 Jun 2024 03:12:00');
      cy.get('table').should('contain', 'COMPLETED');
    });
  
    it('should delete an order', () => {
      cy.get('table').contains('td', '30 Jun 2024 03:12:00').parent().find('[data-cy="entityDeleteButton"]').click();
      cy.get('[data-cy="entityConfirmDeleteButton"]').click();
      cy.get('table').should('not.contain', '30 Jun 2024 03:12:00');
    });
  });
  