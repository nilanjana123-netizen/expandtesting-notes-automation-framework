package org.example.framework.pages;

import org.example.framework.utils.WaitUtils;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.time.Duration;
import java.util.List;

public class NotesPage {

    private final WebDriver driver;

    public NotesPage(WebDriver driver) {

        this.driver = driver;
    }

    // locators

    private final By addBtn = By.cssSelector("[data-testid='add-new-note']");

    private final By titleBox = By.cssSelector("[data-testid='note-title']");

    private final By descBox = By.cssSelector("[data-testid='note-description']");

    private final By saveBtn = By.xpath(
            "//button[@data-testid='note-submit']"
                    + " | //button[contains(text(),'Create')]"
                    + " | //button[contains(text(),'Save')]"
                    + " | //button[contains(text(),'Update')]");

    private final By categoryDrop = By.cssSelector("[data-testid='note-category']");

    private final By adClose = By.xpath(
            "//*[self::a or self::button or self::span]"
                    + "[normalize-space(text())='Close'"
                    + " or normalize-space(text())='×'"
                    + " or @aria-label='Close']"
                    + "[not(ancestor::*[@data-testid='note-submit'])]");

    private final By modalClose = By.xpath(
            "//*[contains(@class,'modal') or contains(@class,'dialog')]"
                    + "//button[@aria-label='Close'"
                    + "       or @data-testid='note-cancel'"
                    + "       or contains(text(),'Close')"
                    + "       or contains(text(),'Cancel')"
                    + "       or contains(@class,'btn-close')]");

    private final By deleteConfirm = By.xpath(
            "//button[@data-testid='note-delete-confirm'"
                    + " or contains(text(),'Yes')"
                    + " or contains(text(),'Confirm')"
                    + " or (contains(text(),'Delete')"
                    + "     and not(@data-testid='note-delete'))]");

    private final By editConfirm = By.xpath(
            "//button[@data-testid='note-edit-confirm'"
                    + " or (contains(text(),'Yes')"
                    + "     and not(@data-testid='note-delete-confirm'))"
                    + " or contains(text(),'Save Changes')"
                    + " or contains(text(),'Confirm')]");

    // to be called from ui tests

    public void createNote(String title, String desc) {

        closeAdIfPresent();

        WaitUtils.waitForClickable(driver, addBtn).click();

        fillModal(title, desc, null);

        clickEl(saveBtn);

        sleep(1500);

        closeModalIfOpen();
    }

    public void createNote(String title, String desc, String category) {

        closeAdIfPresent();

        WaitUtils.waitForClickable(driver, addBtn).click();

        fillModal(title, desc, category);

        clickEl(saveBtn);

        sleep(1500);

        closeModalIfOpen();
    }

    public void editNoteByTitle(String oldTitle, String newTitle, String newDesc) {

        closeAdIfPresent();

        By editBtn = By.xpath(
                "//div[@data-testid='note-card-title'"
                        + " and text()='" + oldTitle + "']"
                        + "/ancestor::div[contains(@class,'card')]"
                        + "//button[@data-testid='note-edit']");

        WebElement btn = WaitUtils.waitForClickable(driver, editBtn);

        scrollTo(btn);
        jsClick(btn);

        fillModal(newTitle, newDesc, null);

        clickEl(saveBtn);

        acceptPopupIfPresent(editConfirm);

        sleep(1500);
    }

    public void deleteNoteByTitle(String title) {

        closeAdIfPresent();

        By deleteBtn = By.xpath(
                "//div[@data-testid='note-card-title'"
                        + " and text()='" + title + "']"
                        + "/ancestor::div[contains(@class,'card')]"
                        + "//button[@data-testid='note-delete']");

        WebElement btn = WaitUtils.waitForClickable(driver, deleteBtn);

        scrollTo(btn);
        jsClick(btn);

        boolean alertDone = false;

        try {

            new WebDriverWait(driver, Duration.ofSeconds(3))
                    .until(ExpectedConditions.alertIsPresent());

            driver.switchTo().alert().accept();

            alertDone = true;

        } catch (Exception ignored) {
        }

        if (!alertDone) {

            acceptPopupIfPresent(deleteConfirm);
        }

        driver.navigate().refresh();

        WaitUtils.waitForVisibility(driver, addBtn);
    }

    public boolean isNoteDisplayed(String title) {

        if (title == null || title.isEmpty())
            return false;

        By card = By.xpath(
                "//div[@data-testid='note-card-title'"
                        + " and text()='" + title + "']");

        try {

            new WebDriverWait(driver, Duration.ofSeconds(10))
                    .until(ExpectedConditions.visibilityOfElementLocated(card));

            return true;

        } catch (Exception e) {

            return false;
        }
    }

    public boolean isNoteAbsent(String title) {

        if (title == null || title.isEmpty())
            return true;

        By card = By.xpath(
                "//div[@data-testid='note-card-title'"
                        + " and text()='" + title + "']");

        try {

            return new WebDriverWait(driver, Duration.ofSeconds(10))
                    .until(ExpectedConditions.invisibilityOfElementLocated(card));

        } catch (Exception e) {

            return false;
        }
    }

    // helpers

    private void closeAdIfPresent() {

        try {

            WebElement x = new WebDriverWait(driver, Duration.ofSeconds(3))
                    .until(ExpectedConditions.elementToBeClickable(adClose));

            x.click();

            sleep(600);

        } catch (Exception ignored) {
        }
    }

    private void acceptPopupIfPresent(By locator) {

        try {

            WebElement btn = new WebDriverWait(driver, Duration.ofSeconds(3))
                    .until(ExpectedConditions.elementToBeClickable(locator));

            jsClick(btn);

            sleep(500);

        } catch (Exception ignored) {
        }
    }

    private void fillModal(String title, String desc, String category) {

        WaitUtils.waitForVisibility(driver, titleBox);

        driver.findElement(titleBox).clear();

        if (title != null && !title.isEmpty()) {
            driver.findElement(titleBox).sendKeys(title);
        }

        driver.findElement(descBox).clear();

        if (desc != null && !desc.isEmpty()) {
            driver.findElement(descBox).sendKeys(desc);
        }

        if (category != null && !category.isEmpty()) {

            List<WebElement> drops = driver.findElements(categoryDrop);

            if (!drops.isEmpty()) {
                new Select(drops.get(0)).selectByVisibleText(category);
            }
        }
    }

    private void clickEl(By locator) {

        jsClick(WaitUtils.waitForClickable(driver, locator));
    }

    private void jsClick(WebElement el) {

        ((JavascriptExecutor) driver).executeScript("arguments[0].click();", el);
    }

    private void scrollTo(WebElement el) {

        ((JavascriptExecutor) driver).executeScript("arguments[0].scrollIntoView(true);", el);
    }

    private void closeModalIfOpen() {

        try {

            List<WebElement> btns = driver.findElements(modalClose);

            if (!btns.isEmpty()) {

                jsClick(btns.get(0));

                sleep(500);
            }

        } catch (Exception ignored) {
        }
    }

    private void sleep(long ms) {

        try {
            Thread.sleep(ms);
        } catch (InterruptedException ignored) {
        }
    }
}
