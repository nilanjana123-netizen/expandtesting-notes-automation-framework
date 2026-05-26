package org.example.framework.tests.api;

import io.restassured.response.Response;

import org.testng.Assert;
import org.testng.annotations.Test;

import static io.restassured.RestAssured.given;

public class FetchNoteApiTest {

        @Test

        public void fetchNoteApiTest() {

                String token = AuthApiUtils.getToken();

                Response res =

                                given()

                                                .header("x-auth-token", token)

                                                .when()

                                                .get("/notes");

                res.then().statusCode(200);

                Assert.assertTrue(
                                res.asString().contains("data"),
                                "Notes data was not returned");
        }

        @Test

        public void fetchNotesWithoutTokenTest() {

                Response res =

                                given()

                                                .when()

                                                .get("/notes");

                res.then().statusCode(401);

                Assert.assertTrue(
                                res.asString().contains("token"),
                                "Expected unauthorized error mentioning token");
        }
}
