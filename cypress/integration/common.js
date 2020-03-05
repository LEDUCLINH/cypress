const loginPage = () => {
    cy.visit("/");
    cy.wait(1000);
	cy.fixture("users/nguoidung.json").then(user => {
        cy.get("input#normal_login_username")
          .should("be.visible")
          .clear()
          .type(user.username);
        cy.get("input#normal_login_password")
          .should("be.visible")
          .clear()
          .type(user.password);
        cy.get(".innos-ui-button")
          .should("be.visible")
          .click();
        cy.wait(1000);
        cy.contains('ORDER')
          .should('be.visible')
          .click()
        cy.url().should('include', '/lun/order')
        /*cy.get('.innos-ui-select-selection')
          .click()
        cy.contains('Nha Trang')
          .click()*/
      })
}
module.exports = {loginPage}