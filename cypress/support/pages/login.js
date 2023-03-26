
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
        cy.contains('span[class="content"]', 'Solicitar Perfil')
            .should('be.visible')
    }

    BtnSolicitarPerfil() {
        cy.contains('li > .menu-item > .content')
            .click()
    }
}

export default new LoginPage()