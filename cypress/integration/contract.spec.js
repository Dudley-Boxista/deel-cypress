const Login = require('../pages/login')
const Contract = require('../pages/contract')
const ContractGeneralInfo = require('../pages/contractGeneralInfo')
const PaymentDetails = require('../pages/paymentDetails')
const DefineDates = require('../pages/defineDates')
const BenefitsAndExtras = require('../pages/benefitsAndExtras')

// Sorry, didn't had the time to move all the hardcoded strings to the fixture file
describe('Contract test', () => {

  before('Login', () => {
    const login = new Login()
    cy.visit('https://app.deel.training/login')

    login.typeEmail('mvrsl@hotmail.com')
      .typePassword('Deel@training123')
      .clickLogin()

  })

  it('Create a contract', () => {
    const contract = new Contract()
    const contractGeneralInfo = new ContractGeneralInfo()
    const paymentDetails = new PaymentDetails()
    const defineDates = new DefineDates()
    const benefitsAndExtras = new BenefitsAndExtras()

    contract.clickMenu()
      .clickMenuCreateContract()
      .clickFixedRate()

    contractGeneralInfo.typeContractName('Test')
      .typeContractorsTaxResidence('United States')
      .typeState('Colorado')
      .typeScope('Test')
      .clickStarterDate()
      // If I had a bit more time I would try to do the yesterday the 
      // right way since it doens't work for first day
      .clickStarterDateDay(new Date().getDate() - 1)
      .clickNext()

    paymentDetails.chooseCurrency('GBP')
      .typeRate(1000)
      .choosePaymentFrequency('Week')
      .clickNext()

    defineDates.clickNext()

    benefitsAndExtras.clickAddSpecialClause()
      .typeSpecialClause('Test')
      .clickNext()

    // I would create a page for it too but I didn't had the time, sorry
    cy.get('[data-qa="create-contract"]').click()

  })

})
