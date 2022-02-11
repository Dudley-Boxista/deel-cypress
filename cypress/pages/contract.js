class Contract {
  clickMenuCreateContract() {
    cy.contains('[class="sidebar-option-p"]', 'Create A Contract').click()
    return this
  }

  clickMenu() {
    cy.get('[class="button mt-4 mr-7"]').click()
    return this
  }

  clickFixedRate() {
    cy.contains('Fixed Rate').click()
    return this
  }
}

module.exports = Contract