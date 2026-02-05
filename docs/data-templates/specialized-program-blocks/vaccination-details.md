# Vaccination Details (`vaccinationDetails`)

### Overview

The **Vaccination Details** block captures information about vaccines administered to a patient during a visit or care episode.

It ensures that:

- Immunization events are accurately recorded and traceable.
- Vaccine coverage supports routine immunization, campaigns, and surveillance.
- Adverse reactions can be documented and reported.

This block appears within a patient record and may contain one or more vaccination records.



### Object Structure (Conceptual)

```text
vaccinationDetails
├── code
├── date
├── type
├── name
├── vaccinationModality
├── status
├── notes
├── dosage
└── reaction
    ├── reactionDate
    ├── notes
    └── reported
```



## Parameters

### `vaccinationDetails`

* **Data type:** `array<object>`  
* **Description:**  
  Container holding vaccination records administered to the patient.  
  Each entry represents a single vaccine dose.



#### Vaccination Entry

##### `code`

* **Data type:** `string | null`  
* **Description:**  
  A standardized or program-specific code representing the vaccine.  
* **Usage note:**  
  May reference national immunization codes or international standards.  
* **Example value:**  
  `BCG`



##### `date`

* **Data type:** `date-time`  
* **Description:**  
  Date when the vaccine was administered to the patient.  
* **Example value:**  
  `2024-08-07`



##### `type`

* **Data type:** `string`  
* **Description:**  
  Short identifier or abbreviation of the vaccine administered.  
* **Usage note:**  
  Useful for quick identification in registers and reports.  
* **Example value:**  
  `BCG`



##### `name`

* **Data type:** `string`  
* **Description:**  
  Full official name of the vaccine administered.  
* **Example value:**  
  `Bacillus Calmette–Guérin`



##### `vaccinationModality`

* **Data type:** `string | null`  
* **Description:**  
  Mode through which the vaccine was delivered.  
* **Usage note:**  
  Helps distinguish routine facility-based vaccination from outreach or campaigns.  
* **Example value:**  
  `Routine`



##### `status`

* **Data type:** `string`  
* **Description:**  
  Indicates the outcome of the vaccination event.  
* **Usage note:**  
  Common values include `completed`, `deferred`, or `refused`.  
* **Example value:**  
  `Completed`



##### `notes`

* **Data type:** `string | null`  
* **Description:**  
  Additional notes related to the vaccination event.  
* **Usage note:**  
  Can capture observations or remarks at the time of administration.  
* **Example value:**  
  `No immediate adverse reaction observed`



##### `dosage`

* **Data type:** `number`  
* **Description:**  
  Dose number administered as part of a vaccination schedule.  
* **Usage note:**  
  Useful for multi-dose vaccines.  
* **Example value:**  
  `1`



## Adverse Reaction Information

#### `reaction`

* **Data type:** `object`  
* **Description:**  
  Captures information about any adverse reaction observed after vaccination.



##### `reactionDate`

* **Data type:** `date-time | null`  
* **Description:**  
  Date when the vaccine reaction was observed.  
* **Usage note:**  
  May differ from the vaccination date if the reaction occurred later.  
* **Example value:**  
  `2024-08-08`



##### `notes`

* **Data type:** `string | null`  
* **Description:**  
  Description of the adverse reaction observed.  
* **Usage note:**  
  Used for clinical follow-up and pharmacovigilance.  
* **Example value:**  
  `Mild swelling at injection site`



##### `reported`

* **Data type:** `boolean`  
* **Description:**  
  Indicates whether the adverse reaction was formally reported to surveillance or regulatory authorities.  
* **Example value:**  
  `false`



## Example JSON
```json
{
  "vaccinationDetails": [
    {
      "code": "BCG",
      "date": "2024-08-07",
      "type": "BCG",
      "name": "Bacillus Calmette–Guérin",
      "vaccinationModality": "Routine",
      "status": "Completed",
      "notes": "No immediate adverse reaction observed",
      "dosage": 1,
      "reaction": {
        "reactionDate": "2024-08-08",
        "notes": "Mild swelling at injection site",
        "reported": false
      }
    }
  ]
}
```


## Implementation Notes

- Multiple vaccination entries may be recorded for the same patient and visit.  
- `reaction` should be populated only if an adverse event is observed.  
