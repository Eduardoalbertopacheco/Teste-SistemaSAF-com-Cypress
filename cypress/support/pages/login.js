
class LoginPage {
    go() {
        cy.visit('https://saf2.dev.mcom.gov.br/')
    }

    btnEntrarComGov() {
        cy.get('a[class="br-button sign-in primary"]').click()
    }
}

export default new LoginPage()