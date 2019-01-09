/// <reference types="Cypress" />
/* global Given, When, Then */
//
before(function () {
    cy.viewport(1280,800)

    cy.on("uncaught:exception", function () {
        // using mocha's async done callback to finish
        // this test so we prove that an uncaught exception
        // was thrown
        expect(err.message).to.include('something about error')
        done()
        return false
    })

})