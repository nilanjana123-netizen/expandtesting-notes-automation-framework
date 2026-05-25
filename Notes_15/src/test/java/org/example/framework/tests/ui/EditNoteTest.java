package org.example.framework.tests.ui;

import org.example.framework.base.BaseTest;

import org.example.framework.pages.LoginPage;
import org.example.framework.pages.NotesPage;

import org.example.framework.tests.api.ApiNoteUtils;
import org.example.framework.utils.ConfigReader;

import org.testng.Assert;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.Test;

public class EditNoteTest extends BaseTest {

    private String existingTitle;

    @BeforeMethod(alwaysRun = true)

    public void fetchExistingNoteTitle() {

        existingTitle = ApiNoteUtils.getFirstNoteTitle();

        Assert.assertNotNull(
                existingTitle,
                "No notes found in the account via GET /notes. "
                        + "Please make sure at least one note exists "
                        + "at https://practice.expandtesting.com/notes/app "
                        + "before running EditNoteTest."
        );
    }

    @Test

    public void editExistingNoteTest() {

        LoginPage loginPage = new LoginPage(driver);

        loginPage.loginUser(
                ConfigReader.getProperty("email"),
                ConfigReader.getProperty("password")
        );

        Assert.assertTrue(
                loginPage.isDashboardDisplayed(),
                "Dashboard not shown after login"
        );

        NotesPage notesPage = new NotesPage(driver);

        Assert.assertTrue(
                notesPage.isNoteDisplayed(existingTitle),
                "Note '" + existingTitle + "' fetched via API was not visible in the UI before editing"
        );

        String newTitle = "EditedNote_" + System.currentTimeMillis();

        String newDesc = "Updated via automation on " + System.currentTimeMillis();

        notesPage.editNoteByTitle(existingTitle, newTitle, newDesc);

        Assert.assertTrue(
                notesPage.isNoteDisplayed(newTitle),
                "Updated note title '" + newTitle + "' was not visible after editing"
        );
    }
}
