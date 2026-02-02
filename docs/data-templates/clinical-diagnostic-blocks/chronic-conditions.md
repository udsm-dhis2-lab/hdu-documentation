# Chronic Conditions (`chronicConditions`)

### Overview

The **Chronic Conditions** block captures information about long-term or ongoing medical conditions that a client has been diagnosed with.

It ensures that:

- Long-standing health conditions are consistently documented.
- Clinicians can consider chronic illnesses during diagnosis, treatment, and follow-up.
- Chronic disease data can be used for continuity of care, reporting, and public health analysis.

This block appears within each record in the `listGrid` array and may contain zero or more chronic condition records for a client.



### Object Structure (Conceptual)

```text
chronicConditions
├── code
├── category
├── name
├── criticality
└── verificationStatus
```
## Parameters

### `chronicConditions`

* **Data type:** `array<object>`  
* **Description:**  
  Container holding one or more chronic condition records associated with the client.  
  Each entry represents a single documented chronic condition.



#### `code`

* **Data type:** `string`  
* **Description:**  
  A standardized clinical code representing the chronic condition.  
* **Usage note:**  
  Codes may come from ICD-10 or other nationally approved coding systems.  
* **Example value:**  
  `E11`



#### `category`

* **Data type:** `string`  
* **Description:**  
  Classification category of the chronic condition.  
* **Usage note:**  
  Helps group conditions for reporting and analytics.  
* **Example value:**  
  `Non-Communicable Disease`



#### `name`

* **Data type:** `string`  
* **Description:**  
  The clinical name of the chronic condition.  
* **Example value:**  
  `Type 2 Diabetes Mellitus`



#### `criticality`

* **Data type:** `string`  
* **Description:**  
  Indicates the clinical severity or risk level of the condition.  
* **Usage note:**  
  Can be used to prioritize care and clinical alerts.  
* **Example value:**  
  `Moderate`



#### `verificationStatus`

* **Data type:** `string`  
* **Description:**  
  Indicates whether the chronic condition has been clinically verified.  
* **Usage note:**  
  Distinguishes confirmed diagnoses from self-reported conditions.  
* **Example value:**  
  `Confirmed`
## Example JSON
```json
{
  "chronicConditions": [
    {
      "code": "E11",
      "category": "Non-Communicable Disease",
      "name": "Type 2 Diabetes Mellitus",
      "criticality": "Moderate",
      "verificationStatus": "Confirmed"
    },
    {
      "code": "I10",
      "category": "Non-Communicable Disease",
      "name": "Essential (Primary) Hypertension",
      "criticality": "High",
      "verificationStatus": "Confirmed"
    }
  ]
}
```
