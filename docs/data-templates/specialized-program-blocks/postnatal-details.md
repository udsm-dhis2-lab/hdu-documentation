# Postnatal Details (`postnatalDetails`)

### Overview

The **Postnatal Details** block captures information related to postnatal care (PNC) provided to a mother and newborn after delivery.

It ensures that:

- Maternal and newborn postnatal services are systematically documented.
- HIV status, prophylaxis, counselling, and complications are traceable.
- Neonatal outcomes and referrals support MNCH and surveillance reporting.

This block appears when postnatal services are provided, typically within days after delivery.



### Object Structure (Conceptual)

```text
postnatalDetails
├── date
├── positiveHivStatusBeforeService
├── hivStatusAsSeenFromAncCard
├── hivDetails
│   ├── status
│   ├── code
│   └── hivTestNumber
├── motherAndChildOrigin
├── referredToCTC
├── placeOfBirth
├── prophylaxis
│   ├── providedWithAntenatalCorticosteroids
│   ├── provideWithVitaminA
│   └── providedWithFEFO
├── counselling
│   ├── name
│   └── code
├── referredToClinicForFurtherServices
├── outCome
├── APGARScore
├── demagedNipples
│   ├── provided
│   └── code
├── mastitis
│   ├── provided
│   └── code
├── breastAbscess
│   ├── provided
│   └── code
├── fistula
│   ├── provided
│   └── code
├── puerperalPsychosis
│   ├── provided
│   └── code
├── daysSinceDelivery
├── breastFeedingDetails
├── neonatalDeathDetails
│   ├── dateOfDeath
│   ├── lineA
│   ├── lineB
│   ├── lineC
│   ├── lineD
│   ├── causeOfDeathOther
│   ├── mannerOfDeath
│   └── placeOfDeath
├── birthDetails
│   ├── dateOfBirth
│   ├── weightInKgs
│   ├── multipleBirth
│   ├── birthOrder
│   ├── infantFeeding
│   ├── gender
│   ├── macerated
│   ├── fresh
│   ├── providedWithKmc
│   ├── hb
│   ├── hbigTested
│   ├── hivDnaPCRTested
│   ├── childHivStatus
│   ├── infections
│   │   ├── hasSepticaemia
│   │   ├── hasOmphalitis
│   │   ├── hasSkinInfection
│   │   ├── hasOcularInfection
│   │   └── hasJaundice
│   ├── outcomeDetails
│   │   ├── dischargedHome
│   │   ├── referredToNCU
│   │   ├── referredToHospital
│   │   └── referredToHealthFacility
│   ├── motherHivStatus
│   ├── providedWithARV
│   ├── referred
│   ├── vaccinationDetails
│   ├── breatheAssistance
│   │   ├── provided
│   │   └── code
│   └── otherServices
└── otherServices
```

## Parameters

### `postnatalDetails`

* **Data type:** `object`  
* **Description:**  
  Root container holding all postnatal care information for the mother and newborn.  
* **Usage note:**  
  This block should be present whenever postnatal services are delivered.



## Core Service Information

#### `date`

* **Data type:** `date-time`  
* **Description:**  
  Date when the postnatal care service was provided.  
* **Usage note:**  
  Used to determine timing of PNC visit relative to delivery.  
* **Example value:**  
  `2024-11-01`



#### `positiveHivStatusBeforeService`

* **Data type:** `boolean`  
* **Description:**  
  Indicates whether the mother was known to be HIV-positive before receiving postnatal services.  
* **Usage note:**  
  Supports PMTCT follow-up and service eligibility.  
* **Example value:**  
  `false`



#### `hivStatusAsSeenFromAncCard`

* **Data type:** `string`  
* **Description:**  
  HIV status of the mother as recorded on the ANC card.  
* **Usage note:**  
  Used to validate consistency between ANC and PNC records.  
* **Example value:**  
  `Negative`



## HIV Details (`hivDetails`)

#### `hivDetails`

* **Data type:** `object`  
* **Description:**  
  Container holding HIV testing information collected during postnatal care.



##### `status`

* **Data type:** `string`  
* **Description:**  
  HIV test result for the mother at the postnatal visit.  
* **Usage note:**  
  May differ from ANC status if retesting was done.  
* **Example value:**  
  `Negative`



##### `code`

* **Data type:** `string`  
* **Description:**  
  Standardized code representing the HIV test result.  
* **Usage note:**  
  Supports interoperability and coding standard alignment.  
* **Example value:**  
  `LA6577-6`



##### `hivTestNumber`

* **Data type:** `number`  
* **Description:**  
  Sequential number of the HIV test conducted for the mother.  
* **Usage note:**  
  Useful for tracking repeat testing across the care continuum.  
* **Example value:**  
  `2`



## Origin & Referral

#### `motherAndChildOrigin`

* **Data type:** `string`  
* **Description:**  
  Source or location from which the mother and child came before receiving postnatal care.  
* **Usage note:**  
  Supports referral pathway analysis.  
* **Example value:**  
  `LD/TBA/H/RD/RHC/RHS`



#### `referredToCTC`

* **Data type:** `boolean`  
* **Description:**  
  Indicates whether the mother or child was referred to a Care and Treatment Clinic (CTC).  
* **Usage note:**  
  Applicable when HIV exposure or infection is identified.  
* **Example value:**  
  `false`



#### `placeOfBirth`

* **Data type:** `string`  
* **Description:**  
  Location where the delivery took place.  
* **Usage note:**  
  Used for facility vs community delivery indicators.  
* **Example value:**  
  `TBA/H/BBA`



## Prophylaxis (`prophylaxis`)

#### `prophylaxis`

* **Data type:** `object`  
* **Description:**  
  Container holding preventive medications and supplements provided to the mother during the postnatal period.  
* **Usage note:**  
  These interventions reduce maternal morbidity and support recovery after delivery.



##### `providedWithAntenatalCorticosteroids`

* **Data type:** `boolean`  
* **Description:**  
  Indicates whether antenatal corticosteroids were administered.  
* **Usage note:**  
  Recorded here for continuity when applicable.  
* **Example value:**  
  `false`



##### `provideWithVitaminA`

* **Data type:** `boolean`  
* **Description:**  
  Indicates whether vitamin A supplementation was provided during postnatal care.  
* **Usage note:**  
  Supports maternal nutrition and immune function.  
* **Example value:**  
  `false`



##### `providedWithFEFO`

* **Data type:** `boolean`  
* **Description:**  
  Indicates whether iron and folic acid (FEFO) supplementation was provided.  
* **Usage note:**  
  Used to prevent or treat postpartum anemia.  
* **Example value:**  
  `false`



## Counselling (`counselling`)

#### `counselling`

* **Data type:** `array<object>`  
* **Description:**  
  List of counselling services provided during the postnatal visit.  
* **Usage note:**  
  Multiple counselling topics may be recorded.



##### Counselling Entry

###### `name`

* **Data type:** `string`  
* **Description:**  
  Name of the counselling topic provided.  
* **Usage note:**  
  Used for MNCH counselling coverage indicators.  
* **Example value:**  
  `Infant feeding`



###### `code`

* **Data type:** `string`  
* **Description:**  
  Standardized code representing the counselling topic.  
* **Usage note:**  
  Supports interoperability and standardized reporting.  
* **Example value:**  
  `L35909`



## Service Outcome

#### `referredToClinicForFurtherServices`

* **Data type:** `boolean`  
* **Description:**  
  Indicates whether the mother or newborn was referred for additional services after postnatal assessment.  
* **Usage note:**  
  Helps track continuity of care.  
* **Example value:**  
  `true`



#### `outCome`

* **Data type:** `string`  
* **Description:**  
  Overall outcome of the postnatal visit.  
* **Usage note:**  
  Used for high-level outcome reporting.  
* **Example value:**  
  `alive`



#### `APGARScore`

* **Data type:** `number`  
* **Description:**  
  APGAR score recorded for the newborn during postnatal assessment.  
* **Usage note:**  
  Used to assess neonatal condition after delivery.  
* **Example value:**  
  `7`



## Maternal Postnatal Conditions



#### `demagedNipples`

* **Data type:** `object`  
* **Description:**  
  Information related to damaged or cracked nipples.



##### `provided`

* **Data type:** `boolean`  
* **Example value:**  
  `true`



##### `code`

* **Data type:** `string`  
* **Example value:**  
  `61149-1`



#### `mastitis`

* **Data type:** `object`  
* **Description:**  
  Information related to mastitis.



##### `provided`

* **Data type:** `boolean`  
* **Example value:**  
  `true`



##### `code`

* **Data type:** `string`  
* **Example value:**  
  `77392-7`



#### `breastAbscess`

* **Data type:** `object`  

##### `provided`

* **Data type:** `boolean`  
* **Example value:**  
  `false`

##### `code`

* **Data type:** `string`  
* **Example value:**  
  `77391-9`



#### `fistula`

* **Data type:** `object`

##### `provided`

* **Data type:** `boolean`  
* **Example value:**  
  `false`

##### `code`

* **Data type:** `string`  
* **Example value:**  
  `37104-4`



#### `puerperalPsychosis`

* **Data type:** `object`

##### `provided`

* **Data type:** `boolean`  
* **Example value:**  
  `false`

##### `code`

* **Data type:** `string`  
* **Example value:**  
  `77385-1`



#### `daysSinceDelivery`

* **Data type:** `number`  
* **Description:**  
  Number of days elapsed since delivery at the time of the postnatal visit.  
* **Usage note:**  
  Used to classify early vs late postnatal visits.  
* **Example value:**  
  `2`



#### `breastFeedingDetails`

* **Data type:** `object | null`  
* **Description:**  
  Additional breastfeeding-related details, if collected.  
* **Usage note:**  
  May be null if captured elsewhere.  
* **Example value:**  
  `null`



## Neonatal Death Details (`neonatalDeathDetails`)

#### `neonatalDeathDetails`

* **Data type:** `array<object>`  
* **Description:**  
  Captures information related to neonatal death.  
* **Usage note:**  
  Populate only if neonatal death occurred.



##### Neonatal Death Entry

###### `dateOfDeath`

* **Data type:** `date-time`  
* **Example value:**  
  `2024-08-07`

###### `lineA`

* **Data type:** `string`  
* **Example value:**  
  `A01.1`

###### `lineB`

* **Data type:** `string`  
* **Example value:**  
  `A01.1`

###### `lineC`

* **Data type:** `string | null`  
* **Example value:**  
  `null`

###### `lineD`

* **Data type:** `string | null`  
* **Example value:**  
  `null`

###### `causeOfDeathOther`

* **Data type:** `string | null`  
* **Example value:**  
  `null`

###### `mannerOfDeath`

* **Data type:** `string | null`  
* **Example value:**  
  `null`

###### `placeOfDeath`

* **Data type:** `string`  
* **Example value:**  
  `On the route to health facility`



## Birth Details (`birthDetails`)

#### `birthDetails`

* **Data type:** `array<object>`  
* **Description:**  
  Detailed clinical and outcome information for the newborn during postnatal care.



##### Birth Entry

###### `dateOfBirth`

* **Data type:** `date-time | null`  
* **Example value:**  
  `null`

###### `weightInKgs`

* **Data type:** `number | null`  
* **Example value:**  
  `3.0`

###### `multipleBirth`

* **Data type:** `boolean`  
* **Example value:**  
  `false`

###### `birthOrder`

* **Data type:** `number | null`  
* **Example value:**  
  `1`

###### `infantFeeding`

* **Data type:** `string`  
* **Example values:**  
  `EBF`, `RF`, `MF`

###### `gender`

* **Data type:** `string`  
* **Example value:**  
  `female`

###### `macerated`

* **Data type:** `boolean`  
* **Example value:**  
  `false`

###### `fresh`

* **Data type:** `boolean`  
* **Example value:**  
  `false`

###### `providedWithKmc`

* **Data type:** `boolean`  
* **Example value:**  
  `true`

###### `hb`

* **Data type:** `string`  
* **Example value:**  
  `12`

###### `hbigTested`

* **Data type:** `boolean`  
* **Example value:**  
  `true`

###### `hivDnaPCRTested`

* **Data type:** `boolean`  
* **Example value:**  
  `true`

###### `childHivStatus`

* **Data type:** `string`  
* **Example value:**  
  `Negative`



## Infections (`infections`)

#### `infections`

* **Data type:** `object`  
* **Description:**  
  Captures infections diagnosed in the newborn.



- `hasSepticaemia` – `true`  
- `hasOmphalitis` – `true`  
- `hasSkinInfection` – `true`  
- `hasOcularInfection` – `true`  
- `hasJaundice` – `true`



## Newborn Outcome (`outcomeDetails`)

#### `outcomeDetails`

* **Data type:** `object`  
* **Description:**  
  Outcome of the newborn after postnatal assessment.



- `dischargedHome` – `false`  
- `referredToNCU` – `false`  
- `referredToHospital` – `false`  
- `referredToHealthFacility` – `false`



## Additional Newborn Services

#### `motherHivStatus`

* **Data type:** `boolean`  
* **Example value:**  
  `true`



#### `providedWithARV`

* **Data type:** `boolean | null`  
* **Example value:**  
  `null`



#### `referred`

* **Data type:** `boolean`  
* **Example value:**  
  `true`



## Vaccination Details (Nested)

#### `vaccinationDetails`

* **Data type:** `array<object>`  
* **Description:**  
  Vaccinations provided to the newborn.  
* **Usage note:**  
  Structure identical to the **Vaccination Details** block.



## Breathing Assistance (`breatheAssistance`)

#### `breatheAssistance`

* **Data type:** `object`  
* **Description:**  
  Captures breathing support provided to the newborn.



##### `provided`

* **Data type:** `boolean`  
* **Example value:**  
  `true`



##### `code`

* **Data type:** `string`  
* **Description:**  
  Standardized code representing breathing assistance.  
* **Example value:**  
  `73764-0`



#### `otherServices`

* **Data type:** `array`  
* **Description:**  
  Other services provided to the newborn not captured elsewhere.  
* **Example value:**  
  `[]`

## Example JSON
```json
{
  "postnatalDetails": {
    "date": "2024-11-01",
    "positiveHivStatusBeforeService": false,
    "hivStatusAsSeenFromAncCard": "Negative",
    "hivDetails": {
      "status": "Negative",
      "code": "LA6577-6",
      "hivTestNumber": 2
    },
    "motherAndChildOrigin": "LD/TBA/H/RD/RHC/RHS",
    "referredToCTC": false,
    "placeOfBirth": "TBA/H/BBA",
    "prophylaxis": {
      "providedWithAntenatalCorticosteroids": false,
      "provideWithVitaminA": false,
      "providedWithFEFO": false
    },
    "counselling": [
      {
        "name": "Infant feeding",
        "code": "L35909"
      }
    ],
    "referredToClinicForFurtherServices": true,
    "outCome": "alive",
    "APGARScore": 7,
    "demagedNipples": {
      "provided": true,
      "code": "61149-1"
    },
    "mastitis": {
      "provided": true,
      "code": "77392-7"
    },
    "breastAbscess": {
      "provided": false,
      "code": "77391-9"
    },
    "fistula": {
      "provided": false,
      "code": "37104-4"
    },
    "puerperalPsychosis": {
      "provided": false,
      "code": "77385-1"
    },
    "daysSinceDelivery": 2,
    "breastFeedingDetails": null,
    "neonatalDeathDetails": [
      {
        "dateOfDeath": "2024-08-07",
        "lineA": "A01.1",
        "lineB": "A01.1",
        "lineC": null,
        "lineD": null,
        "causeOfDeathOther": null,
        "mannerOfDeath": null,
        "placeOfDeath": "On the route to health facility"
      }
    ],
    "birthDetails": [
      {
        "dateOfBirth": null,
        "weightInKgs": 3.0,
        "multipleBirth": false,
        "birthOrder": 1,
        "infantFeeding": "EBF",
        "gender": "female",
        "macerated": false,
        "fresh": false,
        "providedWithKmc": true,
        "hb": "12",
        "hbigTested": true,
        "hivDnaPCRTested": true,
        "childHivStatus": "Negative",
        "infections": {
          "hasSepticaemia": true,
          "hasOmphalitis": true,
          "hasSkinInfection": true,
          "hasOcularInfection": true,
          "hasJaundice": true
        },
        "outcomeDetails": {
          "dischargedHome": false,
          "referredToNCU": false,
          "referredToHospital": false,
          "referredToHealthFacility": false
        },
        "motherHivStatus": true,
        "providedWithARV": null,
        "referred": true,
        "vaccinationDetails": [],
        "breatheAssistance": {
          "provided": true,
          "code": "73764-0"
        },
        "otherServices": []
      }
    ],
    "otherServices": []
  }
}
```