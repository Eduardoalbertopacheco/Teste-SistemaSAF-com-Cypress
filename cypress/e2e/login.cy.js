
import loginPage from '../support/pages/login'

describe('HU01_REALIZAR_LOGIN', function () {
    context('Critério 03 CPF inválido', function () {

        it('Autenticação sem sucesso', function () {
            loginPage.go()
            loginPage.btnEntrarComGov()
            cy.logininvalido('74589657857')
        })
    })

    context('Critério 03 Senha incorreta', function () {
        it('Autenticação sem sucesso', function () {
            loginPage.go()
            loginPage.btnEntrarComGov()
            cy.senhaInvalida('04492557199', '123456')
        })
    })

    context('Critério 01', function () {
        it('Autenticação com sucesso', function () {
            loginPage.go()
            loginPage.btnEntrarComGov()
            cy.loginSucesso('04492557199', 'Teste@123!@#')

            cy.get('div[class="header-title"]')
                .should('be.visible')

        })
    })

    context('Critério 08', function () {
        it('Sair do Sistema', function () {
            loginPage.go()
            loginPage.btnEntrarComGov()
            cy.loginSucesso('04492557199', 'Teste@123!@#')

            cy.get('button[aria-label="Abrir Menu de usuário"]').click()
            cy.get('a[class="br-button sign-in secondary"]').click()

        })
    })

    context('Critério 05', function () {
        it('Usuário sem Perfil e sem Empresa', function () {
            loginPage.go()
            loginPage.btnEntrarComGov()
            cy.loginSucesso('02659415129', 'N#va2958062')

            cy.get('button[aria-label="Menu"]').click()
            cy.get('#main-navigation > div > div > nav > div > a').click()
            cy.contains('span[class="content"]', 'Solicitar Perfil')
                .should('be.visible')

        })
    })

    context.only('Critério 06', function () {
        it('Solicitar Perfil', function () {
            loginPage.go()
            loginPage.btnEntrarComGov()
            cy.loginSucesso('02659415129', 'N#va2958062')

            cy.get('button[aria-label="Menu"]').click()
            cy.get('#main-navigation > div > div > nav > div > a').click()
            cy.contains('span[class="content"]', 'Solicitar Perfil')
                .click()

            // cy.xpath('//div[1]/div[1]/div[1]/div[3]/div[1]/a[1]/span[1]')
            //     .click()

        })

    })

})

