describe('abrindo o site Luama', () => {
  it('abrindo o site', () => {
    cy.visit('https://www.demoblaze.com/')
  });

  it('realizando a inscricao', () => {
    cy.get('#signin2').click()//apertando no nome signin
    cy.get('#sign-username').type("Elizeu lins");//nome
    cy.get('#sign-password').type("123");
  });

  //inserindo: nome, email, telefone, email e mensagem. 
  /*it('preenchendo os campos para alugar um quarto', () => {
    cy.get('#name').type("Elizeu lins");
    //cy.get('#email').type("elizeulins@hotmail.com");
  });*/
})