import {ComponentHarness} from "./core/harness";

export class UserHeaderHarness extends ComponentHarness{
    static tagName: string = 'div[id="header-bottom-right"]';

    clickLogIn() {
        this.root().find('a[class="login-required login-link"]').click()
        return this;
    }

    clickLogOut() {
        this.root().find('[class="logout hover"]').click()
        return this;
    }
}
