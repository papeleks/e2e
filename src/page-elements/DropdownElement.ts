import {Locator, Page} from "@playwright/test";

export class DropdownElement {

    private readonly _rootElement: Locator;
    private readonly option: Locator;

    public constructor(locator: Locator, page: Page) {
        this._rootElement = locator;
        this.option = page.getByRole('option')
    }

    public async selectOption(option: string) {
        this.option.filter({hasText: option});
    }

}