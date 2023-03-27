
import loginPage from '../support/pages/login'

describe('HU01_REALIZAR_LOGIN', function () {

    context('Critério 01', function () {
        it('Autenticação com sucesso', function () {
            loginPage.go()
            loginPage.btnEntrarComGov()
            cy.loginSucesso('04492557199', 'Teste@123!@#')
            cy.get('div[class="header-title"]')
                .should('be.visible')
        })
    })

    context.only('Critério 02', function () {
        it('Guardar os dados do usuário logado', function () {
            loginPage.go()
            loginPage.btnEntrarComGov()
            cy.loginSucesso('04492557199', 'Teste@123!@#')
            loginPage.homeMenuHamburguer()
            loginPage.BtnPerfil()
            loginPage.btnUserNotVinc()
            loginPage.btnViewUserNotVinc()
        })
    })

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

    context('Critério 05', function () {
        it('Usuário sem Perfil e sem Empresa', function () {
            loginPage.go()
            loginPage.btnEntrarComGov()
            cy.loginSucesso('06189602010', 'Eduardo@1702')
            loginPage.homeMenuHamburguer()
            loginPage.BtnPerfil()
            cy.visit('/pagina-inicial-solicitar-perfil')
            loginPage.containsBtnSolicitarPerfil()
        })
    })

    context('Critério 06', function () {
        it('Solicitar Perfil', function () {
            loginPage.go()
            loginPage.btnEntrarComGov()
            cy.loginSucesso('061.896.020-10', 'Eduardo@1702')
            cy.visit('/solicitar-perfil')
            loginPage.solAcessoTotal()
            loginPage.expectedText()
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
})

