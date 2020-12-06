Feature: Create Edit and Delete Functionality for Reports

  Background:
    Given Navigate to basqar

    When User sending the key in the dialog content class
      | username | daulet2030@gmail.com |
      | password | TechnoStudy123@      |

    And User click on the element in the dialog content class
      | loginButton |
      | gotItButton |

    Then user should login successfully

  Scenario:  Create , Edit and Delete Excel Template

    When User click on the element in the leftNav class
      | reports       |
      | setupReports  |
      | excelTemplate |

    And User click on the element in the dialog content class
      | addButton |

    And User sending the key in the dialog content class
      | name | ExcelTemplate |

    And User click on the element in the dialog content class
      | saveButton |

    Then User should see "successfully" message

    And User click on the element in the dialog content class
      | closeDialog |

    And User sending the key in the dialog content class
      | searchName | ExcelTemplate |

    And User click on the element in the dialog content class
      | search |

    Then user edit "ExcelTemplate"

    And User sending the key in the dialog content class
      | name | EnglandEditedExcelTemplete |

    And User click on the element in the dialog content class
      | saveButton |

    Then User should see "successfully" message

    And User click on the element in the dialog content class
      | closeDialog |

    And User sending the key in the dialog content class
      | searchName | EnglandEditedExcelTemplete |

    And User click on the element in the dialog content class
      | search |

    When User delete "EnglandEditedExcelTemplete"

    Then User should see "successfully" message
