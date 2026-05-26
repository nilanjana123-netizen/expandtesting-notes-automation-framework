package org.example.framework.tests.e2e;

import io.restassured.response.Response;

import org.example.framework.base.BaseTest;

import org.example.framework.pages.LoginPage;
import org.example.framework.pages.NotesPage;

import org.example.framework.tests.api.AuthApiUtils;
import org.example.framework.utils.ConfigReader;

import org.testng.Assert;
import org.testng.annotations.Test;

import static io.restassured.RestAssured.given;

public class HybridTest extends BaseTest {

    @Test
    public void hybridTest() {

        //Step 1: Login via UI 

        LoginPage loginPage = new LoginPage(driver);

        loginPage.loginUser(
                ConfigReader.getProperty("email"),
                ConfigReader.getProperty("password")
        );

        Assert.assertTrue(
                loginPage.isDashboardDisplayed(),
                "Dashboard was not displayed after login"
        );

        //Step 2: Create a note via UI

        NotesPage notesPage = new NotesPage(driver);

        String title = "Hybrid Note " + System.currentTimeMillis();

        notesPage.createNote(title, "Hybrid Description");

        Assert.assertTrue(
                notesPage.isNoteDisplayed(title),
                "Note was not visible in UI after creation"
        );

        //Step 3: Fetch note via API and extract its ID

        String token = AuthApiUtils.getToken();

        Response fetchRes =
                given()
                        .header("x-auth-token", token)
                .when()
                        .get("/notes");

        fetchRes.then().statusCode(200);

        Assert.assertTrue(
                fetchRes.asString().contains(title),
                "Note was not found via API after UI creation"
        );

        String noteId = fetchRes.jsonPath()
                .param("t", title)
                .getString("data.find { it.title == t }.id");

        Assert.assertNotNull(noteId, "Note ID could not be extracted from API response");

        //Step 4: Delete note via API 

        Response deleteRes =
                given()
                        .header("x-auth-token", token)
                .when()
                        .delete("/notes/" + noteId);

        deleteRes.then().statusCode(200);

        Assert.assertTrue(
                deleteRes.jsonPath().getBoolean("success"),
                "API delete did not return success=true"
        );

        //Step 5: Verify note no longer exists via API 

        Response checkApiRes =
                given()
                        .header("x-auth-token", token)
                .when()
                        .get("/notes");

        checkApiRes.then().statusCode(200);

        Assert.assertFalse(
                checkApiRes.asString().contains(title),
                "Deleted note still appears in API response"
        );

        //Step 6: Verify note no longer exists via UI 

        driver.navigate().refresh();

        Assert.assertTrue(
                notesPage.isNoteAbsent(title),
                "Deleted note still appears in the UI after deletion"
        );
    }
}
