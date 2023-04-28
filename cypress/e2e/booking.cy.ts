describe("Home Page Test", () => {
    beforeEach(() => {
      cy.visit("/");
      cy.viewport(1920, 1080)

    });
  

    // it("Date failure check", () => {

    //   cy.getByData('hometile3').eq(0).click({ force: true })
    //   cy.getByData("navbutton").eq(3).click({ force: true })
    //   cy.getByData("hometile4").eq(1).click()
    //   cy.getByData("hometile4").eq(1).type("Adam")
    //   cy.getByData("testbutton").click()
    //   cy.get(".text-black-500.text-xs").should("have.text", "Home Guest Surname Start Date *Must be beyond now and not conflict.End Date *Must be beyond start and not conflict.");


      
    // });

    // it("Empty fields validation", () => {

    //     cy.getByData('hometile3').eq(0).click({ force: true })
    //     cy.getByData("navbutton").eq(3).click({ force: true })
    //     cy.getByData("hometile4").eq(1).click()
    //     cy.getByData("testbutton").click()
    //     cy.get(".text-black-500.text-xs").should("have.text", "Home Guest Surname *RequiredStart Date *Must be beyond now and not conflict.End Date *Must be beyond start and not conflict.");
  
  
        
    //   });

      it("Generate QR code for booking", () => {

        cy.visit("/bookings/adf7772");
        cy.getByData("tilebutton").eq(1).click()
        cy.getByData("deletedtoast").should('be.visible');
        cy.getByData("deletedtoast").should('have.text', 'Link copied to clipboard.')
        

        cy.getByData("deletedhomedimiss").click();

        cy.getByData("deletedtoast").should('not.be.visible')

        
      
  
  
        
      });

      it("Delete booking", () => {

        cy.visit("/bookings/adf7772");
        cy.getByData("tilebutton").eq(0).click()
        cy.url().should("eq", Cypress.config().baseUrl + "/bookings/adf7772/edit");
        cy.getByData("testbutton").eq(1).click();
  
        
      });

    

  });
  
  export {}; 