package stepDefinations;

import cucumber.api.DataTable;
import cucumber.api.java.en.*;
import org.openqa.selenium.WebDriver;
import pages.DialogContent;
import utilities.Driver;


import java.util.List;
import java.util.concurrent.TimeUnit;

public class _01_LoginStepss {
    WebDriver driver;

    DialogContent dialogContent=new DialogContent();

    @Given("^Navigate to basqar$")
    public void navigateToBasqar() {

            driver= Driver.getDriver();
            driver.get("https://test.basqar.techno.study/");
            driver.manage().deleteAllCookies();
            driver.manage().window().maximize();
            driver.manage().timeouts().pageLoadTimeout(30, TimeUnit.SECONDS);
            driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
        }


    @When("^User sending the key in the dialog content class$")
    public void userSendingTheKeyInTheDialogContentClass(DataTable elements) {

        List<List<String>> elementsNameAndValue = elements.asLists(String.class);

        for (int i = 0; i < elementsNameAndValue.size(); i++) {

            dialogContent.findElementAndSendKeysFunction(elementsNameAndValue.get(i).get(0), elementsNameAndValue.get(i).get(1));
        }
    }
    @And("^User click on the element in the dialog content class$")
    public void userClickOnTheElementInTheDialogContentClass(DataTable elements) {
        List<String > elementsToClick = elements.asList(String.class);

        for (int i = 0; i < elementsToClick.size(); i++) {

            System.out.println(  elementsToClick.get(i)  );
            dialogContent.findElementClickFunction(elementsToClick.get(i));
        }

    }
    @Then("^user should login successfully$")
    public void userShouldLoginSuccessfully() {
        dialogContent.findElementAndVerifyContainsText("dashboard","Dashboard");


    }
}
