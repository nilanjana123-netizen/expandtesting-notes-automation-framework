package org.example.framework.utils;

import java.io.File;

import java.nio.file.Files;
import java.nio.file.StandardCopyOption;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;

public class ScreenshotUtils {

    private static final DateTimeFormatter TS =
            DateTimeFormatter.ofPattern("yyyyMMdd_HHmmss_SSS");

    public static void captureScreenshot(WebDriver driver, String testName) {

        if (driver == null) return;

        try {

            File shot = ((TakesScreenshot) driver)
                    .getScreenshotAs(OutputType.FILE);

            File dest = new File(
                    "screenshots/" + testName + "_" + LocalDateTime.now().format(TS) + ".png"
            );

            Files.copy(shot.toPath(), dest.toPath(), StandardCopyOption.REPLACE_EXISTING);

        } catch (Exception e) {

            e.printStackTrace();
        }
    }
}
