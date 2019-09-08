/// <reference types="cypress" />
// @ts-check
describe('My First Test', function() {
  it('successfully loads', function() {
    cy.visit('/');
    cy.contains('Angular Games');
  });

  it('visits /games path', function() {
    cy.visit('/');
    cy.get('a[routerLink="/games"]').click();
    cy.url().should('include', '/games');
  });
});
