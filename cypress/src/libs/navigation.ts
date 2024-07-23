import {paths} from "./paths";

export function navigate(path: string): void {
    cy.intercept('POST', `${paths.mainNew}/api/**`).as('apiWait');

    cy.visit(path).then((): void =>{
        cy.wait('@apiWait').its('response.statusCode').should('eql', 200);
    })
}
