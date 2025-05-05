import {test} from '@playwright/test';
import {PurchasesPage} from "../src/page/PurchasesPage";
import {LoginPage} from "../src/page/LoginPage";
import {LoginModel} from "../src/model/LoginModel";
import {PurchasePage} from "../src/page/PurchasePage";
import {PurchaseDetailsModel} from "../src/model/PurchaseDetailsModel";
import {Currencies} from "../src/enums/Currencies";

let purchasesPage: PurchasesPage;

test.beforeEach(async ({ page }) => {
  await page.goto('/');
  let loginPage = new LoginPage(page);
  await loginPage.login(new LoginModel('webchain','Parola1234!'));
  purchasesPage = new PurchasesPage(page);
});

test.describe('PurchasesPage', () => {
  test('should have app sidebar displayed', async () => {
    const appSidebar = purchasesPage.getAppSidebar();

    await appSidebar.isDisplayed();
  });

  test('should be able to create a new purchase', async ({page}) => {
    await purchasesPage.createNewPurchase();
    let purchasePage = new PurchasePage(page);
    let purchasePageDetails = new PurchaseDetailsModel(
        'AT Test',
        'eugeniu.savca@webchain.ro',
        '',
        Currencies.EUR,
        [['description','1'],['description','2']]
    );
    await purchasePage.fillDetails(purchasePageDetails);
  })



});