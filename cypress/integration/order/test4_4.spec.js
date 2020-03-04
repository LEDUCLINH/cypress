describe("Test order page", () => {
  before('login', () => {
    cy.visit('/')
    cy.fixture("users/nguoidung.json").then(user => {
      cy.get("input#normal_login_username").type(user.username);
      cy.get("input#normal_login_password").type(user.password);
      cy.get(".innos-ui-button").click();
    })

  })
  it("Test 4_4", () => {
    cy.get('div').contains('ORDER').should('be.visible').click()
    cy.get('button[name="plus"]').first().should('be.visible').click()
    
    cy.wait(1000);
    cy.get('button[name="file"]').first().should('be.visible').click().then(() => {
      cy.get('[type="radio"]').first().should('be.visible').check()
      cy.get('.ok-btn').should('be.visible').click()
      cy.wait(1000);
      cy.get('div[col-id="note"]').eq(1).should('have.text', " (Cơm thêm)")

    })

    cy.wait(1000);
    cy.get('button[name="file"]').first().should('be.visible').click().then(() => {
      cy.get('[type="radio"]').last().should('be.visible').check()
      cy.get('.ok-btn').should('be.visible').click()
      cy.wait(1000);
      cy.get('div[col-id="note"]').eq(1).should('have.text', " (Không cơm)")
    })
  });
});
