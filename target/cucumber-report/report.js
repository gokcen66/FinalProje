$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("_01_Login.feature");
formatter.feature({
  "line": 1,
  "name": "Login Functionality",
  "description": "",
  "id": "login-functionality",
  "keyword": "Feature"
});
formatter.before({
  "duration": 256100,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "Login with valid username and password",
  "description": "",
  "id": "login-functionality;login-with-valid-username-and-password",
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
  "line": 5,
  "name": "Navigate to basqar",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User sending the keys in the dialog content class",
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
  "name": "User should login successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "_01_LoginStepss.navigateToBasqar()"
});
formatter.result({
  "duration": 7678276500,
  "status": "passed"
});
formatter.match({
  "location": "_01_LoginStepss.userSendingTheKeysInTheDialogContentClass(DataTable)"
});
formatter.result({
  "duration": 309134200,
  "status": "passed"
});
formatter.match({
  "location": "_01_LoginStepss.userClickOnTheElementInTheDialogContentClass(DataTable)"
});
formatter.result({
  "duration": 225711900,
  "status": "passed"
});
formatter.match({
  "location": "_01_LoginStepss.userShouldLoginSuccessfully()"
});
formatter.result({
  "duration": 1737216300,
  "status": "passed"
});
formatter.after({
  "duration": 5688267300,
  "status": "passed"
});
formatter.uri("_03.1_Country.feature");
formatter.feature({
  "line": 1,
  "name": "Create and Delete Functionality for Countries",
  "description": "",
  "id": "create-and-delete-functionality-for-countries",
  "keyword": "Feature"
});
formatter.before({
  "duration": 161200,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "Country future background",
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
  "name": "User sending the keys in the dialog content class",
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
  "name": "User should login successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "_01_LoginStepss.navigateToBasqar()"
});
formatter.result({
  "duration": 6561036300,
  "status": "passed"
});
formatter.match({
  "location": "_01_LoginStepss.userSendingTheKeysInTheDialogContentClass(DataTable)"
});
formatter.result({
  "duration": 335665300,
  "status": "passed"
});
formatter.match({
  "location": "_01_LoginStepss.userClickOnTheElementInTheDialogContentClass(DataTable)"
});
formatter.result({
  "duration": 245313000,
  "status": "passed"
});
formatter.match({
  "location": "_01_LoginStepss.userShouldLoginSuccessfully()"
});
formatter.result({
  "duration": 808997900,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
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
  "name": "User sending the keys in the dialog content class",
  "rows": [
    {
      "cells": [
        "name",
        "Group4Country4"
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
  "name": "User sending the keys in the dialog content class",
  "rows": [
    {
      "cells": [
        "searchName",
        "Adana"
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
  "name": "User delete \"Group4Country4\"",
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
  "duration": 2049207700,
  "status": "passed"
});
formatter.match({
  "location": "_01_LoginStepss.userClickOnTheElementInTheDialogContentClass(DataTable)"
});
formatter.result({
  "duration": 814131500,
  "status": "passed"
});
formatter.match({
  "location": "_01_LoginStepss.userSendingTheKeysInTheDialogContentClass(DataTable)"
});
formatter.result({
  "duration": 356035100,
  "status": "passed"
});
formatter.match({
  "location": "_01_LoginStepss.userClickOnTheElementInTheDialogContentClass(DataTable)"
});
formatter.result({
  "duration": 130715500,
  "status": "passed"
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
  "duration": 623084200,
  "error_message": "java.lang.AssertionError: expected [true] but found [false]\r\n\tat org.testng.Assert.fail(Assert.java:97)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:969)\r\n\tat org.testng.Assert.assertTrue(Assert.java:43)\r\n\tat org.testng.Assert.assertTrue(Assert.java:53)\r\n\tat pages._Parent.verifyElementContainsText(_Parent.java:60)\r\n\tat pages.DialogContent.findElementAndFindVerifyContainsText(DialogContent.java:196)\r\n\tat stepDefinations._02_CountrySteps.userShouldSeeMessage(_02_CountrySteps.java:33)\r\n\tat ✽.Then User should see \"successfully\" message(_03.1_Country.feature:33)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "_01_LoginStepss.userSendingTheKeysInTheDialogContentClass(DataTable)"
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
      "val": "Group4Country4",
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
formatter.after({
  "duration": 5742886800,
  "status": "passed"
});
formatter.uri("_03.2_City.feature");
formatter.feature({
  "line": 1,
  "name": "Creat and Delete Functionality for Cities",
  "description": "",
  "id": "creat-and-delete-functionality-for-cities",
  "keyword": "Feature"
});
formatter.before({
  "duration": 65100,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "Navigate to basqar",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User sending the keys in the dialog content class",
  "rows": [
    {
      "cells": [
        "username",
        "daulet2030@gmail.com"
      ],
      "line": 8
    },
    {
      "cells": [
        "password",
        "TechnoStudy123@"
      ],
      "line": 9
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User click on the element in the dialog content class",
  "rows": [
    {
      "cells": [
        "loginButton"
      ],
      "line": 12
    },
    {
      "cells": [
        "gotItButton"
      ],
      "line": 13
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User should login successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "_01_LoginStepss.navigateToBasqar()"
});
formatter.result({
  "duration": 8015785500,
  "status": "passed"
});
formatter.match({
  "location": "_01_LoginStepss.userSendingTheKeysInTheDialogContentClass(DataTable)"
});
formatter.result({
  "duration": 282920300,
  "status": "passed"
});
formatter.match({
  "location": "_01_LoginStepss.userClickOnTheElementInTheDialogContentClass(DataTable)"
});
formatter.result({
  "duration": 216898900,
  "status": "passed"
});
formatter.match({
  "location": "_01_LoginStepss.userShouldLoginSuccessfully()"
});
formatter.result({
  "duration": 2011169900,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Create and Delete City",
  "description": "",
  "id": "creat-and-delete-functionality-for-cities;create-and-delete-city",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 17,
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
        "cities"
      ],
      "line": 22
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "User click on the element in the dialog content class",
  "rows": [
    {
      "cells": [
        "addButton"
      ],
      "line": 26
    },
    {
      "cells": [
        "country"
      ],
      "line": 27
    },
    {
      "cells": [
        "randomSelect"
      ],
      "line": 28
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "User sending the keys in the dialog content class",
  "rows": [
    {
      "cells": [
        "name",
        "Adana"
      ],
      "line": 31
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "User click on the element in the dialog content class",
  "rows": [
    {
      "cells": [
        "saveButton"
      ],
      "line": 34
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "User should see \"successfully\" message",
  "keyword": "Then "
});
formatter.match({
  "location": "_02_CountrySteps.userClickOnTheElementInTheLeftNavClass(DataTable)"
});
formatter.result({
  "duration": 1659883600,
  "status": "passed"
});
formatter.match({
  "location": "_01_LoginStepss.userClickOnTheElementInTheDialogContentClass(DataTable)"
});
formatter.result({
  "duration": 2178560000,
  "status": "passed"
});
formatter.match({
  "location": "_01_LoginStepss.userSendingTheKeysInTheDialogContentClass(DataTable)"
});
formatter.result({
  "duration": 304781300,
  "status": "passed"
});
formatter.match({
  "location": "_01_LoginStepss.userClickOnTheElementInTheDialogContentClass(DataTable)"
});
formatter.result({
  "duration": 126264700,
  "status": "passed"
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
  "duration": 108166900,
  "status": "passed"
});
formatter.after({
  "duration": 5729088700,
  "status": "passed"
});
});