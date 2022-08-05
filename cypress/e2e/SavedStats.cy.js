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
    cy.get("button").last().click()
    cy.get(".show-saved-button")
    cy.get(".show-saved-button").click()
  })

  it('should have visited saved url', () => {
    cy.url().should('eq','http://localhost:3000/saved')
  })
  
  it('shows saved stats', () => {
    cy.contains("29")
    cy.contains("15")
    cy.contains("14")
  })

  it('should have home, delete and add buttons', () => {
    cy.get("button").first().contains("home")
    cy.get("button").eq(1).contains("delete")
    cy.get("button").last().contains("add")
    cy.get("textarea").should("have.attr","placeholder", "game notes")
  })

  it('should be able to add game note', () => {
    cy.get("textarea").type("this was a wild game, Jokic carried the team")
    cy.get("button").last().click()
    cy.get(".game-note").contains("this was a wild game, Jokic carried the team")
  })

  it('should be able to delete game note', () => {
    cy.get("textarea").type("this was a wild game, Jokic carried the team")
    cy.get("button").last().click()
    cy.get(".game-note").contains("this was a wild game, Jokic carried the team")
    cy.get("button").eq(1).click()
    cy.get(".saved-stat").should("not.exist")
  })

  it('should be able to go home', () => {
    cy.get("button").first().click()
    cy.get("button").first().contains("get new random statline")
    cy.url().should('eq','http://localhost:3000/')
  })
})