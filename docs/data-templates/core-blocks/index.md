# Core Blocks



Core Blocks define the foundational administrative and operational data required for every data payload submitted to the HDU API.

These blocks support:
- Health facility identification
- Patient identity management
- Visit and encounter tracking
- Appointments, referrals, and admissions
- Billing and payment context
- Reporting timelines

Core blocks are mandatory or conditionally mandatory across most workflows and are shared across all service domains.

## Structure of the Core Blocks 

```text

└── core-blocks
    ├── facility-details
    ├── demographic-details
    ├── visit-details
    ├── appointment
    ├── lifestyle-information
    ├── admission-details
    ├── outcome-details
    ├── visit-main-payment-details
    ├── billings-details
    ├── referral-details
    └── report-details
```

# All Blocks that i do not know where to place them

# Template Details (`templateDetails`)

## Overview

The **Template Details** block defines the context, standards, and workflow identity under which the entire data payload is created and exchanged.

It ensures that:

* All clinical and administrative data follow known coding standards  
* Systems interpreting the data know which template and workflow was used  
* Interoperability is maintained across systems such as LIMS, EMR, DHIS2, and national registries  

This block **must be present once at the root level of the payload**.

 

## Object Structure (Conceptual)

```text
templateDetails
├── code
├── id
├── name
├── codingVersions
│   ├── loincVersion
│   └── icdVersion
└── workflow
    └── uuid
```

 

## Parameters

### `templateDetails`

* **Data type:** `object`  
* **Description:**  
  Root container holding metadata that describes the template and standards governing the payload.
  The following parameters are defined within this object.
 

#### `code`

* **Data type:** `string`  
* **Description:**  
  A short classification code representing the template category.  
* **Example value:**  
  `GENERAL`

 

#### `id`

* **Data type:** `string`  
* **Description:**  
  A unique, system-friendly identifier for the template.  
* **Example value:**  
  `general`

 

#### `name`

* **Data type:** `string`  
* **Description:**  
  A human-readable name describing the template.  
* **Example value:**  
  `General`

 

## Coding Versions

#### `codingVersions`

* **Data type:** `object`  
* **Description:**  
  Specifies the versions of international coding standards applied within this template.
  The following parameters are defined within this object.
 

###### `loincVersion`

* **Data type:** `string`  
* **Example value:**  
  `2`

 

##### `icdVersion`

* **Data type:** `string`  
* **Example value:**  
  `10`

 

## Workflow Information

#### `workflow`

* **Data type:** `object`  
* **Description:**  
  Identifies the workflow configuration used to process this data.
  The following parameter is defined within this object.
 

##### `uuid`

* **Data type:** `string`  
* **Example value:**  
  `23750fc5-0867-4426-817a-89f155532fa1`

 

## Example JSON

```json
{
  "templateDetails": {
    "code": "GENERAL",
    "id": "general",
    "name": "General",
    "codingVersions": {
      "loincVersion": "2",
      "icdVersion": "10"
    },
    "workflow": {
      "uuid": "23750fc5-0867-4426-817a-89f155532fa1"
    }
  }
}