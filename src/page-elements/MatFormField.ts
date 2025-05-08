import {Locator} from "@playwright/test";

export class MatFormField {
    private readonly _rootLocator: Locator;

    constructor(locator: Locator, placeholder: string) {
        this._rootLocator = locator.locator(`//div[contains(@class,'mat-form-field') and .//mat-label='${placeholder}']//input`);
    }

    async fill(valueToFill: string) {
        await this._rootLocator.fill(valueToFill);
    }

    async getValue() {
        return await this._rootLocator.inputValue();
    }

}