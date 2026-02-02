

# Health Facility Details (`facilityDetails`)

## Overview

The **Health Facility Details** block captures identification and system-level information about the health facility where the data originated.

It ensures that:

- All submitted data can be traced back to a registered health facility  
- The originating health information system is clearly identified  
- Facility-level reporting, reconciliation, and interoperability are supported across systems such as LIMS, DHIS2, eLMIS, and national registries  

This block **must be present once within the data object**.



## Object Structure (Conceptual)

```text
facilityDetails
├── code
├── name
├── system
│   ├── name
│   └── version
└── bloodBags
    ├── bloodType
    └── quantity

```

## Parameters

### `facilityDetails`

* **Data type:** `object`  
* **Description:**  
  Root container holding identification and system metadata for the health facility where the data was generated.  
  The following parameters are defined within this object.



#### `code`

* **Data type:** `string`  
* **Description:**  
  The Health Facility Registry (HFR) code that uniquely identifies the health facility at the national level.  
* **Usage note:**  
  Used for facility-level reporting, reconciliation, and linkage with national systems.  
* **Example value:**  
  `109601-5`



#### `name`

* **Data type:** `string`  
* **Description:**  
  The officially registered name of the health facility.  
* **Usage note:**  
  Appears in reports, dashboards, and audit trails.  
* **Example value:**  
  `Sample Health Facility`



## Originating System Information

#### `system`

* **Data type:** `object`  
* **Description:**  
  Captures information about the health information system where the data was generated.  
  The following parameters are defined within this object.



##### `name`

* **Data type:** `string`  
* **Description:**  
  The name of the originating health information system (e.g., LIMS, EMR, EHR).  
* **Usage note:**  
  Supports system traceability and interoperability analysis.  
* **Example value:**  
  `LIMS Name`



##### `version`

* **Data type:** `string`  
* **Description:**  
  The version of the originating system.  
* **Usage note:**  
  Useful for troubleshooting, audit trails, and compatibility checks.  
* **Example value:**  
  `v102.06`



## Blood Bag Availability

#### `bloodBags`

* **Data type:** `array<object>`  
* **Description:**  
  Captures the current availability status of blood bags by blood group.  
  Each entry represents one blood group and its available quantity.



##### `bloodType`

* **Data type:** `string`  
* **Description:**  
  The blood group type.  
* **Usage note:**  
  Expected values include standard blood groups such as A+, A-, B+, B-, O+, O-, AB+, AB-.  
* **Example value:**  
  `A+`



##### `quantity`

* **Data type:** `number`  
* **Description:**  
  The number of blood bags currently available for the specified blood group.  
* **Usage note:**  
  Used for stock monitoring and emergency preparedness.  
* **Example value:**  
  `10`

## Example JSON
```json
{
  "facilityDetails": {
    "code": "109601-5",
    "name": "Sample Health Facility",
    "system": {
      "name": "LIMS Name",
      "version": "v102.06"
    },
    "bloodBags": [
      { "bloodType": "A+", "quantity": 10 },
      { "bloodType": "A-", "quantity": 5 },
      { "bloodType": "B+", "quantity": 8 },
      { "bloodType": "B-", "quantity": 3 },
      { "bloodType": "O+", "quantity": 12 },
      { "bloodType": "O-", "quantity": 4 },
      { "bloodType": "AB+", "quantity": 6 },
      { "bloodType": "AB-", "quantity": 2 }
    ]
  }
}
```