describe("Test order page", () => {
    before('login', () => {
        cy.visit('/')
        cy.fixture("users/nguoidung.json").then(user => {
            cy.get("input#normal_login_username").type(user.username);
            cy.get("input#normal_login_password").type(user.password);
            cy.get(".innos-ui-button").click();
        })

    })
    it("Test 4_5", () => {

        cy.get('div').contains('ORDER').should('be.visible').click()
        cy.get('.ant-dropdown-trigger').click().then(() => {
            cy.get('span[aria-label="vi"]').click()
            cy.wait(1000);
            cy.get('.ag-center-cols-container').children().then(($allRow) => {
                $allRow.each((index, $row) => {
                    cy.get($row).find('.ag-react-container').find('span').last().should('have.text', "Hệ thống đã khóa")
                })

            })
        })
        cy.get('.ant-dropdown-trigger').click().then(() => {
            cy.get('span[aria-label="en"]').click()
            cy.wait(1000);
            cy.get('.ag-center-cols-container').children().then(($allRow) => {
                $allRow.each((index, $row) => {
                    cy.get($row).find('.ag-react-container').find('span').last().should('have.text', "System has locked")
                })
            })
        })

    });
});
