class BenefitsAndExtras {
  clickAddSpecialClause() {
    cy.get('[data-qa="add-a-special-clause"]').click()
    return this
  }

  typeSpecialClause(specialClause) {
    cy.get('[class="textarea pt-4 pr-7 pl-7 resizable pb-4 "]').type(specialClause)
    return this
  }

  clickNext() {
    cy.get('[data-qa="next"]').click()
  }
}

module.exports = BenefitsAndExtras