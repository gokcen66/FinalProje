package runners;

import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;


@CucumberOptions(
        tags = {"@RegressionTest"},
        features = {"src/test/java/featureFiles"},
        glue = {"stepDefinations"},
        dryRun = false,
        plugin={//basit rapor oluşturan plugin
                "html:target/cucumber-report",
                "json:target/cucumber.json"
}
)

public class RegressionTest extends AbstractTestNGCucumberTests {





    }




