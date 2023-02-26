/// <reference types="cypress" />

describe('Category Filters', () => {
  //For each filtered type
  //Confirm that where only Greyhound/thoroughbred/harness checkbox is checked, that the other checkboxes are off
  //Confirm that each race number displays the correct formatting (R1,R2,etc)
  //Confirm that the location values are in alpha characters
  it('Filter greyhound', () => {
    cy.visit('');
    
    cy.get('[data-testid="category-filter-4a2788f8-e825-4d36-9894-efd4baf1cfae"] > [data-testid="category-filter-checkbox"]').click()
    cy.get('[data-testid="category-filter-161d9be2-e909-4326-8c2c-35ed71fb460b"] > [data-testid="category-filter-checkbox"]').click()

    cy.get('[data-testid="category-filter-4a2788f8-e825-4d36-9894-efd4baf1cfae"] > [data-testid="category-filter-checkbox"]').should('not.be.checked')
    cy.get('[data-testid="category-filter-161d9be2-e909-4326-8c2c-35ed71fb460b"] > [data-testid="category-filter-checkbox"]').should('not.be.checked')
    cy.get('[data-testid="category-filter-9daef0d7-bf3c-4f50-921d-8e818c60fe61"] > [data-testid="category-filter-checkbox"]').should('be.checked')

    cy.get(':nth-child(1) > .race-name > .race-number').invoke('text').should('match', /^R[0-9][0-9]?$/)
    cy.get(':nth-child(1) > .race-name > p').invoke('text').should('match', /[a-zA-Z ]*$/)

    cy.get(':nth-child(2) > .race-name > .race-number').invoke('text').should('match', /^R[0-9][0-9]?$/)
    cy.get(':nth-child(2) > .race-name > p').invoke('text').should('match', /[a-zA-Z ]*$/)

    cy.get(':nth-child(3) > .race-name > .race-number').invoke('text').should('match', /^R[0-9][0-9]?$/)
    cy.get(':nth-child(3) > .race-name > p').invoke('text').should('match', /[a-zA-Z ]*$/)

    cy.get(':nth-child(4) > .race-name > .race-number').invoke('text').should('match', /^R[0-9][0-9]?$/)
    cy.get(':nth-child(4) > .race-name > p').invoke('text').should('match', /[a-zA-Z ]*$/)

    cy.get(':nth-child(5) > .race-name > .race-number').invoke('text').should('match', /^R[0-9][0-9]?$/)
    cy.get(':nth-child(5) > .race-name > p').invoke('text').should('match', /[a-zA-Z ]*$/)

    cy.get('[data-testid="category-filter-4a2788f8-e825-4d36-9894-efd4baf1cfae"] > [data-testid="category-filter-checkbox"]').click()
    cy.get('[data-testid="category-filter-161d9be2-e909-4326-8c2c-35ed71fb460b"] > [data-testid="category-filter-checkbox"]').click()

    cy.get('[data-testid="category-filter-4a2788f8-e825-4d36-9894-efd4baf1cfae"] > [data-testid="category-filter-checkbox"]').should('be.checked')
    cy.get('[data-testid="category-filter-161d9be2-e909-4326-8c2c-35ed71fb460b"] > [data-testid="category-filter-checkbox"]').should('be.checked')
    cy.get('[data-testid="category-filter-9daef0d7-bf3c-4f50-921d-8e818c60fe61"] > [data-testid="category-filter-checkbox"]').should('be.checked')
  })

  it('Filter thoroughbred', () => {
    cy.visit('');
    
    cy.get('[data-testid="category-filter-9daef0d7-bf3c-4f50-921d-8e818c60fe61"] > [data-testid="category-filter-checkbox"]').click()
    cy.get('[data-testid="category-filter-161d9be2-e909-4326-8c2c-35ed71fb460b"] > [data-testid="category-filter-checkbox"]').click()

    cy.get('[data-testid="category-filter-4a2788f8-e825-4d36-9894-efd4baf1cfae"] > [data-testid="category-filter-checkbox"]').should('be.checked')
    cy.get('[data-testid="category-filter-161d9be2-e909-4326-8c2c-35ed71fb460b"] > [data-testid="category-filter-checkbox"]').should('not.be.checked')
    cy.get('[data-testid="category-filter-9daef0d7-bf3c-4f50-921d-8e818c60fe61"] > [data-testid="category-filter-checkbox"]').should('not.be.checked')

    cy.get(':nth-child(1) > .race-name > .race-number').invoke('text').should('match', /^R[0-9][0-9]?$/)
    cy.get(':nth-child(1) > .race-name > p').invoke('text').should('match', /[a-zA-Z ]*$/)

    cy.get(':nth-child(2) > .race-name > .race-number').invoke('text').should('match', /^R[0-9][0-9]?$/)
    cy.get(':nth-child(2) > .race-name > p').invoke('text').should('match', /[a-zA-Z ]*$/)

    cy.get(':nth-child(3) > .race-name > .race-number').invoke('text').should('match', /^R[0-9][0-9]?$/)
    cy.get(':nth-child(3) > .race-name > p').invoke('text').should('match', /[a-zA-Z ]*$/)

    cy.get(':nth-child(4) > .race-name > .race-number').invoke('text').should('match', /^R[0-9][0-9]?$/)
    cy.get(':nth-child(4) > .race-name > p').invoke('text').should('match', /[a-zA-Z ]*$/)

    cy.get(':nth-child(5) > .race-name > .race-number').invoke('text').should('match', /^R[0-9][0-9]?$/)
    cy.get(':nth-child(5) > .race-name > p').invoke('text').should('match', /[a-zA-Z ]*$/)

    cy.get('[data-testid="category-filter-9daef0d7-bf3c-4f50-921d-8e818c60fe61"] > [data-testid="category-filter-checkbox"]').click()
    cy.get('[data-testid="category-filter-161d9be2-e909-4326-8c2c-35ed71fb460b"] > [data-testid="category-filter-checkbox"]').click()
    
    cy.get('[data-testid="category-filter-4a2788f8-e825-4d36-9894-efd4baf1cfae"] > [data-testid="category-filter-checkbox"]').should('be.checked')
    cy.get('[data-testid="category-filter-161d9be2-e909-4326-8c2c-35ed71fb460b"] > [data-testid="category-filter-checkbox"]').should('be.checked')
    cy.get('[data-testid="category-filter-9daef0d7-bf3c-4f50-921d-8e818c60fe61"] > [data-testid="category-filter-checkbox"]').should('be.checked')
  })

  it('Filter harness', () => {
    cy.visit('');

    cy.get('[data-testid="category-filter-4a2788f8-e825-4d36-9894-efd4baf1cfae"] > [data-testid="category-filter-checkbox"]').click()
    cy.get('[data-testid="category-filter-9daef0d7-bf3c-4f50-921d-8e818c60fe61"] > [data-testid="category-filter-checkbox"]').click()

    cy.get('[data-testid="category-filter-4a2788f8-e825-4d36-9894-efd4baf1cfae"] > [data-testid="category-filter-checkbox"]').should('not.be.checked')
    cy.get('[data-testid="category-filter-161d9be2-e909-4326-8c2c-35ed71fb460b"] > [data-testid="category-filter-checkbox"]').should('be.checked')
    cy.get('[data-testid="category-filter-9daef0d7-bf3c-4f50-921d-8e818c60fe61"] > [data-testid="category-filter-checkbox"]').should('not.be.checked')

    cy.get(':nth-child(1) > .race-name > .race-number').invoke('text').should('match', /^R[0-9][0-9]?$/)
    cy.get(':nth-child(1) > .race-name > p').invoke('text').should('match', /[a-zA-Z ]*$/)

    cy.get(':nth-child(2) > .race-name > .race-number').invoke('text').should('match', /^R[0-9][0-9]?$/)
    cy.get(':nth-child(2) > .race-name > p').invoke('text').should('match', /[a-zA-Z ]*$/)

    cy.get(':nth-child(3) > .race-name > .race-number').invoke('text').should('match', /^R[0-9][0-9]?$/)
    cy.get(':nth-child(3) > .race-name > p').invoke('text').should('match', /[a-zA-Z ]*$/)

    cy.get(':nth-child(4) > .race-name > .race-number').invoke('text').should('match', /^R[0-9][0-9]?$/)
    cy.get(':nth-child(4) > .race-name > p').invoke('text').should('match', /[a-zA-Z ]*$/)

    cy.get(':nth-child(5) > .race-name > .race-number').invoke('text').should('match', /^R[0-9][0-9]?$/)
    cy.get(':nth-child(5) > .race-name > p').invoke('text').should('match', /[a-zA-Z ]*$/)

    cy.get('[data-testid="category-filter-4a2788f8-e825-4d36-9894-efd4baf1cfae"] > [data-testid="category-filter-checkbox"]').click()
    cy.get('[data-testid="category-filter-9daef0d7-bf3c-4f50-921d-8e818c60fe61"] > [data-testid="category-filter-checkbox"]').click()

    cy.get('[data-testid="category-filter-4a2788f8-e825-4d36-9894-efd4baf1cfae"] > [data-testid="category-filter-checkbox"]').should('be.checked')
    cy.get('[data-testid="category-filter-161d9be2-e909-4326-8c2c-35ed71fb460b"] > [data-testid="category-filter-checkbox"]').should('be.checked')
    cy.get('[data-testid="category-filter-9daef0d7-bf3c-4f50-921d-8e818c60fe61"] > [data-testid="category-filter-checkbox"]').should('be.checked')
  })
});