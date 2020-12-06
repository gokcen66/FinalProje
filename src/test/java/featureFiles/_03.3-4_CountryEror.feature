Feature: Creat and Delete Functionality for Countries and Cities

  Background:
    Given Navigate to basqar

    When User sending the key in the dialog content class
      | username | daulet2030@gmail.com |
      | password | TechnoStudy123@      |

    And User click on the element in the dialog content class
      | loginButton |
      | gotItButton |

    Then user should login successfully

  Scenario: Creat and Delete Country and City

    When User click on the element in the leftNav class
      | setup      |
      | parameters |
      | countries  |

    And User click on the element in the dialog content class
      | addButton |

    And User sending the key in the dialog content class
      | name | England  |
      | code | 123            |

    And User click on the element in the dialog content class
      | saveButton |

    Then User should see "successfully" message

    When User click on the element in the leftNav class
      | cities |

    And User click on the element in the dialog content class
      | addButton      |
      | country        |
      | England  |

    And User sending the key in the dialog content class
      | name | England  |

    And User click on the element in the dialog content class
      | saveButton |

    Then User should see "successfully" message

    When User click on the element in the leftNav class
      | countries |

    And User sending the key in the dialog content class
      | searchName | England  |

    And User click on the element in the dialog content class
      | search |

    When User delete "England "

    Then User should see "error" message


      #    ilave kısım
    Then User click on the element in the leftNav class
      | cities |
    And User sending the key in the dialog content class
      | searchName | England  |
    And User click on the element in the dialog content class
      | search |
    When User delete "England "
    Then User should see "successfully" message
    Then User click on the element in the leftNav class
      | countries |
    And User sending the key in the dialog content class
      | searchName | England  |
    And User click on the element in the dialog content class
      | search |
    When User delete "England "
    Then User should see "successfully" message