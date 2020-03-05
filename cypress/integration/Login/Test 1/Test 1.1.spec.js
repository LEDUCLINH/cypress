/// <reference types="Cypress" />

describe('Lunch Login', function() {

  this.beforeEach(function() {
    cy.visit('https://portal.digihcs.com/lun')
    cy.fixture('users/nguoidung').then(function(data) {
      this.data = data
    })
  })

  it('Required username and password', function() {
    cy.get('button[htmltype=submit]').click()
    cy.get('.ant-form-explain').should('be.visible')
    cy.get('.ant-form-explain').contains('Please input your ')
  })
  
  it('Wrong username and password', function() {
    cy.get('input[placeholder=username]').type('hieu.nguyen')
    cy.get('input[placeholder=Password]').type('12345678{enter}')
    cy.get('.innos-ui-translate-notification').contains('Login Failed').should('be.visible')
  })

  it('Login with username: nguoidung, password: 12345678', function() {
    cy.get('input[placeholder=username]').type(`{selectall}${this.data.username}`)
    cy.get('input[placeholder=Password]').type(`{selectall}${this.data.password}{enter}`)
    cy.url().should('not.include', 'login')
  })
})