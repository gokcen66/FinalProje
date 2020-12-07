Feature: Create Edit and Delete Functionality for Reports

  Background:exel future background
    Given Navigate to basqar

    When User sending the keys in the dialog content class
      | username | daulet2030@gmail.com |
      | password | TechnoStudy123@      |

    And User click on the element in the dialog content class
      | loginButton |
      | gotItButton |

    Then User should login successfully

  Scenario:  Create , Edit and Delete Excel Template

    When User click on the element in the leftNav class
      | reports       |
      | setupReports  |
      | excelTemplate |

    And User click on the element in the dialog content class
      | addButton |

    And User sending the keys in the dialog content class
      | name | Group4ExcelTemplate |

    And User click on the element in the dialog content class
      | saveButton |

    Then User should see "successfully" message

    And User click on the element in the dialog content class
      | closeDialog |

    And User sending the keys in the dialog content class
      | searchName | Group4ExcelTemplate |

    And User click on the element in the dialog content class
      | search |

    Then User edit "Group4ExcelTemplate"

    And User sending the keys in the dialog content class
      | name | Group4EditedExcelTemplete |

    And User click on the element in the dialog content class
      | saveButton |

    Then User should see "successfully" message

    And User click on the element in the dialog content class
      | closeDialog |

    And User sending the keys in the dialog content class
      | searchName | Group4EditedExcelTemplate |

    And User click on the element in the dialog content class
      | search |

    When User delete "Group4EditedExcelTemplate"

    Then User should see "successfully" message
