describe('Trang Report', () => {
    beforeEach('login', () => {
         cy.login('superadmin')
    })
    
    it('Xuat file excel', () => {
        cy.contains('REPORT').click()
        cy.url().should('include', 'report')
        
        cy.contains('Export File')
          .should('be.visible')
          .click();

        cy.contains('Success')
        cy.wait(2000)
        cy.contains('Mutant File')
        .should('be.visible')
        .click()
        cy.contains('Success')
    })


    it('Close Menu', () => {
        cy.contains('REPORT').click()
        cy.url().should('include', 'report')
        cy.get('.innos-ui-modal-content').should('not.be.visible')
        cy.get('button.innos-ui-button.complete-menu').should('be.visible').click()
        cy.get('.innos-ui-modal-content').should('be.visible')
        cy.get('.innos-ui-modal-body').within(() => {
            cy.contains('Confirm').should('have.length', 1)
            cy.contains('Fullname').should('have.length', 1)
            cy.contains('Action').should('have.length', 1)
        })
    
        cy.get('.innos-ui-footer').within(() => {
            cy.get('.cancel-btn').click()
        })
        cy.get('.innos-ui-modal-content').should('not.be.visible')
        cy.get('button.innos-ui-button.complete-menu').click()
        cy.get('.innos-ui-modal-content').should('be.visible')
        cy.get('.innos-ui-modal-close').click()
        cy.get('.innos-ui-modal-content').should('not.be.visible')
        // check confirm
        cy.get('.lock-menu').invoke('text').then($text => {
            if ($text === 'Lock')
             cy.get('.lock-menu').click()
            else return; 
        })
        cy.get('button.innos-ui-button.complete-menu').should('be.visible').click()
        cy.get('.ok-btn').click();
        cy.get('.innos-ui-modal-content').should('not.be.visible')
        cy.contains('Site has no menu')
    })

})
