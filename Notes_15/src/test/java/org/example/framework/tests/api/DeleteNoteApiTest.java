package org.example.framework.tests.api;

import io.restassured.response.Response;

import org.testng.Assert;
import org.testng.annotations.Test;

import static io.restassured.RestAssured.given;

public class DeleteNoteApiTest {

    @Test

    public void deleteNoteApiTest() {

        String token = AuthApiUtils.getToken();

        String title = "DeleteApiNote" + System.currentTimeMillis();

        Response created =

                given()

                        .header("x-auth-token", token)

                        .contentType("application/json")

                        .body("""
                                {
                                  "title":"%s",
                                  "description":"Delete API Description",
                                  "category":"Home"
                                }
                                """.formatted(title))

                .when()

                        .post("/notes");

        String id = created.jsonPath().getString("data.id");

        Assert.assertNotNull(id, "Note ID was not generated");

        Response deleted =

                given()

                        .header("x-auth-token", token)

                .when()

                        .delete("/notes/" + id);

        deleted.then().statusCode(200);
    }

    @Test

    public void deleteNonExistentNoteTest() {

        String token = AuthApiUtils.getToken();

        String fakeId = "lizard";

        Response res =

                given()

                        .header("x-auth-token", token)

                .when()

                        .delete("/notes/" + fakeId);

        res.then().statusCode(400);

        Assert.assertFalse(
                res.asString().contains("\"success\":true"),
                "Delete should not succeed for non-existent note id: " + fakeId
        );
    }
}
