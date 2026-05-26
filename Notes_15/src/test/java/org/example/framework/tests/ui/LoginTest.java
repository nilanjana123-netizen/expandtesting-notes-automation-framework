package org.example.framework.tests.ui;

import org.example.framework.base.BaseTest;
import org.example.framework.pages.LoginPage;
import org.example.framework.utils.ExcelUtils;

import org.testng.Assert;
import org.testng.annotations.DataProvider;
import org.testng.annotations.Test;

public class LoginTest extends BaseTest {

    @DataProvider(name = "loginData")

    public Object[][] loginData() {

        return ExcelUtils.getSheetData("LoginData.xlsx", "Sheet1");
    }

    @Test(dataProvider = "loginData")

    public void loginTest(String email, String password, String expected) {

        LoginPage page = new LoginPage(driver);

        page.loginUser(email, password);

        if (expected.equalsIgnoreCase("pass")) {

            Assert.assertTrue(
                    page.isDashboardDisplayed(),
                    "Dashboard was not displayed after valid login");

        } else {

            Assert.assertTrue(
                    page.isErrorMessageDisplayed(),
                    "Error message was not displayed for invalid login");
        }
    }
}
