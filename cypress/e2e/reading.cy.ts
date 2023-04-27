describe("Home Page Test", () => {
    beforeEach(() => {
      cy.visit("/");
      cy.viewport(1920, 1080)

    });
  

    it("Add a reading fail because of no image and low reading value", () => {

      cy.getByData('hometile3').eq(0).click({ force: true })

      
    });

    

    
  

  });
  
  export {}; 