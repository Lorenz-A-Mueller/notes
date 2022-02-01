describe('The page should load', ()=> {
    it('Finds the line "Mietverhältnisse" on the page and checks if table loads', ()=> {
        // visits the homepage of baseUrl (defined in cypress.json)
        cy.visit('/');
        // looks for the exact string on the page
        cy.contains('Mietverhältnisse');
        // will look for the data-cy attribute on the page
        cy.get('[data-cy=search-table]').should('be.visible');

    })
})