describe('Entrando no site RestFull - aluguel de quartos', () => {
    beforeEach('Acessando o site', () => {
        cy.visit('https://automationintesting.online/');
    })

    it('deve entrar em contato com o hotel por meio de passagem de info COM SUCESSO', () => {
        cy.get('#name').type('Elizeu Lins')
        cy.get('#email').type('Elizeu@gmail.com')
        cy.get('#phone').type('8391122-3425')
        cy.get('#subject').type('Aqui esta uma mensagem!')
        cy.get('#description').type('Aqui esta a descrição da mensagem!');
        cy.get('#submitContact').type('button').click();
    });

    it('deve entrar em contato com o hotel por meio de passagem de info SEM SUCESSO', () => {
        cy.get('#name').type('Elizeu Lins')
        cy.get('#email').type('Elizeu@gmail.com')
        cy.get('#phone').type('3425')
        cy.get('#subject').type('Aqui esta uma mensagem!')
        cy.get('#description').type('Aqui esta a descrição da mensagem!');
        cy.get('#submitContact').type('button').click();
    });
})