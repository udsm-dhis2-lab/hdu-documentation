# Death Registry Details (`deathRegistryDetails`)

### Overview

The **Death Registry Details** block captures official cause-of-death information in alignment with the WHO Medical Certificate of Cause of Death (MCCD – 2016) and national Civil Registration and Vital Statistics (CRVS) requirements.

It ensures that:

- Deaths are recorded using standard ICD-10 coding.
- Immediate, antecedent, and underlying causes are traceable.
- Maternal and neonatal death surveillance is supported.
- Data can be used for mortality statistics, audits, and policy planning.

This block is populated only when a death has occurred.



### Object Structure (Conceptual)

```text
deathRegistryDetails
├── dateOfDeath
├── lineA
├── lineB
├── lineC
├── lineD
├── causeOfDeathOther
├── mannerOfDeath
├── placeOfDeath
└── otherDeathDetails
    ├── postmortemDetails
    │   ├── wasPostmortemDone
    │   ├── wasPostmortemResultsUsedToDetermineCauseOfDeath
    │   ├── dateOfExternalDeathCauseOccurred
    │   ├── externalCauseOfDeathExplanation
    │   └── placeExternalCauseOfDeath
    ├── neonatalDetails
    │   ├── wasMultipleBirth
    │   ├── stillbirth
    │   ├── motherAge
    │   ├── pregnancyAgeInWeeks
    │   ├── childWeightAfterBirthInKg
    │   ├── hrsSinceBirthWithin24hrsBeforeDeath
    │   └── motherConditionsThatLedToChildDeath
    └── maternalDeathDetails
        ├── wasPregnant
        ├── wasDeathAfterOrDuringPregnancy
        ├── wasPregnancyContributedToDeath
        └── wasDeathAudited
```

## Parameters

### `deathRegistryDetails`

* **Data type:** `object`  
* **Description:**  
  Root container for all death registration and certification details.  
* **Usage note:**  
  Mandatory for mortality reporting and CRVS integration.



## Core Death Information

#### `dateOfDeath`

* **Data type:** `date-time`  
* **Description:**  
  Calendar date on which death occurred.  
* **Example value:**  
  `2024-08-07`



#### `lineA`

* **Data type:** `string`  
* **Description:**  
  Immediate cause of death — the final disease or condition directly resulting in death (ICD-10).  
* **Example value:**  
  `A01.1`



#### `lineB`

* **Data type:** `string`  
* **Description:**  
  Condition leading directly to the immediate cause of death (ICD-10).  
* **Example value:**  
  `A01.1`



#### `lineC`

* **Data type:** `string`  
* **Description:**  
  Condition that caused or contributed to the condition in Line B (ICD-10).  
* **Example value:**  
  `A89.1`



#### `lineD`

* **Data type:** `string`  
* **Description:**  
  Underlying cause of death — disease or injury that initiated the chain of events (ICD-10).  
* **Usage note:**  
  This is the primary cause used for mortality statistics.  
* **Example value:**  
  `A89.1`



#### `causeOfDeathOther`

* **Data type:** `string`  
* **Description:**  
  Narrative description of any additional or unclassified causes not represented by ICD-10.  
* **Example value:**  
  `Severe dehydration complicating infection`



#### `mannerOfDeath`

* **Data type:** `string`  
* **Description:**  
  Circumstances under which death occurred.  
* **Allowed values:**  
  `DISEASE`, `ACCIDENT`, `WAR`, `SUICIDE`, `UNKNOWN`  
* **Example value:**  
  `DISEASE`



#### `placeOfDeath`

* **Data type:** `string`  
* **Description:**  
  Physical location where death occurred.  
* **Allowed values:**  
  `HEALTH_FACILITY`, `COMMUNITY`, `HOUSEHOLD`, `EN_ROUTE_TO_HEALTH_FACILITY`  
* **Example value:**  
  `HEALTH_FACILITY`



## Other Death Details

#### `otherDeathDetails`

* **Data type:** `object`  
* **Description:**  
  Container for postmortem, neonatal, and maternal death-specific details.



### Postmortem Details

#### `postmortemDetails`

* **Data type:** `object`  
* **Description:**  
  Captures information related to postmortem examination.



##### `wasPostmortemDone`

* **Data type:** `string`  
* **Description:**  
  Indicates whether a postmortem examination was conducted.  
* **Allowed values:**  
  `YES`, `NO`, `UNKNOWN`  
* **Example value:**  
  `NO`



##### `wasPostmortemResultsUsedToDetermineCauseOfDeath`

* **Data type:** `string`  
* **Description:**  
  Indicates whether postmortem findings informed the certified cause of death.  
* **Allowed values:**  
  `YES`, `NO`, `UNKNOWN`  
* **Example value:**  
  `NO`



##### `dateOfExternalDeathCauseOccurred`

* **Data type:** `string`  
* **Description:**  
  Date when an external event leading to death occurred.  
* **Example value:**  
  `2024-08-06`



##### `externalCauseOfDeathExplanation`

* **Data type:** `string`  
* **Description:**  
  Narrative explanation describing how the external cause resulted in death.  
* **Example value:**  
  `Road traffic accident involving motorcycle`



##### `placeExternalCauseOfDeath`

* **Data type:** `string`  
* **Description:**  
  Location where the external cause occurred.  
* **Example value:**  
  `ROAD`



## Neonatal Details

#### `neonatalDetails`

* **Data type:** `object`  
* **Description:**  
  Captures death-specific information for newborns.



##### `wasMultipleBirth`

* **Data type:** `string`  
* **Description:**  
  Indicates whether the neonate was part of a multiple birth.  
* **Allowed values:**  
  `YES`, `NO`, `UNKNOWN`  
* **Example value:**  
  `NO`



##### `stillbirth`

* **Data type:** `string`  
* **Description:**  
  Indicates whether the baby was born without signs of life.  
* **Allowed values:**  
  `YES`, `NO`, `UNKNOWN`  
* **Example value:**  
  `NO`



##### `motherAge`

* **Data type:** `number`  
* **Description:**  
  Age of the mother at the time of delivery.  
* **Example value:**  
  `30`



##### `pregnancyAgeInWeeks`

* **Data type:** `number`  
* **Description:**  
  Gestational age at delivery.  
* **Example value:**  
  `38`



##### `childWeightAfterBirthInKg`

* **Data type:** `number`  
* **Description:**  
  Birth weight of the newborn in kilograms.  
* **Example value:**  
  `2.5`



##### `hrsSinceBirthWithin24hrsBeforeDeath`

* **Data type:** `number`  
* **Description:**  
  Number of hours the newborn survived before death (if within 24 hours).  
* **Example value:**  
  `14`



##### `motherConditionsThatLedToChildDeath`

* **Data type:** `string`  
* **Description:**  
  Maternal conditions contributing to neonatal death.  
* **Example value:**  
  `Severe preeclampsia`



## Maternal Death Details

#### `maternalDeathDetails`

* **Data type:** `object`  
* **Description:**  
  Captures pregnancy-related death information for women.



##### `wasPregnant`

* **Data type:** `string`  
* **Description:**  
  Indicates whether the deceased woman was pregnant.  
* **Allowed values:**  
  `YES`, `NO`, `UNKNOWN`  
* **Example value:**  
  `YES`



##### `wasDeathAfterOrDuringPregnancy`

* **Data type:** `string`  
* **Description:**  
  Timing of death in relation to pregnancy.  
* **Allowed values:**  
  `DURING_DELIVERY`, `WITHIN_FORTY_TWO_DAYS`, `FORTY_TWO_DAYS_TO_ONE_YEAR`, `UNKNOWN`  
* **Example value:**  
  `WITHIN_FORTY_TWO_DAYS`



##### `wasPregnancyContributedToDeath`

* **Data type:** `string`  
* **Description:**  
  Indicates whether pregnancy contributed to or worsened the cause of death.  
* **Allowed values:**  
  `YES`, `NO`, `UNKNOWN`  
* **Example value:**  
  `YES`



##### `wasDeathAudited`

* **Data type:** `string`  
* **Description:**  
  Indicates whether a maternal or perinatal death audit was conducted.  
* **Allowed values:**  
  `YES`, `NO`, `UNKNOWN`  
* **Example value:**  
  `YES`

## Example JSON
```json
{
  "deathRegistryDetails": {
    "dateOfDeath": "2024-08-07",
    "lineA": "A01.1",
    "lineB": "A01.1",
    "lineC": "A89.1",
    "lineD": "A89.1",
    "causeOfDeathOther": "Severe dehydration complicating infection",
    "mannerOfDeath": "DISEASE",
    "placeOfDeath": "HEALTH_FACILITY",
    "otherDeathDetails": {
      "postmortemDetails": {
        "wasPostmortemDone": "NO",
        "wasPostmortemResultsUsedToDetermineCauseOfDeath": "NO",
        "dateOfExternalDeathCauseOccurred": "2024-08-06",
        "externalCauseOfDeathExplanation": "Road traffic accident involving motorcycle",
        "placeExternalCauseOfDeath": "ROAD"
      },
      "neonatalDetails": {
        "wasMultipleBirth": "NO",
        "stillbirth": "NO",
        "motherAge": 30,
        "pregnancyAgeInWeeks": 38,
        "childWeightAfterBirthInKg": 2.5,
        "hrsSinceBirthWithin24hrsBeforeDeath": 14,
        "motherConditionsThatLedToChildDeath": "Severe preeclampsia"
      },
      "maternalDeathDetails": {
        "wasPregnant": "YES",
        "wasDeathAfterOrDuringPregnancy": "WITHIN_FORTY_TWO_DAYS",
        "wasPregnancyContributedToDeath": "YES",
        "wasDeathAudited": "YES"
      }
    }
  }
}
```