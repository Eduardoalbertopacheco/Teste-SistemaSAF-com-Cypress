
import loginPage from '../support/pages/login'
describe('HU03_LISTAR_USUÁRIOS_VINCULADOS', function () {
    context('Critério 01', function () {

        it('Listar Usuário Vinculado com Sucesso', function () {
            loginPage.go()
            loginPage.btnEntrarComGov()
            cy.loginSucesso('04492557199', 'Teste@123!@#')
            loginPage.homeMenuHamburguer()
            loginPage.BtnPerfil()

            cy.xpath('//span[contains(.,"Usuários Vinculados")]').click()

            cy.get('table tbody tr').should('be.visible')

            cy.contains('table thead tr th', 'Ação').should('be.visible')
            cy.contains('table thead tr th', 'Nome').should('be.visible')
            cy.contains('table thead tr th', 'Perfil Vinculado').should('be.visible')
            cy.contains('table thead tr th', 'Situação').should('be.visible')

            // cy.contains('table tbody tr', 'Cláudio Calebe Mendes')
            //     .then(function (item) {
            //         item.find('.fa-eye').trigger('click');
            //     })
        })
    })
    context('Cenário 02', function () {

        it('Consultar Usuário com Sucesso', function () {

            loginPage.go()
            loginPage.btnEntrarComGov()
            cy.loginSucesso('04492557199', 'Teste@123!@#')

            loginPage.homeMenuHamburguer()
            loginPage.BtnPerfil()

            cy.xpath('//span[contains(.,"Usuários Vinculados")]').click()

            cy.get('button[aria-label="Abrir busca"]').click()
            cy.get('input[id="no_usuario"]').type('Patrícia Adriana Perfil Consulta Geral')
            cy.get('button[aria-label="Buscar"]').click()

            cy.contains('table tbody tr', 'Patrícia Adriana Perfil Consulta Geral')
                .should('be.visible')
    
        })
    })

    context('Cenário 03', function () {

        it('Consultar Usuário sem Sucesso', function () {
            loginPage.go()
            loginPage.btnEntrarComGov()
            cy.loginSucesso('04492557199', 'Teste@123!@#')

            loginPage.homeMenuHamburguer()
            loginPage.BtnPerfil()

            cy.xpath('//span[contains(.,"Usuários Vinculados")]').click()

            cy.get('button[aria-label="Abrir busca"]').click()
            cy.get('input[id="no_usuario"]').type('Teste com Cypress')
            cy.get('button[aria-label="Buscar"]').click()
            cy.contains('table tbody tr', 'Nenhum registro encontrado')
                .should('be.visible')
        })

        
    })






})
