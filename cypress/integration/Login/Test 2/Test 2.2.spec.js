/// <reference types="Cypress" />

describe('Render by superadmin', function() {

  before(function() {
    cy.fixture('/users/superadmin').then(function(data) {
      this.data = data
    })
  })

  it('Login with username=superadmin, password=12345678', function() {
    cy.visit('https://portal.digihcs.com/lun')
    cy.get('input[placeholder=username]').type(this.data.username)
    cy.get('input[placeholder=Password]').type(`${this.data.password}{enter}`)
    cy.get('div[role=button]').should('have.length', 5)
    cy.get('div[role=button]').each((el, index, list) => {
      const text = el.text()
      const LIST_DASHBOARD = ['MENU', 'ORDER', 'USER', 'REPORT', 'HISTORY']
      expect(LIST_DASHBOARD).to.include(text)
    })
  })
})