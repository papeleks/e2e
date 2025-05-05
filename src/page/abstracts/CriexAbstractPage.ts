import {AppSidebar} from "../../page-components/AppSidebar";
import {Page} from "@playwright/test";
import {CriexPage} from "./CriexPage";

export abstract class CriexAbstractPage implements CriexPage {

    private readonly appSidebar: AppSidebar;

    protected constructor(page: Page) {
        this.appSidebar = new AppSidebar(page);
    }

    getAppSidebar(): AppSidebar {
        return this.appSidebar;
    }

}