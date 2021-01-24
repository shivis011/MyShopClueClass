package StepDefinitions;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;
import Pages.LaunchBrowser;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class ShopClueStepDefiniton {
	
	public WebDriver driver;
	LaunchBrowser launchbrowser = PageFactory.initElements(driver, LaunchBrowser.class);	

	@Given("user is on ShopClues Home Page")
	public void user_is_on_ShopClues_Home_Page() {
		launchbrowser.launchDriver();
	}
	
	@When("user clicks on Dont Allow on pop up")
	public void user_clicks_on_Dont_Allow_on_pop_up() {
		launchbrowser.clicksOnDontAllow();
	}

	@When("user hovers on Home & Kitchen section and clicks on Curtains")
	public void user_hovers_on_Home_Kitchen_section_and_clicks_on_Curtains() {
		launchbrowser.hoversOnHomeAndKitchenSection();
	}

	@When("user selects the first product in the Curtains section")
	public void user_selects_the_first_product_in_the_Curtains_section() {
		launchbrowser.selectsFirstProductInCurtainsSection();
	}

	@When("user clicks on Add to Cart")
	public void user_clicks_on_Add_to_Cart() {
		launchbrowser.clicksOnAddToCart();
	}

	@Then("user must get the message product added to cart")
	public void user_must_get_the_message_product_added_to_cart() {
		launchbrowser.verifiedMessage();
		launchbrowser.closeDriver();
	}

}
