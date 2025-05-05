import {Locator, Page} from "@playwright/test";
import {DropdownElement} from "../page-elements/DropdownElement";
import {PurchaseDetailsModel} from "../model/PurchaseDetailsModel";
import {PaymentPlan} from "../page-components/PaymentPlan";

export class PurchasePage {

    private readonly _cancel: Locator;
    private readonly _savePurchase: Locator;

    private readonly _fullName: Locator;
    private readonly _email: Locator;
    private readonly _phone: Locator;

    private readonly _currency: DropdownElement;
    private readonly _paymentPlan: PaymentPlan;

    constructor(page: Page) {
        this._cancel = page.getByRole('button', {name: 'Cancel'});
        this._savePurchase = page.getByRole('button', {name: 'Save Purchase'});
        this._fullName = page.locator('//div[contains(@class,\'mat-form-field-infix\') and .//mat-label=\'Full Name\']//input');
        this._email = page.locator('//div[contains(@class,\'mat-form-field-infix\') and .//mat-label=\'Email\']//input')
        this._phone = page.locator('//div[contains(@class,\'mat-form-field-infix\') and .//mat-label=\'Phone\']//input')
        this._currency = new DropdownElement(page.locator('//div[contains(@class,\'mat-form-field-infix\') and .//mat-label=\'Fiat Currency\']//mat-select'), page);
        this._paymentPlan = new PaymentPlan(page.locator('//div[contains(@class,\'payment-plan\')]'));
    }

    async fillDetails(purchaseDetails: PurchaseDetailsModel) {
        await this._fullName.fill(purchaseDetails.fullName);
        await this._email.fill(purchaseDetails.email);
        await this._phone.fill(purchaseDetails.phone);
        await this._currency.selectOption(purchaseDetails.currency.toString())
        await this._paymentPlan.addPayments(purchaseDetails.payments);
    }
}