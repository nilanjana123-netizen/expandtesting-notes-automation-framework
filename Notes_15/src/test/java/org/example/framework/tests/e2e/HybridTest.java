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

        // Step 1: Login via UI

        LoginPage loginPage = new LoginPage(driver);

        loginPage.loginUser(
                ConfigReader.getProperty("email"),
                ConfigReader.getProperty("password")
        );

        Assert.assertTrue(
                loginPage.isDashboardDisplayed(),
                "Dashboard was not displayed after login"
        );

        // Step 2: Create a note via UI

        NotesPage notesPage = new NotesPage(driver);

        String title = "Hybrid Note " + System.currentTimeMillis();

        notesPage.createNote(title, "Hybrid Description");

        Assert.assertTrue(
                notesPage.isNoteDisplayed(title),
                "Hybrid note was not visible in UI after creation"
        );

        // Step 3: Verify the same note exists via API

        String token = AuthApiUtils.getToken();

        Response res =

                given()

                        .header("x-auth-token", token)

                .when()

                        .get("/notes");

        res.then().statusCode(200);

        Assert.assertTrue(
                res.asString().contains(title),
                "Hybrid note was not found through API after UI creation"
        );
    }
}
