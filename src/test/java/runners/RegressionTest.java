package runners;

import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;
import org.testng.annotations.AfterClass;

@CucumberOptions(
        features = {"src/test/java/featureFiles"},
        glue = {"stepDefinations"},
        dryRun = false,
        plugin={
                "html:target/cucumber-report",
        "json:target/cucumber.jyson"
}
)

public class RegressionTest extends AbstractTestNGCucumberTests {





    }




