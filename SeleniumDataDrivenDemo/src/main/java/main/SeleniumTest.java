package main;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.firefox.FirefoxDriver;

import model.User;
import ultility.ReadInputData;

public class SeleniumTest {

	public static void main(String[] args) throws InterruptedException {
		// TODO Auto-generated method stub
		ReadInputData readData = new ReadInputData();
		List<User> users = new ArrayList<User>();
		try {
			users = readData.readExcel("inputData.xlsx");
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		System.setProperty("webdriver.gecko.driver", "geckodriver.exe");
		WebDriver driver = new FirefoxDriver();
		
		driver.manage().window().maximize();
		driver.get("file:///E:\\document\\workspace\\SeleniumDataDrivenDemo\\index.html");
		Thread.sleep(1000);
		
		WebElement nameInput = driver.findElement(By.xpath("/html/body/form/input[1]"));
		WebElement emailInput = driver.findElement(By.xpath("/html/body/form/input[2]"));
		WebElement passwordInput = driver.findElement(By.xpath("/html/body/form/input[3]"));
		WebElement button = driver.findElement(By.xpath("/html/body/form/input[4]"));
		
		nameInput.sendKeys(users.get(1).getName());
		emailInput.sendKeys(users.get(1).getEmail());
		passwordInput.sendKeys(users.get(1).getPassword());
		Thread.sleep(5000);	
		
		button.click();
		Thread.sleep(5000);
		driver.switchTo().alert().accept();
		Thread.sleep(5000);
		driver.close();
	}

}
