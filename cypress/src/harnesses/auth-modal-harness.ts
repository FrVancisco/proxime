import {ComponentHarness} from "./core/harness";
import {InputHarness} from "./core/input-harness";
import {ButtonHarness} from "./core/button-harness";

export class AuthModalHarness extends ComponentHarness {
    static tagName: string = '[pageName="login_username_and_password"]';

    typeEmailOrUserName(EmailOrUserName: string) {
        new InputHarness(() => cy.get('input[id="login-username"]')).typeInput(EmailOrUserName);
        return this;
    }

    typePassword(password: string) {
        new InputHarness(() => cy.get('input[id="login-password"]')).typeInput(password);
        return this;
    }

    clickLogIn() {
        new ButtonHarness(() => cy.get('[type="button"]').last().parent()).click(true);
        return this;
    }
}
