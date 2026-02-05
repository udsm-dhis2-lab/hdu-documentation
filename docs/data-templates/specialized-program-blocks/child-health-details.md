# Child Health Details (`childHealthDetails`)

### Overview

The **Child Health Details** block captures information related to child health services, including service modality, prophylaxis, feeding practices, HIV exposure, and referrals.

It ensures that:

- Child health interventions are systematically documented.
- Nutrition, prophylaxis, and HIV exposure are traceable.
- Data supports IMCI, RCH, nutrition, and HIV program reporting.

This block appears within a patient record when child health services are provided.



### Object Structure (Conceptual)

```text
childHealthDetails
├── serviceModality
├── motherAge
├── prophylaxis
│   ├── albendazole
│   │   └── administered
│   ├── vitaminA
│   │   └── administered
│   └── providedWithLLIN
├── infantFeeding
├── providedWithInfantFeedingCounselling
├── hasBeenBreastFedFor24Month
├── motherHivStatus
│   ├── status
│   └── testingDate
└── referredToCTC
```
## Parameters

### `childHealthDetails`

* **Data type:** `object`  
* **Description:**  
  Root container holding child health service information.



## Service Information

#### `serviceModality`

* **Data type:** `string`  
* **Description:**  
  Mode through which child health services were delivered.  
* **Usage note:**  
  Used to distinguish routine facility services from outreach or campaign services.  
* **Example values:**  
  `CAMPAIGN`  
  `ROUTINE`



#### `motherAge`

* **Data type:** `number`  
* **Description:**  
  Age of the mother at the time the child health service was provided.  
* **Usage note:**  
  Used for maternal–child health analytics.  
* **Example value:**  
  `24`



## Prophylaxis Information

#### `prophylaxis`

* **Data type:** `object`  
* **Description:**  
  Captures preventive interventions provided to the child.



### Albendazole

#### `albendazole`

* **Data type:** `object`  
* **Description:**  
  Records albendazole prophylaxis administration.



##### `administered`

* **Data type:** `boolean`  
* **Description:**  
  Indicates whether albendazole was administered.  
* **Example value:**  
  `true`



### Vitamin A

#### `vitaminA`

* **Data type:** `object`  
* **Description:**  
  Records vitamin A supplementation.



##### `administered`

* **Data type:** `boolean`  
* **Description:**  
  Indicates whether vitamin A was administered.  
* **Example value:**  
  `true`



#### `providedWithLLIN`

* **Data type:** `boolean`  
* **Description:**  
  Indicates whether a Long-Lasting Insecticidal Net (LLIN) was provided.  
* **Usage note:**  
  Supports malaria prevention programs.  
* **Example value:**  
  `true`



## Feeding Practices

#### `infantFeeding`

* **Data type:** `string`  
* **Description:**  
  Feeding method used for the child.  
* **Usage note:**  
  Helps assess nutritional practices and risks.  
* **Example values:**  
  `EBF` (Exclusive Breastfeeding)  
  `MF` (Mixed Feeding)



#### `providedWithInfantFeedingCounselling`

* **Data type:** `boolean`  
* **Description:**  
  Indicates whether infant feeding counselling was provided to the caregiver.  
* **Example value:**  
  `true`



#### `hasBeenBreastFedFor24Month`

* **Data type:** `boolean`  
* **Description:**  
  Indicates whether the child has been breastfed for up to 24 months.  
* **Usage note:**  
  Used for nutrition and growth monitoring indicators.  
* **Example value:**  
  `true`



## Maternal HIV Information

#### `motherHivStatus`

* **Data type:** `object`  
* **Description:**  
  Captures the HIV status of the mother in relation to the child.



##### `status`

* **Data type:** `string`  
* **Description:**  
  HIV status of the mother.  
* **Example value:**  
  `Negative`



##### `testingDate`

* **Data type:** `date-time`  
* **Description:**  
  Date when the mother’s HIV test was conducted.  
* **Example value:**  
  `2021-04-09`



##### `referredToCTC`

* **Data type:** `boolean`  
* **Description:**  
  Indicates whether the child was referred to a Care and Treatment Clinic (CTC).  
* **Usage note:**  
  Applicable when HIV exposure or infection is suspected or confirmed.  
* **Example value:**  
  `true`



## Example JSON
```json
{
  "childHealthDetails": {
    "serviceModality": "ROUTINE",
    "motherAge": 24,
    "prophylaxis": {
      "albendazole": {
        "administered": true
      },
      "vitaminA": {
        "administered": true
      },
      "providedWithLLIN": true
    },
    "infantFeeding": "EBF",
    "providedWithInfantFeedingCounselling": true,
    "hasBeenBreastFedFor24Month": true,
    "motherHivStatus": {
      "status": "Negative",
      "testingDate": "2021-04-09"
    },
    "referredToCTC": true
  }
}
```
## Implementation Notes

- Prophylaxis elements may be populated independently based on child age and eligibility.  
- Feeding indicators support nutrition and growth monitoring programs.  
- HIV-related fields should align with **PMTCT** and **child HIV care workflows**.
