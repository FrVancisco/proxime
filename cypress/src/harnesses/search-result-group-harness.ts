import {ComponentHarness} from "./core/harness";

export class SearchResultGroupHarness extends ComponentHarness {
    static tagName: string = 'div[class="search-result-group"]';

    clickResult(result: string) {
        this.root().find('[class="search-result-header"]').contains(result).click();
        return this
    }
}