class ContractGeneralInfo {

  typeContractName(name) {
    cy.get('[name="name"]').type(name)
    return this
  }

  typeContractorsTaxResidence(residence) {
    cy.get('[data-qa="contractor-tax-residence"]').eq(0).click()
    cy.contains(residence).click()
    return this
  }

  typeState(state) {
    cy.get('[data-qa="contractor-tax-residence-province"]').type(`${state}{enter}`)
    return this
  }

  typeJobTitle(job) {
    cy.get('[name="jobTitle"]').type(`${job}`)
    return this
  }

  typeSeniorityLevel(level) {
    cy.get('[data-qa="selector-seniority-level"]').type(`${level}{enter}`)
    return this
  }

  typeScope(scope) {
    cy.get('[name="scope"]').type(scope)
    return this
  }

  clickStarterDate() {
    cy.get('[class="deel-ui__calendar-input-container__input_icon"]').click()
    return this
  }

  clickStarterDateDay(day) {
    cy.contains('abbr', day).click({ force: true })
    return this
  }

  clickNext() {
    cy.get('[data-qa="next"]').click()
  }

}
module.exports = ContractGeneralInfo