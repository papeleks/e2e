import {expect, Locator, Page} from "@playwright/test";
import {DashboardItemType} from "../enums/DashboardItems";

export class AppSidebar {

    readonly rootElement: Locator;
    readonly dashboard: Locator;
    readonly getStarted: Locator;
    readonly settlements: Locator;
    readonly wallets: Locator;
    readonly purchases: Locator;
    readonly withdrawals: Locator;
    readonly invoices: Locator;
    readonly users: Locator;

    constructor(page: Page) {
        this.rootElement = page.locator('//app-sidebar');
        this.dashboard = this.rootElement.getByRole('link', { name: 'Dashboard' });
        this.getStarted = this.rootElement.getByRole('link', { name: 'Get started' });
        this.settlements = this.rootElement.getByRole('link', { name: 'Settlements' });
        this.wallets = this.rootElement.getByRole('link', { name: 'Wallets' });
        this.purchases = this.rootElement.getByRole('link', { name: 'Purchases' });
        this.withdrawals = this.rootElement.getByRole('link', { name: 'Withdrawals' });
        this.invoices = this.rootElement.getByRole('link', { name: 'Invoices' });
        this.users = this.rootElement.getByRole('link', { name: 'Users' });
    }

    public async isDisplayed() {
        return await expect(this.rootElement).toBeVisible();
    }

    public async openItem(item: DashboardItemType) {
        const itemToOpenMap = {
            [DashboardItemType.Dashboard]: this.dashboard,
            [DashboardItemType.GetStarted]: this.getStarted,
            [DashboardItemType.Settlements]: this.settlements,
            [DashboardItemType.Wallets]: this.wallets,
            [DashboardItemType.Purchases]: this.purchases,
            [DashboardItemType.Withdrawals]: this.withdrawals,
            [DashboardItemType.Invoices]: this.invoices,
            [DashboardItemType.Users]: this.users
        };
        await itemToOpenMap[item].click();
    }
}