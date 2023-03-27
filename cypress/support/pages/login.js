
class LoginPage {
    go() {
        cy.visit('https://saf2.dev.mcom.gov.br/')
    }

    btnEntrarComGov() {
        cy.get('a[class="br-button sign-in primary"]').click()
    }

    btnMenuUsuario() {
        cy.get('button[aria-label="Abrir Menu de usuário"]').click()
    }

    BtnSair() {
        cy.get('a[class="br-button sign-in secondary"]').click()
    }

    homeMenuHamburguer() {
        cy.get('button[aria-label="Menu"]').click()
    }
    BtnPerfil() {
        cy.get('#main-navigation > div > div > nav > div > a').click()
    }

    containsBtnSolicitarPerfil() {
        cy.get('#main-content > div > div:nth-child(1) > div > div:nth-child(3) > div > a > span')
            .should('be.visible')
    }

    BtnSolicitarPerfil() {
        cy.contains('li > .menu-item > .content')
            .click()
    }

    solAcessoTotal() {
        cy.xpath('//label[@for="acesso_total"][contains(.,"Acesso total")]')
                .click()
            cy.get('.primary').click()
    }

    expectedText() {
        cy.contains('#main-content > div.br-message.success > div.content', 'A sua solicitação para o perfil: Acesso total foi enviada com sucesso.', { timeout: 8000 })
                .should('be.visible')
    }

    btnUserNotVinc() {
        cy.xpath('//span[@class="content"][contains(.,"Usuários Não Vinculados")]').click()
    }

    btnViewUserNotVinc() {
        cy.xpath('(//a[@title="Visualizar"])[3]').click()
    }
}

export default new LoginPage()