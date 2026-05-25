package org.example.framework.tests.api;

import io.restassured.response.Response;

import java.util.List;

import static io.restassured.RestAssured.given;

public class ApiNoteUtils {

    public static String getFirstNoteTitle() {

        return getNoteField(0, "title");
    }

    public static String getNoteTitleAt(int index) {

        return getNoteField(index, "title");
    }

    public static int getNoteCount() {

        String token = AuthApiUtils.getToken();

        Response res =

                given()

                        .header("x-auth-token", token)

                .when()

                        .get("/notes");

        res.then().statusCode(200);

        List<?> notes = res.jsonPath().getList("data");

        return (notes == null) ? 0 : notes.size();
    }

    private static String getNoteField(int index, String field) {

        String token = AuthApiUtils.getToken();

        Response res =

                given()

                        .header("x-auth-token", token)

                .when()

                        .get("/notes");

        res.then().statusCode(200);

        List<?> notes = res.jsonPath().getList("data");

        if (notes == null || notes.size() <= index) return null;

        return res.jsonPath().getString("data[" + index + "]." + field);
    }
}
