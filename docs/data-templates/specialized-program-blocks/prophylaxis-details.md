# Prophylaxis Details (`prophylAxisDetails`)

### Overview

The **Prophylaxis Details** block captures information about preventive medications or interventions administered to a patient to reduce the risk of disease or complications.

It ensures that:

- Preventive services are clearly documented and traceable.
- Prophylactic interventions support public health programs and surveillance.
- Adverse reactions can be identified and followed up.

This block appears within a patient record and may contain one or more prophylaxis records.



### Object Structure (Conceptual)

```text
prophylAxisDetails
├── code
├── date
├── type
├── name
├── status
├── notes
└── reaction
    ├── reactionDate
    ├── notes
    └── reported
```

## Parameters

### `prophylAxisDetails`

* **Data type:** `array<object>`  
* **Description:**  
  Container holding prophylactic interventions provided to the patient.  
  Each entry represents a single prophylaxis event.



#### Prophylaxis Entry

##### `code`

* **Data type:** `string | null`  
* **Description:**  
  A standardized or program-specific code identifying the prophylaxis intervention.  
* **Usage note:**  
  May align with national program codes or international standards.  
* **Example value:**  
  `PREP01`



##### `date`

* **Data type:** `date-time`  
* **Description:**  
  Date on which the prophylactic intervention was administered.  
* **Example value:**  
  `2024-08-07`



##### `type`

* **Data type:** `string`  
* **Description:**  
  Short identifier describing the type of prophylaxis provided.  
* **Usage note:**  
  Used for quick classification in reports and registers.  
* **Example value:**  
  `PrEP`



##### `name`

* **Data type:** `string`  
* **Description:**  
  Full descriptive name of the prophylactic intervention.  
* **Example value:**  
  `Pre-Exposure Prophylaxis for HIV`



##### `status`

* **Data type:** `string`  
* **Description:**  
  Indicates the outcome or completion status of the prophylaxis event.  
* **Usage note:**  
  Helps distinguish completed, ongoing, or discontinued prophylaxis.  
* **Example value:**  
  `Completed`



##### `notes`

* **Data type:** `string | null`  
* **Description:**  
  Additional notes related to the prophylaxis intervention.  
* **Usage note:**  
  Can capture adherence counseling, client concerns, or contextual information.  
* **Example value:**  
  `Client counselled on daily adherence`



## Adverse Reaction Information

#### `reaction`

* **Data type:** `object`  
* **Description:**  
  Captures information about any adverse reaction observed following prophylaxis.



##### `reactionDate`

* **Data type:** `date-time | null`  
* **Description:**  
  Date when the adverse reaction was observed.  
* **Usage note:**  
  May occur on a different date from the prophylaxis administration.  
* **Example value:**  
  `2024-08-08`



##### `notes`

* **Data type:** `string | null`  
* **Description:**  
  Description of the adverse reaction observed.  
* **Usage note:**  
  Used for clinical follow-up and safety monitoring.  
* **Example value:**  
  `Mild nausea reported within 24 hours`



##### `reported`

* **Data type:** `boolean`  
* **Description:**  
  Indicates whether the adverse reaction was formally reported to a surveillance or pharmacovigilance system.  
* **Example value:**  
  `false`



## Example JSON
```json
{
  "prophylAxisDetails": [
    {
      "code": "PREP01",
      "date": "2024-08-07",
      "type": "PrEP",
      "name": "Pre-Exposure Prophylaxis for HIV",
      "status": "Completed",
      "notes": "Client counselled on daily adherence",
      "reaction": {
        "reactionDate": "2024-08-08",
        "notes": "Mild nausea reported within 24 hours",
        "reported": false
      }
    }
  ]
}
```

## Implementation Notes

- Multiple prophylaxis records may be captured for the same patient.  
- The `reaction` object should be populated only if an adverse event occurs.  
