describe("Home Page Test", () => {
    beforeEach(() => {
      cy.visit("/");
      cy.viewport(1920, 1080)

    });
  

    it("Date failure check", () => {

      cy.getByData('hometile3').eq(0).click({ force: true })
      cy.getByData("navbutton").eq(3).click({ force: true })
      cy.getByData("hometile4").eq(1).click()
      cy.getByData("hometile4").eq(1).type("Adam")
      cy.getByData("testbutton").click()
      cy.get(".text-black-500.text-xs").should("have.text", "Home Guest Surname Start Date *Must be beyond now and not conflict.End Date *Must be beyond start and not conflict.");


      
    });

    it("Empty fields validation", () => {

        cy.getByData('hometile3').eq(0).click({ force: true })
        cy.getByData("navbutton").eq(3).click({ force: true })
        cy.getByData("hometile4").eq(1).click()
        cy.getByData("testbutton").click()
        cy.get(".text-black-500.text-xs").should("have.text", "Home Guest Surname *RequiredStart Date *Must be beyond now and not conflict.End Date *Must be beyond start and not conflict.");
  
  
        
      });

    

  });
  
  export {}; 