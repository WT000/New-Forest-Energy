describe("Home Page Test", () => {
    beforeEach(() => {
      cy.visit("/");
    });
  

    it("Add a reading", () => {

      cy.getByData('hometile3').eq(0).click({ force: true })

      
    });

    

    
  

  });
  
  export {}; 