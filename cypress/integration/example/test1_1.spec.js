describe("Test login page", () => {
    it("Test 1_1", () => {
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
});