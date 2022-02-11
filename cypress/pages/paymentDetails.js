class PaymentDetails {
  chooseCurrency(currency) {
    cy.get('[data-qa="currency-select"]').click()
    cy.contains(currency).click()
    return this
  }

  typeRate(rate) {
    cy.get('[name="rate"]').type(rate)
    return this
  }

  choosePaymentFrequency(frequency) {
    cy.get('[data-qa="cycle-select"]').eq(1).click()
    cy.contains(frequency).click()
    return this
  }

  clickNext() {
    cy.get('[data-qa="next"]').click()

  }
}
module.exports = PaymentDetails