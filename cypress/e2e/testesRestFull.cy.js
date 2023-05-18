describe('testando', () => {
    it('entrando no site', () => {
        cy.visit('https://automationintesting.online/');
        cy.get('#name').type('Elizeu Lins')
        cy.get('#email').type('Elizeu@gmail.com')
        cy.get('#phone').type('3425')
        cy.get('#subject').type('Aqui esta uma mensagem!')
        cy.get('#description').type('Aqui esta a descrição da mensagem!');
        cy.get('#submitContact').type('button').click();
        //cy.get('.FPdoLc').find('[name="btnK"]').click();
    })
})