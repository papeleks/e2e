import {Locator, Page} from "@playwright/test";

export class Table {

    private readonly _tableLocator: Locator;
    private readonly _page: Page;

    constructor(locator: Locator, page: Page) {
        this._tableLocator = locator;
        this._page = page;
    }



}