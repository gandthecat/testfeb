import { match } from "assert";

describe('Countdown Timer', () => {
  //Confirm that each countdown timer field is displaying a text value
  it('Countdown values should be non-empty', () => {
    cy.visit('');
    
    cy.get(':nth-child(1) > :nth-child(3) > :nth-child(1) > :nth-child(2)').invoke('text').should('not.be.null')
    cy.get(':nth-child(3) > :nth-child(2) > :nth-child(2)').invoke('text').should('not.be.null')
    cy.get(':nth-child(3) > :nth-child(3) > :nth-child(2)').invoke('text').should('not.be.null')
    cy.get(':nth-child(4) > :nth-child(2)').invoke('text').should('not.be.null')
    cy.get(':nth-child(5) > :nth-child(2)').invoke('text').should('not.be.null')
  })

  //Confirm that each countdown timer field formats hour values correctly where applicable
  it('Check hour string values', () => {
    cy.visit('');
    
    cy.get('[data-testid="category-filter-4a2788f8-e825-4d36-9894-efd4baf1cfae"] > [data-testid="category-filter-checkbox"]').click()
    cy.get('[data-testid="category-filter-9daef0d7-bf3c-4f50-921d-8e818c60fe61"] > [data-testid="category-filter-checkbox"]').click()

    cy.get(':nth-child(1) > :nth-child(3) > :nth-child(1) > :nth-child(2)').invoke('text').should('match', /(^[0-9]h?$)||(^[0-9]m [0-9][0-9]s?$)/)
    cy.get(':nth-child(3) > :nth-child(2) > :nth-child(2)').invoke('text').should('match', /(^[0-9]h?$)||(^[0-9]m [0-9][0-9]s?$)/)
    cy.get(':nth-child(3) > :nth-child(3) > :nth-child(2)').invoke('text').should('match', /(^[0-9]h?$)||(^[0-9]m [0-9][0-9]s?$)/)
    cy.get(':nth-child(4) > :nth-child(2)').invoke('text').should('match', /(^[0-9]h?$)||(^[0-9]m [0-9][0-9]s?$)/)
    cy.get(':nth-child(5) > :nth-child(2)').invoke('text').should('match', /(^[0-9]h?$)||(^[0-9]m [0-9][0-9]s?$)/)

    cy.get('[data-testid="category-filter-4a2788f8-e825-4d36-9894-efd4baf1cfae"] > [data-testid="category-filter-checkbox"]').click()
    cy.get('[data-testid="category-filter-9daef0d7-bf3c-4f50-921d-8e818c60fe61"] > [data-testid="category-filter-checkbox"]').click()
  })

  //Confirm that each countdown timer field formats minute & second values correctly where applicable
  it('Check sec & minute string values', () => {
    cy.visit('');

    cy.get(':nth-child(1) > :nth-child(3) > :nth-child(1) > :nth-child(2)').invoke('text').should('match', /(^[0-9]m?$)||(^-[0-9]m [0-9][0-9]s?$)||(^[0-9]m [0-9][0-9]s?$)||(^-[0-9]m [0-9]s?$)/)
    cy.get(':nth-child(3) > :nth-child(2) > :nth-child(2)').invoke('text').should('match', /(^[0-9]m?$)||(^-[0-9]m [0-9][0-9]s?$)||(^[0-9]m [0-9][0-9]s?$)||(^-[0-9]m [0-9]s?$)/)
    cy.get(':nth-child(3) > :nth-child(3) > :nth-child(2)').invoke('text').should('match', /(^[0-9]m?$)||(^-[0-9]m [0-9][0-9]s?$)||(^[0-9]m [0-9][0-9]s?$)||(^-[0-9]m [0-9]s?$)/)
    cy.get(':nth-child(4) > :nth-child(2)').invoke('text').should('match', /(^[0-9]m?$)||(^-[0-9]m [0-9][0-9]s?$)||(^[0-9]m [0-9][0-9]s?$)||(^-[0-9]m [0-9]s?$)/)
    cy.get(':nth-child(5) > :nth-child(2)').invoke('text').should('match', /(^[0-9]m?$)||(^-[0-9]m [0-9][0-9]s?$)||(^[0-9]m [0-9][0-9]s?$)||(^-[0-9]m [0-9]s?$)/)
  })
});