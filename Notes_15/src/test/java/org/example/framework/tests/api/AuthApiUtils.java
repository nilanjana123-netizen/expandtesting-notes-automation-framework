package org.example.framework.tests.api;

import io.restassured.RestAssured;

import io.restassured.response.Response;

public class AuthApiUtils {

    static {

        RestAssured.baseURI =
                "https://practice.expandtesting.com/notes/api";
    }

    public static String getToken() {

        Response res =

                RestAssured
                        .given()

                        .contentType("application/json")

                        .body("""
                                {
                                  "email":"apple1@gmail.com",
                                  "password":"1apple"
                                }
                                """)

                        .when()

                        .post("/users/login");

        res.then().statusCode(200);

        String token = res.jsonPath().getString("data.token");

        if (token == null || token.isEmpty()) {

            throw new RuntimeException("Authentication token was not generated");
        }

        return token;
    }
}
