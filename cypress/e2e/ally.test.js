describe("Check theme for a11Y", () => {
  beforeEach(() => {
    cy.visit(`/`).assertRoute(`/`)
    cy.wait(1500)
    cy.injectAxe()
  })
  it("Has no detectable a11y violations on light theme", () => {
    cy.checkA11y()
  })
})
