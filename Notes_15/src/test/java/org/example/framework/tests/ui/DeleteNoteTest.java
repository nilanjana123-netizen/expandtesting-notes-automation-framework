package org.example.framework.tests.ui;

import org.example.framework.base.BaseTest;

import org.example.framework.pages.LoginPage;
import org.example.framework.pages.NotesPage;

import org.example.framework.tests.api.ApiNoteUtils;
import org.example.framework.utils.ConfigReader;

import org.testng.Assert;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.Test;

public class DeleteNoteTest extends BaseTest {

        private String noteTitle;

        @BeforeMethod(alwaysRun = true)

        public void fetchExistingNoteTitle() {

                int count = ApiNoteUtils.getNoteCount();

                Assert.assertTrue(
                                count > 0,
                                "No notes found in the account via GET /notes. "
                                                + "Please make sure at least one note exists "
                                                + "at https://practice.expandtesting.com/notes/app "
                                                + "before running DeleteNoteTest.");

                noteTitle = ApiNoteUtils.getNoteTitleAt(count - 1);

                Assert.assertNotNull(
                                noteTitle,
                                "Could not read note title at index " + (count - 1));
        }

        @Test

        public void deleteExistingNoteTest() {

                LoginPage loginPage = new LoginPage(driver);

                loginPage.loginUser(
                                ConfigReader.getProperty("email"),
                                ConfigReader.getProperty("password"));

                Assert.assertTrue(
                                loginPage.isDashboardDisplayed(),
                                "Dashboard not shown after login");

                NotesPage notesPage = new NotesPage(driver);

                Assert.assertTrue(
                                notesPage.isNoteDisplayed(noteTitle),
                                "Note '" + noteTitle + "' fetched via API was not visible in the UI before deletion");

                notesPage.deleteNoteByTitle(noteTitle);

                Assert.assertFalse(
                                notesPage.isNoteDisplayed(noteTitle),
                                "Note '" + noteTitle + "' was still visible after deletion");
        }
}
