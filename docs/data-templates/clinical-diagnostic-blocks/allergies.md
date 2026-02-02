# Allergies (`allergies`)

### Overview

The **Allergies** block captures information about known allergies or hypersensitivities reported by or identified in a client.

It ensures that:

- Potential allergic reactions are identified and documented to support patient safety.
- Clinicians can make informed treatment and prescribing decisions.
- Allergy data can be shared consistently across systems to ensure continuity of care.

This block appears within each record in the `listGrid` array and may contain zero or more allergy records for a client.



### Object Structure (Conceptual)

```text
allergies
├── code
├── category
├── name
├── criticality
└── verificationStatus
```
## Parameters

### `allergies`

* **Data type:** `array<object>`  
* **Description:**  
  Container holding one or more allergy records associated with the client.  
  Each entry represents a single documented allergy.



#### `code`

* **Data type:** `string | null`  
* **Description:**  
  A standardized code representing the allergen.  
* **Usage note:**  
  May reference international or local coding systems if available.  
* **Example value:**  
  `LA12345-6`



#### `category`

* **Data type:** `string | null`  
* **Description:**  
  Category of the allergy.  
* **Usage note:**  
  Common categories include medication, food, environmental, or chemical.  
* **Example value:**  
  `Medication`



#### `name`

* **Data type:** `string | null`  
* **Description:**  
  The name or description of the allergen.  
* **Example value:**  
  `Penicillin`



#### `criticality`

* **Data type:** `string | null`  
* **Description:**  
  Indicates the severity or potential clinical impact of the allergy.  
* **Usage note:**  
  Used to prioritize alerts during prescribing or treatment.  
* **Example value:**  
  `High`



#### `verificationStatus`

* **Data type:** `string | null`  
* **Description:**  
  Indicates whether the allergy has been clinically verified.  
* **Usage note:**  
  Typical values may include `confirmed`, `unconfirmed`, or `patient-reported`.  
* **Example value:**  
  `Confirmed`
```json
{
  "allergies": [
    {
      "code": "LA12345-6",
      "category": "Medication",
      "name": "Penicillin",
      "criticality": "High",
      "verificationStatus": "Confirmed"
    }
  ]
}
```