
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

    it('deve exibir mensagem de erro para o TELEFONE INCORRETO', () => {
        cy.get('#name').type('Elizeu Lins')
        cy.get('#email').type('Elizeu@gmail.com')
        cy.get('#phone').type('3425')
        cy.get('#subject').type('Aqui esta uma mensagem!')
        cy.get('#description').type('Aqui esta a descrição da mensagem!');
        cy.get('#submitContact').type('button').click();
    });

    it('deve exibir mensagem de erro para o EMAIL INCORRETO', () => {
        cy.get('#name').type('Elizeu Lins')
        cy.get('#email').type('Elizeu@')
        cy.get('#phone').type('3425')
        cy.get('#subject').type('Aqui esta uma mensagem!')
        cy.get('#description').type('Aqui esta a descrição da mensagem!');
        cy.get('#submitContact').type('button').click();
    });

    it('deve exibir mensagem de erro para preencher o campo MESSAGE', () => {
        cy.get('#name').type('Elizeu Lins')
        cy.get('#email').type('Elizeu@')
        cy.get('#phone').type('3425')
        cy.get('#subject').type('Assunto')
        cy.get('#description')
        cy.get('#submitContact').type('button').click();
    });

    it('deve exibir mensagem de erro para OS CAMPOS VAZIOS', () => {
        cy.get('#name')
        cy.get('#email')
        cy.get('#phone')
        cy.get('#subject')
        cy.get('#description')
        cy.get('#submitContact').type('button').click();
    });
})