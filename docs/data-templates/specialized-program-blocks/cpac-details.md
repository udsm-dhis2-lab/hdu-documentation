# CPAC Details (`cpacDetails`)

### Overview

The **CPAC Details** block captures information related to Comprehensive Post-Abortion Care (CPAC) services provided to a patient.

It ensures that:

- Abortion-related clinical information is safely and systematically documented.
- Post-abortion interventions, counselling, and medications are traceable.
- Data supports maternal health surveillance, quality of care monitoring, and national reporting.

This block appears when a patient receives post-abortion services.



### Object Structure (Conceptual)

```text
cpacDetails
├── pregnancyAgeInWeeks
├── causeOfAbortion
├── afterAbortionServices
├── positiveHIVStatusBeforeAbortion
├── hivTest
│   └── status
├── referReason
├── postAbortionsMedications
│   ├── providedWithAntibiotics
│   ├── providedWithPainKillers
│   ├── providedWithOxytocin
│   ├── providedWithMisoprostol
│   └── providedWithIvInfusion
├── postAbortionCounselling
│   ├── providedWithSTDsPreventionCounselling
│   ├── providedWithHIVCounselling
│   └── providedWithFamilyPlanningCounselling
└── contraceptives
    ├── didReceiveOralPillsPOP
    ├── popCyclesProvided
    ├── didReceiveOralPillsCOC
    ├── cocCyclesProvided
    ├── didReceivePillCycles
    ├── wasInsertedWithImplanon
    ├── wasInsertedWithJadelle
    ├── didReceiveIUD
    ├── didHaveTubalLigation
    ├── didReceiveInjection
    ├── numberOfFemaleCondomsProvided
    └── numberOfMaleCondomsProvided
```
## Parameters

### `cpacDetails`

* **Data type:** `object`  
* **Description:**  
  Root container holding all **Comprehensive Post-Abortion Care (CPAC)** information.



## Pregnancy Information

#### `pregnancyAgeInWeeks`

* **Data type:** `number`  
* **Description:**  
  Gestational age of the pregnancy at the time of abortion.  
* **Usage note:**  
  Critical for determining clinical eligibility and risk assessment.  
* **Example value:**  
  `12`



#### `causeOfAbortion`

* **Data type:** `string`  
* **Description:**  
  Reason or circumstance under which the abortion occurred.  
* **Usage note:**  
  Used for maternal health reporting and case classification.  
* **Example values:**  
  `SPONTANEOUS`  
  `SAVELIFE`  
  `DRUGUSESIDEEFFECTS`  
  `OTHERS`



#### `afterAbortionServices`

* **Data type:** `string`  
* **Description:**  
  Clinical services provided after abortion.  
* **Example values:**  
  `MVA`  
  `MEDICALTREATMENT`  
  `SHARPCURETTAGE`



## HIV-Related Information

#### `positiveHIVStatusBeforeAbortion`

* **Data type:** `boolean`  
* **Description:**  
  Indicates whether the patient was known to be HIV-positive before abortion.  
* **Example value:**  
  `true`



#### `hivTest`

* **Data type:** `object`  
* **Description:**  
  Captures HIV testing performed as part of CPAC services.



##### `status`

* **Data type:** `string`  
* **Description:**  
  HIV test result.  
* **Example value:**  
  `Negative`



## Referral Information

#### `referReason`

* **Data type:** `string`  
* **Description:**  
  Reason for referral related to post-abortion care.  
* **Example values:**  
  `CPAC`  
  `OTHERS`



## Post-Abortion Medications

#### `postAbortionsMedications`

* **Data type:** `object`  
* **Description:**  
  Captures medications provided to the patient following abortion.



##### `providedWithAntibiotics`

* **Data type:** `boolean`  
* **Description:**  
  Indicates whether antibiotics were provided.  
* **Example value:**  
  `true`



##### `providedWithPainKillers`

* **Data type:** `boolean`  
* **Description:**  
  Indicates whether pain relief medication was provided.  
* **Example value:**  
  `false`



##### `providedWithOxytocin`

* **Data type:** `boolean`  
* **Description:**  
  Indicates whether oxytocin was administered to manage bleeding.  
* **Example value:**  
  `false`



##### `providedWithMisoprostol`

* **Data type:** `boolean`  
* **Description:**  
  Indicates whether misoprostol was provided.  
* **Example value:**  
  `true`



##### `providedWithIvInfusion`

* **Data type:** `boolean`  
* **Description:**  
  Indicates whether intravenous infusion was administered.  
* **Example value:**  
  `true`



## Post-Abortion Counselling

#### `postAbortionCounselling`

* **Data type:** `object`  
* **Description:**  
  Records counselling services provided after abortion.



##### `providedWithSTDsPreventionCounselling`

* **Data type:** `boolean`  
* **Description:**  
  Indicates whether counselling on STD prevention was provided.  
* **Example value:**  
  `false`



##### `providedWithHIVCounselling`

* **Data type:** `boolean`  
* **Description:**  
  Indicates whether HIV counselling was provided.  
* **Example value:**  
  `true`



##### `providedWithFamilyPlanningCounselling`

* **Data type:** `boolean`  
* **Description:**  
  Indicates whether family planning counselling was provided.  
* **Example value:**  
  `true`



## Contraceptive Services

#### `contraceptives`

* **Data type:** `object`  
* **Description:**  
  Captures contraceptive methods provided following abortion.



##### `didReceiveOralPillsPOP`

* **Data type:** `boolean`  
* **Description:**  
  Indicates whether Progestin-Only Pills (POP) were provided.  
* **Example value:**  
  `true`



##### `popCyclesProvided`

* **Data type:** `number`  
* **Description:**  
  Number of POP cycles issued.  
* **Example value:**  
  `4`



##### `didReceiveOralPillsCOC`

* **Data type:** `boolean`  
* **Description:**  
  Indicates whether Combined Oral Contraceptives (COC) were provided.  
* **Example value:**  
  `true`



##### `cocCyclesProvided`

* **Data type:** `number`  
* **Description:**  
  Number of COC cycles issued.  
* **Example value:**  
  `4`



##### `didReceivePillCycles`

* **Data type:** `boolean`  
* **Description:**  
  Indicates whether any oral pill cycles were provided.  
* **Example value:**  
  `true`



##### `wasInsertedWithImplanon`

* **Data type:** `boolean`  
* **Description:**  
  Indicates whether Implanon implant was inserted.  
* **Example value:**  
  `false`



##### `wasInsertedWithJadelle`

* **Data type:** `boolean`  
* **Description:**  
  Indicates whether Jadelle implant was inserted.  
* **Example value:**  
  `false`



##### `didReceiveIUD`

* **Data type:** `boolean`  
* **Description:**  
  Indicates whether an intrauterine device was provided.  
* **Example value:**  
  `false`



##### `didHaveTubalLigation`

* **Data type:** `boolean`  
* **Description:**  
  Indicates whether tubal ligation was performed.  
* **Example value:**  
  `false`



##### `didReceiveInjection`

* **Data type:** `boolean`  
* **Description:**  
  Indicates whether a contraceptive injection was administered.  
* **Example value:**  
  `true`



##### `numberOfFemaleCondomsProvided`

* **Data type:** `number`  
* **Description:**  
  Number of female condoms issued.  
* **Example value:**  
  `0`



##### `numberOfMaleCondomsProvided`

* **Data type:** `number`  
* **Description:**  
  Number of male condoms issued.  
* **Example value:**  
  `5`

## Example JSON
```json
{
  "cpacDetails": {
    "pregnancyAgeInWeeks": 12,
    "causeOfAbortion": "SPONTANEOUS",
    "afterAbortionServices": "MVA",
    "positiveHIVStatusBeforeAbortion": true,
    "hivTest": {
      "status": "Negative"
    },
    "referReason": "CPAC",
    "postAbortionsMedications": {
      "providedWithAntibiotics": true,
      "providedWithPainKillers": false,
      "providedWithOxytocin": false,
      "providedWithMisoprostol": true,
      "providedWithIvInfusion": true
    },
    "postAbortionCounselling": {
      "providedWithSTDsPreventionCounselling": false,
      "providedWithHIVCounselling": true,
      "providedWithFamilyPlanningCounselling": true
    },
    "contraceptives": {
      "didReceiveOralPillsPOP": true,
      "popCyclesProvided": 4,
      "didReceiveOralPillsCOC": true,
      "cocCyclesProvided": 4,
      "didReceivePillCycles": true,
      "wasInsertedWithImplanon": false,
      "wasInsertedWithJadelle": false,
      "didReceiveIUD": false,
      "didHaveTubalLigation": false,
      "didReceiveInjection": true,
      "numberOfFemaleCondomsProvided": 0,
      "numberOfMaleCondomsProvided": 5
    }
  }
}
```