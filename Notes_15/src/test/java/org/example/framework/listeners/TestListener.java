package org.example.framework.listeners;

import org.example.framework.drivers.DriverFactory;

import org.example.framework.utils.ScreenshotUtils;

import org.testng.ITestContext;
import org.testng.ITestListener;
import org.testng.ITestResult;

public class TestListener implements ITestListener {

    @Override
    public void onTestFailure(ITestResult result) {

        if (DriverFactory.getDriver() != null) {

            ScreenshotUtils.captureScreenshot(
                    DriverFactory.getDriver(),
                    buildName(result)
            );
        }
    }

    @Override
    public void onStart(ITestContext ctx) {

        System.out.println("Execution Started");
    }

    @Override
    public void onFinish(ITestContext ctx) {

        System.out.println(
                "Execution Finished"
                        + " | Passed: " + ctx.getPassedTests().size()
                        + " | Failed: " + ctx.getFailedTests().size()
                        + " | Skipped: " + ctx.getSkippedTests().size()
        );
    }

    private String buildName(ITestResult result) {

        String name = result.getName();

        Object[] params = result.getParameters();

        if (params == null || params.length == 0) return name;

        StringBuilder sb = new StringBuilder("[");

        for (int i = 0; i < params.length; i++) {

            if (i > 0) sb.append("_");

            String p = (params[i] == null) ? "null" : params[i].toString();

            if (p.length() > 20) p = p.substring(0, 20);

            sb.append(p);
        }

        sb.append("]");

        return name + sb;
    }
}
