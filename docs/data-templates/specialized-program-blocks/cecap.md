# Cervical Cancer Prevention (CECAP) Details (`cecap`)

### Overview

The **CECAP Details** block captures information related to cervical and breast cancer screening and prevention services, particularly in the context of HIV-integrated reproductive and maternal health services.

It ensures that:

- Cancer screening activities are systematically recorded.
- Screening outcomes, treatments, and complications are traceable.
- Integration between HIV services and cancer prevention programs is supported.
- Data aligns with national cancer screening and NCD reporting requirements.

This block appears when cancer screening services are provided, especially during RCH, FP, or HIV-related visits.



### Object Structure (Conceptual)

```text
cecap
├── hivStatus
└── cancerScreeningDetails
    ├── breastCancer
    │   ├── foundWithBreastCancerSymptoms
    │   └── screened
    └── cervicalCancer
        ├── suspected
        ├── screenedWithVIA
        ├── screenedWithHPVDNA
        ├── viaTestPositive
        ├── hpvDNAPositive
        ├── diagnosedWithLargeLesion
        ├── diagnosedWithSmallOrModerateLesion
        ├── treatedWithCryo
        ├── treatedWithThermo
        ├── treatedWithLEEP
        ├── firstTimeScreening
        ├── treatedOnTheSameDay
        ├── complicationsAfterTreatment
        └── foundWithHivAndReferredToCTC
```

## Parameters

### `cecap`

* **Data type:** `object`  
* **Description:**  
  Root container holding cervical and breast cancer screening and prevention details.



## HIV Status

#### `hivStatus`

* **Data type:** `string`  
* **Description:**  
  HIV status of the client at the time of cancer screening.  
* **Usage note:**  
  HIV status is critical for determining screening frequency and management pathways.  
* **Example values:**  
  `POSITIVE`  
  `NEGATIVE`



## Cancer Screening Details

#### `cancerScreeningDetails`

* **Data type:** `object`  
* **Description:**  
  Container holding detailed cancer screening information.



### Breast Cancer Screening

#### `breastCancer`

* **Data type:** `object`  
* **Description:**  
  Captures information related to breast cancer screening.



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
* **Usage note:**  
  Screening may include clinical breast examination or imaging referrals.  
* **Example value:**  
  `true`



### Cervical Cancer Screening

#### `cervicalCancer`

* **Data type:** `object`  
* **Description:**  
  Captures information related to cervical cancer screening, diagnosis, and treatment.



##### `suspected`

* **Data type:** `boolean`  
* **Description:**  
  Indicates whether cervical cancer was suspected based on symptoms or examination.  
* **Example value:**  
  `true`



##### `screenedWithVIA`

* **Data type:** `boolean`  
* **Description:**  
  Indicates whether Visual Inspection with Acetic Acid (VIA) was used for screening.  
* **Example value:**  
  `true`



##### `screenedWithHPVDNA`

* **Data type:** `boolean`  
* **Description:**  
  Indicates whether HPV DNA testing was performed.  
* **Usage note:**  
  Often used for women aged 30+ or HIV-positive clients.  
* **Example value:**  
  `true`



##### `viaTestPositive`

* **Data type:** `boolean`  
* **Description:**  
  Indicates whether the VIA screening result was positive.  
* **Example value:**  
  `false`



##### `hpvDNAPositive`

* **Data type:** `boolean`  
* **Description:**  
  Indicates whether HPV DNA test result was positive.  
* **Example value:**  
  `false`



## Lesion Assessment

#### `diagnosedWithLargeLesion`

* **Data type:** `boolean`  
* **Description:**  
  Indicates whether a large cervical lesion was diagnosed.  
* **Usage note:**  
  Large lesions may require referral or advanced treatment.  
* **Example value:**  
  `true`



#### `diagnosedWithSmallOrModerateLesion`

* **Data type:** `boolean`  
* **Description:**  
  Indicates whether a small or moderate cervical lesion was diagnosed.  
* **Example value:**  
  `true`



## Treatment Information

#### `treatedWithCryo`

* **Data type:** `boolean`  
* **Description:**  
  Indicates whether cryotherapy was used to treat cervical lesions.  
* **Example value:**  
  `true`



#### `treatedWithThermo`

* **Data type:** `boolean`  
* **Description:**  
  Indicates whether thermal ablation was used for treatment.  
* **Example value:**  
  `false`



#### `treatedWithLEEP`

* **Data type:** `boolean`  
* **Description:**  
  Indicates whether Loop Electrosurgical Excision Procedure (LEEP) was performed.  
* **Example value:**  
  `true`



## Service Context

#### `firstTimeScreening`

* **Data type:** `boolean`  
* **Description:**  
  Indicates whether this was the client’s first cervical cancer screening.  
* **Example value:**  
  `false`



#### `treatedOnTheSameDay`

* **Data type:** `boolean`  
* **Description:**  
  Indicates whether screening and treatment were provided on the same day.  
* **Usage note:**  
  Supports “screen-and-treat” program evaluation.  
* **Example value:**  
  `false`



#### `complicationsAfterTreatment`

* **Data type:** `boolean`  
* **Description:**  
  Indicates whether complications occurred following treatment.  
* **Example value:**  
  `true`



#### `foundWithHivAndReferredToCTC`

* **Data type:** `boolean`  
* **Description:**  
  Indicates whether the client was found HIV positive and referred to a Care and Treatment Clinic (CTC).  
* **Example value:**  
  `true`



## Example JSON
```json
{
  "cecap": {
    "hivStatus": "NEGATIVE",
    "cancerScreeningDetails": {
      "breastCancer": {
        "foundWithBreastCancerSymptoms": true,
        "screened": true
      },
      "cervicalCancer": {
        "suspected": true,
        "screenedWithVIA": true,
        "screenedWithHPVDNA": true,
        "viaTestPositive": false,
        "hpvDNAPositive": false,
        "diagnosedWithLargeLesion": true,
        "diagnosedWithSmallOrModerateLesion": true,
        "treatedWithCryo": true,
        "treatedWithThermo": false,
        "treatedWithLEEP": true,
        "firstTimeScreening": false,
        "treatedOnTheSameDay": false,
        "complicationsAfterTreatment": true,
        "foundWithHivAndReferredToCTC": true
      }
    }
  }
}
```
