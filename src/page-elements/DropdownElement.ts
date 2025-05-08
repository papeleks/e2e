import {Locator, Page} from "@playwright/test";

export class DropdownElement {

    private readonly _rootElement: Locator;
    private readonly _page: Page;

    public constructor(locator: Locator, page: Page) {
        this._rootElement = locator;
        this._page = page;
    }

    public async selectOption(option: string) {
        await this._rootElement.click();
        await this._page.waitForTimeout(2000);
        const optionsLocator = await this._page.locator("//mat-option").all();
        for (let locator of optionsLocator) {
            const optionText = await locator.textContent();
            if (optionText?.includes(option)) {
                await locator.click();
            }
        }
    }

}