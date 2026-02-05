# Family Planning Details (`familyPlanningDetails`)

### Overview

The **Family Planning Details** block captures information about family planning services provided to a client, including counselling, method provision, HIV status considerations, cancer screening during FP visits, and post-service outcomes.

It ensures that:

- Family planning services are systematically documented.
- HIV status and referrals are integrated into family planning care.
- Cancer screening and side effects are captured for continuity and reporting.
- Data supports RCH, FP, HIV, and cancer screening programs.

This block appears within a patient record when family planning services are provided.



### Object Structure (Conceptual)

```text
familyPlanningDetails
├── date
├── positiveHivStatusBeforeService
├── wasCounselled
├── hasComeWithSpouse
├── serviceLocation
├── referred
├── cancerScreeningDetails
│   ├── breastCancer
│   │   ├── foundWithBreastCancerSymptoms
│   │   └── screened
│   └── cervicalCancer
│       ├── suspected
│       ├── screenedWithVIA
│       ├── viaTestPositive
├── hivStatus
│   ├── status
│   └── referredToCTC
├── spouseHivStatus
│   ├── status
│   └── referredToCTC
├── breastFeeding
└── sideEffects
    ├── bleeding
    ├── headache
    └── gotPregnancy
```
## Parameters

### `familyPlanningDetails`

* **Data type:** `object`  
* **Description:**  
  Root container holding all family planning service information for the client.



## Service Information

#### `date`

* **Data type:** `date-time`  
* **Description:**  
  Date when the family planning service was provided.  
* **Example value:**  
  `2024-11-01`



#### `positiveHivStatusBeforeService`

* **Data type:** `boolean`  
* **Description:**  
  Indicates whether the client was known to be HIV positive before receiving family planning services.  
* **Usage note:**  
  Used to guide counselling, method choice, and referrals.  
* **Example value:**  
  `true`



#### `wasCounselled`

* **Data type:** `boolean`  
* **Description:**  
  Indicates whether family planning counselling was provided.  
* **Usage note:**  
  Counselling should precede method provision.  
* **Example value:**  
  `true`



#### `hasComeWithSpouse`

* **Data type:** `boolean`  
* **Description:**  
  Indicates whether the client attended the family planning service with a spouse.  
* **Example value:**  
  `true`



#### `serviceLocation`

* **Data type:** `string`  
* **Description:**  
  Location or service point where family planning services were provided.  
* **Usage note:**  
  Supports service delivery analysis and reporting.  
* **Example value:**  
  `RCH`



#### `referred`

* **Data type:** `boolean`  
* **Description:**  
  Indicates whether the client was referred to another service or facility after the FP visit.  
* **Example value:**  
  `false`



## Cancer Screening Details

#### `cancerScreeningDetails`

* **Data type:** `object`  
* **Description:**  
  Captures cancer screening activities conducted during the family planning visit.



### Breast Cancer Screening

#### `breastCancer`

* **Data type:** `object`  
* **Description:**  
  Information related to breast cancer screening.



##### `foundWithBreastCancerSymptoms`

* **Data type:** `boolean`  
* **Description:**  
  Indicates whether the client presented with symptoms suggestive of breast cancer.  
* **Example value:**  
  `true`



##### `screened`

* **Data type:** `boolean`  
* **Description:**  
  Indicates whether breast cancer screening was performed.  
* **Example value:**  
  `true`



### Cervical Cancer Screening

#### `cervicalCancer`

* **Data type:** `object`  
* **Description:**  
  Information related to cervical cancer screening.



##### `suspected`

* **Data type:** `boolean`  
* **Description:**  
  Indicates whether cervical cancer was suspected based on examination or symptoms.  
* **Example value:**  
  `true`



##### `screenedWithVIA`

* **Data type:** `boolean`  
* **Description:**  
  Indicates whether the client was screened using Visual Inspection with Acetic Acid (VIA).  
* **Example value:**  
  `true`



##### `viaTestPositive`

* **Data type:** `boolean`  
* **Description:**  
  Indicates whether the VIA screening result was positive.  
* **Example value:**  
  `false`



## HIV Status Information

#### `hivStatus`

* **Data type:** `object`  
* **Description:**  
  Captures the HIV status of the client during the FP visit.



##### `status`

* **Data type:** `string`  
* **Description:**  
  HIV status of the client.  
* **Example value:**  
  `Negative`



##### `referredToCTC`

* **Data type:** `boolean`  
* **Description:**  
  Indicates whether the client was referred to a Care and Treatment Clinic (CTC).  
* **Example value:**  
  `false`



#### `spouseHivStatus`

* **Data type:** `object`  
* **Description:**  
  Captures HIV status information for the spouse, if assessed or reported.



##### `status`

* **Data type:** `string`  
* **Description:**  
  HIV status of the spouse.  
* **Example value:**  
  `Negative`



##### `referredToCTC`

* **Data type:** `boolean`  
* **Description:**  
  Indicates whether the spouse was referred to a Care and Treatment Clinic.  
* **Example value:**  
  `false`



## Post-Service Information

#### `breastFeeding`

* **Data type:** `boolean`  
* **Description:**  
  Indicates whether the client is currently breastfeeding.  
* **Usage note:**  
  Influences method eligibility and counselling.  
* **Example value:**  
  `true`



#### `sideEffects`

* **Data type:** `object`  
* **Description:**  
  Captures side effects experienced after using a family planning method.



##### `bleeding`

* **Data type:** `boolean`  
* **Description:**  
  Indicates whether the client experienced abnormal bleeding.  
* **Example value:**  
  `true`



##### `headache`

* **Data type:** `boolean`  
* **Description:**  
  Indicates whether the client experienced headaches as a side effect.  
* **Example value:**  
  `true`



#### `gotPregnancy`

* **Data type:** `boolean`  
* **Description:**  
  Indicates whether the client became pregnant while using a family planning method.  
* **Usage note:**  
  Important for method failure monitoring.  
* **Example value:**  
  `false`



## Example JSON
```json
{
  "familyPlanningDetails": {
    "date": "2024-11-01",
    "positiveHivStatusBeforeService": true,
    "wasCounselled": true,
    "hasComeWithSpouse": true,
    "serviceLocation": "RCH",
    "referred": false,
    "cancerScreeningDetails": {
      "breastCancer": {
        "foundWithBreastCancerSymptoms": true,
        "screened": true
      },
      "cervicalCancer": {
        "suspected": true,
        "screenedWithVIA": true,
        "viaTestPositive": false
      }
    },
    "hivStatus": {
      "status": "Negative",
      "referredToCTC": false
    },
    "spouseHivStatus": {
      "status": "Negative",
      "referredToCTC": false
    },
    "breastFeeding": true,
    "sideEffects": {
      "bleeding": true,
      "headache": true,
      "gotPregnancy": false
    }
  }
}
```



## Implementation Notes

- This block is central to **RCH and Family Planning reporting** and should be populated whenever FP services are provided.  
- Cancer screening elements may be populated independently based on service availability.  
- Side effects should be captured during follow-up visits where applicable.
