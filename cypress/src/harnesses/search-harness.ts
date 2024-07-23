import {ComponentHarness} from "./core/harness";
import {InputHarness} from "./core/input-harness";

export class SearchHarness extends ComponentHarness {
    static tagName: string = 'form[id="search"]';

    typeSearch(searchInput: string) {
        new InputHarness(() => this.root().find('[type="text"]')).typeInput(searchInput);
        return this;
    }

    clickSearch() {
        new InputHarness(() => this.root().find('[type="submit"]')).clickInput();
        return this;
    }
}