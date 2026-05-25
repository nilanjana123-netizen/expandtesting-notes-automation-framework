package org.example.framework.tests.api;

import io.restassured.RestAssured;

public class ApiUtils {

    static {

        RestAssured.baseURI =
                "https://practice.expandtesting.com/notes/api";
    }
}