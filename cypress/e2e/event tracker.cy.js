it("should delete an event", () => {
  cy.visit("/");
  cy.get(".rbc-calendar", { timeout: 10000 }).should("be.visible");

  // 1. calendar पर click करो
  cy.get(".rbc-calendar").click(100, 120);

  // 2. event बनाओ
  cy.get('input[placeholder="Event Title"]').type("To be deleted");
  cy.get('input[placeholder="Event Location"]').type("Test");

  // 3. Save दबाओ
  cy.contains("button", "Save").click();

  // ➜ इवेंट दिखे तभी आगे बढ़ो (यही लाइन डालो)
  cy.get(".rbc-event", { timeout: 4000 }).should("exist");

  // 4. delete करो
  cy.get(".rbc-event").first().click();
  cy.get(".mm-popup__btn--danger").click();

  // 5. confirm – event गायब
  cy.get(".rbc-event").should("not.exist");
});
