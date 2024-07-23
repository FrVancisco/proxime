import {ComponentHarness} from "./harness";

export class ButtonHarness extends ComponentHarness {
    private getButton() {
        return this.root().find('button');
    }

    click(force: boolean = false) {
        this.getButton().click({ force: force });
        return this;
    }
}