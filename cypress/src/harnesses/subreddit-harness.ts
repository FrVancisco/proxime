import {ComponentHarness} from "./core/harness";

export class SubredditHarness extends ComponentHarness {
    static tagName: string = 'div[data-subreddit]';

    private getSubredditSelector(subredditNumber: number) {
        return this.root().eq(subredditNumber);
    }

    private upVote(subredditNumber: number): void {
        this.getSubredditSelector(subredditNumber).find('[data-event-action="upvote"]').click();
    }

    private downVote(subredditNumber: number): void {
        this.getSubredditSelector(subredditNumber).find('[data-event-action="downvote"]').click();
    }

    private checkForPromotion(subredditNumber: number): Cypress.Chainable<number> {
        return this.getSubredditSelector(subredditNumber).find('[class="tagline "]')
            .invoke('text')
            .then((text: string): number => {
                if (text.includes('promoted')) {
                    return subredditNumber + 1;
                }
                return subredditNumber;
            });
    }

    thumbsIfTitleContains(subredditNumber: number, title: string): this {
        this.checkForPromotion(subredditNumber).then((updatedSubredditNumber: number): void => {
            this.getSubredditSelector(updatedSubredditNumber).find('[data-event-action="title"]')
                .invoke('text')
                .then((text: string): void => {
                    text.includes(title) ? this.upVote(updatedSubredditNumber) : this.downVote(updatedSubredditNumber);
                });
        });
        return this;
    }
}