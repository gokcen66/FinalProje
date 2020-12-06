Feature: Creat and Delete Functionality for Subject Category

  Background:
    Given Navigate to basqar

    When User sending the key in the dialog content class
      | username | daulet2030@gmail.com |
      | password | TechnoStudy123@      |

    And User click on the element in the dialog content class
      | loginButton |
      | gotItButton |

    Then user should login successfully

  Scenario: Creat and Delete Subject Category

    When User click on the element in the leftNav class
      | education         |
      | setupEducation    |
      | subjectCategories |

    And User click on the element in the dialog content class
      | addButton |

    And User sending the key in the dialog content class
      | name | MySubjectCat3 |
      | code | abc           |

    And User click on the element in the dialog content class
      | saveButton |

    Then User should see "successfully" message

    When User click on the element in the leftNav class
      | subjects |

    And User click on the element in the dialog content class
      | addButton |

    And User sending the key in the dialog content class
      | name | EnglandSubject |
      | code | 123            |

    And User click on the element in the dialog content class
      | subjectCategory |
      | MySubjectCat3   |
      | styleSubjects   |
      | randomSelect    |
      | saveButton      |

    Then User should see "successfully" message

    When User click on the element in the leftNav class
      | subjectCategories |

    And User sending the key in the dialog content class
      | searchName | MySubjectCat3 |

    And User click on the element in the dialog content class
      | search |

    When User delete "MySubjectCat3"

    Then User should see "error" message


#    ilave kısım
    Then User click on the element in the leftNav class
      | subjects |
    And User sending the key in the dialog content class
      | searchName | EnglandSubject |
    And User click on the element in the dialog content class
      | search |
    When User delete "EnglandSubject"
    Then User should see "successfully" message
    Then User click on the element in the leftNav class
      | subjectCategories |
    And User sending the key in the dialog content class
      | searchName | MySubjectCat3 |
    And User click on the element in the dialog content class
      | search |
    When User delete "MySubjectCat3"
    Then User should see "successfully" message
