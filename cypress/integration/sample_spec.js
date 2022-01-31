
describe('The page should load', ()=> {
    it('Finds the line "Notes" on the page', ()=> {
        cy.visit('http://localhost:3000');
        cy.contains('Notes')
    })
})