/// <reference types="Cypress" />

describe('Render by user', function() {

  before(function() {
    cy.fixture('/users/nguoidung').then(function(data) {
      this.data = data
    })
  })

  it('Login with username=nguoidung, password=12345678', function() {
    cy.visit('https://portal.digihcs.com/lun')
    cy.get('input[placeholder=username]').type(this.data.username)
    cy.get('input[placeholder=Password]').type(`${this.data.password}{enter}`)
    cy.get('div[role=button]').should('have.length', 1)
    cy.get('div[role=button]').should('have.text', 'ORDER')
  })
})