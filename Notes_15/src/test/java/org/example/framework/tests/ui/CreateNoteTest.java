package org.example.framework.tests.ui;

import org.example.framework.base.BaseTest;

import org.example.framework.pages.LoginPage;
import org.example.framework.pages.NotesPage;

import org.example.framework.utils.ConfigReader;
import org.example.framework.utils.ExcelUtils;

import org.testng.Assert;
import org.testng.annotations.DataProvider;
import org.testng.annotations.Test;

public class CreateNoteTest extends BaseTest {

    @DataProvider(name = "notesData")

    public Object[][] getNotesData() {

        return ExcelUtils.getSheetData("NotesData.xlsx", "Sheet1");
    }

    @Test(dataProvider = "notesData")

    public void createNoteTest(
            String category,
            String title,
            String description,
            String expected) {

        LoginPage loginPage = new LoginPage(driver);

        loginPage.loginUser(
                ConfigReader.getProperty("email"),
                ConfigReader.getProperty("password"));

        NotesPage notesPage = new NotesPage(driver);

        String noteTitle = expected.equalsIgnoreCase("pass")
                ? title + System.currentTimeMillis()
                : title;

        notesPage.createNote(noteTitle, description);

        if (expected.equalsIgnoreCase("pass")) {

            Assert.assertTrue(
                    notesPage.isNoteDisplayed(noteTitle),
                    "Note '" + noteTitle + "' was not displayed after creation");

        } else {

            Assert.assertFalse(
                    notesPage.isNoteDisplayed(noteTitle),
                    "Invalid note '" + noteTitle + "' should not have been created");
        }
    }
}
