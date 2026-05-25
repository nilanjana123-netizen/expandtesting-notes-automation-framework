package org.example.framework.drivers;

import io.github.bonigarcia.wdm.WebDriverManager;

import org.example.framework.utils.ConfigReader;

import org.openqa.selenium.WebDriver;

import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;

import org.openqa.selenium.remote.RemoteWebDriver;

import java.net.MalformedURLException;
import java.net.URL;
import java.time.Duration;
import java.util.Map;

public class DriverFactory {

    private static final ThreadLocal<WebDriver> tlDriver =
            new ThreadLocal<>();

    public static WebDriver initializeDriver() {

        if (tlDriver.get() == null) {

            ChromeOptions options = new ChromeOptions();

            options.addArguments("--disable-notifications");
            options.addArguments("--disable-save-password-bubble");
            options.addArguments("--disable-infobars");
            options.addArguments("--guest");
            options.addArguments("--incognito");
            options.addArguments("--remote-debugging-port=0");

            options.setExperimentalOption(
                    "excludeSwitches",
                    new String[]{"enable-automation"}
            );

            options.setExperimentalOption(
                    "prefs",
                    Map.of(
                            "credentials_enable_service", false,
                            "profile.password_manager_enabled", false
                    )
            );

            String mode = ConfigReader.getProperty("runMode");

            WebDriver driver;

            if ("grid".equalsIgnoreCase(mode)) {

                String hub = ConfigReader.getProperty("gridUrl");

                try {

                    driver = new RemoteWebDriver(
                            new URL(hub + "/wd/hub"),
                            options
                    );

                } catch (MalformedURLException e) {

                    throw new RuntimeException("Invalid Grid URL: " + hub, e);
                }

            } else {

                WebDriverManager.chromedriver().setup();
                driver = new ChromeDriver(options);
            }

            driver.manage().window().maximize();
            driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(10));

            tlDriver.set(driver);
        }

        return tlDriver.get();
    }

    public static WebDriver getDriver() {

        return tlDriver.get();
    }

    public static void quitDriver() {

        if (tlDriver.get() != null) {

            tlDriver.get().quit();
            tlDriver.remove();
        }
    }
}
