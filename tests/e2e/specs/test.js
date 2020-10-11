// https://docs.cypress.io/api/introduction/api.html

describe('calculator', () => {
  beforeEach(() => {
    cy.visit('/')
  });

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  })

  it('should update the display of the running total when a number button is clicked', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
    cy.get('#number4').click();
    cy.get('.display').should('contain', '24')
  })
})
