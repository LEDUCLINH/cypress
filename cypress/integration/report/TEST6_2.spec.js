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

  it("Thay đổi số lượng món ăn", () => {
    cy.contains("REPORT").click();
    cy.wait(2000);

    cy.get(".ag-react-container>.innos-ui-button> .react-feather-icon").then(
      $el => {
        $el.first().click();

        cy.get(
          ".innos-ui-modal-body > .innos-ui-select > .innos-ui-select-selection > .innos-ui-select-selection__rendered"
        ).type("user{enter}");

        cy.get(".ok-btn > span").click();
      }
    );

    cy.get("button.lock-menu").then($btn => {
      if ($btn.text() === "Lock") {
        $btn.click();
      }
    });

    cy.wait(3000);

    cy.get("[col-id=name]")
      .eq(1)
      .dblclick();

    cy.get(
      ".ag-row-no-focus.ag-row-even.ag-row-level-0.ag-row-position-absolute.ag-row-first>.ag-cell.ag-cell-not-inline-editing.ag-cell-with-height.ag-cell-value>.ag-react-container>.innos-ui-button> .react-feather-icon"
    ).then($el => {
      $el.first().click();
    });
  });
});
