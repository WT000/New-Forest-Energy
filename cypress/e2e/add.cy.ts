describe("Add home Test", () => {
  beforeEach(() => {
    cy.visit("homes/new");
    cy.viewport(1920, 1080);
  });

  it("add a home", () => {
    cy.url().should("eq", Cypress.config().baseUrl + "/homes/new");
    cy.getByData("hometile4").eq(0).click();
    cy.getByData("hometile4").eq(0).type("NewTestHome");
    cy.getByData("hometile4").eq(1).click();
    cy.getByData("hometile4").eq(1).type("delegate1@delagates.com");
    cy.getByData("hometile4").eq(2).click();
    cy.getByData("hometile4").eq(2).type("6");
    cy.getByData("hometile4").eq(3).click();
    cy.getByData("hometile4").eq(3).type("0.65");
    cy.getByData("hometile4").eq(4).click();
    cy.getByData("hometile4").eq(4).type("0.70");
    cy.getByData("hometile4").eq(5).click();
    cy.getByData("hometile4")
      .eq(5)
      .type("delegate2@delagates.com, delegate3@delagates.com");
    cy.getByData("instructionsinput").eq(0).click()
    cy.getByData("instructionsinput").eq(0).type("instructions");
    cy.getByData("testbutton").click();
  });

  it("validation for adding a home ", () => {
    cy.url().should("eq", Cypress.config().baseUrl + "/homes/new");
    cy.getByData("hometile4").eq(0).click();
    // checking that the name for the home is at least 4 letters long
    cy.getByData("hometile4").eq(0).type("New");
    cy.getByData("hometile4").eq(1).click();
    // checking for actual signed up user
    cy.getByData("hometile4").eq(1).type("delegate1@f.com");

    cy.getByData("hometile4").eq(2).click();
    // beds must be at least 1
    cy.getByData("hometile4").eq(2).type("-2");
    cy.getByData("hometile4").eq(3).click();
    cy.getByData("hometile4").eq(3).type("-0.65");
    cy.getByData("hometile4").eq(4).click();
    cy.getByData("hometile4").eq(4).type("-0.70");

    cy.getByData("testbutton").click();

    cy.getByData("errormessage").should(
      "have.text",
      "Home Name *Must be at least 4 characters.Homeowner *Must be a signed-up user.Total Beds *Must be at least 1 and whole.Cost Buffer (per day) *Must be at least £0.Energy Tariff (per Kwh) *Must be at least £0.01.Delegate Emails (comma separated) "
    );
  });
});

export {};
