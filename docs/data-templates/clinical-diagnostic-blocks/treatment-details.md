# Treatment Details (`treatmentDetails`)

### Overview

The **Treatment Details** block captures information about therapeutic interventions provided to a client following diagnosis.

It ensures that:

- Different treatment modalities are clearly documented and categorized.
- Treatment progress and cycles can be tracked over time.
- Clinical, oncology, and procedural care data can be used for continuity of care, reporting, and analytics.

This block appears within each record in the `listGrid` array and may contain multiple treatment modalities, depending on the client’s care plan.



### Object Structure (Conceptual)

```text
treatmentDetails
├── chemoTherapy
│   ├── diagnosis
│   ├── regiment
│   ├── stage
│   ├── totalNumberOfExpectedCycles
│   └── currentChemotherapeuticCycles
├── radioTherapy
│   ├── prescription
│   │   ├── type
│   │   ├── intention
│   │   ├── technique
│   │   ├── site
│   │   ├── dailyDose
│   │   ├── totalDose
│   │   ├── startDate
│   │   ├── dosageDates
│   │   ├── administrationDates
│   │   └── remarks
│   └── report
│       ├── date
│       ├── MU
│       └── attachments
├── surgery
│   ├── diagnosis
│   ├── reason
│   └── report
│       ├── indication
│       ├── steps
│       └── remarks
├── hormoneTherapy
│   ├── diagnosis
│   ├── regiment
│   ├── stage
│   ├── totalNumberOfExpectedCycles
│   └── currentChemotherapeuticCycles
├── symptomatic
├── alternativeTreatment
└── medicalProcedureDetails
    ├── procedureDate
    ├── procedureType
    ├── findings
    └── diagnosis
```
## Parameters

### `treatmentDetails`

* **Data type:** `object`  
* **Description:**  
  Root container holding all treatment-related information for a client.  
  The following parameters are defined within this object.



## Chemotherapy

#### `chemoTherapy`

* **Data type:** `array<object>`  
* **Description:**  
  Captures details of chemotherapy treatment provided to the client.  
  Each entry represents a chemotherapy treatment record.



##### `diagnosis`

* **Data type:** `string`  
* **Description:**  
  Diagnosis code associated with the chemotherapy.  
* **Example value:**  
  `C50`



##### `regiment`

* **Data type:** `string`  
* **Description:**  
  Identifier for the chemotherapy regimen.  
* **Example value:**  
  `Regimen 1`



##### `stage`

* **Data type:** `number`  
* **Description:**  
  Clinical stage of the disease at the time of treatment.  
* **Example value:**  
  `2`



##### `totalNumberOfExpectedCycles`

* **Data type:** `number`  
* **Description:**  
  Total number of chemotherapy cycles planned.  
* **Example value:**  
  `10`



##### `currentChemotherapeuticCycles`

* **Data type:** `number`  
* **Description:**  
  Number of chemotherapy cycles completed so far.  
* **Example value:**  
  `2`



## Radiotherapy

#### `radioTherapy`

* **Data type:** `array<object>`  
* **Description:**  
  Captures information related to radiotherapy treatment.  
  Each entry represents a radiotherapy treatment record.



##### `prescription`

* **Data type:** `object`  
* **Description:**  
  Details of the radiotherapy prescription.

**Prescription parameters include:**
- `type` – example: `3D`  
- `intention` – example: `Clinical`  
- `technique` – example: `EBRT`  
- `site` – example: `Upper Quadrant Breast`  
- `dailyDose` – example: `3`  
- `totalDose` – example: `30`  
- `startDate` – example: `2024-01-01`  
- `dosageDates` – example: `2024-01-01`, `2024-01-09`  
- `administrationDates` – example: `2024-01-01`  
- `remarks` – example: `Well tolerated`



##### `report`

* **Data type:** `array<object>`  
* **Description:**  
  Captures treatment session reports.

**Report parameters include:**
- `date` – example: `2024-01-01`  
- `MU` – example: `23`  
- `attachments` – example: `https://example.org/report.pdf`



## Surgery

#### `surgery`

* **Data type:** `array<object>`  
* **Description:**  
  Captures information related to surgical procedures performed.  
  Each entry represents a surgical intervention.



##### `diagnosis`

* **Data type:** `string`  
* **Description:**  
  Diagnosis associated with the surgical intervention.  
* **Example value:**  
  `C50`



##### `reason`

* **Data type:** `string`  
* **Description:**  
  Reason for performing the surgery.  
* **Example value:**  
  `Tumor removal`



##### `report`

* **Data type:** `object`  
* **Description:**  
  Surgical report details.



## Hormone Therapy

#### `hormoneTherapy`

* **Data type:** `array<object>`  
* **Description:**  
  Captures details of hormone-based therapy.

**Hormone Therapy Entry Parameters:**  

The following parameters mirror those of chemotherapy and are used to capture hormone-based treatment details.

- `diagnosis` – example: `C50`  
- `regiment` – example: `Tamoxifen Protocol`  
- `stage` – example: `2`  
- `totalNumberOfExpectedCycles` – example: `5`  
- `currentChemotherapeuticCycles` – example: `1`




## Other Treatments

#### `symptomatic`

* **Data type:** `string | null`  
* **Description:**  
  Captures symptomatic or supportive treatment information.  
* **Example value:**  
  `Pain management`



#### `alternativeTreatment`

* **Data type:** `string | null`  
* **Description:**  
  Records any alternative or complementary treatments.  
* **Example value:**  
  `Herbal therapy`



## Medical Procedures

#### `medicalProcedureDetails`

* **Data type:** `array<object>`  
* **Description:**  
  Captures details of other medical procedures performed.



##### `procedureDate`

* **Data type:** `date-time`  
* **Description:**  
  Date when the medical procedure was performed.  
* **Example value:**  
  `2024-02-01`



##### `procedureType`

* **Data type:** `string`  
* **Description:**  
  Type of medical procedure performed.  
* **Example value:**  
  `Biopsy`



##### `findings`

* **Data type:** `string`  
* **Description:**  
  Findings observed during the procedure.  
* **Example value:**  
  `Malignant cells detected`



##### `diagnosis`

* **Data type:** `string`  
* **Description:**  
  Diagnosis associated with the medical procedure.  
* **Example value:**  
  `C50`

## Example JSON
```json
{
  "treatmentDetails": {
    "chemoTherapy": [
      {
        "diagnosis": "C50",
        "regiment": "Regimen 1",
        "stage": 2,
        "totalNumberOfExpectedCycles": 10,
        "currentChemotherapeuticCycles": 2
      }
    ],
    "radioTherapy": [
      {
        "prescription": {
          "type": "3D",
          "intention": "Clinical",
          "technique": "EBRT",
          "site": "Upper Quadrant Breast",
          "dailyDose": 3,
          "totalDose": 30,
          "startDate": "2024-01-01",
          "dosageDates": ["2024-01-01", "2024-01-09"],
          "administrationDates": ["2024-01-01"],
          "remarks": "Well tolerated"
        },
        "report": [
          {
            "date": "2024-01-01",
            "MU": 23,
            "attachments": "https://example.org/report.pdf"
          }
        ]
      }
    ],
    "surgery": [
      {
        "diagnosis": "C50",
        "reason": "Tumor removal",
        "report": {
          "indication": "Confirmed malignancy",
          "steps": "Lumpectomy performed",
          "remarks": "No complications"
        }
      }
    ],
    "hormoneTherapy": [
      {
        "diagnosis": "C50",
        "regiment": "Regimen A",
        "stage": 2,
        "totalNumberOfExpectedCycles": 8,
        "currentChemotherapeuticCycles": 1
      }
    ],
    "symptomatic": "Pain management",
    "alternativeTreatment": "Nutritional supplementation",
    "medicalProcedureDetails": [
      {
        "procedureDate": "2024-02-01",
        "procedureType": "Biopsy",
        "findings": "Malignant cells detected",
        "diagnosis": "C50"
      }
    ]
  }
}
```
