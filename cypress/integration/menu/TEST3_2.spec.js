describe('Thêm mới một menu', () => {

    context('Thêm mới một menu với tên menu chưa có trong danh sách', () => {
        before('login', () => {
            cy.visit('https://portal.digihcs.com/lun');
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
        })
        it('Click vào danh mục Menu', () => {
            cy.contains('MENU')
                .should('be.visible')
                .click();
            cy.url().should('include', '/lun/menu');
        });
        it('Thêm menu', () => {
            cy.get('button.panel-button')
                .should('be.visible')
                .click();

            cy.get('input#name')
                .should('be.visible')
                .clear()
                .type('MenuNameTest3.2.1.1.1');
            cy.get('button.ok-btn')
                .should('be.visible')
                .click()
        });
        // it('Kiểm tra grid', () => {
        //     cy.get('div.ag-root')
        //         .should('be.visible')
        //         .should('contain', 'MenuNameTest3.2.1.1')
        // });
    })
    context('Thêm mới một menu nhưng không nhập tên menu', () => {
        before('login', () => {
            cy.visit('https://portal.digihcs.com/lun');
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
        })
        it('Click vào danh mục menu', () => {
            cy.contains('MENU')
                .should('be.visible')
                .click();
            cy.url().should('include', '/lun/menu');
        });
        it('Thêm menu', () => {
            cy.get('button.panel-button')
                .should('be.visible')
                .click();

            cy.get('input#name')
                .should('be.visible')
                .clear()
            cy.get('button.ok-btn')
                .contains('Add')
                .should('be.visible')
                .click()
            cy.get('div.innos-ui-form-item-wrapper')
                .should('be.visible')
                .should('have.class', 'has-error');
            cy.get('div.count')
                .should('be.visible')
                .should('contain', '1');
            cy.get('div.left>span')
                .should('be.visible')
                .click()

            cy.get('div.item')
                .should('be.visible')
                .should('contain', 'Input menu name');

        });
    })
    context('Hủy thêm menu', () => {
        before('login', () => {
            cy.visit('https://portal.digihcs.com/lun');
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
        })
        it('Click vào danh mục Menu', () => {
            cy.contains('MENU')
                .should('be.visible')
                .click();
            cy.url().should('include', '/lun/menu');
        });
        it('Hủy thêm menu bằng nút Cancel ', () => {
            cy.get('button.panel-button')
                .should('be.visible')
                .click();

            cy.get('input#name')
                .should('be.visible')
                .clear()
                .type('MenuNameTest3.2')
            cy.get('button.cancel-btn')
                .contains('Cancel')
                .should('be.visible')
                .click()
            cy.get('div.innos-ui-modal-mask')
                .should('have.class', 'innos-ui-modal-mask-hidden');
        });
        it('Hủy thêm menu bằng dấu "X" ', () => {
            cy.get('button.panel-button')
                .should('be.visible')
                .click();

            cy.get('input#name')
                .should('be.visible')
                .clear()
                .type('MenuNameTest3.2')
            cy.get('button.innos-ui-modal-close')
                .should('be.visible')
                .click()
            cy.get('div.innos-ui-modal-mask')
                .should('have.class', 'innos-ui-modal-mask-hidden');
        });
    })
})