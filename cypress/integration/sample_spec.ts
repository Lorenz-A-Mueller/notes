
describe('The page should load', ()=> {
    it('Finds the line "Notes" on the page', ()=> {
        cy.visit('http://localhost:4200');
        cy.contains('Notes')
    })
})