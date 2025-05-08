import {Locator, Page} from "@playwright/test";
import {CriexAbstractPage} from "./abstracts/CriexAbstractPage";
import {DashboardItemType} from "../enums/DashboardItems";
import {Table} from "../page-components/Table";

export class PurchasesPage extends CriexAbstractPage {

    private readonly _newPurchase: Locator;
    private readonly _existingPurchases: Table;

    constructor(page: Page) {
        super(page);
        this._newPurchase = page.getByRole('button', { name: 'New Purchase' })
        this._existingPurchases = new Table(page.getByRole('table'), page);
    }

    async open() {
        await this.getAppSidebar().openItem(DashboardItemType.Purchases);
    }

    async createNewPurchase() {
        await this._newPurchase.click();
    }

    getExistingPurchases() {
        return this._existingPurchases;
    }

}