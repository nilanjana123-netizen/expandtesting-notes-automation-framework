package org.example.framework.tests.api;

import io.restassured.response.Response;

import org.testng.Assert;
import org.testng.annotations.Test;

import static io.restassured.RestAssured.given;

public class CreateNoteApiTest {

    @Test

    public void createNoteApiTest() {

        String token = AuthApiUtils.getToken();

        String title = "Automation Note " + System.currentTimeMillis();

        Response res =

                given()

                        .header("x-auth-token", token)

                        .contentType("application/json")

                        .body("""
                                {
                                  "title":"%s",
                                  "description":"Automation Description",
                                  "category":"Home"
                                }
                                """.formatted(title))

                .when()

                        .post("/notes");

        res.then().statusCode(200);

        Assert.assertTrue(
                res.asString().contains(title),
                "Created note title not found in response"
        );
    }

    @Test

    public void createNoteEmptyTitleTest() {

        String token = AuthApiUtils.getToken();

        Response res =

                given()

                        .header("x-auth-token", token)

                        .contentType("application/json")

                        .body("""
                                {
                                  "title":"",
                                  "description":"Some description",
                                  "category":"Home"
                                }
                                """)

                .when()

                        .post("/notes");

        res.then().statusCode(400);

        Assert.assertTrue(
                res.asString().contains("\"success\":false"),
                "Expected success to be false for empty title"
        );
    }
}
