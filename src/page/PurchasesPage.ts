import {Locator, Page} from "@playwright/test";
import { CriexAbstractPage } from "./abstracts/CriexAbstractPage";

export class PurchasesPage extends CriexAbstractPage {

    private readonly _newPurchase: Locator;

    constructor(page: Page) {
        super(page);
        this._newPurchase = page.getByRole('button', { name: 'New Purchase' })
    }

    async createNewPurchase() {
        await this._newPurchase.click();
    }

    get newPurchase(): Locator {
        return this._newPurchase;
    }
}