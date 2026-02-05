# Mandatory vs Optional Blocks

Template data payloads are composed of multiple blocks. Some blocks are mandatory while others are optional.

## Block and Parameter Structure

```text
├── facilityDetails
│   └── HFCode
├── demographicDetails
│   └── MRN (or preferredIdentifier)
└── visitDetails
    └── id
```

## Mandatory Blocks and Parameters

When sending data for a client whose data has already been submitted previously, the following blocks and parameters are mandatory:


### Health Facility Identification

* **Block:** `facilityDetails`  
* **Mandatory Field:** `code` (HFCode)  
* **Description:**  
  Uniquely identifies the health facility where services were provided.  
* **Usage note:**  
  Used for facility-level reporting, interoperability, and reconciliation.



### Client Identification

* **Block:** `demographicDetails`  
* **Mandatory Field:** `mrn` or preferred identifier from `identifiers`  
* **Description:**  
  Uniquely identifies the client within and across health systems.  
* **Usage note:**  
  The preferred identifier should be used when multiple IDs exist.



### Visit Identification

* **Block:** `visitDetails`  
* **Mandatory Field:** `id`  
* **Description:**  
  Uniquely identifies a specific encounter or visit.  
* **Usage note:**  
  Used to link clinical services, lab requests, billing, and outcomes to a single visit.


