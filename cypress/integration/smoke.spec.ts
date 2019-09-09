/// <reference types="cypress" />
describe('My First Test', () => {
  it('successfully loads', () => {
    cy.visit('/');
    cy.contains('Angular Games');
  });

  it('visits /games path', () => {
    cy.visit('/');
    cy.get('a[routerLink="/games"]').click();
    cy.url().should('include', '/games');
  });
});
