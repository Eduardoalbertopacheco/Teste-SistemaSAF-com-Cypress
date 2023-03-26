
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
            loginPage.btnMenuUsuario()
            loginPage.BtnSair()
        })
    })

    context('Critério 05', function () {
        it('Usuário sem Perfil e sem Empresa', function () {
            loginPage.go()
            loginPage.btnEntrarComGov()
            cy.loginSucesso('02659415129', 'N#va2958062')

            cy.visit('/solicitar-perfil')
            // loginPage.homemenuHamburguer()
            // loginPage.BtnPerfil()
            loginPage.containsBtnSolicitarPerfil()
        })
    })

    context('Critério 06', function () {
        it('Solicitar Perfil', function () {
            loginPage.go()
            loginPage.btnEntrarComGov()
            cy.loginSucesso('061.896.020-10', 'Eduardo@1702')
            cy.visit('/solicitar-perfil')

            cy.xpath('//label[@for="acesso_total"][contains(.,"Acesso total")]')
            .click()
            cy.get('.primary').click()

            cy.contains('#main-content > div.br-message.success > div.content', 'A sua solicitação para o perfil: Acesso total foi enviada com sucesso.', {timeout: 8000})
            .should('be.visible')

            // cy.get('body')
            // cy.wait(8000)

            // loginPage.homeMenuHamburguer()
            // loginPage.BtnPerfil()
            // loginPage.BtnSolicitarPerfil()
        })
    })

    context('Critério 02', function () {
        it('Guardar os dados do usuário logado', function () {
            loginPage.go()
            loginPage.btnEntrarComGov()
            cy.loginSucesso('04492557199', 'Teste@123!@#')
            loginPage.homeMenuHamburguer()
            loginPage.BtnPerfil()
            cy.xpath('//span[@class="content"][contains(.,"Usuários Não Vinculados")]').click()
            cy.xpath('(//a[@title="Visualizar"])[3]').click()

        })
    })
})

