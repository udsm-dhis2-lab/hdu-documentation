

# Visit Details (`visitDetails`)

## Overview

The **Visit Details** block captures information related to a specific client encounter or visit at a health facility.

It ensures that:

- Each interaction between a client and the health system is clearly identified and time-bound  
- Visits can be classified by type, care services received, and referral status  
- Longitudinal tracking of repeat visits, service utilization, and continuity of care is supported  

This block appears within each record in the `listGrid` array and represents **one visit or encounter for a client**.



## Object Structure (Conceptual)

```text
visitDetails
├── id
├── visitDate
├── newThisYear
├── isNew
├── referredIn
├── closedDate
├── visitType
├── disabled
├── careServices
│   ├── careType
│   └── visitNumber
├── attendedSpecialist
│   ├── superSpecialist
│   └── specialist
└── serviceComplaints
    ├── providedComplaints
    └── complaints
```

## Parameters

### `visitDetails`

- **Data type:** `object`  
- **Description:**  
  Root container holding administrative and clinical context information for a single client visit.  
  The following parameters are defined within this object.



#### `id`

- **Data type:** `number`  
- **Description:**  
  A unique identifier representing the visit or encounter.  
- **Usage note:**  
  Used for internal referencing and linking related records such as services, diagnoses, and lab requests.  
- **Example value:**  
  `400388`



#### `visitDate`

- **Data type:** `date-time`  
- **Description:**  
  The date when the visit or encounter was initiated.  
- **Usage note:**  
  Can represent OPD, IPD, ANC, or other service encounters.  
- **Example value:**  
  `2024-08-03`



#### `newThisYear`

- **Data type:** `boolean`  
- **Description:**  
  Indicates whether the client is new to the health system for the current reporting calendar year.  
- **Example value:**  
  `false`



#### `isNew`

- **Data type:** `boolean`  
- **Description:**  
  Indicates whether the client is visiting the facility for the first time.  
- **Usage note:**  
  Helps distinguish first-time visits from repeat (revisit) encounters.  
- **Example value:**  
  `false`



#### `referredIn`

- **Data type:** `boolean`  
- **Description:**  
  Indicates whether the client was referred from another health facility or service point.  
- **Example value:**  
  `true`



#### `closedDate`

- **Data type:** `date-time`  
- **Description:**  
  The date when the visit was officially closed or completed.  
- **Usage note:**  
  Useful for visit lifecycle tracking and reporting.  
- **Example value:**  
  `2024-08-07`



#### `visitType`

- **Data type:** `string`  
- **Description:**  
  Describes the type of service or department visited.  
- **Usage note:**  
  Common values include OPD, IPD, EMD, ANC, FP, etc.  
- **Example value:**  
  `OPD`



#### `disabled`

- **Data type:** `boolean`  
- **Description:**  
  Indicates whether the visit record has been marked as disabled or inactive.  
- **Example value:**  
  `false`



## Care Services

#### `careServices`

- **Data type:** `array<object>`  
- **Description:**  
  Captures the types of care services the client received during the visit.  
  The following parameters are defined within this object.



##### `careType`

- **Data type:** `string`  
- **Description:**  
  Specifies the type of care provided during the visit.  
- **Example value:**  
  `ANC`, `DENTAL`, `EYE`, `FP`



##### `visitNumber`

- **Data type:** `number`  
- **Description:**  
  Indicates how many times the client has received this type of service.  
- **Example value:**  
  `2`



## Attended Specialist

#### `attendedSpecialist`

- **Data type:** `array<object>`  
- **Description:**  
  Captures information about whether the client was attended by a specialist or super-specialist during the visit.  
  The following parameters are defined within this object.



##### `superSpecialist`

- **Data type:** `boolean`  
- **Description:**  
  Indicates whether the client was attended by a super-specialist.  
- **Example value:**  
  `false`



##### `specialist`

- **Data type:** `boolean`  
- **Description:**  
  Indicates whether the client was attended by a specialist.  
- **Example value:**  
  `true`



## Service Complaints

#### `serviceComplaints`

- **Data type:** `object`  
- **Description:**  
  Captures complaints reported by the client regarding services provided during the visit.  
  The following parameters are defined within this object.



##### `providedComplaints`

- **Data type:** `boolean`  
- **Description:**  
  Indicates whether the client reported any service-related complaints.  
- **Example value:**  
  `true`



##### `complaints`

- **Data type:** `string`  
- **Description:**  
  Textual description of the complaint provided by the client.  
- **Usage note:**  
  May be blank if `providedComplaints` is `false`.  
- **Example value:**  
  `Long waiting time before consultation`

## Example JSON

```json

{
  "visitDetails": {
    "id": 400388,
    "visitDate": "2024-08-03",
    "newThisYear": false,
    "isNew": false,
    "referredIn": true,
    "closedDate": "2024-08-07",
    "visitType": "OPD",
    "disabled": false,
    "careServices": [
      {
        "careType": "ANC",
        "visitNumber": 2
      }
    ],
    "attendedSpecialist": [
      {
        "superSpecialist": false,
        "specialist": true
      }
    ],
    "serviceComplaints": {
      "providedComplaints": true,
      "complaints": "Long waiting time before consultation"
    }
  }
}
```