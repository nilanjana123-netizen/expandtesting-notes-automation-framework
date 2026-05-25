package org.example.framework.utils;

import java.io.FileInputStream;
import java.io.IOException;

import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.DataFormatter;
import org.apache.poi.ss.usermodel.Row;

import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;

public class ExcelUtils {

    public static Object[][] getSheetData(String fileName, String sheetName) {

        Object[][] data = null;

        try {

            FileInputStream fis =
                    new FileInputStream(
                            "src/test/resources/testdata/" + fileName
                    );

            XSSFWorkbook wb = new XSSFWorkbook(fis);

            XSSFSheet sheet = wb.getSheet(sheetName);

            int rows = sheet.getPhysicalNumberOfRows();

            Row header = sheet.getRow(0);

            int cols = (header != null)
                    ? header.getPhysicalNumberOfCells()
                    : 0;

            data = new Object[rows - 1][cols];

            DataFormatter fmt = new DataFormatter();

            for (int r = 1; r < rows; r++) {

                Row row = sheet.getRow(r);

                for (int c = 0; c < cols; c++) {

                    if (row == null) {

                        data[r - 1][c] = "";

                    } else {

                        Cell cell = row.getCell(c);

                        data[r - 1][c] = (cell == null)
                                ? ""
                                : fmt.formatCellValue(cell);
                    }
                }
            }

            wb.close();
            fis.close();

        } catch (IOException e) {

            e.printStackTrace();
        }

        return data;
    }
}
