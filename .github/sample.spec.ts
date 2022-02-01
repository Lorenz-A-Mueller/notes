
describe('The page should load', ()=> {
    it('Finds the line "Notes" on the page', ()=> {
        cy.visit('/');
        cy.contains('Notes')
    })
})