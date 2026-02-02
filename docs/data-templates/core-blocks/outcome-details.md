# Outcome Details (`outcomeDetails`)

### Overview

The **Outcome Details** block captures the final status and disposition of a patient at the end of a visit, admission, or care episode.

It ensures that:

- Patient outcomes are clearly recorded and auditable.
- Deaths, discharges, and referrals are standardized for reporting.
- Downstream systems (DHIS2, surveillance, registries) can reliably interpret outcomes.

This block appears within each patient record in the `listGrid` array and is typically populated after care has been completed.



### Object Structure (Conceptual)

```text
outcomeDetails
├── isAlive
├── deathDate
├── deathLocation
├── contactTracing
├── investigationConducted
├── quarantined
├── dischargedLocation
└── referred
```
## Parameters

### `outcomeDetails`

* **Data type:** `object`  
* **Description:**  
  Root container holding outcome-related information for the patient after receiving care.  
  The following parameters are defined within this object.



#### `isAlive`

* **Data type:** `boolean`  
* **Description:**  
  Indicates whether the patient was alive at the end of the care episode.  
* **Example value:**  
  `true`



#### `deathDate`

* **Data type:** `date-time`  
* **Description:**  
  The date on which the patient died, if applicable.  
* **Example value:**  
  `2024-08-07`



#### `deathLocation`

* **Data type:** `string`  
* **Description:**  
  The location where the death occurred.  
* **Example values:**  
  `HEALTH_FACILITY`  
  `HOME`  
  `EN_ROUTE_TO_HEALTH_FACILITY`



#### `contactTracing`

* **Data type:** `boolean`  
* **Description:**  
  Indicates whether contact tracing was initiated, typically for communicable diseases.  
* **Example value:**  
  `true`



#### `investigationConducted`

* **Data type:** `boolean`  
* **Description:**  
  Indicates whether a formal investigation related to the outcome was conducted.  
* **Example value:**  
  `false`



#### `quarantined`

* **Data type:** `boolean`  
* **Description:**  
  Indicates whether the patient was quarantined as part of disease control measures.  
* **Example value:**  
  `false`



#### `dischargedLocation`

* **Data type:** `string`  
* **Description:**  
  Indicates where the patient was discharged to after care.  
* **Example values:**  
  `H` – Home  
  `RD` – Referral to Dispensary  
  `RHC` – Referral to Health Centre  
  `RHS` – Referral to Hospital  
  `PNC` – Postnatal Care



#### `referred`

* **Data type:** `boolean`  
* **Description:**  
  Indicates whether the patient was referred to another facility or service point.  
* **Example value:**  
  `false`

## Example JSON
```json
{
  "outcomeDetails": {
    "isAlive": true,
    "deathDate": 2024-08-07,
    "deathLocation": "HEALTH_FACILITY",
    "contactTracing": false,
    "investigationConducted": false,
    "quarantined": false,
    "dischargedLocation": "H",
    "referred": false
  }
}
```
## Implementation Notes

- If isAlive is true, death-related fields should be omitted or left null.

- This block complements admissionDetails and referralDetails.

- Outcome data is critical for surveillance, mortality reporting, and national statistics.
