# Diagnosis Details (`diagnosisDetails`)

### Overview

The **Diagnosis Details** block captures information about clinical diagnoses made for a client during a visit or episode of care.

It ensures that:

- Diagnoses are clearly documented and time-bound.
- Standardized diagnosis codes are used to support clinical care, reporting, and analytics.
- Diagnostic certainty and clinical context are preserved for continuity of care and auditability.

This block appears within each record in the `listGrid` array and may contain one or more diagnosis records for a client.



### Object Structure (Conceptual)

```text
diagnosisDetails
├── certainty
├── diagnosis
├── diagnosisCode
├── diagnosisDate
├── dateOfSymptomsOnset
└── diagnosisDescription
```
## Parameters

### `diagnosisDetails`

* **Data type:** `array<object>`  
* **Description:**  
  Container holding one or more diagnosis records associated with a client visit.  
  Each entry represents a single documented diagnosis.



#### `certainty`

* **Data type:** `string`  
* **Description:**  
  Indicates the level of certainty of the diagnosis.  
* **Usage note:**  
  Helps distinguish confirmed diagnoses from suspected or provisional ones.  
* **Example value:**  
  `CONFIRMED`



#### `diagnosis`

* **Data type:** `string`  
* **Description:**  
  Human-readable description of the diagnosis.  
* **Usage note:**  
  May include both the condition name and brief clinical context.  
* **Example value:**  
  `A01.1 Typhoid`



#### `diagnosisCode`

* **Data type:** `string`  
* **Description:**  
  Standardized code representing the diagnosis.  
* **Usage note:**  
  Typically sourced from ICD-10 or other nationally approved coding systems.  
* **Example value:**  
  `A01.1`



#### `diagnosisDate`

* **Data type:** `date-time`  
* **Description:**  
  Date when the diagnosis was established by the clinician.  
* **Example value:**  
  `2024-08-01`



#### `dateOfSymptomsOnset`

* **Data type:** `date-time`  
* **Description:**  
  Date when symptoms related to the diagnosis first appeared.  
* **Usage note:**  
  Useful for clinical assessment, surveillance, and outbreak investigations.  
* **Example value:**  
  `2024-07-30`



#### `diagnosisDescription`

* **Data type:** `string`  
* **Description:**  
  Additional descriptive information about the diagnosis.  
* **Usage note:**  
  May include diagnostic notes, classification, or confirmation status.  
* **Example value:**  
  `CONFIRMED`


## Example JSON
```json
{
  "diagnosisDetails": [
    {
      "certainty": "CONFIRMED",
      "diagnosis": "A01.1 Typhoid",
      "diagnosisCode": "A01.1",
      "diagnosisDate": "2024-08-01",
      "dateOfSymptomsOnset": "2024-07-30",
      "diagnosisDescription": "Laboratory-confirmed typhoid fever"
    }
  ]
}
```