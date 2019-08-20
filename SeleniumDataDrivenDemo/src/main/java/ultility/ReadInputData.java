package ultility;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;

import model.User;

public class ReadInputData {
	public List<User> readExcel(String excelName) throws IOException{
		FileInputStream stream = new FileInputStream(new File(excelName));
		
		XSSFWorkbook workbook = new XSSFWorkbook(stream);
		XSSFSheet sheet = workbook.getSheet("User Info");
		
		Iterator<Row> rows = sheet.iterator();
		Row row;
		List<User> users = new ArrayList<User>();
		rows.next();
		
		while(rows.hasNext()) {
			row = rows.next();
			User user = new User();
			user.setName(row.getCell(0).toString());
			user.setEmail(row.getCell(1).toString());
			user.setPassword(row.getCell(2).toString());
			
			users.add(user);
		}
		
		workbook.close();
		
		return users;
	}
}
