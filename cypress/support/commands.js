// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// require('@cypress/xpath');


Cypress.Commands.add('loginSucesso', (username, password) => {
    cy.origin('https://sso.staging.acesso.gov.br/',
        { args: { username, password } }, ({ username, password }) => {

            cy.get('input[id="accountId"]', { timeout: 5000 })
                .type(username)

            cy.get('button[class="button-continuar"]').click()

            cy.get('input[id="password"]')
                .type(password)

            cy.get('button[id="submit-button"]').click()

        })
    cy.intercept('GET', '/api/login/govbr/callback?code=*').as('govbrCallback');
    cy.wait('@govbrCallback').then(({ response }) => {
        expect(response.statusCode).to.eq(200);
        localStorage.setItem('usuario', JSON.stringify(response.body.usuario));
        cy.setCookie('token', response.body.token);
        });
})

Cypress.Commands.add('logininvalido', (cpfinvalido) => {
    cy.origin('https://sso.staging.acesso.gov.br/',
        { args: { cpfinvalido } }, ({ cpfinvalido }) => {

            cy.get('input[id="accountId"]', { timeout: 5000 })
                .type(cpfinvalido)

            cy.get('button[class="button-continuar"]').click()

            cy.contains('.erro > p', 'CPF informado inválido.')
                .should('be.visible')
        })
})

Cypress.Commands.add('senhaInvalida', (username, password) => {
    cy.origin('https://sso.staging.acesso.gov.br/',
        { args: { username, password } }, ({ username, password }) => {

            cy.get('input[id="accountId"]', { timeout: 5000 })
                .type(username)

            cy.get('button[class="button-continuar"]').click()

            cy.get('input[id="password"]')
                .type(password)

            cy.get('button[id="submit-button"]').click()

            cy.contains('.erro > p', 'Usuário e/ou senha inválidos.')
                .should('be.visible')
        })
})
