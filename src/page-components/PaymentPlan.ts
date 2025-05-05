import {Locator} from "@playwright/test";
import {MatFormField} from "../page-elements/MatFormField";

export class PaymentPlan {

    private readonly _addPaymentPlan: Locator;
    private readonly _paymentItems: Supplier<Locator>;
    private readonly _description: FunctionType<Locator, MatFormField>;
    private readonly _price: FunctionType<Locator, MatFormField>;

    constructor(locator: Locator) {
        this._addPaymentPlan = locator.getByText('Add', { exact: true })
        this._paymentItems = () => locator.locator('/div[contains(@class,\'item-row\')]')
        this._description = (locator: Locator) => new MatFormField(locator, 'Description');
        this._price = (locator: Locator) => new MatFormField(locator, 'Price');
    }

    async paymentPlanItems(itemsNumber: number) {
        if (itemsNumber == 1) {
            return;
        }
        for (let i = 0; i < itemsNumber; i++) {
            await this._addPaymentPlan.click();
        }
    }

    async fillPaymentPlanItemWithDetails(details: [string, string]) {
        var itemsOnPage = await this._paymentItems().all();
        for (let itemLocator of itemsOnPage) {

        }
    }

    async addPayments(payments: [string, string][]) {
        await this.paymentPlanItems(payments.length);
        for (let i = 0; i < payments.length; i++) {
            await this.fillPaymentPlanItemWithDetails(payments[i]);
        }
    }


}