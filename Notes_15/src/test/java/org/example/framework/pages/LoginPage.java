package org.example.framework.pages;

import org.example.framework.utils.WaitUtils;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;

public class LoginPage {

    private final WebDriver driver;

    public LoginPage(WebDriver driver) {

        this.driver = driver;
    }

    private final By emailBox =
            By.cssSelector("[data-testid='login-email']");

    private final By passwordBox =
            By.cssSelector("[data-testid='login-password']");

    private final By loginBtn =
            By.cssSelector("[data-testid='login-submit']");

    private final By dashboard =
            By.cssSelector("[data-testid='add-new-note']");

    private final By errorMsg =
            By.xpath(
                    "//*[contains(@class,'invalid-feedback') "
                            + "or contains(@class,'alert-danger')]"
            );

    public void loginUser(String email, String password) {

        WaitUtils.waitForVisibility(driver, emailBox);

        driver.findElement(emailBox).clear();
        driver.findElement(emailBox).sendKeys(email);

        driver.findElement(passwordBox).clear();
        driver.findElement(passwordBox).sendKeys(password);

        WaitUtils.waitForClickable(driver, loginBtn);

        ((JavascriptExecutor) driver)
                .executeScript(
                        "arguments[0].click();",
                        driver.findElement(loginBtn)
                );
    }

    public boolean isDashboardDisplayed() {

        try {

            WaitUtils.waitForVisibility(driver, dashboard);

            return driver.findElement(dashboard).isDisplayed();

        } catch (Exception e) {

            return false;
        }
    }

    public boolean isErrorMessageDisplayed() {

        try {

            Thread.sleep(2000);

            return driver.findElements(errorMsg).size() > 0;

        } catch (Exception e) {

            return false;
        }
    }
}
