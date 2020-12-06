package stepDefinations;

import cucumber.api.DataTable;
import cucumber.api.PendingException;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pages.DialogContent;
import pages.LeftNav;

import java.util.List;

public class _02_CountrySteps {
    LeftNav leftNav=new LeftNav();
    DialogContent dialogContent=new DialogContent();




    @When("^User click on the element in the leftNav class$")
        public void userClickOnTheElementInTheLeftNavClass(DataTable elements) {

            List<String> elementList=elements.asList(String.class);

            for (int i = 0; i < elementList.size(); i++) {
                System.out.println(elementList.get(i));
                leftNav.findElementAndClickFunction(elementList.get(i));
            }
    }

    @Then("^User should see \"([^\"]*)\" message$")
    public void userShouldSeeMessage(String message)  {
        dialogContent.findElementAndVerifyContainsText(" success",message);
    }

    @When("^User delete \"([^\"]*)\"$")
    public void userDelete(String value)  {
        dialogContent.deleteFunction(value);
        dialogContent.findElementClickFunction("yesButton");
    }

    @Then("^User should see \"([^\"]*)\" messageThen User should see \"([^\"]*)\" message$")
    public void userEdit(String value) {

        dialogContent.editFunction(value);
    }
}
