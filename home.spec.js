import coursesJson from "../../data/myvalue.json"

describe('home page', () => {
  it('the h1 contains the correct text', () => {
    cy.visit('http://localhost:3000/')
    cy.get('h1')
      .should('exist')
      .contains('Testing Next.js Applications with Cypress')
  })

  it('Second test', () => {
  cy.visit('http://localhost:3000/')
  const title = coursesJson["testing-your-first-application"].title
  var genArr = Array.from({length:3},(v,k)=>k+1)
  cy.log(title)
  cy.wrap(genArr).each((index) => {
    cy.log(':nth-child(' + index + ') > dt > .ml-9')
  })
  })
  
  })
