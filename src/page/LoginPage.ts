import {Locator, Page} from "@playwright/test";
import {LoginModel} from "../model/LoginModel";

export class LoginPage {

    private readonly _rootElement: Locator;
    private readonly _emailId: Locator;
    private readonly _password: Locator;
    private readonly _loginButton: Locator;

    constructor(page: Page) {
        this._rootElement = page.locator('//form');
        this._emailId = this._rootElement.locator('//mat-form-field[.//*[text()=\'Email ID\']]//input');
        this._password = this._rootElement.locator('//mat-form-field[.//*[text()=\'Password\']]//input');
        this._loginButton = this._rootElement.getByRole('button', { name: 'Login' });
    }

    public async login( loginDetails: LoginModel) {
        await this._emailId.fill(loginDetails.emailId);
        await this._password.fill(loginDetails.password);
        await this._loginButton.click();
    }

}