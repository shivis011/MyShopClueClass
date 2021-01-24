package Pages;

import org.junit.runner.RunWith;
import io.cucumber.junit.CucumberOptions;
import io.cucumber.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features="Features" 
,glue=("StepDefinitions") 
,monochrome= true 
,plugin={"pretty","html:target/HtmlReports",
         "json:target/JSON/Report.json",
         "junit:target/JUnit/Report.xml"},
tags="@Regression")
public class TestRunner {

}
