# Antenatal Care Details (`antenatalCareDetails`)

### Overview

The **Antenatal Care Details** block captures comprehensive clinical, preventive, and counseling information provided to a pregnant woman during antenatal care (ANC) visits.

It ensures that:

- Pregnancy progression is properly monitored.
- Preventive interventions (HIV, syphilis, malaria, nutrition) are documented.
- Referrals and counselling services are traceable.
- Data supports MNCH reporting, PMTCT programs, and maternal surveillance.

This block may appear multiple times across visits, depending on the ANC schedule.



### Object Structure (Conceptual)

```text
antenatalCareDetails
├── date
├── pregnancyAgeInWeeks
├── lastAncVisitDate
├── positiveHivStatusBeforeService
├── referredIn
├── referredOut
├── referredToCTC
├── counselling[]
│   ├── name
│   └── code
├── hivDetails
│   ├── status
│   ├── code
│   └── hivTestNumber
├── syphilisDetails
│   ├── status
│   ├── code
│   └── providedWithTreatment
├── spouseDetails
│   ├── hivDetails
│   │   ├── status
│   │   ├── code
│   │   └── hivTestNumber
│   ├── hepatitisB
│   │   ├── status
│   │   ├── code
│   │   └── providedWithTreatments
│   ├── syphilisDetails
│   │   ├── status
│   │   ├── code
│   │   └── providedWithTreatment
│   ├── diagnosedWithOtherSTDs
│   ├── providedWithTreatmentForOtherSTDs
│   └── otherSpouseDetails[]
```

## Parameters

### `antenatalCareDetails`

* **Data type:** `object`  
* **Description:**  
  Root container holding all antenatal care–related data for a pregnancy episode.  
* **Usage note:**  
  Required for MNCH, PMTCT, and maternal health reporting.



## Core ANC Information

#### `date`

* **Data type:** `date`  
* **Description:**  
  Date when antenatal care services were provided.  
* **Example value:**  
  `2024-11-01`



#### `pregnancyAgeInWeeks`

* **Data type:** `number | null`  
* **Description:**  
  Gestational age of the pregnancy in weeks at the time of the visit.  
* **Usage note:**  
  Used to determine eligibility for ANC interventions.  
* **Example value:**  
  `24`



#### `lastAncVisitDate`

* **Data type:** `date-time`  
* **Description:**  
  Date of the most recent previous ANC visit.  
* **Example value:**  
  `2024-01-01`



#### `positiveHivStatusBeforeService`

* **Data type:** `boolean`  
* **Description:**  
  Indicates whether the mother was known to be HIV-positive before receiving ANC services.  
* **Example value:**  
  `false`



## Referral Information

#### `referredIn`

* **Data type:** `boolean`  
* **Description:**  
  Indicates whether the patient was referred into the facility from another health facility.  
* **Example value:**  
  `false`



#### `referredOut`

* **Data type:** `boolean`  
* **Description:**  
  Indicates whether the patient was referred out to another health facility.  
* **Example value:**  
  `false`



#### `referredToCTC`

* **Data type:** `boolean`  
* **Description:**  
  Indicates whether the patient was referred to a Care and Treatment Center (CTC).  
* **Usage note:**  
  Typically true for HIV-positive mothers.  
* **Example value:**  
  `false`



## Counselling Information

#### `counselling`

* **Data type:** `array<object>`  
* **Description:**  
  List of counselling services provided during ANC.  
* **Usage note:**  
  Supports tracking of health education interventions.



##### `counselling.name`

* **Data type:** `string`  
* **Description:**  
  Name of the counselling topic provided.  
* **Example value:**  
  `Infant feeding`



##### `counselling.code`

* **Data type:** `string`  
* **Description:**  
  Standard code identifying the counselling service.  
* **Example value:**  
  `L35909`



## HIV Details (Mother)

#### `hivDetails`

* **Data type:** `object`  
* **Description:**  
  Captures the HIV testing and status information of the pregnant woman.



##### `hivDetails.status`

* **Data type:** `string`  
* **Description:**  
  HIV status of the mother.  
* **Allowed values:**  
  `Positive`, `Negative`, `Unknown`  
* **Example value:**  
  `Negative`



##### `hivDetails.code`

* **Data type:** `string`  
* **Description:**  
  Standard code representing the HIV test result.  
* **Example value:**  
  `LA6577-6`



##### `hivDetails.hivTestNumber`

* **Data type:** `number`  
* **Description:**  
  Sequence number of the HIV test during pregnancy.  
* **Example value:**  
  `1`



## Syphilis Details (Mother)

#### `syphilisDetails`

* **Data type:** `object`  
* **Description:**  
  Captures syphilis screening and treatment status.



##### `syphilisDetails.status`

* **Data type:** `string`  
* **Description:**  
  Syphilis test result.  
* **Example value:**  
  `Negative`



##### `syphilisDetails.code`

* **Data type:** `string`  
* **Description:**  
  Standard code representing syphilis test result.  
* **Example value:**  
  `LA6577-6`



##### `syphilisDetails.providedWithTreatment`

* **Data type:** `boolean`  
* **Description:**  
  Indicates whether treatment was provided for syphilis.  
* **Example value:**  
  `false`



## Spouse Details

#### `spouseDetails`

* **Data type:** `object`  
* **Description:**  
  Captures health screening and treatment information for the spouse or partner.



### Spouse HIV Details

#### `spouseDetails.hivDetails`

* **Data type:** `object`  
* **Description:**  
  HIV status and testing information of the spouse.



##### `status`

* **Data type:** `string`  
* **Example value:**  
  `Negative`



##### `code`

* **Data type:** `string`  
* **Example value:**  
  `B16`



##### `hivTestNumber`

* **Data type:** `number`  
* **Example value:**  
  `1`



### Spouse Hepatitis B

#### `spouseDetails.hepatitisB`

* **Data type:** `object`  
* **Description:**  
  Hepatitis B screening and treatment information.



##### `status`

* **Data type:** `string`  
* **Example value:**  
  `Negative`



##### `code`

* **Data type:** `string`  
* **Example value:**  
  `B16`



##### `providedWithTreatments`

* **Data type:** `boolean`  
* **Example value:**  
  `false`



### Spouse Syphilis

#### `spouseDetails.syphilisDetails`

* **Data type:** `object`  
* **Description:**  
  Syphilis screening and treatment for spouse.



##### `status`

* **Data type:** `string`  
* **Example value:**  
  `Negative`



##### `code`

* **Data type:** `string`  
* **Example value:**  
  `A51`



##### `providedWithTreatment`

* **Data type:** `boolean`  
* **Example value:**  
  `false`



### Other Spouse Health Indicators

#### `diagnosedWithOtherSTDs`

* **Data type:** `boolean`  
* **Description:**  
  Indicates whether the spouse was diagnosed with other STDs.  
* **Example value:**  
  `false`



#### `providedWithTreatmentForOtherSTDs`

* **Data type:** `boolean`  
* **Description:**  
  Indicates whether treatment was provided for other STDs.  
* **Example value:**  
  `false`



#### `otherSpouseDetails`

* **Data type:** `array`  
* **Description:**  
  Additional spouse-related health details not otherwise classified.  
* **Example value:**  
  `[]`

## Example JSON
```json
{
  "antenatalCareDetails": {
    "date": "2024-11-01",
    "pregnancyAgeInWeeks": 24,
    "lastAncVisitDate": "2024-01-01",
    "positiveHivStatusBeforeService": false,
    "referredIn": false,
    "referredOut": false,
    "referredToCTC": false,
    "counselling": [
      {
        "name": "Infant feeding",
        "code": "L35909"
      }
    ],
    "hivDetails": {
      "status": "Negative",
      "code": "LA6577-6",
      "hivTestNumber": 1
    },
    "syphilisDetails": {
      "status": "Negative",
      "code": "LA6577-6",
      "providedWithTreatment": false
    },
    "spouseDetails": {
      "hivDetails": {
        "status": "Negative",
        "code": "B16",
        "hivTestNumber": 1
      },
      "hepatitisB": {
        "status": "Negative",
        "code": "B16",
        "providedWithTreatments": false
      },
      "syphilisDetails": {
        "status": "Negative",
        "code": "A51",
        "providedWithTreatment": false
      },
      "diagnosedWithOtherSTDs": false,
      "providedWithTreatmentForOtherSTDs": false,
      "otherSpouseDetails": []
    }
  }
}
```