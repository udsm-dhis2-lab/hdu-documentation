# Labor and Delivery Details (`laborAndDeliveryDetails`)

### Overview

The **Labor and Delivery Details** block captures information related to childbirth and immediate perinatal care for a mother and newborn.

It ensures that:

- Labor and delivery events are systematically documented.
- Maternal and newborn outcomes are traceable.
- Data supports maternal, newborn, and child health (MNCH) reporting, surveillance, and continuity of care.

This block appears within a patient record when labor and delivery services are provided.


### Object Structure (Conceptual)
```text
laborAndDeliveryDetails
├── date
├── motherOrigin
├── hasComeWithSpouse
├── hasComeWithCompanion
├── pregnancyAgeInWeeks
├── wasProvidedWithAntenatalCorticosteroid
├── hasHistoryOfFGM
├── hivDetails
│   ├── status
│   ├── hivTestNumber
│   ├── referredToCTC
│   └── ancHivStatus
│       ├── numberOfTestsTaken
│       └── status
├── deliveryMethod
│   ├── name
│   └── code
├── placeOfBirth
├── timeBetweenLaborPainAndDeliveryInHrs
├── isAttendantSkilled
├── providedWithFamilyPlanningCounseling
├── providedWithInfantFeedingCounseling
├── beforeBirthComplications
│   ├── name
│   └── code
├── birthComplications
│   ├── name
│   └── code
├── birthDetails
│   ├── dateOfBirth
│   ├── gender
│   ├── macerated
│   ├── fresh
│   ├── bornWithDisabilities
│   ├── hivDnaPCRTested
│   ├── childHivStatus
│   ├── apgarScore
│   │   ├── oneMinute
│   │   └── fiveMinute
│   ├── wasBreastFedWithinOneHourAfterDelivery
│   ├── weightInKgs
│   ├── multipleBirth
│   ├── motherAgeInYears
│   ├── birthOrder
│   ├── exclusiveBreastFed
│   ├── motherHivStatus
│   ├── providedWithARV
│   ├── outcomeDetails
│   │   ├── isAlive
│   │   ├── referredToPNC
│   │   ├── referredToHospital
│   │   └── referredTohealthFacility
│   ├── vaccinationDetails
│   │   ├── code
│   │   ├── date
│   │   ├── type
│   │   ├── name
│   │   ├── vaccinationModality
│   │   ├── status
│   │   ├── notes
│   │   ├── dosage
│   │   └── reaction
│   │       ├── reactionDate
│   │       ├── notes
│   │       └── reported
│   ├── methodOfResuscitation
│   └── otherServices
├── others
│   ├── emoc
│   │   ├── providedAntibiotic
│   │   ├── providedUterotonic
│   │   ├── providedMagnesiumSulphate
│   │   ├── removedPlacenta
│   │   ├── performedMvaOrDc
│   │   └── administeredBlood
│   ├── amstl
│   │   ├── cordTractionUsed
│   │   ├── uterineMassageDone
│   │   ├── administeredOxytocin
│   │   ├── administeredEgometrine
│   │   └── administeredMisoprostol
│   └── familyPlanning
```
## Parameters

### `laborAndDeliveryDetails`

* **Data type:** `object`  
* **Description:**  
  Root container holding all information related to labor, delivery, maternal status, newborn outcomes, and immediate post-delivery interventions.  
* **Usage note:**  
  This block should be populated only when labor and delivery services are provided.



## Maternal and Delivery Context

#### `date`

* **Data type:** `date-time`  
* **Description:**  
  Date on which labor and delivery occurred.  
* **Usage note:**  
  Used for MNCH reporting and delivery timelines.  
* **Example value:**  
  `2024-01-01`



#### `motherOrigin`

* **Data type:** `string`  
* **Description:**  
  Origin or referral source of the mother prior to delivery.  
* **Usage note:**  
  Typical coded values may include `TBA`, `H`, `RD`, `HC`, `HS`.  
* **Example value:**  
  `H`



#### `hasComeWithSpouse`

* **Data type:** `boolean`  
* **Description:**  
  Indicates whether the mother arrived with her spouse.  
* **Usage note:**  
  Used for social support and male involvement indicators.  
* **Example value:**  
  `true`



#### `hasComeWithCompanion`

* **Data type:** `boolean`  
* **Description:**  
  Indicates whether the mother arrived with a companion other than a spouse.  
* **Example value:**  
  `false`



#### `pregnancyAgeInWeeks`

* **Data type:** `number`  
* **Description:**  
  Gestational age of the pregnancy at the time of delivery, measured in weeks.  
* **Usage note:**  
  Critical for classifying preterm and full-term deliveries.  
* **Example value:**  
  `38`



#### `wasProvidedWithAntenatalCorticosteroid`

* **Data type:** `boolean`  
* **Description:**  
  Indicates whether antenatal corticosteroids were administered to the mother.  
* **Usage note:**  
  Relevant for preterm birth management.  
* **Example value:**  
  `true`



#### `hasHistoryOfFGM`

* **Data type:** `boolean`  
* **Description:**  
  Indicates whether the mother has a documented history of Female Genital Mutilation (FGM).  
* **Usage note:**  
  Important for obstetric risk assessment.  
* **Example value:**  
  `false`



## HIV Information

#### `hivDetails`

* **Data type:** `object`  
* **Description:**  
  Captures maternal HIV testing status and related interventions during labor and delivery.



##### `status`

* **Data type:** `string`  
* **Description:**  
  HIV status of the mother at delivery.  
* **Usage note:**  
  Values should align with national HIV coding standards.  
* **Example value:**  
  `Negative`



##### `hivTestNumber`

* **Data type:** `number`  
* **Description:**  
  Number of HIV tests conducted during pregnancy.  
* **Example value:**  
  `2`



##### `referredToCTC`

* **Data type:** `boolean`  
* **Description:**  
  Indicates whether the mother was referred to a Care and Treatment Clinic (CTC).  
* **Example value:**  
  `false`



##### `ancHivStatus`

* **Data type:** `object`  
* **Description:**  
  Captures HIV testing history during antenatal care.



###### `numberOfTestsTaken`

* **Data type:** `number`  
* **Description:**  
  Total number of HIV tests taken during ANC.  
* **Example value:**  
  `2`



###### `status`

* **Data type:** `string`  
* **Description:**  
  HIV status as recorded during antenatal care.  
* **Example value:**  
  `Negative`



## Delivery Method

#### `deliveryMethod`

* **Data type:** `object`  
* **Description:**  
  Captures the method used to deliver the baby.



##### `name`

* **Data type:** `string`  
* **Description:**  
  Human-readable name of the delivery method.  
* **Example value:**  
  `SVD`



##### `code`

* **Data type:** `string`  
* **Description:**  
  Standardized code representing the delivery method.  
* **Example value:**  
  `32482-0`



##### `placeOfBirth`

* **Data type:** `string`  
* **Description:**  
  Location where the delivery occurred.  
* **Usage note:**  
  Common values include `H`, `TBA`, `BBA`.  
* **Example value:**  
  `H`



##### `timeBetweenLaborPainAndDeliveryInHrs`

* **Data type:** `number | null`  
* **Description:**  
  Duration in hours between onset of labor pain and delivery.  
* **Usage note:**  
  Optional but useful for labor monitoring.  
* **Example value:**  
  `6`



##### `isAttendantSkilled`

* **Data type:** `boolean`  
* **Description:**  
  Indicates whether the delivery was attended by a skilled birth attendant.  
* **Example value:**  
  `true`



##### `providedWithFamilyPlanningCounseling`

* **Data type:** `boolean`  
* **Description:**  
  Indicates whether family planning counseling was provided after delivery.  
* **Example value:**  
  `false`



##### `providedWithInfantFeedingCounseling`

* **Data type:** `boolean`  
* **Description:**  
  Indicates whether infant feeding counseling was provided.  
* **Example value:**  
  `true`



## Complications

#### `beforeBirthComplications`

* **Data type:** `array<object>`  
* **Description:**  
  Complications identified before delivery.



##### `name`

* **Data type:** `string | null`  
* **Description:**  
  Name of the complication.  
* **Example value:**  
  `Prolonged labor`



##### `code`

* **Data type:** `string | null`  
* **Description:**  
  Standardized code for the complication.  
* **Example value:**  
  `O63`



#### `birthComplications`

* **Data type:** `array<object>`  
* **Description:**  
  Complications occurring during delivery.  
  (Same structure and meaning as `beforeBirthComplications`.)



## Newborn Information

#### `birthDetails`

* **Data type:** `array<object>`  
* **Description:**  
  Contains detailed information for each newborn delivered.



##### `dateOfBirth`

* **Data type:** `date-time`  
* **Description:**  
  Date and time the child was born.  
* **Example value:**  
  `2024-01-01`



##### `gender`

* **Data type:** `string`  
* **Description:**  
  Sex of the newborn.  
* **Example value:**  
  `male`



##### `macerated`

* **Data type:** `boolean`  
* **Description:**  
  Indicates macerated stillbirth.  
* **Example value:**  
  `false`



##### `fresh`

* **Data type:** `boolean`  
* **Description:**  
  Indicates fresh stillbirth.  
* **Example value:**  
  `true`



##### `bornWithDisabilities`

* **Data type:** `boolean`  
* **Description:**  
  Indicates whether congenital disabilities were observed.  
* **Example value:**  
  `false`



##### `hivDnaPCRTested`

* **Data type:** `boolean`  
* **Description:**  
  Indicates whether HIV DNA PCR testing was performed on the newborn.  
* **Example value:**  
  `true`



##### `childHivStatus`

* **Data type:** `string`  
* **Description:**  
  HIV status of the newborn.  
* **Example value:**  
  `Negative`



## Parameters

## APGAR Score (`apgarScore`)

### Overview

The **APGAR Score** captures a standardized clinical assessment of a newborn’s physical condition immediately after birth.  
It is used to determine whether the newborn requires urgent medical intervention.



### `apgarScore`

* **Data type:** `object`  
* **Description:**  
  Container holding APGAR assessment results for the newborn.  
* **Usage note:**  
  APGAR scores are typically assessed at **1 minute** and **5 minutes** after birth to evaluate the newborn’s adaptation to extra-uterine life.



#### `oneMinute`

* **Data type:** `number`  
* **Description:**  
  APGAR score recorded one minute after birth, reflecting the newborn’s initial response to delivery.  
* **Usage note:**  
  A low score may indicate the need for immediate resuscitation.  
* **Example value:**  
  `6`



#### `fiveMinute`

* **Data type:** `number`  
* **Description:**  
  APGAR score recorded five minutes after birth, indicating the newborn’s response to initial interventions and overall stabilization.  
* **Usage note:**  
  Improvement from the one-minute score suggests successful adaptation or intervention.  
* **Example value:**  
  `8`



## Feeding and Measurements

### Overview

This section captures early feeding practices and physical measurements of the newborn, which are critical indicators of neonatal health and care quality.



#### `wasBreastFedWithinOneHourAfterDelivery`

* **Data type:** `boolean`  
* **Description:**  
  Indicates whether the newborn was breastfed within the first hour after birth.  
* **Usage note:**  
  Early initiation of breastfeeding is a key WHO-recommended newborn care practice.  
* **Example value:**  
  `true`



#### `weightInKgs`

* **Data type:** `number | null`  
* **Description:**  
  Birth weight of the newborn measured in kilograms.  
* **Usage note:**  
  Used to identify low birth weight and support neonatal risk assessment.  
* **Example value:**  
  `3.1`



#### `multipleBirth`

* **Data type:** `boolean`  
* **Description:**  
  Indicates whether the newborn is part of a multiple birth (e.g., twins, triplets).  
* **Example value:**  
  `false`



#### `motherAgeInYears`

* **Data type:** `number | null`  
* **Description:**  
  Age of the mother at the time of delivery, expressed in completed years.  
* **Usage note:**  
  Used for maternal and neonatal risk stratification and reporting.  
* **Example value:**  
  `28`



#### `birthOrder`

* **Data type:** `number | null`  
* **Description:**  
  Order of birth for the newborn in cases of multiple deliveries.  
* **Usage note:**  
  For singleton births, this is typically `1`.  
* **Example value:**  
  `1`



#### `exclusiveBreastFed`

* **Data type:** `boolean`  
* **Description:**  
  Indicates whether the newborn is exclusively breastfed.  
* **Usage note:**  
  Exclusive breastfeeding excludes water, formula, or other foods.  
* **Example value:**  
  `true`



#### `motherHivStatus`

* **Data type:** `boolean`  
* **Description:**  
  Indicates whether the mother is HIV positive at the time of delivery.  
* **Usage note:**  
  Critical for PMTCT (Prevention of Mother-To-Child Transmission) tracking.  
* **Example value:**  
  `false`



#### `providedWithARV`

* **Data type:** `boolean | null`  
* **Description:**  
  Indicates whether the newborn was provided with antiretroviral prophylaxis.  
* **Usage note:**  
  Applicable when the mother is HIV positive or status is unknown.  
* **Example value:**  
  `true`



## Newborn Outcome (`outcomeDetails`)

### Overview

The **Newborn Outcome** section captures the immediate status and referrals of the newborn after delivery.



### `outcomeDetails`

* **Data type:** `object`  
* **Description:**  
  Container holding outcome information for the newborn following delivery.



#### `isAlive`

* **Data type:** `boolean`  
* **Description:**  
  Indicates whether the newborn was alive after delivery.  
* **Example value:**  
  `true`



#### `referredToPNC`

* **Data type:** `boolean`  
* **Description:**  
  Indicates whether the newborn was referred to Postnatal Care (PNC) services.  
* **Example value:**  
  `true`



#### `referredToHospital`

* **Data type:** `boolean`  
* **Description:**  
  Indicates whether the newborn was referred to a hospital for further management.  
* **Example value:**  
  `false`



#### `referredTohealthFacility`

* **Data type:** `boolean`  
* **Description:**  
  Indicates whether the newborn was referred to another health facility.  
* **Example value:**  
  `false`



## Vaccination (`vaccinationDetails`)

### Overview

This section captures vaccines administered to the newborn immediately after birth or before discharge.



### `vaccinationDetails`

* **Data type:** `array<object>`  
* **Description:**  
  List of vaccinations administered to the newborn.



#### Vaccination Entry

##### `code`

* **Data type:** `string | null`  
* **Description:**  
  Standardized code representing the vaccine administered.  
* **Example value:**  
  `BCG`



##### `date`

* **Data type:** `date-time`  
* **Description:**  
  Date when the vaccine was administered.  
* **Example value:**  
  `2024-01-01`



##### `type`

* **Data type:** `string`  
* **Description:**  
  Short identifier of the vaccine type.  
* **Example value:**  
  `BCG`



##### `name`

* **Data type:** `string`  
* **Description:**  
  Full name of the vaccine administered.  
* **Example value:**  
  `Bacillus Calmette–Guérin`



##### `vaccinationModality`

* **Data type:** `string | null`  
* **Description:**  
  Mode through which the vaccine was administered.  
* **Usage note:**  
  Used to distinguish routine, outreach, or campaign vaccinations.  
* **Example value:**  
  `Routine`



##### `status`

* **Data type:** `string`  
* **Description:**  
  Status of vaccine administration.  
* **Example value:**  
  `Completed`



##### `notes`

* **Data type:** `string | null`  
* **Description:**  
  Additional notes related to the vaccination.  
* **Example value:**  
  `No adverse reaction`



##### `dosage`

* **Data type:** `number`  
* **Description:**  
  Dose number administered.  
* **Example value:**  
  `1`



##### `reaction`

* **Data type:** `object`  
* **Description:**  
  Captures any observed reaction following vaccination.



###### `reactionDate`

* **Data type:** `date-time | null`  
* **Description:**  
  Date when the vaccine reaction was observed.  
* **Example value:**  
  `2024-01-02`



###### `notes`

* **Data type:** `string | null`  
* **Description:**  
  Description of the observed reaction.  
* **Example value:**  
  `Mild swelling`



###### `reported`

* **Data type:** `boolean`  
* **Description:**  
  Indicates whether the reaction was formally reported.  
* **Example value:**  
  `false`



## Other Interventions (`others`)

### Overview

The **Other Interventions** section captures emergency obstetric and newborn care (EmONC) and immediate post-delivery interventions.



### `others`

* **Data type:** `object`  
* **Description:**  
  Container holding emergency and post-delivery interventions.



### Emergency Obstetric Care (`emoc`)
*(All parameters are boolean and indicate whether the intervention was provided)*

- `providedAntibiotic` – Antibiotics administered to prevent or treat infection  
- `providedUterotonic` – Uterotonics administered to prevent postpartum hemorrhage  
- `providedMagnesiumSulphate` – Magnesium sulphate administered for eclampsia management  
- `removedPlacenta` – Manual removal of placenta performed  
- `performedMvaOrDc` – Manual Vacuum Aspiration or Dilatation and Curettage performed  
- `administeredBlood` – Blood transfusion administered  

* **Example value:**  
  `true`



### Active Management of Third Stage of Labour (`amstl`)
*(All parameters are boolean)*

- `cordTractionUsed` – Controlled cord traction applied  
- `uterineMassageDone` – Uterine massage performed  
- `administeredOxytocin` – Oxytocin administered  
- `administeredEgometrine` – Ergometrine administered  
- `administeredMisoprostol` – Misoprostol administered  



## Family Planning

### `familyPlanning`

* **Data type:** `array`  
* **Description:**  
  Family planning services provided immediately after delivery.  
* **Usage note:**  
  Empty array indicates no family planning service was provided.  
* **Example value:**  
  `[]`



## Example JSON
```json
{
  "laborAndDeliveryDetails": {
    "date": "2024-01-01",
    "motherOrigin": "H",
    "hasComeWithSpouse": true,
    "hasComeWithCompanion": false,
    "pregnancyAgeInWeeks": 38,
    "wasProvidedWithAntenatalCorticosteroid": true,
    "hasHistoryOfFGM": false,
    "hivDetails": {
      "status": "Negative",
      "hivTestNumber": 2,
      "referredToCTC": false,
      "ancHivStatus": {
        "numberOfTestsTaken": 2,
        "status": "Negative"
      }
    },
    "deliveryMethod": {
      "name": "SVD",
      "code": "32482-0"
    },
    "placeOfBirth": "H",
    "isAttendantSkilled": true,
    "birthDetails": [
      {
        "dateOfBirth": "2024-01-01",
        "gender": "male",
        "macerated": false,
        "fresh": true,
        "bornWithDisabilities": false,
        "hivDnaPCRTested": true,
        "childHivStatus": "Negative",
        "apgarScore": {
          "oneMinute": 6,
          "fiveMinute": 8
        },
        "wasBreastFedWithinOneHourAfterDelivery": true,
        "weightInKgs": 3.1,
        "multipleBirth": false,
        "exclusiveBreastFed": true,
        "motherHivStatus": false,
        "outcomeDetails": {
          "isAlive": true,
          "referredToPNC": true,
          "referredToHospital": false,
          "referredTohealthFacility": false
        },
        "methodOfResuscitation": "SUCTION",
        "otherServices": []
      }
    ],
    "others": {
      "emoc": {
        "providedAntibiotic": true,
        "providedUterotonic": true,
        "providedMagnesiumSulphate": false,
        "removedPlacenta": true,
        "performedMvaOrDc": false,
        "administeredBlood": false
      },
      "amstl": {
        "cordTractionUsed": true,
        "uterineMassageDone": true,
        "administeredOxytocin": true,
        "administeredEgometrine": false,
        "administeredMisoprostol": true
      },
      "familyPlanning": []
    }
  }
}
```

## Implementation Notes

- Multiple newborns may be recorded under `birthDetails` for multiple births.  

- This block is essential for **MNCH indicators**, **DHIS2 reporting**, and **CRVS linkage**.  

- HIV-related fields should align with **ANC** and **PMTCT** records where applicable.
