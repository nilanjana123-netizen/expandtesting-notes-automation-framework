package org.example.framework.base;

import org.example.framework.drivers.DriverFactory;

import org.example.framework.utils.ConfigReader;

import org.openqa.selenium.WebDriver;

import org.testng.annotations.AfterMethod;
import org.testng.annotations.BeforeMethod;

public class BaseTest {

    protected WebDriver driver;

    @BeforeMethod(alwaysRun = true)

    public void setup() {

        driver = DriverFactory.initializeDriver();

        driver.get(
                ConfigReader.getProperty("baseUrl"));
    }

    @AfterMethod(alwaysRun = true)

    public void tearDown() {

        DriverFactory.quitDriver();
    }
}