# Admission Details (`admissionDetails`)

### Overview

The **Admission Details** block captures information related to a patient’s inpatient admission episode at a health facility.

It ensures that:

- Inpatient encounters are clearly distinguished from outpatient visits.
- Admission and discharge timelines are traceable.
- Admission diagnoses and discharge outcomes support clinical care, reporting, and billing.

This block appears within each patient record in the `listGrid` array and is populated only when the patient is admitted to a facility.



### Object Structure (Conceptual)

```text
admissionDetails
├── admissionDate
├── admissionDiagnosis
├── dischargedOn
├── dischargeStatus
└── dischargeType
```
## Parameters

### `admissionDetails`

* **Data type:** `object`  
* **Description:**  
  Root container holding inpatient admission information for the patient.  
  The following parameters are defined within this object.



#### `admissionDate`

* **Data type:** `date-time`  
* **Description:**  
  The date and time when the patient was formally admitted to the health facility.  
* **Example value:**  
  `2024-08-06`



#### `admissionDiagnosis`

* **Data type:** `string`  
* **Description:**  
  The primary diagnosis recorded at the time of admission, typically using ICD-10 coding.  
* **Example value:**  
  `A01.1`



#### `dischargedOn`

* **Data type:** `date-time`  
* **Description:**  
  The date and time when the patient was discharged from inpatient care.  
* **Example value:**  
  `2024-08-09`



#### `dischargeStatus`

* **Data type:** `string`  
* **Description:**  
  Indicates the patient’s clinical status at the time of discharge.  
* **Example values:**  
  `Alive`, `Deceased`



#### `dischargeType`

* **Data type:** `string`  
* **Description:**  
  Describes how or where the patient was discharged to.  
* **Example values:**  
  `HOME`  
  `ANOTHER_HOSPITAL`  
  `DAMA` (Discharge Against Medical Advice)  
  `LAMA` (Left Against Medical Advice)  
  `MORTUARY`

## Example JSON
```json
{
  "admissionDetails": {
    "admissionDate": "2024-08-06",
    "admissionDiagnosis": "A01.1",
    "dischargedOn": "2024-08-09",
    "dischargeStatus": "Alive",
    "dischargeType": "HOME"
  }
}
```
## Implementation Notes

- This block should be absent for purely outpatient encounters.

- dischargedOn and discharge fields  should be populated only after admission is closed.

- Admission diagnosis may differ from final diagnosis recorded elsewhere in the payload.