describe("Home Page Test", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.viewport(1920, 1080);
  });

  it("edits home ", () => {
    cy.getByData("hometile3").eq(0).click({ force: true });

    cy.getByData("tilebutton").eq(0).click();
    cy.getByData("hometile4").eq(3).clear();
    cy.getByData("hometile4").eq(3).type("0.90");
    cy.getByData("hometile4").eq(4).clear();
    cy.getByData("hometile4").eq(4).type("0.20");
    cy.getByData("hometile4").eq(1).clear();
    cy.getByData("hometile4").eq(1).type("delegate1@delagates.com");

    cy.getByData("testbutton").eq(0).click();

    cy.getByData("navstats").eq(0).should("have.text", "90p  ");
    cy.getByData("navstats").eq(1).should("have.text", "20p  ");
  });

  it("deletes home ", () => {
    cy.getByData("hometile3").eq(0).click({ force: true });
    cy.getByData("instructionsbutton").eq(0).click({ force: true });
    cy.getByData("tilebutton").eq(0).click({ force: true });

    cy.getByData("hometile4").eq(2).click();
    cy.getByData("hometile4").eq(2).clear();

    cy.getByData("testbutton").eq(1).click();

    cy.getByData("navstats").eq(0).should("have.text", "4  ");

    cy.getByData("hometile3").should("have.length", 4);
  });

  it("Add a delegate", () => {
    cy.getByData("hometile3").eq(0).click({ force: true });
    cy.getByData("tilebutton").eq(1).click({ force: true });
    cy.getByData("adddelegate").eq(0).click({ force: true });

    cy.getByData("hometile4").eq(5).click();
    cy.getByData("hometile4").eq(5).type("delegate4@delagates.com");

    cy.getByData("hometile4").eq(1).clear();
    cy.getByData("hometile4").eq(1).type("delegate1@delagates.com");

    cy.getByData("testbutton").eq(0).click();

    cy.getByData("delegatepic").should("exist");
    cy.getByData("delegatepic").should("have.length", 1);
    cy.getByData("delegatepic").click();

    cy.getByData("deletedtoast").should("be.visible");

    cy.getByData("deletedtoast").should(
      "have.text",
      "delegate4 (delegate4@delagates.com) has left 0 readings."
    );

    cy.getByData("deletedhomedimiss").click();

    cy.getByData("deletedtoast").should("not.be.visible");
  });
});

export {};
