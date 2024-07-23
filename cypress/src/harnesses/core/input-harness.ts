import {ComponentHarness} from "./harness";

export class InputHarness extends ComponentHarness {
    clickInput() {
        this.root().click();
        return this;
    }

    typeInput(text: string) {
        this.root().type(text);
        return this;
    }
}