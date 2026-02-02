# Other Information (`otherInformation`)

### Overview

The **Other Information** block captures supplementary clinical and public-health–related data that may not fit into core visit, diagnosis, or treatment blocks but is still critical for screening programs, surveillance, and registries.

It ensures that:

- Program-specific data (e.g. cancer screening) is properly structured.
- Screening outcomes can be used for reporting, referrals, and follow-up.
- Additional disease-specific information is captured without overloading core blocks.

This block appears within each patient record in the `listGrid` array and is populated only when applicable.



### Object Structure (Conceptual)

```text
otherInformation
├── cancerScreening
│   ├── date
│   ├── method
│   ├── code
│   └── results
│       ├── date
│       ├── value
│       └── code
└── cancerDetails
    ├── incidenceDate
    ├── topography
    ├── morphology
    ├── basisOfDiagnosis
    └── stage
```
## Parameters

### `otherInformation`

* **Data type:** `object`  
* **Description:**  
  Root container for additional clinical and programmatic information related to the patient.  
  The following parameters are defined within this object.



## Cancer Screening

#### `cancerScreening`

* **Data type:** `object`  
* **Description:**  
  Captures details of a cancer screening event conducted for the patient.  
  The following parameters are defined within this object.



##### `date`

* **Data type:** `date-time`  
* **Description:**  
  The date when the cancer screening was performed.  
* **Example value:**  
  `2024-01-01`



##### `method`

* **Data type:** `string`  
* **Description:**  
  The screening method used.  
* **Example value:**  
  `VIA`



##### `code`

* **Data type:** `string`  
* **Description:**  
  Standardized code representing the screening method.  
* **Example value:**  
  `80358-7`



##### `results`

* **Data type:** `object`  
* **Description:**  
  Captures the outcome of the cancer screening.  
  The following parameters are defined within this object.



###### `date`

* **Data type:** `date-time`  
* **Description:**  
  Date when screening results were recorded.  
* **Example value:**  
  `2024-01-02`



###### `value`

* **Data type:** `string`  
* **Description:**  
  Outcome of the screening test.  
* **Example value:**  
  `Positive`



###### `code`

* **Data type:** `string`  
* **Description:**  
  Standardized code representing the screening outcome.  
* **Example value:**  
  `LA6576-8`



## Cancer Details

#### `cancerDetails`

* **Data type:** `array<object>`  
* **Description:**  
  Captures detailed cancer-related information following diagnosis or confirmation.  
  Each entry represents a single cancer case record.



##### `incidenceDate`

* **Data type:** `date-time`  
* **Description:**  
  Date when the cancer case was first identified or confirmed.  
* **Example value:**  
  `2024-01-15`



##### `topography`

* **Data type:** `string`  
* **Description:**  
  Anatomical site of the cancer.  
* **Example value:**  
  `C50 (Breast)`



##### `morphology`

* **Data type:** `string`  
* **Description:**  
  Histological type or morphology of the cancer.  
* **Example value:**  
  `8500/3 (Infiltrating duct carcinoma)`



##### `basisOfDiagnosis`

* **Data type:** `string`  
* **Description:**  
  Method used to establish the cancer diagnosis.  
* **Example value:**  
  `Histology of primary tumor`



##### `stage`

* **Data type:** `string`  
* **Description:**  
  Clinical or pathological stage of the cancer.  
* **Example value:**  
  `Stage II`





## Example JSON
```json
{
  "otherInformation": {
    "cancerScreening": {
      "date": "2024-01-01",
      "method": "VIA",
      "code": "80358-7",
      "results": {
        "date": "2024-01-02",
        "value": "Positive",
        "code": "LA6576-8"
      }
    },
    "cancerDetails": [
      {
        "incidenceDate": "2024-01-15",
        "topography": "C50",
        "morphology": "8500/3",
        "basisOfDiagnosis": "Histology of primary tumor",
        "stage": "Stage II"
      }
    ]
  }
}
```
## Implementation Notes

- `cancerScreening` may exist without `cancerDetails` if diagnosis is not yet confirmed.  
- `cancerDetails` supports cancer registries and DHIS2 oncology indicators.  
- This block is extensible for additional program-specific information in future versions.