import {Given, Then, When} from "cypress-cucumber-preprocessor/steps";

Given(/I am on login page/, () => {
    // cy.log(Cypress.config().baseUrl)
    cy.visit(Cypress.config().baseUrl)
})

When(/I login with "(.*?)" and "(.*?)"/, (username, userpassword) => {
    cy.get('a#Login').should('be.visible')
    cy.contains('Login').click()
    cy.wait(3000)
    cy.get('#email').should('be.visible')
    cy.get('#email').type(username)
    cy.log('env:' , Cypress.config().env)
    if(Cypress.config().env == 'reece_stage' || 'reece_test') {
        userpassword = Cypress.config().password
        cy.log('password:', userpassword)
    }
    cy.get('#password').type(userpassword)
    cy.get('#login').click()
    // cy.wait(3000)

})

Then(/I should be on max myaccount home page/, () => {
    cy.get('login-page__section-login').should('not.exist')
    cy.xpath("string(//div[contains(@class, 'account-home-section')][1]//h4)").should('equal', 'My Projects')
})

Then(/I logout/, () => {
    cy.get('.page-header__top').within(($header) => {
        cy.get('a#Logout').click({ force: true })

    })
})