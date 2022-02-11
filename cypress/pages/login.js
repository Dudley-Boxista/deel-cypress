class Login {

    typeEmail(email) {
        cy.get('[name="email"]').type(email)
        return this
    }

    typePassword(password) {
        cy.get('[name="password"]').type(password)
        return this
    }

    clickLogin() {
        cy.get('[data-qa="log-in"]').click()
        return this
    }
}

module.exports = Login