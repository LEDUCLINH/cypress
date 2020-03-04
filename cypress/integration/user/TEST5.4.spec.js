describe('TEST LOCK AND UNLOCK USER', function() {
  beforeEach(() => {
    cy.randomStr('w{12}').as('INPUT_REASON_LOCK')
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

  it('lock and unlock user', function (){
    cy.get('[name="btnLockNUnlockUser"]')
      .should('be.visible')
    
    cy.get('[name="btnLockNUnlockUser"]')
      .last()
      .click()

    cy.get('.cancel-btn')
      .should('be.visible')
      .click()

    cy.get('[name="btnLockNUnlockUser"]')
      .last()
      .click()

    cy.get('[placeholder="Input reason"]')
      .should('be.visible')
      .type(this.INPUT_REASON_LOCK)

    cy.get('.ok-btn')
      .should('be.visible')
      .click()

    cy.get('.innos-ui-translate-notification-notice')
      .should('be.visible')

    cy.wait(2500)
    cy.get('[name="btnLockNUnlockUser"]')
      .first()
      .click()

    cy.get('.innos-ui-translate-notification-notice')
      .should('be.visible')
    })
  })
