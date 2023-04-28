describe("Home Page Test", () => {
    beforeEach(() => {
      cy.visit("/");

      cy.viewport(1920, 1080)
    });
  
    it("shows multiple houses", () => {

      cy.getByData("hometile3").should("have.length", 5);
      cy.getByData("navstats").eq(0).should("have.text", "5  ")

    });

    it("search bar works", () => {

      cy.getByData("hometile4").eq(0).click();
      cy.getByData("hometile4").type("bob")
      cy.getByData("hometile3").should("have.length", 1);
      cy.getByData("hometile3").should("have.length", 1).last().should("have.text","BobsSleeps: 10")


    });

    it("navbar stats contain correct stats", () => {

      cy.getByData("navstats").eq(0).should("have.text", "5  ")
      cy.getByData("navstats").eq(1).should("have.text", "3  ")
      cy.getByData("navstats").eq(2).should("have.text", "3  ")

    });

    it("delete a home", () => {

      cy.getByData('hometile3').eq(0).trigger('mouseover')
      cy.getByData('deletehome').eq(0).click({ force: true })
      cy.getByData("deletedtoast").should('be.visible');
      cy.getByData("deletedhomedimiss").click();
      cy.reload()
      cy.getByData("navstats").eq(0).should("have.text", "4  ")
      cy.getByData("navstats").eq(0).should("have.text", "4  ")
      

      
    });

    it("undo a deleted home", () => {

      cy.getByData('hometile3').eq(0).trigger('mouseover')
      cy.getByData('deletehome').eq(0).click({ force: true })
      cy.getByData("deletedtoast").should('be.visible');
      cy.getByData("deletedhomeundo").should('be.visible');
      cy.getByData("deletedhomeundo").click();
      cy.reload()
      cy.getByData("navstats").eq(0).should("have.text", "5  ")
      cy.getByData("hometile3").should("have.length", 5);

      
    });

    it("navigate to create a home page", () => {

      cy.getByData("navbutton").eq(1).click({ force: true })
      cy.url().should("eq", Cypress.config().baseUrl + "/homes/new")
      
    });

    it("navigate to home page", () => {

      cy.getByData("navbutton").eq(0).click({ force: true })
      cy.url().should("eq", Cypress.config().baseUrl + "/homes")
      
    });



    

    
  

  });
  
  export {}; 