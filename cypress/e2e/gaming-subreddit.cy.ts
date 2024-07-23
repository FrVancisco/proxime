import {UserHeaderHarness} from "../src/harnesses/user-header-harness";
import {AuthModalHarness} from "../src/harnesses/auth-modal-harness";
import {SearchHarness} from "../src/harnesses/search-harness";
import {SearchResultGroupHarness} from "../src/harnesses/search-result-group-harness";
import {SubredditHarness} from "../src/harnesses/subreddit-harness";
import {navigate} from "../src/libs/navigation";
import {paths} from "../src/libs/paths";

describe('gaming subreddit test',() => {
    const subreddit: string = 'gaming';

    it('gives thumbs if second subreddit is about Nintendo, else thumbs down', { includeShadowDom: true }, () => {
        cy.intercept('POST', '**/account/login').as('logIn');

        navigate(paths.mainOld);

        const userHeader = new UserHeaderHarness(() => cy.get(UserHeaderHarness.tagName));

        userHeader.clickLogIn();

        new AuthModalHarness(() => cy.get(AuthModalHarness.tagName))
            .isVisible()
            .typeEmailOrUserName(`${Cypress.env('TEST_USER')}`)
            .typePassword(`${Cypress.env('TEST_USER_PASSWORD')}`)
            .clickLogIn();

        cy.wait('@logIn').its('response.statusCode').should('eql', 200);

        new SearchHarness(() => cy.get(SearchHarness.tagName)).typeSearch(subreddit).clickSearch();

        new SearchResultGroupHarness(() => cy.get(SearchResultGroupHarness.tagName)).clickResult(subreddit);

        new SubredditHarness(() => cy.get(SubredditHarness.tagName))
            .thumbsIfTitleContains(2, 'Nintendo');

        userHeader.clickLogOut();
    });
});
