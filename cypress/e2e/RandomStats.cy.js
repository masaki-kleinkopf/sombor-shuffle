describe('empty spec', () => {
  beforeEach(() => {
    cy.intercept("GET", "https://www.balldontlie.io/api/v1/stats?seasons[]=2020&player_ids[]=246&per_page=82", {
      statusCode:201,
      fixture:"Stats2020.json"
    })
    cy.intercept("GET", "https://www.balldontlie.io/api/v1/stats?seasons[]=2021&player_ids[]=246&per_page=82", {
      statusCode:201,
      fixture:"Stats2021.json"
    })
    cy.visit('http://localhost:3000/')
  })
  
  it('should load landing page with correct header', () => {
    cy.contains("sombor shuffle")
    cy.contains("get a random statline from Nikola Jokic's MVP seasons")
    cy.contains("points / rebounds / assists")
  })

  it('should show date, points, rebounds and assists', () => {
    cy.contains("12/22/2020")
    cy.contains("29")
    cy.contains("15")
    cy.contains("14")
  })

  it("should have button to get new random statline and a save button", () => {
    cy.get("button").first()
    cy.contains("get new random statline")
    cy.get("button").last()
    cy.contains("save this statline")
  })

  it("should be able to save a statline, with button text changing to indicate success", () => {
    cy.get("button").last().click()
    cy.contains("saved!")
  })

  it("should show show saved button only when stat has been saved", () => {
    cy.get(".show-saved-button").should("not.exist")
    cy.get("button").last().click()
    cy.get(".show-saved-button")
    cy.contains("show saved")
  })

  it("should show error if data does not retrieve correctly from the server", () => {
    cy.intercept("GET", "https://www.balldontlie.io/api/v1/stats?seasons[]=2020&player_ids[]=246&per_page=82", {
      statusCode:404,
      body:"cypress force error"
    })
    cy.contains("something went wrong!!")
  })
})