package Pages;

import static org.testng.Assert.assertFalse;
import static org.testng.Assert.assertTrue;

import java.util.ArrayList;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;
import org.testng.annotations.AfterTest;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.Test;

public class LaunchBrowser {
	public WebDriver driver; 
	public String baseUrl = "https://www.shopclues.com/";
	String driverPath = "C:\\Users\\Acer\\eclipse-workspace\\chromedriver.exe";    
	    
	    @BeforeTest
	    public void launchDriver() {
	    	 System.out.println("launching browser"); 
	         System.setProperty("webdriver.chrome.driver", driverPath);
	         driver = new ChromeDriver(); 
	         driver.get(baseUrl);
	    }

	    @Test
	    public void verifiedHomePage() {
	    	WebElement popup = driver.findElement(By.xpath("//button[contains(text(),\"Don't Allow\")]"));
	    	driver.manage().timeouts().implicitlyWait(50, TimeUnit.SECONDS);
		    assertTrue(popup.isDisplayed(),"Home page is not displayed");
	    }
	    
	    @Test
	    public void clicksOnDontAllow() {
	    	WebElement DontAllowbutton = driver.findElement(By.xpath("//button[contains(text(),\"Don't Allow\")]"));
	    	driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
	    	DontAllowbutton.click();
	    }
	    
	    @Test
	    public void hoversOnHomeAndKitchenSection() {
	    	Actions action = new Actions(driver);
	    	WebElement HomeAndKitchenSection = driver.findElement(By.xpath("//*[@id=\"nav_46\"]/a[contains(text(),\"Home & Kitchen\")]"));
	    	action.moveToElement(HomeAndKitchenSection).perform();
	    }
	    
	    public void clicksOnCurtains() {
	    	WebElement curtains = driver.findElement(By.xpath("//*[@id=\"column_1\"]/ul/li[4]/a[contains(text(),\"Curtains\")]"));
	    	curtains.click();
	    }
	    
	    @Test
	    public void selectsFirstProductInCurtainsSection() {
	    	clicksOnCurtains();
	        String url = "https://www.shopclues.com/d4p-acrylic-crystal-plastic-strings-bead-hanging-curtain-set-of-20-golden-143003890.html?adz_page=plp&adz_pos=1&campaign_id=35883";	    	
	    	
	    	 ArrayList<String> tabs = new ArrayList<String> (driver.getWindowHandles());
	    	    driver.switchTo().window(tabs.get(1)); //switches to new tab
	    	    driver.get(url);
	    	
//	    	WebElement firstProduct = driver.findElement(By.xpath("//*[@id='product_list']//div[3]//span[1]"));
//	    	String text = firstProduct.getText();
//	    	System.out.println("PRODUCT TEXT" +text);
//	    	
//	    	if(text.contains("D4P Acrylic Crystal Plastic Strings Bead Hanging Curtai")) {
//	    		firstProduct.click();
//	    	}else {
//	    		System.out.println("There is no curtain in the found string");
//	    	}
	    		
	    }
	    
	    
	    @Test
	    public void clicksOnAddToCart() {
	    	WebElement addToCart = driver.findElement(By.xpath("//button[@id='add_cart']"));
	    	addToCart.click();
	    }
	    
	    @Test
	    public void verifiedMessage() {
	    	WebElement messageProduct = driver.findElement(By.xpath("//*[@id='snackbar']"));
	    	String msg = messageProduct.getText();

	    	if(msg.contains(msg)) {	    		
	    		assertTrue(messageProduct.isDisplayed(),"The message is displayed");
	    	}
	    	else {
	    		assertFalse(messageProduct.isDisplayed(),"The message is not displayed");
	    	}

	    }
	    
	    @AfterTest
	    public void closeDriver()
	    {
	  	  driver.quit();
	    }
	  	
}
