Feature: Create And Delete Subject Categories

  Background:
    Given Navigate to basqar

    When User sending the keys in the dialog content class
      | username | daulet2030@gmail.com |
      | password | TechnoStudy123@      |

    And User click on the element in the dialog content class
      | loginButton |
      | gotItButton |

    Then User should login successfully

  Scenario:  Create and Delete Subject Categories

    When User click on the element in the leftNav class
      | education         |
      | setupEducation    |
      | subjectCategories |

    And User click on the element in the dialog content class
      | addButton |

    And User sending the keys in the dialog content class
      | name | Group4NewCategories |
      | code | abc                 |

    And User click on the element in the dialog content class
      | saveButton |

    Then User should see "successfully" message

    And User sending the keys in the dialog content class
      | searchName | Group4NewCategories |

    And User click on the element in the dialog content class
      | search |

    When User delete "Group4NewCategories "

    Then User should see "successfully" message

