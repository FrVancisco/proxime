export abstract class ComponentHarness {
    constructor(protected root: () => Cypress.Chainable<JQuery<HTMLElement>>) {
    }

    isVisible() {
        this.root().should('be.visible');
        return this;
    }
}