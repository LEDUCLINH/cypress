describe("Test report page", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.wait(1000);
    cy.fixture("users/superadmin.json").then(user => {
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
    });
  });

  it("Lock/ Unlock menu", () => {
    cy.contains("REPORT").click();
    cy.wait(2000);

    cy.get("button.lock-menu").then($btn => {
      if ($btn.text() === "Lock") {
        $btn.click();
      }
    });

    cy.go("back");
    cy.contains("ORDER").click();
    cy.wait(2000);

    cy.contains("System has locked");
  });
});
