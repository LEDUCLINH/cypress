describe('TEST EXPORT FILE EXCEL USER', function() {
  beforeEach(() => {
    cy.visit('/')
    cy.wait(1000)
    cy.fixture("users/superadmin.json").then(user => {
      cy.get("input#normal_login_username")
        .should("be.visible")
        .clear()
        .type(user.username)
      cy.get("input#normal_login_password")
        .should("be.visible")
        .clear()
        .type(user.password)

      cy.get('[htmltype="submit"]')
        .should('be.visible')
        .click()
  
      cy.url().should('eq', 'https://portal.digihcs.com/lun')
  
      cy.get('[role="button"]')
        .contains('USER')
        .click()
  
      cy.url().should('eq', 'https://portal.digihcs.com/lun/user')
      cy.wait(1000)
  })
})
  it('export file excel user', () => {
    cy.get('[name="exportUsers"]')
      .should('be.visible')
      .and('contain', 'Export File')
  })
})