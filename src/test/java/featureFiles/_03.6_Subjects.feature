Feature: Create And Delete Subjects

  Background:
    Given Navigate to basqar

    When User sending the keys in the dialog content class
      | username | daulet2030@gmail.com |
      | password | TechnoStudy123@      |

    And User click on the element in the dialog content class
      | loginButton |
      | gotItButton |

    Then User should login successfully

  Scenario:  Create and Delete Subjects

    When User click on the element in the leftNav class
      | education      |
      | setupEducation |
      | subjects       |

    And User click on the element in the dialog content class
      | addButton |

    And User sending the keys in the dialog content class
      | name | Group4Subject |
      | code | 123           |

    And User click on the element in the dialog content class
      | subjectCategory |
      | randomSelect    |
      | styleSubjects   |
      | randomSelect    |
      | saveButton      |

    Then User should see "successfully" message

    And User sending the keys in the dialog content class
      | searchName | Group4Subject |

    And User click on the element in the dialog content class
      | search |

    When User delete "Group4Subject"

    Then User should see "successfully" message
