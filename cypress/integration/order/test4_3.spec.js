import { loginPage } from '../common'
const notification = '.innos-ui-translate-notification'
describe('Test order page', () => {
  beforeEach(() => {
    loginPage()
    cy.wait(3000)
  })
  it('Test 4_3 user cancel order', () => {
    cy.get('button[name="plus"]').first()
      .click({ force: true })
    cy.wait(3000)
    cy.get('button[name="minus"]').first()
      .click({ force: true })
    cy.get(notification)
      .should('contain', 'Success')
  })
})