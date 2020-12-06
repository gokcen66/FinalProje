$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("_01_Login.feature");
formatter.feature({
  "line": 1,
  "name": "Login Functionality",
  "description": "",
  "id": "login-functionality",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "Login with valide username and password",
  "description": "",
  "id": "login-functionality;login-with-valide-username-and-password",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 2,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "Navigate to basqar",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "User sending the key in the dialog content class",
  "rows": [
    {
      "cells": [
        "username",
        "daulet2030@gmail.com"
      ],
      "line": 9
    },
    {
      "cells": [
        "password",
        "TechnoStudy123@"
      ],
      "line": 10
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "User click on the element in the dialog content class",
  "rows": [
    {
      "cells": [
        "loginButton"
      ],
      "line": 13
    },
    {
      "cells": [
        "gotItBtn"
      ],
      "line": 14
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "user should login successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "_01_LoginStepss.navigateToBasqar()"
});
formatter.result({
  "duration": 7741521700,
  "status": "passed"
});
formatter.match({
  "location": "_01_LoginStepss.userSendingTheKeyInTheDialogContentClass(DataTable)"
});
formatter.result({
  "duration": 394616600,
  "status": "passed"
});
formatter.match({
  "location": "_01_LoginStepss.userClickOnTheElementInTheDialogContentClass(DataTable)"
});
formatter.result({
  "duration": 20279507200,
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for element to be clickable: Proxy element for: DefaultElementLocator \u0027By.cssSelector: button[aria-label\u003d\u0027LOGIN\u0027]\u0027 (tried for 10 second(s) with 500 milliseconds interval)\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:95)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:272)\r\n\tat pages._Parent.waitUntilClickable(_Parent.java:43)\r\n\tat pages._Parent.clickFunction(_Parent.java:28)\r\n\tat pages.DialogContent.findElementClickFunction(DialogContent.java:133)\r\n\tat stepDefinations._01_LoginStepss.userClickOnTheElementInTheDialogContentClass(_01_LoginStepss.java:47)\r\n\tat ✽.And User click on the element in the dialog content class(_01_Login.feature:12)\r\nCaused by: org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"button[aria-label\u003d\u0027LOGIN\u0027]\"}\n  (Session info: chrome\u003d86.0.4240.198)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-2C108AM\u0027, ip: \u0027192.168.0.12\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002714.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 86.0.4240.198, chrome: {chromedriverVersion: 86.0.4240.22 (398b0743353ff..., userDataDir: C:\\Users\\keski\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:53562}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 095a5f29134614349fc71dcf83937a43\n*** Element info: {Using\u003dcss selector, value\u003dbutton[aria-label\u003d\u0027LOGIN\u0027]}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByCssSelector(RemoteWebDriver.java:420)\r\n\tat org.openqa.selenium.By$ByCssSelector.findElement(By.java:431)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy20.isDisplayed(Unknown Source)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.elementIfVisible(ExpectedConditions.java:314)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$000(ExpectedConditions.java:43)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$10.apply(ExpectedConditions.java:300)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$10.apply(ExpectedConditions.java:297)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$23.apply(ExpectedConditions.java:670)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$23.apply(ExpectedConditions.java:666)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:249)\r\n\tat pages._Parent.waitUntilClickable(_Parent.java:43)\r\n\tat pages._Parent.clickFunction(_Parent.java:28)\r\n\tat pages.DialogContent.findElementClickFunction(DialogContent.java:133)\r\n\tat stepDefinations._01_LoginStepss.userClickOnTheElementInTheDialogContentClass(_01_LoginStepss.java:47)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:564)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:564)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:134)\r\n\tat org.testng.internal.TestInvoker.invokeMethod(TestInvoker.java:597)\r\n\tat org.testng.internal.TestInvoker.invokeTestMethod(TestInvoker.java:173)\r\n\tat org.testng.internal.MethodRunner.runInSequence(MethodRunner.java:46)\r\n\tat org.testng.internal.TestInvoker$MethodInvocationAgent.invoke(TestInvoker.java:816)\r\n\tat org.testng.internal.TestInvoker.invokeTestMethods(TestInvoker.java:146)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:146)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:128)\r\n\tat java.base/java.util.ArrayList.forEach(ArrayList.java:1511)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:766)\r\n\tat org.testng.TestRunner.run(TestRunner.java:587)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:384)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:378)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:337)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:286)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:53)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:96)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1187)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1109)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1039)\r\n\tat org.testng.TestNG.run(TestNG.java:1007)\r\n\tat com.intellij.rt.testng.IDEARemoteTestNG.run(IDEARemoteTestNG.java:66)\r\n\tat com.intellij.rt.testng.RemoteTestNGStarter.main(RemoteTestNGStarter.java:109)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "_01_LoginStepss.userShouldLoginSuccessfully()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("_03.10.1.SalaryTypes.feature");
formatter.feature({
  "line": 1,
  "name": "Create Edit and Delete Functionality for Human Resources",
  "description": "",
  "id": "create-edit-and-delete-functionality-for-human-resources",
  "keyword": "Feature"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Navigate to basqar",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User sending the key in the dialog content class",
  "rows": [
    {
      "cells": [
        "username",
        "daulet2030@gmail.com"
      ],
      "line": 7
    },
    {
      "cells": [
        "password",
        "TechnoStudy123@"
      ],
      "line": 8
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User click on the element in the dialog content class",
  "rows": [
    {
      "cells": [
        "loginButton"
      ],
      "line": 11
    },
    {
      "cells": [
        "gotItButton"
      ],
      "line": 12
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "user should login successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "_01_LoginStepss.navigateToBasqar()"
});
formatter.result({
  "duration": 1390330900,
  "status": "passed"
});
formatter.match({
  "location": "_01_LoginStepss.userSendingTheKeyInTheDialogContentClass(DataTable)"
});
formatter.result({
  "duration": 461679900,
  "status": "passed"
});
formatter.match({
  "location": "_01_LoginStepss.userClickOnTheElementInTheDialogContentClass(DataTable)"
});
formatter.result({
  "duration": 257409000,
  "status": "passed"
});
formatter.match({
  "location": "_01_LoginStepss.userShouldLoginSuccessfully()"
});
formatter.result({
  "duration": 1729963700,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Create , Edit and Delete Salary Types",
  "description": "",
  "id": "create-edit-and-delete-functionality-for-human-resources;create-,-edit-and-delete-salary-types",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 18,
  "name": "User click on the element in the leftNav class",
  "rows": [
    {
      "cells": [
        "humanResources"
      ],
      "line": 19
    },
    {
      "cells": [
        "setupHR"
      ],
      "line": 20
    },
    {
      "cells": [
        "salaryTypes"
      ],
      "line": 21
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "User click on the element in the dialog content class",
  "rows": [
    {
      "cells": [
        "addButton"
      ],
      "line": 24
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "User sending the key in the dialog content class",
  "rows": [
    {
      "cells": [
        "name",
        "EnglandNewSalaryType"
      ],
      "line": 27
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "User click on the element in the dialog content class",
  "rows": [
    {
      "cells": [
        "userType"
      ],
      "line": 30
    },
    {
      "cells": [
        "randomSelect"
      ],
      "line": 31
    },
    {
      "cells": [
        "saveButton"
      ],
      "line": 32
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "User should see \"successfully\" message",
  "keyword": "Then "
});
formatter.step({
  "line": 36,
  "name": "User sending the key in the dialog content class",
  "rows": [
    {
      "cells": [
        "searchName",
        "EnglandNewSalaryType"
      ],
      "line": 37
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "User click on the element in the dialog content class",
  "rows": [
    {
      "cells": [
        "search"
      ],
      "line": 40
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "User edit \"EnglandNewSalaryType\"",
  "keyword": "Then "
});
formatter.step({
  "line": 44,
  "name": "User sending the key in the dialog content class",
  "rows": [
    {
      "cells": [
        "name",
        "editedNewSalaryType"
      ],
      "line": 45
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "User click on the element in the dialog content class",
  "rows": [
    {
      "cells": [
        "saveButton"
      ],
      "line": 48
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "User should see \"successfully\" message",
  "keyword": "Then "
});
formatter.step({
  "line": 52,
  "name": "User sending the key in the dialog content class",
  "rows": [
    {
      "cells": [
        "searchName",
        "editedNewSalaryType"
      ],
      "line": 53
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "User click on the element in the dialog content class",
  "rows": [
    {
      "cells": [
        "search"
      ],
      "line": 56
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 58,
  "name": "User delete \"editedNewSalaryType\"",
  "keyword": "When "
});
formatter.step({
  "line": 60,
  "name": "User should see \"successfully\" message",
  "keyword": "Then "
});
formatter.match({
  "location": "_02_CountrySteps.userClickOnTheElementInTheLeftNavClass(DataTable)"
});
formatter.result({
  "duration": 930202100,
  "status": "passed"
});
formatter.match({
  "location": "_01_LoginStepss.userClickOnTheElementInTheDialogContentClass(DataTable)"
});
formatter.result({
  "duration": 779640800,
  "status": "passed"
});
formatter.match({
  "location": "_01_LoginStepss.userSendingTheKeyInTheDialogContentClass(DataTable)"
});
formatter.result({
  "duration": 359887100,
  "status": "passed"
});
formatter.match({
  "location": "_01_LoginStepss.userClickOnTheElementInTheDialogContentClass(DataTable)"
});
formatter.result({
  "duration": 1460320900,
  "error_message": "org.openqa.selenium.ElementClickInterceptedException: element click intercepted: Element \u003cbutton mat-button\u003d\"\" mat-icon-button\u003d\"\" matbadgeoverlap\u003d\"false\" matbadgesize\u003d\"small\" matbadgeposition\u003d\"below\" matbadgecolor\u003d\"accent\" class\u003d\"mat-focus-indicator mat-tooltip-trigger mat-badge mat-button mat-icon-button mat-button-base mat-badge-accent mat-badge-below mat-badge-after mat-badge-small mat-badge-hidden ng-star-inserted\" aria-describedby\u003d\"cdk-describedby-message-14\" cdk-describedby-host\u003d\"\"\u003e...\u003c/button\u003e is not clickable at point (1236, 88). Other element would receive the click: \u003cdiv class\u003d\"cdk-overlay-backdrop cdk-overlay-dark-backdrop cdk-overlay-backdrop-showing\"\u003e\u003c/div\u003e\n  (Session info: chrome\u003d86.0.4240.198)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-2C108AM\u0027, ip: \u0027192.168.0.12\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002714.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 86.0.4240.198, chrome: {chromedriverVersion: 86.0.4240.22 (398b0743353ff..., userDataDir: C:\\Users\\keski\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:53562}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 095a5f29134614349fc71dcf83937a43\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:564)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\r\n\tat com.sun.proxy.$Proxy20.click(Unknown Source)\r\n\tat pages._Parent.clickFunction(_Parent.java:30)\r\n\tat pages.DialogContent.findElementClickFunction(DialogContent.java:133)\r\n\tat stepDefinations._01_LoginStepss.userClickOnTheElementInTheDialogContentClass(_01_LoginStepss.java:47)\r\n\tat ✽.And User click on the element in the dialog content class(_03.10.1.SalaryTypes.feature:29)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "successfully",
      "offset": 17
    }
  ],
  "location": "_02_CountrySteps.userShouldSeeMessage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "_01_LoginStepss.userSendingTheKeyInTheDialogContentClass(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "_01_LoginStepss.userClickOnTheElementInTheDialogContentClass(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "_01_LoginStepss.userSendingTheKeyInTheDialogContentClass(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "_01_LoginStepss.userClickOnTheElementInTheDialogContentClass(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "successfully",
      "offset": 17
    }
  ],
  "location": "_02_CountrySteps.userShouldSeeMessage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "_01_LoginStepss.userSendingTheKeyInTheDialogContentClass(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "_01_LoginStepss.userClickOnTheElementInTheDialogContentClass(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "editedNewSalaryType",
      "offset": 13
    }
  ],
  "location": "_02_CountrySteps.userDelete(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "successfully",
      "offset": 17
    }
  ],
  "location": "_02_CountrySteps.userShouldSeeMessage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("_03.10.2.SalaryModifiers.feature");
formatter.feature({
  "line": 1,
  "name": "Create Edit and Delete Functionality for Human Resources",
  "description": "",
  "id": "create-edit-and-delete-functionality-for-human-resources",
  "keyword": "Feature"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Navigate to basqar",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User sending the key in the dialog content class",
  "rows": [
    {
      "cells": [
        "username",
        "daulet2030@gmail.com"
      ],
      "line": 7
    },
    {
      "cells": [
        "password",
        "TechnoStudy123@"
      ],
      "line": 8
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User click on the element in the dialog content class",
  "rows": [
    {
      "cells": [
        "loginButton"
      ],
      "line": 11
    },
    {
      "cells": [
        "gotItButton"
      ],
      "line": 12
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "user should login successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "_01_LoginStepss.navigateToBasqar()"
});
formatter.result({
  "duration": 1358560600,
  "status": "passed"
});
formatter.match({
  "location": "_01_LoginStepss.userSendingTheKeyInTheDialogContentClass(DataTable)"
});
formatter.result({
  "duration": 417150700,
  "status": "passed"
});
formatter.match({
  "location": "_01_LoginStepss.userClickOnTheElementInTheDialogContentClass(DataTable)"
});
formatter.result({
  "duration": 10318377000,
  "status": "passed"
});
formatter.match({
  "location": "_01_LoginStepss.userShouldLoginSuccessfully()"
});
formatter.result({
  "duration": 49635000,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Create , Edit and Delete Salary Modifiers",
  "description": "",
  "id": "create-edit-and-delete-functionality-for-human-resources;create-,-edit-and-delete-salary-modifiers",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 18,
  "name": "User click on the element in the leftNav class",
  "rows": [
    {
      "cells": [
        "humanResources"
      ],
      "line": 19
    },
    {
      "cells": [
        "setupHR"
      ],
      "line": 20
    },
    {
      "cells": [
        "salaryModifiers"
      ],
      "line": 21
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "User click on the element in the dialog content class",
  "rows": [
    {
      "cells": [
        "addButton"
      ],
      "line": 24
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "User sending the key in the dialog content class",
  "rows": [
    {
      "cells": [
        "description",
        "CocukYardimi"
      ],
      "line": 27
    },
    {
      "cells": [
        "variable",
        "odenek"
      ],
      "line": 28
    },
    {
      "cells": [
        "priority",
        "33"
      ],
      "line": 29
    },
    {
      "cells": [
        "amount",
        "100"
      ],
      "line": 30
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "User click on the element in the dialog content class",
  "rows": [
    {
      "cells": [
        "saveButton"
      ],
      "line": 33
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "User should see \"successfully\" message",
  "keyword": "Then "
});
formatter.step({
  "line": 37,
  "name": "User click on the element in the leftNav class",
  "rows": [
    {
      "cells": [
        "humanResources"
      ],
      "line": 38
    },
    {
      "cells": [
        "setupHR"
      ],
      "line": 39
    },
    {
      "cells": [
        "salaryModifiers"
      ],
      "line": 40
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 42,
  "name": "User sending the key in the dialog content class",
  "rows": [
    {
      "cells": [
        "description",
        "CocukYardimi"
      ],
      "line": 43
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "User click on the element in the dialog content class",
  "rows": [
    {
      "cells": [
        "search"
      ],
      "line": 46
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "user edit \"CocukYardimi\"",
  "keyword": "Then "
});
formatter.step({
  "line": 50,
  "name": "User sending the key in the dialog content class",
  "rows": [
    {
      "cells": [
        "description",
        "editedCocukYardimi"
      ],
      "line": 51
    },
    {
      "cells": [
        "variable",
        "ecck"
      ],
      "line": 52
    },
    {
      "cells": [
        "priority",
        "13"
      ],
      "line": 53
    },
    {
      "cells": [
        "amount",
        "300"
      ],
      "line": 54
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "User click on the element in the dialog content class",
  "rows": [
    {
      "cells": [
        "saveButton"
      ],
      "line": 57
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "User should see \"successfully\" message",
  "keyword": "Then "
});
formatter.step({
  "line": 61,
  "name": "User click on the element in the leftNav class",
  "rows": [
    {
      "cells": [
        "humanResources"
      ],
      "line": 62
    },
    {
      "cells": [
        "setupHR"
      ],
      "line": 63
    },
    {
      "cells": [
        "salaryModifiers"
      ],
      "line": 64
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 66,
  "name": "User sending the key in the dialog content class",
  "rows": [
    {
      "cells": [
        "description",
        "editedCocukYardimi"
      ],
      "line": 67
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 69,
  "name": "User click on the element in the dialog content class",
  "rows": [
    {
      "cells": [
        "search"
      ],
      "line": 70
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 72,
  "name": "User delete \"editedCocukYardimi\"",
  "keyword": "When "
});
formatter.step({
  "line": 74,
  "name": "User should see \"successfully\" message",
  "keyword": "Then "
});
formatter.match({
  "location": "_02_CountrySteps.userClickOnTheElementInTheLeftNavClass(DataTable)"
});
formatter.result({
  "duration": 1314900700,
  "status": "passed"
});
formatter.match({
  "location": "_01_LoginStepss.userClickOnTheElementInTheDialogContentClass(DataTable)"
});
formatter.result({
  "duration": 501580400,
  "status": "passed"
});
formatter.match({
  "location": "_01_LoginStepss.userSendingTheKeyInTheDialogContentClass(DataTable)"
});
formatter.result({
  "duration": 240092300,
  "error_message": "org.openqa.selenium.StaleElementReferenceException: stale element reference: element is not attached to the page document\n  (Session info: chrome\u003d86.0.4240.198)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/stale_element_reference.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-2C108AM\u0027, ip: \u0027192.168.0.12\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002714.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 86.0.4240.198, chrome: {chromedriverVersion: 86.0.4240.22 (398b0743353ff..., userDataDir: C:\\Users\\keski\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:53562}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 095a5f29134614349fc71dcf83937a43\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.executeScript(RemoteWebDriver.java:489)\r\n\tat pages._Parent.scrollToElement(_Parent.java:54)\r\n\tat pages._Parent.sendKeysFunction(_Parent.java:36)\r\n\tat pages.DialogContent.findElementAndSendKeysFunction(DialogContent.java:159)\r\n\tat stepDefinations._01_LoginStepss.userSendingTheKeyInTheDialogContentClass(_01_LoginStepss.java:37)\r\n\tat ✽.And User sending the key in the dialog content class(_03.10.2.SalaryModifiers.feature:26)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "_01_LoginStepss.userClickOnTheElementInTheDialogContentClass(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "successfully",
      "offset": 17
    }
  ],
  "location": "_02_CountrySteps.userShouldSeeMessage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "_02_CountrySteps.userClickOnTheElementInTheLeftNavClass(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "_01_LoginStepss.userSendingTheKeyInTheDialogContentClass(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "_01_LoginStepss.userClickOnTheElementInTheDialogContentClass(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "_01_LoginStepss.userSendingTheKeyInTheDialogContentClass(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "_01_LoginStepss.userClickOnTheElementInTheDialogContentClass(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "successfully",
      "offset": 17
    }
  ],
  "location": "_02_CountrySteps.userShouldSeeMessage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "_02_CountrySteps.userClickOnTheElementInTheLeftNavClass(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "_01_LoginStepss.userSendingTheKeyInTheDialogContentClass(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "_01_LoginStepss.userClickOnTheElementInTheDialogContentClass(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "editedCocukYardimi",
      "offset": 13
    }
  ],
  "location": "_02_CountrySteps.userDelete(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "successfully",
      "offset": 17
    }
  ],
  "location": "_02_CountrySteps.userShouldSeeMessage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("_03.10.3.SalaryConstants.feature");
formatter.feature({
  "line": 1,
  "name": "Create Edit and Delete Functionality for Human Resources",
  "description": "",
  "id": "create-edit-and-delete-functionality-for-human-resources",
  "keyword": "Feature"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Navigate to basqar",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User sending the key in the dialog content class",
  "rows": [
    {
      "cells": [
        "username",
        "daulet2030@gmail.com"
      ],
      "line": 7
    },
    {
      "cells": [
        "password",
        "TechnoStudy123@"
      ],
      "line": 8
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User click on the element in the dialog content class",
  "rows": [
    {
      "cells": [
        "loginButton"
      ],
      "line": 11
    },
    {
      "cells": [
        "gotItButton"
      ],
      "line": 12
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "user should login successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "_01_LoginStepss.navigateToBasqar()"
});
formatter.result({
  "duration": 1013804100,
  "status": "passed"
});
formatter.match({
  "location": "_01_LoginStepss.userSendingTheKeyInTheDialogContentClass(DataTable)"
});
formatter.result({
  "duration": 423274200,
  "status": "passed"
});
formatter.match({
  "location": "_01_LoginStepss.userClickOnTheElementInTheDialogContentClass(DataTable)"
});
formatter.result({
  "duration": 307665000,
  "status": "passed"
});
formatter.match({
  "location": "_01_LoginStepss.userShouldLoginSuccessfully()"
});
formatter.result({
  "duration": 1452651700,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Create , Edit and Delete Salary Constants",
  "description": "",
  "id": "create-edit-and-delete-functionality-for-human-resources;create-,-edit-and-delete-salary-constants",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 18,
  "name": "User click on the element in the leftNav class",
  "rows": [
    {
      "cells": [
        "humanResources"
      ],
      "line": 19
    },
    {
      "cells": [
        "setupHR"
      ],
      "line": 20
    },
    {
      "cells": [
        "salaryConstants"
      ],
      "line": 21
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "User click on the element in the dialog content class",
  "rows": [
    {
      "cells": [
        "addButton"
      ],
      "line": 24
    },
    {
      "cells": [
        "validFrom"
      ],
      "line": 25
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "User sending the key in the dialog content class",
  "rows": [
    {
      "cells": [
        "validFrom",
        "12/11/2018"
      ],
      "line": 28
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "User click on the element in the dialog content class",
  "rows": [
    {
      "cells": [
        "closeDate"
      ],
      "line": 31
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "User sending the key in the dialog content class",
  "rows": [
    {
      "cells": [
        "nameConstants",
        "isim"
      ],
      "line": 34
    },
    {
      "cells": [
        "key",
        "a12"
      ],
      "line": 35
    },
    {
      "cells": [
        "valueConstants",
        "100"
      ],
      "line": 36
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "User click on the element in the dialog content class",
  "rows": [
    {
      "cells": [
        "saveButton"
      ],
      "line": 39
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "User should see \"successfully\" message",
  "keyword": "Then "
});
formatter.step({
  "line": 43,
  "name": "User sending the key in the dialog content class",
  "rows": [
    {
      "cells": [
        "searchName",
        "isim"
      ],
      "line": 44
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "User click on the element in the dialog content class",
  "rows": [
    {
      "cells": [
        "search"
      ],
      "line": 47
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "user edit \"isim\"",
  "keyword": "Then "
});
formatter.step({
  "line": 51,
  "name": "User click on the element in the dialog content class",
  "rows": [
    {
      "cells": [
        "validFrom"
      ],
      "line": 52
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "User sending the key in the dialog content class",
  "rows": [
    {
      "cells": [
        "validFrom",
        "11/02/2020"
      ],
      "line": 55
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 57,
  "name": "User click on the element in the dialog content class",
  "rows": [
    {
      "cells": [
        "closeDate"
      ],
      "line": 58
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "User sending the key in the dialog content class",
  "rows": [
    {
      "cells": [
        "nameConstants",
        "editedisim"
      ],
      "line": 61
    },
    {
      "cells": [
        "key",
        "a13"
      ],
      "line": 62
    },
    {
      "cells": [
        "valueConstants",
        "200"
      ],
      "line": 63
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 66,
  "name": "User click on the element in the dialog content class",
  "rows": [
    {
      "cells": [
        "saveButton"
      ],
      "line": 67
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 69,
  "name": "User should see \"successfully\" message",
  "keyword": "Then "
});
formatter.step({
  "line": 71,
  "name": "User sending the key in the dialog content class",
  "rows": [
    {
      "cells": [
        "searchName",
        "editedisim"
      ],
      "line": 72
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 74,
  "name": "User click on the element in the dialog content class",
  "rows": [
    {
      "cells": [
        "search"
      ],
      "line": 75
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 77,
  "name": "User delete \"editedisim\"",
  "keyword": "When "
});
formatter.step({
  "line": 79,
  "name": "User should see \"successfully\" message",
  "keyword": "Then "
});
formatter.match({
  "location": "_02_CountrySteps.userClickOnTheElementInTheLeftNavClass(DataTable)"
});
formatter.result({
  "duration": 1479084700,
  "status": "passed"
});
formatter.match({
  "location": "_01_LoginStepss.userClickOnTheElementInTheDialogContentClass(DataTable)"
});
formatter.result({
  "duration": 942416700,
  "status": "passed"
});
formatter.match({
  "location": "_01_LoginStepss.userSendingTheKeyInTheDialogContentClass(DataTable)"
});
formatter.result({
  "duration": 285045300,
  "status": "passed"
});
formatter.match({
  "location": "_01_LoginStepss.userClickOnTheElementInTheDialogContentClass(DataTable)"
});
formatter.result({
  "duration": 131535500,
  "status": "passed"
});
formatter.match({
  "location": "_01_LoginStepss.userSendingTheKeyInTheDialogContentClass(DataTable)"
});
formatter.result({
  "duration": 423471600,
  "status": "passed"
});
formatter.match({
  "location": "_01_LoginStepss.userClickOnTheElementInTheDialogContentClass(DataTable)"
});
formatter.result({
  "duration": 1127643800,
  "error_message": "org.openqa.selenium.ElementClickInterceptedException: element click intercepted: Element \u003cbutton mat-button\u003d\"\" mat-icon-button\u003d\"\" matbadgeoverlap\u003d\"false\" matbadgesize\u003d\"small\" matbadgeposition\u003d\"below\" matbadgecolor\u003d\"accent\" class\u003d\"mat-focus-indicator mat-tooltip-trigger mat-badge mat-button mat-icon-button mat-button-base mat-badge-accent mat-badge-below mat-badge-after mat-badge-small mat-badge-hidden ng-star-inserted\" aria-describedby\u003d\"cdk-describedby-message-14\" cdk-describedby-host\u003d\"\"\u003e...\u003c/button\u003e is not clickable at point (1236, 185). Other element would receive the click: \u003cdiv class\u003d\"cdk-overlay-backdrop cdk-overlay-dark-backdrop cdk-overlay-backdrop-showing\"\u003e\u003c/div\u003e\n  (Session info: chrome\u003d86.0.4240.198)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-2C108AM\u0027, ip: \u0027192.168.0.12\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002714.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 86.0.4240.198, chrome: {chromedriverVersion: 86.0.4240.22 (398b0743353ff..., userDataDir: C:\\Users\\keski\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:53562}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 095a5f29134614349fc71dcf83937a43\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\r\n\tat jdk.internal.reflect.GeneratedMethodAccessor6.invoke(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:564)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\r\n\tat com.sun.proxy.$Proxy20.click(Unknown Source)\r\n\tat pages._Parent.clickFunction(_Parent.java:30)\r\n\tat pages.DialogContent.findElementClickFunction(DialogContent.java:133)\r\n\tat stepDefinations._01_LoginStepss.userClickOnTheElementInTheDialogContentClass(_01_LoginStepss.java:47)\r\n\tat ✽.And User click on the element in the dialog content class(_03.10.3.SalaryConstants.feature:38)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "successfully",
      "offset": 17
    }
  ],
  "location": "_02_CountrySteps.userShouldSeeMessage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "_01_LoginStepss.userSendingTheKeyInTheDialogContentClass(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "_01_LoginStepss.userClickOnTheElementInTheDialogContentClass(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "_01_LoginStepss.userClickOnTheElementInTheDialogContentClass(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "_01_LoginStepss.userSendingTheKeyInTheDialogContentClass(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "_01_LoginStepss.userClickOnTheElementInTheDialogContentClass(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "_01_LoginStepss.userSendingTheKeyInTheDialogContentClass(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "_01_LoginStepss.userClickOnTheElementInTheDialogContentClass(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "successfully",
      "offset": 17
    }
  ],
  "location": "_02_CountrySteps.userShouldSeeMessage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "_01_LoginStepss.userSendingTheKeyInTheDialogContentClass(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "_01_LoginStepss.userClickOnTheElementInTheDialogContentClass(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "editedisim",
      "offset": 13
    }
  ],
  "location": "_02_CountrySteps.userDelete(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "successfully",
      "offset": 17
    }
  ],
  "location": "_02_CountrySteps.userShouldSeeMessage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("_03.12.CostCenters.feature");
formatter.feature({
  "line": 1,
  "name": "Create and Delete Functionality for Cost Centers",
  "description": "",
  "id": "create-and-delete-functionality-for-cost-centers",
  "keyword": "Feature"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Navigate to basqar",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User sending the key in the dialog content class",
  "rows": [
    {
      "cells": [
        "username",
        "daulet2030@gmail.com"
      ],
      "line": 7
    },
    {
      "cells": [
        "password",
        "TechnoStudy123@"
      ],
      "line": 8
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User click on the element in the dialog content class",
  "rows": [
    {
      "cells": [
        "loginButton"
      ],
      "line": 11
    },
    {
      "cells": [
        "gotItButton"
      ],
      "line": 12
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "user should login successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "_01_LoginStepss.navigateToBasqar()"
});
formatter.result({
  "duration": 1132065600,
  "status": "passed"
});
formatter.match({
  "location": "_01_LoginStepss.userSendingTheKeyInTheDialogContentClass(DataTable)"
});
formatter.result({
  "duration": 402674700,
  "status": "passed"
});
formatter.match({
  "location": "_01_LoginStepss.userClickOnTheElementInTheDialogContentClass(DataTable)"
});
formatter.result({
  "duration": 10350030500,
  "status": "passed"
});
formatter.match({
  "location": "_01_LoginStepss.userShouldLoginSuccessfully()"
});
formatter.result({
  "duration": 42895400,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Create, Edit and Delete Cost Centers",
  "description": "",
  "id": "create-and-delete-functionality-for-cost-centers;create,-edit-and-delete-cost-centers",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 18,
  "name": "User click on the element in the leftNav class",
  "rows": [
    {
      "cells": [
        "budget"
      ],
      "line": 19
    },
    {
      "cells": [
        "setupBudget"
      ],
      "line": 20
    },
    {
      "cells": [
        "costCenters"
      ],
      "line": 21
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "User click on the element in the dialog content class",
  "rows": [
    {
      "cells": [
        "addButton"
      ],
      "line": 24
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "User sending the key in the dialog content class",
  "rows": [
    {
      "cells": [
        "name",
        "CostCentersEngland"
      ],
      "line": 27
    },
    {
      "cells": [
        "code",
        "123456"
      ],
      "line": 28
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "User click on the element in the dialog content class",
  "rows": [
    {
      "cells": [
        "type"
      ],
      "line": 31
    },
    {
      "cells": [
        "randomSelect"
      ],
      "line": 32
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "User sending the key in the dialog content class",
  "rows": [
    {
      "cells": [
        "orderNo",
        "333"
      ],
      "line": 35
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "User click on the element in the dialog content class",
  "rows": [
    {
      "cells": [
        "expenseAccPrefixes"
      ],
      "line": 38
    },
    {
      "cells": [
        "randomSelect"
      ],
      "line": 39
    },
    {
      "cells": [
        "constants"
      ],
      "line": 40
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "User sending the key in the dialog content class",
  "rows": [
    {
      "cells": [
        "key",
        "333"
      ],
      "line": 43
    },
    {
      "cells": [
        "valueConstants",
        "England"
      ],
      "line": 44
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "User click on the element in the dialog content class",
  "rows": [
    {
      "cells": [
        "addButtonCost"
      ],
      "line": 47
    },
    {
      "cells": [
        "saveButton"
      ],
      "line": 48
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "User should see \"successfully\" message",
  "keyword": "Then "
});
formatter.step({
  "line": 52,
  "name": "user edit \"CostCentersEngland\"",
  "keyword": "Then "
});
formatter.step({
  "line": 54,
  "name": "User sending the key in the dialog content class",
  "rows": [
    {
      "cells": [
        "name",
        "edit3NewCostCenters"
      ],
      "line": 55
    },
    {
      "cells": [
        "code",
        "12345"
      ],
      "line": 56
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 58,
  "name": "User click on the element in the dialog content class",
  "rows": [
    {
      "cells": [
        "type"
      ],
      "line": 59
    },
    {
      "cells": [
        "randomSelect"
      ],
      "line": 60
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 62,
  "name": "User click on the element in the dialog content class",
  "rows": [
    {
      "cells": [
        "saveButton"
      ],
      "line": 63
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 65,
  "name": "User should see \"successfully\" message",
  "keyword": "Then "
});
formatter.step({
  "line": 67,
  "name": "User delete \"edit3NewCostCenters\"",
  "keyword": "When "
});
formatter.step({
  "line": 69,
  "name": "User should see \"successfully\" message",
  "keyword": "Then "
});
formatter.match({
  "location": "_02_CountrySteps.userClickOnTheElementInTheLeftNavClass(DataTable)"
});
formatter.result({
  "duration": 1068377800,
  "status": "passed"
});
formatter.match({
  "location": "_01_LoginStepss.userClickOnTheElementInTheDialogContentClass(DataTable)"
});
formatter.result({
  "duration": 725268900,
  "status": "passed"
});
formatter.match({
  "location": "_01_LoginStepss.userSendingTheKeyInTheDialogContentClass(DataTable)"
});
formatter.result({
  "duration": 537164200,
  "status": "passed"
});
formatter.match({
  "location": "_01_LoginStepss.userClickOnTheElementInTheDialogContentClass(DataTable)"
});
formatter.result({
  "duration": 1367675200,
  "error_message": "org.openqa.selenium.ElementClickInterceptedException: element click intercepted: Element \u003cmat-select role\u003d\"combobox\" aria-autocomplete\u003d\"none\" aria-haspopup\u003d\"true\" formcontrolname\u003d\"type\" required\u003d\"\" class\u003d\"mat-select ng-tns-c215-54 ng-tns-c149-53 mat-select-required mat-select-empty ng-untouched ng-pristine ng-invalid ng-star-inserted\" aria-labelledby\u003d\"mat-form-field-label-19 mat-select-value-7\" id\u003d\"mat-select-6\" tabindex\u003d\"0\" aria-expanded\u003d\"true\" aria-required\u003d\"true\" aria-disabled\u003d\"false\" aria-invalid\u003d\"false\" aria-controls\u003d\"mat-select-6-panel\" aria-activedescendant\u003d\"mat-option-16\"\u003e...\u003c/mat-select\u003e is not clickable at point (640, 297). Other element would receive the click: \u003cspan class\u003d\"mat-option-text\"\u003e...\u003c/span\u003e\n  (Session info: chrome\u003d86.0.4240.198)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-2C108AM\u0027, ip: \u0027192.168.0.12\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002714.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 86.0.4240.198, chrome: {chromedriverVersion: 86.0.4240.22 (398b0743353ff..., userDataDir: C:\\Users\\keski\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:53562}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 095a5f29134614349fc71dcf83937a43\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\r\n\tat jdk.internal.reflect.GeneratedMethodAccessor6.invoke(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:564)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\r\n\tat com.sun.proxy.$Proxy20.click(Unknown Source)\r\n\tat pages._Parent.clickFunction(_Parent.java:30)\r\n\tat pages.DialogContent.findElementClickFunction(DialogContent.java:133)\r\n\tat stepDefinations._01_LoginStepss.userClickOnTheElementInTheDialogContentClass(_01_LoginStepss.java:47)\r\n\tat ✽.And User click on the element in the dialog content class(_03.12.CostCenters.feature:30)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "_01_LoginStepss.userSendingTheKeyInTheDialogContentClass(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "_01_LoginStepss.userClickOnTheElementInTheDialogContentClass(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "_01_LoginStepss.userSendingTheKeyInTheDialogContentClass(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "_01_LoginStepss.userClickOnTheElementInTheDialogContentClass(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "successfully",
      "offset": 17
    }
  ],
  "location": "_02_CountrySteps.userShouldSeeMessage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "_01_LoginStepss.userSendingTheKeyInTheDialogContentClass(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "_01_LoginStepss.userClickOnTheElementInTheDialogContentClass(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "_01_LoginStepss.userClickOnTheElementInTheDialogContentClass(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "successfully",
      "offset": 17
    }
  ],
  "location": "_02_CountrySteps.userShouldSeeMessage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "edit3NewCostCenters",
      "offset": 13
    }
  ],
  "location": "_02_CountrySteps.userDelete(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "successfully",
      "offset": 17
    }
  ],
  "location": "_02_CountrySteps.userShouldSeeMessage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("_03.1_Country.feature");
formatter.feature({
  "line": 1,
  "name": "Create and Delete Functionality for Countries",
  "description": "",
  "id": "create-and-delete-functionality-for-countries",
  "keyword": "Feature"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Navigate to basqar",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User sending the key in the dialog content class",
  "rows": [
    {
      "cells": [
        "username",
        "daulet2030@gmail.com"
      ],
      "line": 7
    },
    {
      "cells": [
        "password",
        "TechnoStudy123@"
      ],
      "line": 8
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User click on the element in the dialog content class",
  "rows": [
    {
      "cells": [
        "loginButton"
      ],
      "line": 11
    },
    {
      "cells": [
        "gotItButton"
      ],
      "line": 12
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "user should login successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "_01_LoginStepss.navigateToBasqar()"
});
formatter.result({
  "duration": 1421748300,
  "status": "passed"
});
formatter.match({
  "location": "_01_LoginStepss.userSendingTheKeyInTheDialogContentClass(DataTable)"
});
formatter.result({
  "duration": 448179200,
  "status": "passed"
});
formatter.match({
  "location": "_01_LoginStepss.userClickOnTheElementInTheDialogContentClass(DataTable)"
});
formatter.result({
  "duration": 298808400,
  "status": "passed"
});
formatter.match({
  "location": "_01_LoginStepss.userShouldLoginSuccessfully()"
});
formatter.result({
  "duration": 1984831300,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Create and Delete Country",
  "description": "",
  "id": "create-and-delete-functionality-for-countries;create-and-delete-country",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 15,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "User click on the element in the leftNav class",
  "rows": [
    {
      "cells": [
        "setup"
      ],
      "line": 20
    },
    {
      "cells": [
        "parameters"
      ],
      "line": 21
    },
    {
      "cells": [
        "countries"
      ],
      "line": 22
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "User click on the element in the dialog content class",
  "rows": [
    {
      "cells": [
        "addButton"
      ],
      "line": 25
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "User sending the key in the dialog content class",
  "rows": [
    {
      "cells": [
        "name",
        "England"
      ],
      "line": 28
    },
    {
      "cells": [
        "code",
        "123"
      ],
      "line": 29
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "User click on the element in the dialog content class",
  "rows": [
    {
      "cells": [
        "saveButton"
      ],
      "line": 32
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "User should see \"successfully\" message",
  "keyword": "Then "
});
formatter.step({
  "line": 36,
  "name": "User sending the key in the dialog content class",
  "rows": [
    {
      "cells": [
        "searchName",
        "England"
      ],
      "line": 37
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "User click on the element in the dialog content class",
  "rows": [
    {
      "cells": [
        "search"
      ],
      "line": 40
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "User delete \"England\"",
  "keyword": "When "
});
formatter.step({
  "line": 44,
  "name": "User should see \"successfully\" messageThen User should see \"successfully\" message",
  "keyword": "Then "
});
formatter.match({
  "location": "_02_CountrySteps.userClickOnTheElementInTheLeftNavClass(DataTable)"
});
formatter.result({
  "duration": 40132032900,
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for element to be clickable: Proxy element for: DefaultElementLocator \u0027by id or name \"myElement\"\u0027 (tried for 10 second(s) with 500 milliseconds interval)\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:95)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:272)\r\n\tat pages._Parent.waitUntilClickable(_Parent.java:43)\r\n\tat pages._Parent.clickFunction(_Parent.java:28)\r\n\tat pages.LeftNav.findElementAndClickFunction(LeftNav.java:78)\r\n\tat stepDefinations._02_CountrySteps.userClickOnTheElementInTheLeftNavClass(_02_CountrySteps.java:26)\r\n\tat ✽.When User click on the element in the leftNav class(_03.1_Country.feature:19)\r\nCaused by: org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"*[name\u003d\u0027myElement\u0027]\"}\n  (Session info: chrome\u003d86.0.4240.198)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-2C108AM\u0027, ip: \u0027192.168.0.12\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002714.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 86.0.4240.198, chrome: {chromedriverVersion: 86.0.4240.22 (398b0743353ff..., userDataDir: C:\\Users\\keski\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:53562}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 095a5f29134614349fc71dcf83937a43\n*** Element info: {Using\u003dname, value\u003dmyElement}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByName(RemoteWebDriver.java:404)\r\n\tat org.openqa.selenium.By$ByName.findElement(By.java:284)\r\n\tat org.openqa.selenium.support.ByIdOrName.findElement(ByIdOrName.java:50)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy20.isDisplayed(Unknown Source)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.elementIfVisible(ExpectedConditions.java:314)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$000(ExpectedConditions.java:43)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$10.apply(ExpectedConditions.java:300)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$10.apply(ExpectedConditions.java:297)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$23.apply(ExpectedConditions.java:670)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$23.apply(ExpectedConditions.java:666)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:249)\r\n\tat pages._Parent.waitUntilClickable(_Parent.java:43)\r\n\tat pages._Parent.clickFunction(_Parent.java:28)\r\n\tat pages.LeftNav.findElementAndClickFunction(LeftNav.java:78)\r\n\tat stepDefinations._02_CountrySteps.userClickOnTheElementInTheLeftNavClass(_02_CountrySteps.java:26)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:564)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:564)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:134)\r\n\tat org.testng.internal.TestInvoker.invokeMethod(TestInvoker.java:597)\r\n\tat org.testng.internal.TestInvoker.invokeTestMethod(TestInvoker.java:173)\r\n\tat org.testng.internal.MethodRunner.runInSequence(MethodRunner.java:46)\r\n\tat org.testng.internal.TestInvoker$MethodInvocationAgent.invoke(TestInvoker.java:816)\r\n\tat org.testng.internal.TestInvoker.invokeTestMethods(TestInvoker.java:146)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:146)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:128)\r\n\tat java.base/java.util.ArrayList.forEach(ArrayList.java:1511)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:766)\r\n\tat org.testng.TestRunner.run(TestRunner.java:587)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:384)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:378)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:337)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:286)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:53)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:96)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1187)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1109)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1039)\r\n\tat org.testng.TestNG.run(TestNG.java:1007)\r\n\tat com.intellij.rt.testng.IDEARemoteTestNG.run(IDEARemoteTestNG.java:66)\r\n\tat com.intellij.rt.testng.RemoteTestNGStarter.main(RemoteTestNGStarter.java:109)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "_01_LoginStepss.userClickOnTheElementInTheDialogContentClass(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "_01_LoginStepss.userSendingTheKeyInTheDialogContentClass(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "_01_LoginStepss.userClickOnTheElementInTheDialogContentClass(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "successfully",
      "offset": 17
    }
  ],
  "location": "_02_CountrySteps.userShouldSeeMessage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "_01_LoginStepss.userSendingTheKeyInTheDialogContentClass(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "_01_LoginStepss.userClickOnTheElementInTheDialogContentClass(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "England",
      "offset": 13
    }
  ],
  "location": "_02_CountrySteps.userDelete(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "successfully",
      "offset": 17
    },
    {
      "val": "successfully",
      "offset": 60
    }
  ],
  "location": "_02_CountrySteps.userEdit(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("_03.2_City.feature");
formatter.feature({
  "line": 1,
  "name": "Creat and Delete Functionality for Cities",
  "description": "",
  "id": "creat-and-delete-functionality-for-cities",
  "keyword": "Feature"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Navigate to basqar",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User sending the key in the dialog content class",
  "rows": [
    {
      "cells": [
        "username",
        "daulet2030@gmail.com"
      ],
      "line": 7
    },
    {
      "cells": [
        "password",
        "TechnoStudy123@"
      ],
      "line": 8
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User click on the element in the dialog content class",
  "rows": [
    {
      "cells": [
        "loginButton"
      ],
      "line": 11
    },
    {
      "cells": [
        "gotItButton"
      ],
      "line": 12
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "user should login successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "_01_LoginStepss.navigateToBasqar()"
});
formatter.result({
  "duration": 1564964400,
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: failed to change window state to \u0027normal\u0027, current state is \u0027maximized\u0027\n  (Session info: chrome\u003d86.0.4240.198)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-2C108AM\u0027, ip: \u0027192.168.0.12\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002714.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 86.0.4240.198, chrome: {chromedriverVersion: 86.0.4240.22 (398b0743353ff..., userDataDir: C:\\Users\\keski\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:53562}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 095a5f29134614349fc71dcf83937a43\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:609)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteWebDriverOptions$RemoteWindow.maximize(RemoteWebDriver.java:837)\r\n\tat stepDefinations._01_LoginStepss.navigateToBasqar(_01_LoginStepss.java:24)\r\n\tat ✽.Given Navigate to basqar(_03.2_City.feature:4)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "_01_LoginStepss.userSendingTheKeyInTheDialogContentClass(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "_01_LoginStepss.userClickOnTheElementInTheDialogContentClass(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "_01_LoginStepss.userShouldLoginSuccessfully()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 16,
  "name": "Creat and Delete City",
  "description": "",
  "id": "creat-and-delete-functionality-for-cities;creat-and-delete-city",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 18,
  "name": "User click on the element in the leftNav class",
  "rows": [
    {
      "cells": [
        "setup"
      ],
      "line": 19
    },
    {
      "cells": [
        "parameters"
      ],
      "line": 20
    },
    {
      "cells": [
        "cities"
      ],
      "line": 21
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "User click on the element in the dialog content class",
  "rows": [
    {
      "cells": [
        "addButton"
      ],
      "line": 24
    },
    {
      "cells": [
        "country"
      ],
      "line": 25
    },
    {
      "cells": [
        "randomSelect"
      ],
      "line": 26
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "User sending the key in the dialog content class",
  "rows": [
    {
      "cells": [
        "name",
        "England"
      ],
      "line": 29
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "User click on the element in the dialog content class",
  "rows": [
    {
      "cells": [
        "saveButton"
      ],
      "line": 32
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "User should see \"successfully\" message",
  "keyword": "Then "
});
formatter.step({
  "line": 36,
  "name": "User sending the key in the dialog content class",
  "rows": [
    {
      "cells": [
        "searchName",
        "England"
      ],
      "line": 37
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "User click on the element in the dialog content class",
  "rows": [
    {
      "cells": [
        "search"
      ],
      "line": 40
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "User delete \"England\"",
  "keyword": "When "
});
formatter.step({
  "line": 44,
  "name": "User should see \"successfully\" message",
  "keyword": "Then "
});
formatter.match({
  "location": "_02_CountrySteps.userClickOnTheElementInTheLeftNavClass(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "_01_LoginStepss.userClickOnTheElementInTheDialogContentClass(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "_01_LoginStepss.userSendingTheKeyInTheDialogContentClass(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "_01_LoginStepss.userClickOnTheElementInTheDialogContentClass(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "successfully",
      "offset": 17
    }
  ],
  "location": "_02_CountrySteps.userShouldSeeMessage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "_01_LoginStepss.userSendingTheKeyInTheDialogContentClass(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "_01_LoginStepss.userClickOnTheElementInTheDialogContentClass(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "England",
      "offset": 13
    }
  ],
  "location": "_02_CountrySteps.userDelete(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "successfully",
      "offset": 17
    }
  ],
  "location": "_02_CountrySteps.userShouldSeeMessage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("_03.3-4_CountryEror.feature");
formatter.feature({
  "line": 1,
  "name": "Creat and Delete Functionality for Countries and Cities",
  "description": "",
  "id": "creat-and-delete-functionality-for-countries-and-cities",
  "keyword": "Feature"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Navigate to basqar",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User sending the key in the dialog content class",
  "rows": [
    {
      "cells": [
        "username",
        "daulet2030@gmail.com"
      ],
      "line": 7
    },
    {
      "cells": [
        "password",
        "TechnoStudy123@"
      ],
      "line": 8
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User click on the element in the dialog content class",
  "rows": [
    {
      "cells": [
        "loginButton"
      ],
      "line": 11
    },
    {
      "cells": [
        "gotItButton"
      ],
      "line": 12
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "user should login successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "_01_LoginStepss.navigateToBasqar()"
});
formatter.result({
  "duration": 1140836600,
  "status": "passed"
});
formatter.match({
  "location": "_01_LoginStepss.userSendingTheKeyInTheDialogContentClass(DataTable)"
});
formatter.result({
  "duration": 398181700,
  "status": "passed"
});
formatter.match({
  "location": "_01_LoginStepss.userClickOnTheElementInTheDialogContentClass(DataTable)"
});
formatter.result({
  "duration": 252695100,
  "status": "passed"
});
formatter.match({
  "location": "_01_LoginStepss.userShouldLoginSuccessfully()"
});
formatter.result({
  "duration": 1899073300,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Creat and Delete Country and City",
  "description": "",
  "id": "creat-and-delete-functionality-for-countries-and-cities;creat-and-delete-country-and-city",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 18,
  "name": "User click on the element in the leftNav class",
  "rows": [
    {
      "cells": [
        "setup"
      ],
      "line": 19
    },
    {
      "cells": [
        "parameters"
      ],
      "line": 20
    },
    {
      "cells": [
        "countries"
      ],
      "line": 21
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "User click on the element in the dialog content class",
  "rows": [
    {
      "cells": [
        "addButton"
      ],
      "line": 24
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "User sending the key in the dialog content class",
  "rows": [
    {
      "cells": [
        "name",
        "England"
      ],
      "line": 27
    },
    {
      "cells": [
        "code",
        "123"
      ],
      "line": 28
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "User click on the element in the dialog content class",
  "rows": [
    {
      "cells": [
        "saveButton"
      ],
      "line": 31
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "User should see \"successfully\" message",
  "keyword": "Then "
});
formatter.step({
  "line": 35,
  "name": "User click on the element in the leftNav class",
  "rows": [
    {
      "cells": [
        "cities"
      ],
      "line": 36
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 38,
  "name": "User click on the element in the dialog content class",
  "rows": [
    {
      "cells": [
        "addButton"
      ],
      "line": 39
    },
    {
      "cells": [
        "country"
      ],
      "line": 40
    },
    {
      "cells": [
        "England"
      ],
      "line": 41
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "User sending the key in the dialog content class",
  "rows": [
    {
      "cells": [
        "name",
        "England"
      ],
      "line": 44
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "User click on the element in the dialog content class",
  "rows": [
    {
      "cells": [
        "saveButton"
      ],
      "line": 47
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "User should see \"successfully\" message",
  "keyword": "Then "
});
formatter.step({
  "line": 51,
  "name": "User click on the element in the leftNav class",
  "rows": [
    {
      "cells": [
        "countries"
      ],
      "line": 52
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 54,
  "name": "User sending the key in the dialog content class",
  "rows": [
    {
      "cells": [
        "searchName",
        "England"
      ],
      "line": 55
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 57,
  "name": "User click on the element in the dialog content class",
  "rows": [
    {
      "cells": [
        "search"
      ],
      "line": 58
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "User delete \"England \"",
  "keyword": "When "
});
formatter.step({
  "line": 62,
  "name": "User should see \"error\" message",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 65,
      "value": "#    ilave kısım"
    }
  ],
  "line": 66,
  "name": "User click on the element in the leftNav class",
  "rows": [
    {
      "cells": [
        "cities"
      ],
      "line": 67
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 68,
  "name": "User sending the key in the dialog content class",
  "rows": [
    {
      "cells": [
        "searchName",
        "England"
      ],
      "line": 69
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 70,
  "name": "User click on the element in the dialog content class",
  "rows": [
    {
      "cells": [
        "search"
      ],
      "line": 71
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 72,
  "name": "User delete \"England \"",
  "keyword": "When "
});
formatter.step({
  "line": 73,
  "name": "User should see \"successfully\" message",
  "keyword": "Then "
});
formatter.step({
  "line": 74,
  "name": "User click on the element in the leftNav class",
  "rows": [
    {
      "cells": [
        "countries"
      ],
      "line": 75
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 76,
  "name": "User sending the key in the dialog content class",
  "rows": [
    {
      "cells": [
        "searchName",
        "England"
      ],
      "line": 77
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 78,
  "name": "User click on the element in the dialog content class",
  "rows": [
    {
      "cells": [
        "search"
      ],
      "line": 79
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 80,
  "name": "User delete \"England \"",
  "keyword": "When "
});
formatter.step({
  "line": 81,
  "name": "User should see \"successfully\" message",
  "keyword": "Then "
});
formatter.match({
  "location": "_02_CountrySteps.userClickOnTheElementInTheLeftNavClass(DataTable)"
});
formatter.result({
  "duration": 40080450000,
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for element to be clickable: Proxy element for: DefaultElementLocator \u0027by id or name \"myElement\"\u0027 (tried for 10 second(s) with 500 milliseconds interval)\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:95)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:272)\r\n\tat pages._Parent.waitUntilClickable(_Parent.java:43)\r\n\tat pages._Parent.clickFunction(_Parent.java:28)\r\n\tat pages.LeftNav.findElementAndClickFunction(LeftNav.java:78)\r\n\tat stepDefinations._02_CountrySteps.userClickOnTheElementInTheLeftNavClass(_02_CountrySteps.java:26)\r\n\tat ✽.When User click on the element in the leftNav class(_03.3-4_CountryEror.feature:18)\r\nCaused by: org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"*[name\u003d\u0027myElement\u0027]\"}\n  (Session info: chrome\u003d86.0.4240.198)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-2C108AM\u0027, ip: \u0027192.168.0.12\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002714.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 86.0.4240.198, chrome: {chromedriverVersion: 86.0.4240.22 (398b0743353ff..., userDataDir: C:\\Users\\keski\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:53562}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 095a5f29134614349fc71dcf83937a43\n*** Element info: {Using\u003dname, value\u003dmyElement}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByName(RemoteWebDriver.java:404)\r\n\tat org.openqa.selenium.By$ByName.findElement(By.java:284)\r\n\tat org.openqa.selenium.support.ByIdOrName.findElement(ByIdOrName.java:50)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy20.isDisplayed(Unknown Source)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.elementIfVisible(ExpectedConditions.java:314)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$000(ExpectedConditions.java:43)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$10.apply(ExpectedConditions.java:300)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$10.apply(ExpectedConditions.java:297)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$23.apply(ExpectedConditions.java:670)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$23.apply(ExpectedConditions.java:666)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:249)\r\n\tat pages._Parent.waitUntilClickable(_Parent.java:43)\r\n\tat pages._Parent.clickFunction(_Parent.java:28)\r\n\tat pages.LeftNav.findElementAndClickFunction(LeftNav.java:78)\r\n\tat stepDefinations._02_CountrySteps.userClickOnTheElementInTheLeftNavClass(_02_CountrySteps.java:26)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:564)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:564)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:134)\r\n\tat org.testng.internal.TestInvoker.invokeMethod(TestInvoker.java:597)\r\n\tat org.testng.internal.TestInvoker.invokeTestMethod(TestInvoker.java:173)\r\n\tat org.testng.internal.MethodRunner.runInSequence(MethodRunner.java:46)\r\n\tat org.testng.internal.TestInvoker$MethodInvocationAgent.invoke(TestInvoker.java:816)\r\n\tat org.testng.internal.TestInvoker.invokeTestMethods(TestInvoker.java:146)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:146)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:128)\r\n\tat java.base/java.util.ArrayList.forEach(ArrayList.java:1511)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:766)\r\n\tat org.testng.TestRunner.run(TestRunner.java:587)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:384)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:378)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:337)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:286)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:53)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:96)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1187)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1109)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1039)\r\n\tat org.testng.TestNG.run(TestNG.java:1007)\r\n\tat com.intellij.rt.testng.IDEARemoteTestNG.run(IDEARemoteTestNG.java:66)\r\n\tat com.intellij.rt.testng.RemoteTestNGStarter.main(RemoteTestNGStarter.java:109)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "_01_LoginStepss.userClickOnTheElementInTheDialogContentClass(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "_01_LoginStepss.userSendingTheKeyInTheDialogContentClass(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "_01_LoginStepss.userClickOnTheElementInTheDialogContentClass(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "successfully",
      "offset": 17
    }
  ],
  "location": "_02_CountrySteps.userShouldSeeMessage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "_02_CountrySteps.userClickOnTheElementInTheLeftNavClass(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "_01_LoginStepss.userClickOnTheElementInTheDialogContentClass(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "_01_LoginStepss.userSendingTheKeyInTheDialogContentClass(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "_01_LoginStepss.userClickOnTheElementInTheDialogContentClass(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "successfully",
      "offset": 17
    }
  ],
  "location": "_02_CountrySteps.userShouldSeeMessage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "_02_CountrySteps.userClickOnTheElementInTheLeftNavClass(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "_01_LoginStepss.userSendingTheKeyInTheDialogContentClass(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "_01_LoginStepss.userClickOnTheElementInTheDialogContentClass(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "England ",
      "offset": 13
    }
  ],
  "location": "_02_CountrySteps.userDelete(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "error",
      "offset": 17
    }
  ],
  "location": "_02_CountrySteps.userShouldSeeMessage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "_02_CountrySteps.userClickOnTheElementInTheLeftNavClass(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "_01_LoginStepss.userSendingTheKeyInTheDialogContentClass(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "_01_LoginStepss.userClickOnTheElementInTheDialogContentClass(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "England ",
      "offset": 13
    }
  ],
  "location": "_02_CountrySteps.userDelete(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "successfully",
      "offset": 17
    }
  ],
  "location": "_02_CountrySteps.userShouldSeeMessage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "_02_CountrySteps.userClickOnTheElementInTheLeftNavClass(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "_01_LoginStepss.userSendingTheKeyInTheDialogContentClass(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "_01_LoginStepss.userClickOnTheElementInTheDialogContentClass(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "England ",
      "offset": 13
    }
  ],
  "location": "_02_CountrySteps.userDelete(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "successfully",
      "offset": 17
    }
  ],
  "location": "_02_CountrySteps.userShouldSeeMessage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("_03.5_SubjectCategories.feature");
formatter.feature({
  "line": 1,
  "name": "Create And Delete Subject Categories",
  "description": "",
  "id": "create-and-delete-subject-categories",
  "keyword": "Feature"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Navigate to basqar",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User sending the key in the dialog content class",
  "rows": [
    {
      "cells": [
        "username",
        "daulet2030@gmail.com"
      ],
      "line": 7
    },
    {
      "cells": [
        "password",
        "TechnoStudy123@"
      ],
      "line": 8
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User click on the element in the dialog content class",
  "rows": [
    {
      "cells": [
        "loginButton"
      ],
      "line": 11
    },
    {
      "cells": [
        "gotItButton"
      ],
      "line": 12
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "user should login successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "_01_LoginStepss.navigateToBasqar()"
});
formatter.result({
  "duration": 1555304200,
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: failed to change window state to \u0027normal\u0027, current state is \u0027maximized\u0027\n  (Session info: chrome\u003d86.0.4240.198)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-2C108AM\u0027, ip: \u0027192.168.0.12\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002714.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 86.0.4240.198, chrome: {chromedriverVersion: 86.0.4240.22 (398b0743353ff..., userDataDir: C:\\Users\\keski\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:53562}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 095a5f29134614349fc71dcf83937a43\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:609)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteWebDriverOptions$RemoteWindow.maximize(RemoteWebDriver.java:837)\r\n\tat stepDefinations._01_LoginStepss.navigateToBasqar(_01_LoginStepss.java:24)\r\n\tat ✽.Given Navigate to basqar(_03.5_SubjectCategories.feature:4)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "_01_LoginStepss.userSendingTheKeyInTheDialogContentClass(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "_01_LoginStepss.userClickOnTheElementInTheDialogContentClass(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "_01_LoginStepss.userShouldLoginSuccessfully()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 16,
  "name": "Create and Delete Subject Categories",
  "description": "",
  "id": "create-and-delete-subject-categories;create-and-delete-subject-categories",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 18,
  "name": "User click on the element in the leftNav class",
  "rows": [
    {
      "cells": [
        "education"
      ],
      "line": 19
    },
    {
      "cells": [
        "setupEducation"
      ],
      "line": 20
    },
    {
      "cells": [
        "subjectCategories"
      ],
      "line": 21
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "User click on the element in the dialog content class",
  "rows": [
    {
      "cells": [
        "addButton"
      ],
      "line": 24
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "User sending the key in the dialog content class",
  "rows": [
    {
      "cells": [
        "name",
        "EnglandNewCategories"
      ],
      "line": 27
    },
    {
      "cells": [
        "code",
        "abc"
      ],
      "line": 28
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "User click on the element in the dialog content class",
  "rows": [
    {
      "cells": [
        "saveButton"
      ],
      "line": 31
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "User should see \"successfully\" message",
  "keyword": "Then "
});
formatter.step({
  "line": 35,
  "name": "User sending the key in the dialog content class",
  "rows": [
    {
      "cells": [
        "searchName",
        "EnglandNewCategories"
      ],
      "line": 36
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "User click on the element in the dialog content class",
  "rows": [
    {
      "cells": [
        "search"
      ],
      "line": 39
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "User delete \"EnglandNewCategories\"",
  "keyword": "When "
});
formatter.step({
  "line": 43,
  "name": "User should see \"successfully\" message",
  "keyword": "Then "
});
formatter.match({
  "location": "_02_CountrySteps.userClickOnTheElementInTheLeftNavClass(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "_01_LoginStepss.userClickOnTheElementInTheDialogContentClass(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "_01_LoginStepss.userSendingTheKeyInTheDialogContentClass(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "_01_LoginStepss.userClickOnTheElementInTheDialogContentClass(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "successfully",
      "offset": 17
    }
  ],
  "location": "_02_CountrySteps.userShouldSeeMessage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "_01_LoginStepss.userSendingTheKeyInTheDialogContentClass(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "_01_LoginStepss.userClickOnTheElementInTheDialogContentClass(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "EnglandNewCategories",
      "offset": 13
    }
  ],
  "location": "_02_CountrySteps.userDelete(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "successfully",
      "offset": 17
    }
  ],
  "location": "_02_CountrySteps.userShouldSeeMessage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("_03.6_Subjects.feature");
formatter.feature({
  "line": 1,
  "name": "Create And Delete Subjects",
  "description": "",
  "id": "create-and-delete-subjects",
  "keyword": "Feature"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Navigate to basqar",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User sending the key in the dialog content class",
  "rows": [
    {
      "cells": [
        "username",
        "daulet2030@gmail.com"
      ],
      "line": 7
    },
    {
      "cells": [
        "password",
        "TechnoStudy123@"
      ],
      "line": 8
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User click on the element in the dialog content class",
  "rows": [
    {
      "cells": [
        "loginButton"
      ],
      "line": 11
    },
    {
      "cells": [
        "gotItButton"
      ],
      "line": 12
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "user should login successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "_01_LoginStepss.navigateToBasqar()"
});
formatter.result({
  "duration": 1051786100,
  "status": "passed"
});
formatter.match({
  "location": "_01_LoginStepss.userSendingTheKeyInTheDialogContentClass(DataTable)"
});
formatter.result({
  "duration": 467022100,
  "status": "passed"
});
formatter.match({
  "location": "_01_LoginStepss.userClickOnTheElementInTheDialogContentClass(DataTable)"
});
formatter.result({
  "duration": 240139200,
  "status": "passed"
});
formatter.match({
  "location": "_01_LoginStepss.userShouldLoginSuccessfully()"
});
formatter.result({
  "duration": 2437923400,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Create and Delete Subjects",
  "description": "",
  "id": "create-and-delete-subjects;create-and-delete-subjects",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 18,
  "name": "User click on the element in the leftNav class",
  "rows": [
    {
      "cells": [
        "education"
      ],
      "line": 19
    },
    {
      "cells": [
        "setupEducation"
      ],
      "line": 20
    },
    {
      "cells": [
        "subjects"
      ],
      "line": 21
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "User click on the element in the dialog content class",
  "rows": [
    {
      "cells": [
        "addButton"
      ],
      "line": 24
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "User sending the key in the dialog content class",
  "rows": [
    {
      "cells": [
        "name",
        "EnglandSubject"
      ],
      "line": 27
    },
    {
      "cells": [
        "code",
        "123"
      ],
      "line": 28
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "User click on the element in the dialog content class",
  "rows": [
    {
      "cells": [
        "subjectCategory"
      ],
      "line": 31
    },
    {
      "cells": [
        "randomSelect"
      ],
      "line": 32
    },
    {
      "cells": [
        "styleSubjects"
      ],
      "line": 33
    },
    {
      "cells": [
        "randomSelect"
      ],
      "line": 34
    },
    {
      "cells": [
        "saveButton"
      ],
      "line": 35
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "User should see \"successfully\" message",
  "keyword": "Then "
});
formatter.step({
  "line": 39,
  "name": "User sending the key in the dialog content class",
  "rows": [
    {
      "cells": [
        "searchName",
        "EnglandSubject"
      ],
      "line": 40
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "User click on the element in the dialog content class",
  "rows": [
    {
      "cells": [
        "search"
      ],
      "line": 43
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "User delete \"EnglandSubject\"",
  "keyword": "When "
});
formatter.step({
  "line": 47,
  "name": "User should see \"successfully\" message",
  "keyword": "Then "
});
formatter.match({
  "location": "_02_CountrySteps.userClickOnTheElementInTheLeftNavClass(DataTable)"
});
formatter.result({
  "duration": 1160026700,
  "status": "passed"
});
formatter.match({
  "location": "_01_LoginStepss.userClickOnTheElementInTheDialogContentClass(DataTable)"
});
formatter.result({
  "duration": 872215200,
  "status": "passed"
});
formatter.match({
  "location": "_01_LoginStepss.userSendingTheKeyInTheDialogContentClass(DataTable)"
});
formatter.result({
  "duration": 588319900,
  "status": "passed"
});
formatter.match({
  "location": "_01_LoginStepss.userClickOnTheElementInTheDialogContentClass(DataTable)"
});
formatter.result({
  "duration": 1440432800,
  "error_message": "org.openqa.selenium.ElementClickInterceptedException: element click intercepted: Element \u003cspan class\u003d\"mat-select-placeholder ng-tns-c215-72 ng-star-inserted\" style\u003d\"\"\u003e...\u003c/span\u003e is not clickable at point (392, 287). Other element would receive the click: \u003cspan class\u003d\"mat-option-text\"\u003e...\u003c/span\u003e\n  (Session info: chrome\u003d86.0.4240.198)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-2C108AM\u0027, ip: \u0027192.168.0.12\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002714.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 86.0.4240.198, chrome: {chromedriverVersion: 86.0.4240.22 (398b0743353ff..., userDataDir: C:\\Users\\keski\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:53562}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 095a5f29134614349fc71dcf83937a43\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\r\n\tat jdk.internal.reflect.GeneratedMethodAccessor6.invoke(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:564)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\r\n\tat com.sun.proxy.$Proxy20.click(Unknown Source)\r\n\tat pages._Parent.clickFunction(_Parent.java:30)\r\n\tat pages.DialogContent.findElementClickFunction(DialogContent.java:133)\r\n\tat stepDefinations._01_LoginStepss.userClickOnTheElementInTheDialogContentClass(_01_LoginStepss.java:47)\r\n\tat ✽.And User click on the element in the dialog content class(_03.6_Subjects.feature:30)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "successfully",
      "offset": 17
    }
  ],
  "location": "_02_CountrySteps.userShouldSeeMessage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "_01_LoginStepss.userSendingTheKeyInTheDialogContentClass(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "_01_LoginStepss.userClickOnTheElementInTheDialogContentClass(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "EnglandSubject",
      "offset": 13
    }
  ],
  "location": "_02_CountrySteps.userDelete(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "successfully",
      "offset": 17
    }
  ],
  "location": "_02_CountrySteps.userShouldSeeMessage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("_03.7_SubjectCategoryEror.feature");
formatter.feature({
  "line": 1,
  "name": "Creat and Delete Functionality for Subject Category",
  "description": "",
  "id": "creat-and-delete-functionality-for-subject-category",
  "keyword": "Feature"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Navigate to basqar",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User sending the key in the dialog content class",
  "rows": [
    {
      "cells": [
        "username",
        "daulet2030@gmail.com"
      ],
      "line": 7
    },
    {
      "cells": [
        "password",
        "TechnoStudy123@"
      ],
      "line": 8
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User click on the element in the dialog content class",
  "rows": [
    {
      "cells": [
        "loginButton"
      ],
      "line": 11
    },
    {
      "cells": [
        "gotItButton"
      ],
      "line": 12
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "user should login successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "_01_LoginStepss.navigateToBasqar()"
});
formatter.result({
  "duration": 1147637700,
  "status": "passed"
});
formatter.match({
  "location": "_01_LoginStepss.userSendingTheKeyInTheDialogContentClass(DataTable)"
});
formatter.result({
  "duration": 417366300,
  "status": "passed"
});
formatter.match({
  "location": "_01_LoginStepss.userClickOnTheElementInTheDialogContentClass(DataTable)"
});
formatter.result({
  "duration": 10142571100,
  "status": "passed"
});
formatter.match({
  "location": "_01_LoginStepss.userShouldLoginSuccessfully()"
});
formatter.result({
  "duration": 47891400,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Creat and Delete Subject Category",
  "description": "",
  "id": "creat-and-delete-functionality-for-subject-category;creat-and-delete-subject-category",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 18,
  "name": "User click on the element in the leftNav class",
  "rows": [
    {
      "cells": [
        "education"
      ],
      "line": 19
    },
    {
      "cells": [
        "setupEducation"
      ],
      "line": 20
    },
    {
      "cells": [
        "subjectCategories"
      ],
      "line": 21
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "User click on the element in the dialog content class",
  "rows": [
    {
      "cells": [
        "addButton"
      ],
      "line": 24
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "User sending the key in the dialog content class",
  "rows": [
    {
      "cells": [
        "name",
        "MySubjectCat3"
      ],
      "line": 27
    },
    {
      "cells": [
        "code",
        "abc"
      ],
      "line": 28
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "User click on the element in the dialog content class",
  "rows": [
    {
      "cells": [
        "saveButton"
      ],
      "line": 31
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "User should see \"successfully\" message",
  "keyword": "Then "
});
formatter.step({
  "line": 35,
  "name": "User click on the element in the leftNav class",
  "rows": [
    {
      "cells": [
        "subjects"
      ],
      "line": 36
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 38,
  "name": "User click on the element in the dialog content class",
  "rows": [
    {
      "cells": [
        "addButton"
      ],
      "line": 39
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "User sending the key in the dialog content class",
  "rows": [
    {
      "cells": [
        "name",
        "EnglandSubject"
      ],
      "line": 42
    },
    {
      "cells": [
        "code",
        "123"
      ],
      "line": 43
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "User click on the element in the dialog content class",
  "rows": [
    {
      "cells": [
        "subjectCategory"
      ],
      "line": 46
    },
    {
      "cells": [
        "MySubjectCat3"
      ],
      "line": 47
    },
    {
      "cells": [
        "styleSubjects"
      ],
      "line": 48
    },
    {
      "cells": [
        "randomSelect"
      ],
      "line": 49
    },
    {
      "cells": [
        "saveButton"
      ],
      "line": 50
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "User should see \"successfully\" message",
  "keyword": "Then "
});
formatter.step({
  "line": 54,
  "name": "User click on the element in the leftNav class",
  "rows": [
    {
      "cells": [
        "subjectCategories"
      ],
      "line": 55
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 57,
  "name": "User sending the key in the dialog content class",
  "rows": [
    {
      "cells": [
        "searchName",
        "MySubjectCat3"
      ],
      "line": 58
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "User click on the element in the dialog content class",
  "rows": [
    {
      "cells": [
        "search"
      ],
      "line": 61
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 63,
  "name": "User delete \"MySubjectCat3\"",
  "keyword": "When "
});
formatter.step({
  "line": 65,
  "name": "User should see \"error\" message",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 68,
      "value": "#    ilave kısım"
    }
  ],
  "line": 69,
  "name": "User click on the element in the leftNav class",
  "rows": [
    {
      "cells": [
        "subjects"
      ],
      "line": 70
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 71,
  "name": "User sending the key in the dialog content class",
  "rows": [
    {
      "cells": [
        "searchName",
        "EnglandSubject"
      ],
      "line": 72
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 73,
  "name": "User click on the element in the dialog content class",
  "rows": [
    {
      "cells": [
        "search"
      ],
      "line": 74
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 75,
  "name": "User delete \"EnglandSubject\"",
  "keyword": "When "
});
formatter.step({
  "line": 76,
  "name": "User should see \"successfully\" message",
  "keyword": "Then "
});
formatter.step({
  "line": 77,
  "name": "User click on the element in the leftNav class",
  "rows": [
    {
      "cells": [
        "subjectCategories"
      ],
      "line": 78
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 79,
  "name": "User sending the key in the dialog content class",
  "rows": [
    {
      "cells": [
        "searchName",
        "MySubjectCat3"
      ],
      "line": 80
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 81,
  "name": "User click on the element in the dialog content class",
  "rows": [
    {
      "cells": [
        "search"
      ],
      "line": 82
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 83,
  "name": "User delete \"MySubjectCat3\"",
  "keyword": "When "
});
formatter.step({
  "line": 84,
  "name": "User should see \"successfully\" message",
  "keyword": "Then "
});
formatter.match({
  "location": "_02_CountrySteps.userClickOnTheElementInTheLeftNavClass(DataTable)"
});
formatter.result({
  "duration": 878853100,
  "status": "passed"
});
formatter.match({
  "location": "_01_LoginStepss.userClickOnTheElementInTheDialogContentClass(DataTable)"
});
formatter.result({
  "duration": 803334800,
  "status": "passed"
});
formatter.match({
  "location": "_01_LoginStepss.userSendingTheKeyInTheDialogContentClass(DataTable)"
});
formatter.result({
  "duration": 341456600,
  "status": "passed"
});
formatter.match({
  "location": "_01_LoginStepss.userClickOnTheElementInTheDialogContentClass(DataTable)"
});
formatter.result({
  "duration": 1130947200,
  "error_message": "org.openqa.selenium.ElementClickInterceptedException: element click intercepted: Element \u003cbutton mat-button\u003d\"\" mat-icon-button\u003d\"\" matbadgeoverlap\u003d\"false\" matbadgesize\u003d\"small\" matbadgeposition\u003d\"below\" matbadgecolor\u003d\"accent\" class\u003d\"mat-focus-indicator mat-tooltip-trigger mat-badge mat-button mat-icon-button mat-button-base mat-badge-accent mat-badge-below mat-badge-after mat-badge-small mat-badge-hidden ng-star-inserted\" aria-describedby\u003d\"cdk-describedby-message-20\" cdk-describedby-host\u003d\"\"\u003e...\u003c/button\u003e is not clickable at point (1236, 88). Other element would receive the click: \u003cdiv class\u003d\"cdk-overlay-backdrop cdk-overlay-dark-backdrop\"\u003e\u003c/div\u003e\n  (Session info: chrome\u003d86.0.4240.198)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-2C108AM\u0027, ip: \u0027192.168.0.12\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002714.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 86.0.4240.198, chrome: {chromedriverVersion: 86.0.4240.22 (398b0743353ff..., userDataDir: C:\\Users\\keski\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:53562}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 095a5f29134614349fc71dcf83937a43\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\r\n\tat jdk.internal.reflect.GeneratedMethodAccessor6.invoke(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:564)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\r\n\tat com.sun.proxy.$Proxy20.click(Unknown Source)\r\n\tat pages._Parent.clickFunction(_Parent.java:30)\r\n\tat pages.DialogContent.findElementClickFunction(DialogContent.java:133)\r\n\tat stepDefinations._01_LoginStepss.userClickOnTheElementInTheDialogContentClass(_01_LoginStepss.java:47)\r\n\tat ✽.And User click on the element in the dialog content class(_03.7_SubjectCategoryEror.feature:30)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "successfully",
      "offset": 17
    }
  ],
  "location": "_02_CountrySteps.userShouldSeeMessage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "_02_CountrySteps.userClickOnTheElementInTheLeftNavClass(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "_01_LoginStepss.userClickOnTheElementInTheDialogContentClass(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "_01_LoginStepss.userSendingTheKeyInTheDialogContentClass(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "_01_LoginStepss.userClickOnTheElementInTheDialogContentClass(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "successfully",
      "offset": 17
    }
  ],
  "location": "_02_CountrySteps.userShouldSeeMessage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "_02_CountrySteps.userClickOnTheElementInTheLeftNavClass(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "_01_LoginStepss.userSendingTheKeyInTheDialogContentClass(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "_01_LoginStepss.userClickOnTheElementInTheDialogContentClass(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "MySubjectCat3",
      "offset": 13
    }
  ],
  "location": "_02_CountrySteps.userDelete(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "error",
      "offset": 17
    }
  ],
  "location": "_02_CountrySteps.userShouldSeeMessage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "_02_CountrySteps.userClickOnTheElementInTheLeftNavClass(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "_01_LoginStepss.userSendingTheKeyInTheDialogContentClass(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "_01_LoginStepss.userClickOnTheElementInTheDialogContentClass(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "EnglandSubject",
      "offset": 13
    }
  ],
  "location": "_02_CountrySteps.userDelete(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "successfully",
      "offset": 17
    }
  ],
  "location": "_02_CountrySteps.userShouldSeeMessage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "_02_CountrySteps.userClickOnTheElementInTheLeftNavClass(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "_01_LoginStepss.userSendingTheKeyInTheDialogContentClass(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "_01_LoginStepss.userClickOnTheElementInTheDialogContentClass(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "MySubjectCat3",
      "offset": 13
    }
  ],
  "location": "_02_CountrySteps.userDelete(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "successfully",
      "offset": 17
    }
  ],
  "location": "_02_CountrySteps.userShouldSeeMessage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("_03.8_PotionSalary.feature");
formatter.feature({
  "line": 1,
  "name": "Create Edit and Delete Functionality for Human Resources",
  "description": "",
  "id": "create-edit-and-delete-functionality-for-human-resources",
  "keyword": "Feature"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Navigate to basqar",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User sending the key in the dialog content class",
  "rows": [
    {
      "cells": [
        "username",
        "daulet2030@gmail.com"
      ],
      "line": 7
    },
    {
      "cells": [
        "password",
        "TechnoStudy123@"
      ],
      "line": 8
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User click on the element in the dialog content class",
  "rows": [
    {
      "cells": [
        "loginButton"
      ],
      "line": 11
    },
    {
      "cells": [
        "gotItButton"
      ],
      "line": 12
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "user should login successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "_01_LoginStepss.navigateToBasqar()"
});
formatter.result({
  "duration": 1657641200,
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: failed to change window state to \u0027normal\u0027, current state is \u0027maximized\u0027\n  (Session info: chrome\u003d86.0.4240.198)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-2C108AM\u0027, ip: \u0027192.168.0.12\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002714.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 86.0.4240.198, chrome: {chromedriverVersion: 86.0.4240.22 (398b0743353ff..., userDataDir: C:\\Users\\keski\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:53562}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 095a5f29134614349fc71dcf83937a43\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:609)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteWebDriverOptions$RemoteWindow.maximize(RemoteWebDriver.java:837)\r\n\tat stepDefinations._01_LoginStepss.navigateToBasqar(_01_LoginStepss.java:24)\r\n\tat ✽.Given Navigate to basqar(_03.8_PotionSalary.feature:4)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "_01_LoginStepss.userSendingTheKeyInTheDialogContentClass(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "_01_LoginStepss.userClickOnTheElementInTheDialogContentClass(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "_01_LoginStepss.userShouldLoginSuccessfully()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 16,
  "name": "Create, Edit and Delete Position Salary",
  "description": "",
  "id": "create-edit-and-delete-functionality-for-human-resources;create,-edit-and-delete-position-salary",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 18,
  "name": "User click on the element in the leftNav class",
  "rows": [
    {
      "cells": [
        "humanResources"
      ],
      "line": 19
    },
    {
      "cells": [
        "setupHR"
      ],
      "line": 20
    },
    {
      "cells": [
        "positionSalary"
      ],
      "line": 21
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "User click on the element in the dialog content class",
  "rows": [
    {
      "cells": [
        "addButton"
      ],
      "line": 24
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "User sending the key in the dialog content class",
  "rows": [
    {
      "cells": [
        "namePositionSalary",
        "Group3NewPositionSalary"
      ],
      "line": 27
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "User click on the element in the dialog content class",
  "rows": [
    {
      "cells": [
        "saveButton"
      ],
      "line": 30
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "User should see \"successfully\" message",
  "keyword": "Then "
});
formatter.step({
  "line": 34,
  "name": "User sending the key in the dialog content class",
  "rows": [
    {
      "cells": [
        "searchName",
        "Group3NewPositionSalary"
      ],
      "line": 35
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "User click on the element in the dialog content class",
  "rows": [
    {
      "cells": [
        "search"
      ],
      "line": 38
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "user edit \"EnglandNewPositionSalary\"",
  "keyword": "Then "
});
formatter.step({
  "line": 42,
  "name": "User sending the key in the dialog content class",
  "rows": [
    {
      "cells": [
        "namePositionSalary",
        "editedPositionSalary"
      ],
      "line": 43
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "User click on the element in the dialog content class",
  "rows": [
    {
      "cells": [
        "saveButton"
      ],
      "line": 46
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "User should see \"successfully\" message",
  "keyword": "Then "
});
formatter.step({
  "line": 50,
  "name": "User sending the key in the dialog content class",
  "rows": [
    {
      "cells": [
        "searchName",
        "editedPositionSalary"
      ],
      "line": 51
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "User click on the element in the dialog content class",
  "rows": [
    {
      "cells": [
        "search"
      ],
      "line": 54
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "User delete \"editedPositionSalary\"",
  "keyword": "When "
});
formatter.step({
  "line": 58,
  "name": "User should see \"successfully\" message",
  "keyword": "Then "
});
formatter.match({
  "location": "_02_CountrySteps.userClickOnTheElementInTheLeftNavClass(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "_01_LoginStepss.userClickOnTheElementInTheDialogContentClass(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "_01_LoginStepss.userSendingTheKeyInTheDialogContentClass(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "_01_LoginStepss.userClickOnTheElementInTheDialogContentClass(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "successfully",
      "offset": 17
    }
  ],
  "location": "_02_CountrySteps.userShouldSeeMessage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "_01_LoginStepss.userSendingTheKeyInTheDialogContentClass(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "_01_LoginStepss.userClickOnTheElementInTheDialogContentClass(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "_01_LoginStepss.userSendingTheKeyInTheDialogContentClass(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "_01_LoginStepss.userClickOnTheElementInTheDialogContentClass(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "successfully",
      "offset": 17
    }
  ],
  "location": "_02_CountrySteps.userShouldSeeMessage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "_01_LoginStepss.userSendingTheKeyInTheDialogContentClass(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "_01_LoginStepss.userClickOnTheElementInTheDialogContentClass(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "editedPositionSalary",
      "offset": 13
    }
  ],
  "location": "_02_CountrySteps.userDelete(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "successfully",
      "offset": 17
    }
  ],
  "location": "_02_CountrySteps.userShouldSeeMessage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Navigate to basqar",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User sending the key in the dialog content class",
  "rows": [
    {
      "cells": [
        "username",
        "daulet2030@gmail.com"
      ],
      "line": 7
    },
    {
      "cells": [
        "password",
        "TechnoStudy123@"
      ],
      "line": 8
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User click on the element in the dialog content class",
  "rows": [
    {
      "cells": [
        "loginButton"
      ],
      "line": 11
    },
    {
      "cells": [
        "gotItButton"
      ],
      "line": 12
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "user should login successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "_01_LoginStepss.navigateToBasqar()"
});
formatter.result({
  "duration": 1137383000,
  "status": "passed"
});
formatter.match({
  "location": "_01_LoginStepss.userSendingTheKeyInTheDialogContentClass(DataTable)"
});
formatter.result({
  "duration": 480073500,
  "status": "passed"
});
formatter.match({
  "location": "_01_LoginStepss.userClickOnTheElementInTheDialogContentClass(DataTable)"
});
formatter.result({
  "duration": 264057600,
  "status": "passed"
});
formatter.match({
  "location": "_01_LoginStepss.userShouldLoginSuccessfully()"
});
formatter.result({
  "duration": 2482588100,
  "status": "passed"
});
formatter.scenario({
  "line": 61,
  "name": "Create and Delete Positions",
  "description": "",
  "id": "create-edit-and-delete-functionality-for-human-resources;create-and-delete-positions",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 63,
  "name": "User click on the element in the leftNav class",
  "rows": [
    {
      "cells": [
        "humanResources"
      ],
      "line": 64
    },
    {
      "cells": [
        "setupHR"
      ],
      "line": 65
    },
    {
      "cells": [
        "positions"
      ],
      "line": 66
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 68,
  "name": "User click on the element in the dialog content class",
  "rows": [
    {
      "cells": [
        "addButton"
      ],
      "line": 69
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 71,
  "name": "User sending the key in the dialog content class",
  "rows": [
    {
      "cells": [
        "name",
        "EnglandNewPosition"
      ],
      "line": 72
    },
    {
      "cells": [
        "shortName",
        "G3NP"
      ],
      "line": 73
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 75,
  "name": "User click on the element in the dialog content class",
  "rows": [
    {
      "cells": [
        "saveButton"
      ],
      "line": 76
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 78,
  "name": "User should see \"successfully\" message",
  "keyword": "Then "
});
formatter.step({
  "line": 80,
  "name": "User sending the key in the dialog content class",
  "rows": [
    {
      "cells": [
        "searchName",
        "EnglandPosition"
      ],
      "line": 81
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 83,
  "name": "User click on the element in the dialog content class",
  "rows": [
    {
      "cells": [
        "search"
      ],
      "line": 84
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 86,
  "name": "user edit \"EnglandNewPosition\"",
  "keyword": "Then "
});
formatter.step({
  "line": 88,
  "name": "User sending the key in the dialog content class",
  "rows": [
    {
      "cells": [
        "name",
        "editedPosition"
      ],
      "line": 89
    },
    {
      "cells": [
        "shortName",
        "EngNnewP"
      ],
      "line": 90
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 92,
  "name": "User click on the element in the dialog content class",
  "rows": [
    {
      "cells": [
        "saveButton"
      ],
      "line": 93
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 95,
  "name": "User should see \"successfully\" message",
  "keyword": "Then "
});
formatter.step({
  "line": 97,
  "name": "User sending the key in the dialog content class",
  "rows": [
    {
      "cells": [
        "searchName",
        "editedPosition"
      ],
      "line": 98
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 100,
  "name": "User click on the element in the dialog content class",
  "rows": [
    {
      "cells": [
        "search"
      ],
      "line": 101
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 103,
  "name": "User delete \"editedPosition\"",
  "keyword": "When "
});
formatter.step({
  "line": 105,
  "name": "User should see \"successfully\" message",
  "keyword": "Then "
});
formatter.match({
  "location": "_02_CountrySteps.userClickOnTheElementInTheLeftNavClass(DataTable)"
});
formatter.result({
  "duration": 1145788800,
  "status": "passed"
});
formatter.match({
  "location": "_01_LoginStepss.userClickOnTheElementInTheDialogContentClass(DataTable)"
});
formatter.result({
  "duration": 991283200,
  "status": "passed"
});
formatter.match({
  "location": "_01_LoginStepss.userSendingTheKeyInTheDialogContentClass(DataTable)"
});
formatter.result({
  "duration": 356524700,
  "status": "passed"
});
formatter.match({
  "location": "_01_LoginStepss.userClickOnTheElementInTheDialogContentClass(DataTable)"
});
formatter.result({
  "duration": 1095031500,
  "error_message": "org.openqa.selenium.ElementClickInterceptedException: element click intercepted: Element \u003cbutton mat-button\u003d\"\" mat-icon-button\u003d\"\" matbadgeoverlap\u003d\"false\" matbadgesize\u003d\"small\" matbadgeposition\u003d\"below\" matbadgecolor\u003d\"accent\" class\u003d\"mat-focus-indicator mat-tooltip-trigger mat-badge mat-button mat-icon-button mat-button-base mat-badge-accent mat-badge-below mat-badge-after mat-badge-small mat-badge-hidden ng-star-inserted\" aria-describedby\u003d\"cdk-describedby-message-20\" cdk-describedby-host\u003d\"\"\u003e...\u003c/button\u003e is not clickable at point (1236, 88). Other element would receive the click: \u003cdiv class\u003d\"cdk-overlay-backdrop cdk-overlay-dark-backdrop\"\u003e\u003c/div\u003e\n  (Session info: chrome\u003d86.0.4240.198)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-2C108AM\u0027, ip: \u0027192.168.0.12\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002714.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 86.0.4240.198, chrome: {chromedriverVersion: 86.0.4240.22 (398b0743353ff..., userDataDir: C:\\Users\\keski\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:53562}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 095a5f29134614349fc71dcf83937a43\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\r\n\tat jdk.internal.reflect.GeneratedMethodAccessor6.invoke(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:564)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\r\n\tat com.sun.proxy.$Proxy20.click(Unknown Source)\r\n\tat pages._Parent.clickFunction(_Parent.java:30)\r\n\tat pages.DialogContent.findElementClickFunction(DialogContent.java:133)\r\n\tat stepDefinations._01_LoginStepss.userClickOnTheElementInTheDialogContentClass(_01_LoginStepss.java:47)\r\n\tat ✽.And User click on the element in the dialog content class(_03.8_PotionSalary.feature:75)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "successfully",
      "offset": 17
    }
  ],
  "location": "_02_CountrySteps.userShouldSeeMessage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "_01_LoginStepss.userSendingTheKeyInTheDialogContentClass(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "_01_LoginStepss.userClickOnTheElementInTheDialogContentClass(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "_01_LoginStepss.userSendingTheKeyInTheDialogContentClass(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "_01_LoginStepss.userClickOnTheElementInTheDialogContentClass(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "successfully",
      "offset": 17
    }
  ],
  "location": "_02_CountrySteps.userShouldSeeMessage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "_01_LoginStepss.userSendingTheKeyInTheDialogContentClass(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "_01_LoginStepss.userClickOnTheElementInTheDialogContentClass(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "editedPosition",
      "offset": 13
    }
  ],
  "location": "_02_CountrySteps.userDelete(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "successfully",
      "offset": 17
    }
  ],
  "location": "_02_CountrySteps.userShouldSeeMessage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("_03.9_ExelTemplate.feature");
formatter.feature({
  "line": 1,
  "name": "Create Edit and Delete Functionality for Reports",
  "description": "",
  "id": "create-edit-and-delete-functionality-for-reports",
  "keyword": "Feature"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Navigate to basqar",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User sending the key in the dialog content class",
  "rows": [
    {
      "cells": [
        "username",
        "daulet2030@gmail.com"
      ],
      "line": 7
    },
    {
      "cells": [
        "password",
        "TechnoStudy123@"
      ],
      "line": 8
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User click on the element in the dialog content class",
  "rows": [
    {
      "cells": [
        "loginButton"
      ],
      "line": 11
    },
    {
      "cells": [
        "gotItButton"
      ],
      "line": 12
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "user should login successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "_01_LoginStepss.navigateToBasqar()"
});
formatter.result({
  "duration": 1351654600,
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: failed to change window state to \u0027normal\u0027, current state is \u0027maximized\u0027\n  (Session info: chrome\u003d86.0.4240.198)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-2C108AM\u0027, ip: \u0027192.168.0.12\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002714.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 86.0.4240.198, chrome: {chromedriverVersion: 86.0.4240.22 (398b0743353ff..., userDataDir: C:\\Users\\keski\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:53562}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 095a5f29134614349fc71dcf83937a43\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:609)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteWebDriverOptions$RemoteWindow.maximize(RemoteWebDriver.java:837)\r\n\tat stepDefinations._01_LoginStepss.navigateToBasqar(_01_LoginStepss.java:24)\r\n\tat ✽.Given Navigate to basqar(_03.9_ExelTemplate.feature:4)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "_01_LoginStepss.userSendingTheKeyInTheDialogContentClass(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "_01_LoginStepss.userClickOnTheElementInTheDialogContentClass(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "_01_LoginStepss.userShouldLoginSuccessfully()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 16,
  "name": "Create , Edit and Delete Excel Template",
  "description": "",
  "id": "create-edit-and-delete-functionality-for-reports;create-,-edit-and-delete-excel-template",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 18,
  "name": "User click on the element in the leftNav class",
  "rows": [
    {
      "cells": [
        "reports"
      ],
      "line": 19
    },
    {
      "cells": [
        "setupReports"
      ],
      "line": 20
    },
    {
      "cells": [
        "excelTemplate"
      ],
      "line": 21
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "User click on the element in the dialog content class",
  "rows": [
    {
      "cells": [
        "addButton"
      ],
      "line": 24
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "User sending the key in the dialog content class",
  "rows": [
    {
      "cells": [
        "name",
        "ExcelTemplate"
      ],
      "line": 27
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "User click on the element in the dialog content class",
  "rows": [
    {
      "cells": [
        "saveButton"
      ],
      "line": 30
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "User should see \"successfully\" message",
  "keyword": "Then "
});
formatter.step({
  "line": 34,
  "name": "User click on the element in the dialog content class",
  "rows": [
    {
      "cells": [
        "closeDialog"
      ],
      "line": 35
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "User sending the key in the dialog content class",
  "rows": [
    {
      "cells": [
        "searchName",
        "ExcelTemplate"
      ],
      "line": 38
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "User click on the element in the dialog content class",
  "rows": [
    {
      "cells": [
        "search"
      ],
      "line": 41
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "user edit \"ExcelTemplate\"",
  "keyword": "Then "
});
formatter.step({
  "line": 45,
  "name": "User sending the key in the dialog content class",
  "rows": [
    {
      "cells": [
        "name",
        "EnglandEditedExcelTemplete"
      ],
      "line": 46
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "User click on the element in the dialog content class",
  "rows": [
    {
      "cells": [
        "saveButton"
      ],
      "line": 49
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "User should see \"successfully\" message",
  "keyword": "Then "
});
formatter.step({
  "line": 53,
  "name": "User click on the element in the dialog content class",
  "rows": [
    {
      "cells": [
        "closeDialog"
      ],
      "line": 54
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "User sending the key in the dialog content class",
  "rows": [
    {
      "cells": [
        "searchName",
        "EnglandEditedExcelTemplete"
      ],
      "line": 57
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "User click on the element in the dialog content class",
  "rows": [
    {
      "cells": [
        "search"
      ],
      "line": 60
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 62,
  "name": "User delete \"EnglandEditedExcelTemplete\"",
  "keyword": "When "
});
formatter.step({
  "line": 64,
  "name": "User should see \"successfully\" message",
  "keyword": "Then "
});
formatter.match({
  "location": "_02_CountrySteps.userClickOnTheElementInTheLeftNavClass(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "_01_LoginStepss.userClickOnTheElementInTheDialogContentClass(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "_01_LoginStepss.userSendingTheKeyInTheDialogContentClass(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "_01_LoginStepss.userClickOnTheElementInTheDialogContentClass(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "successfully",
      "offset": 17
    }
  ],
  "location": "_02_CountrySteps.userShouldSeeMessage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "_01_LoginStepss.userClickOnTheElementInTheDialogContentClass(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "_01_LoginStepss.userSendingTheKeyInTheDialogContentClass(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "_01_LoginStepss.userClickOnTheElementInTheDialogContentClass(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "_01_LoginStepss.userSendingTheKeyInTheDialogContentClass(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "_01_LoginStepss.userClickOnTheElementInTheDialogContentClass(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "successfully",
      "offset": 17
    }
  ],
  "location": "_02_CountrySteps.userShouldSeeMessage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "_01_LoginStepss.userClickOnTheElementInTheDialogContentClass(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "_01_LoginStepss.userSendingTheKeyInTheDialogContentClass(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "_01_LoginStepss.userClickOnTheElementInTheDialogContentClass(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "EnglandEditedExcelTemplete",
      "offset": 13
    }
  ],
  "location": "_02_CountrySteps.userDelete(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "successfully",
      "offset": 17
    }
  ],
  "location": "_02_CountrySteps.userShouldSeeMessage(String)"
});
formatter.result({
  "status": "skipped"
});
});