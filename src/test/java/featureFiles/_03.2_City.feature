Feature: Creat and Delete Functionality for Cities

  Background:
    Given Navigate to basqar

    When User sending the key in the dialog content class
      | username | daulet2030@gmail.com |
      | password | TechnoStudy123@      |

    And User click on the element in the dialog content class
      | loginButton |
      | gotItButton |

    Then user should login successfully

  Scenario: Creat and Delete City

    When User click on the element in the leftNav class
      | setup      |
      | parameters |
      | cities     |

    And User click on the element in the dialog content class
      | addButton     |
      | country       |
      | randomSelect |

    And User sending the key in the dialog content class
      | name | England |

    And User click on the element in the dialog content class
      | saveButton |

    Then User should see "successfully" message

    And User sending the key in the dialog content class
      | searchName | England |

    And User click on the element in the dialog content class
      | search |

    When User delete "England"

    Then User should see "successfully" message

