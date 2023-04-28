describe("Home Page Test", () => {
    beforeEach(() => {
      cy.visit("/");
      cy.viewport(1920, 1080)

    });
  

    it("Add a reading fail because of no image and low reading value", () => {

      cy.getByData('hometile3').eq(0).click({ force: true })
      cy.getByData("navbutton").eq(2).click({ force: true })
      cy.getByData("hometile4").click()
      cy.getByData("hometile4").type("0.1")
      cy.getByData("testbutton").click()
      cy.get(".text-black-500.text-xs").should("have.text", "Reading Image Reading Value *Must be greater than previous reading with a maximum of 2 decimal places");

      cy.getByData("hometile4").click()
      cy.getByData("hometile4").clear()
      cy.getByData("hometile4").type("9")
      cy.getByData("testbutton").click()
      cy.getByData("readingerrorrr").should("have.text", "Image is Required");

      
    });

    

  });
  
  export {}; 