import { When } from "@badeball/cypress-cucumber-preprocessor";

When("I visit example.cypress.io", () => {
  cy.visit("https://example.cypress.io");
});
