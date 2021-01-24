$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:Features/ShopClues.feature");
formatter.feature({
  "name": "Product addet to cart",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Add Products to Add to Cart",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Debug"
    }
  ]
});
formatter.step({
  "name": "user launches the browser",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.ShopClueStepDefiniton.user_launches_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is on ShopClues Home Page",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.ShopClueStepDefiniton.user_is_on_ShopClues_Home_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Dont Allow on pop up",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.ShopClueStepDefiniton.user_clicks_on_Dont_Allow_on_pop_up()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user hovers on Home \u0026 Kitchen section and clicks on Curtains",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.ShopClueStepDefiniton.user_hovers_on_Home_Kitchen_section_and_clicks_on_Curtains()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects the first product in the Curtains section",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.ShopClueStepDefiniton.user_selects_the_first_product_in_the_Curtains_section()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//*[@id\u003d\u0027product_list\u0027]//div[3]//span[1]\"}\n  (Session info: chrome\u003d88.0.4324.104)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.0.0-alpha-6\u0027, revision: \u00275f43a29cfc\u0027\nSystem info: host: \u0027DESKTOP-C8RU078\u0027, ip: \u0027192.168.56.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_261\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 88.0.4324.104, chrome: {chromedriverVersion: 88.0.4324.96 (68dba2d8a0b14..., userDataDir: C:\\Users\\Acer\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:55617}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 7c7630310123034c743a7bc62391aec8\n*** Element info: {Using\u003dxpath, value\u003d//*[@id\u003d\u0027product_list\u0027]//div[3]//span[1]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:196)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:129)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:160)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:582)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:333)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:451)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:394)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:325)\r\n\tat Pages.LaunchBrowser.selectsFirstProductInCurtainsSection(LaunchBrowser.java:61)\r\n\tat StepDefinitions.ShopClueStepDefiniton.user_selects_the_first_product_in_the_Curtains_section(ShopClueStepDefiniton.java:41)\r\n\tat ✽.user selects the first product in the Curtains section(file:///C:/Users/Acer/eclipse-workspace/MyShopClueClass/Features/ShopClues.feature:10)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user clicks on Add to Cart",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.ShopClueStepDefiniton.user_clicks_on_Add_to_Cart()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user must get the product addet to cart",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.ShopClueStepDefiniton.user_must_get_the_product_addet_to_cart()"
});
formatter.result({
  "status": "skipped"
});
});