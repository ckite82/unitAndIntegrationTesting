// https://docs.cypress.io/api/introduction/api.html

describe('calculator', () => {
  beforeEach(() => {
    cy.visit('/')
  });

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  })

  it('Should update the running total when number buttons pressed', () => {
    cy.get('#number9').click();
    cy.get('#number3').click();
    cy.get('#number4').click();
    cy.get('.display').should('contain', '934');
  });
  
  it('should show 5 in the running total when pressing 2 + 3 then =', () => {
    cy.get('#number2').click();
    cy.get('#operator_add').click();
    cy.get('#number3').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '5');
  })

  it('should show 2 in the running total when pressing 6 - 4 then =', () => {
    cy.get('#number6').click();
    cy.get('#operator_subtract').click();
    cy.get('#number4').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '2');
  })

  it('should show 3 in the running total when pressing 9 / 3 then =', () => {
    cy.get('#number9').click();
    cy.get('#operator_divide').click();
    cy.get('#number3').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '3');
  })

  it('should show 150 in the running total when pressing 15 * 10 then =', () => {
    cy.get('#number1').click();
    cy.get('#number5').click();
    cy.get('#operator_multiply').click();
    cy.get('#number1').click();
    cy.get('#number0').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '150');
  })

  it('should show 10 in the running total after multiple operations are chained together', () => {
    cy.get('#number5').click();
    cy.get('#operator_multiply').click();
    cy.get('#number2').click();
    cy.get('#operator_add').click();
    cy.get('#number2').click();
    cy.get('#number0').click();
    cy.get('#operator_divide').click();
    cy.get('#number2').click();
    cy.get('#operator_subtract').click();
    cy.get('#number5').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '10');
  })

  it('should show positive 5 as 5', () => {
    cy.get('#number5').click();
    cy.get('.display').should('contain', '5')
  })

  it('should show negative 10 as -10', () => {
    cy.get('#number1').click();
    cy.get('#number0').click();
    cy.get('#operator_subtract').click();
    cy.get('#number2').click();
    cy.get('#number0').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '-10');
  })

  it('should show 5 and a half as 5.5', () => {
    cy.get('#number1').click();
    cy.get('#number1').click();
    cy.get('#operator_divide').click();
    cy.get('#number2').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '5.5');
  })

  it('should show 1 million multiplied by 10 million as 1e+22', () => {
    cy.get('#number1').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#operator_multiply').click();
    cy.get('#number1').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '1e+22');
  })

  it('should show error if dividing by 0', () => {
    cy.get('#number1').click();
    cy.get('#number0').click();
    cy.get('#operator_divide').click();
    cy.get('#number0').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', 'error');
  })
})
