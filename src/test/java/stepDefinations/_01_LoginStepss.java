package stepDefinations;

import cucumber.api.DataTable;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.WebDriver;
import pages.DialogContent;
import utilities.Driver;

import java.util.List;
import java.util.concurrent.TimeUnit;

public class _01_LoginStepss {
    WebDriver driver;

    DialogContent dialogContent = new DialogContent();

    @Given("^Navigate to basqar$")
    public void navigateToBasqar() {

        driver = Driver.getDriver();
        driver.get("https://test.basqar.techno.study/");
        driver.manage().deleteAllCookies();
        driver.manage().window().maximize();
        driver.manage().timeouts().pageLoadTimeout(30, TimeUnit.SECONDS);
        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
    }

    @When("^User sending the keys in the dialog content class$")
    public void userSendingTheKeysInTheDialogContentClass(DataTable elements) {

        List<List<String>> elementsNameAndValue = elements.asLists(String.class);

        for (int i = 0; i < elementsNameAndValue.size(); i++) {

            //  System.out.println(elementsNameAndValue.get(i).get(0));   // elemanin adi
            //  System.out.println(elementsNameAndValue.get(i).get(1));   // gonderilecek deger value
            dialogContent.findElementAndSendKeysFunction(elementsNameAndValue.get(i).get(0), elementsNameAndValue.get(i).get(1));
        }
    }

    @And("^User click on the element in the dialog content class$")
    public void userClickOnTheElementInTheDialogContentClass(DataTable elements) {
        List<String > elementsToClick = elements.asList(String.class);

        for (int i = 0; i < elementsToClick.size(); i++) {

            System.out.println(  elementsToClick.get(i)  );
            dialogContent.findElementAndClickFunction(elementsToClick.get(i));
        }
    }

    @Then("^User should login successfully$")
    public void userShouldLoginSuccessfully() {

        dialogContent.findElementAndFindVerifyContainsText("dashboard","Dashboard");

    }
    @And("^user click to add button$")
    public void userClickToAddButton() {
        new DialogContent().findElementAndClickFunction("addButton");
    }

}

