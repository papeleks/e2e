import {AppSidebar} from "../../page-components/AppSidebar";
import {Locator, Page} from "@playwright/test";
import {CriexPage} from "./CriexPage";

export abstract class CriexAbstractPage implements CriexPage {

    private readonly _appSidebar: AppSidebar;
    private readonly _toastMessage: Locator;

    protected constructor(page: Page) {
        this._appSidebar = new AppSidebar(page);
        this._toastMessage = page.locator("//div[@id='toast-container']//div[@role='alertdialog']")
    }

    getAppSidebar(): AppSidebar {
        return this._appSidebar;
    }

    getToastMessage() {
        return this._toastMessage;
    }

}