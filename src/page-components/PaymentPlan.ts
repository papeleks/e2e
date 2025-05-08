import {Locator} from "@playwright/test";
import {MatFormField} from "../page-elements/MatFormField";

export class PaymentPlan {

    private readonly _addPaymentPlan: Locator;
    private readonly _paymentItems: Supplier<Locator>;
    private readonly _description: FunctionType<Locator, MatFormField>;
    private readonly _price: FunctionType<Locator, MatFormField>;

    constructor(locator: Locator) {
        this._addPaymentPlan = locator.getByText('Add', { exact: true })
        this._paymentItems = () => locator.locator('//div[contains(@class,\'item-row\')]')
        this._description = (locator: Locator) => new MatFormField(locator, 'Description');
        this._price = (locator: Locator) => new MatFormField(locator, 'Price');
    }

    async paymentPlanItems(itemsNumber: number) {
        if (itemsNumber == 1) {
            return;
        }
        for (let i = 0; i < itemsNumber - 1; i++) {
            await this._addPaymentPlan.click();
        }
    }

    async fillPaymentPlanItemWithDetails(payments: [string, string][]) {
        let itemsOnPage = await this._paymentItems().all();
        if (payments.length !== itemsOnPage.length) {
            throw new Error(`Mismatch: ${payments.length} payments but ${itemsOnPage.length} items on the page.`);
        }
        for (let i = 0; i < Math.min(itemsOnPage.length, payments.length); i++) {
            let descriptionField = this._description(itemsOnPage[i]);
            let priceField = this._price(itemsOnPage[i]);
            await descriptionField.fill(payments[i][0]);
            await priceField.fill(payments[i][1]);
        }
    }

    async addPayments(payments: [string, string][]) {
        await this.paymentPlanItems(payments.length);
        await this.fillPaymentPlanItemWithDetails(payments);
    }


}