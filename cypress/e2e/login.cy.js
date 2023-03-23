
import loginPage from '../support/pages/login'

describe('LOGIN', function () {
    context('Quando é inserido um CPF inválido', function () {

        it('Então não deve logar no Sistema', function () {
            loginPage.go()
            loginPage.btnEntrarComGov()
            cy.logininvalido('74589657857')

            // cy.contains('.erro > p', 'CPF informado inválido.')
            // .should('be.visible')
        })
    })

    context('Quando é inserido uma senha incorreta', function(){
        it('Então não deve logar no sistema', function(){
            loginPage.go()
            loginPage.btnEntrarComGov()
            cy.senhaInvalida('04492557199', '123456')

            // cy.contains('.erro > p', 'Usuário e/ou senha inválidos.')
            // .should('be.visible')
        })
    })

    context('Quando é inserido as crendênciais válidas', function(){
        it('Então deve realizar login com sucesso', function () {
            loginPage.go()
            loginPage.btnEntrarComGov()
            cy.loginSucesso('04492557199', 'Teste@123!@#')

            cy.get('div[class="header-title"]')
                .should('be.visible')
    
        })
    })

})



