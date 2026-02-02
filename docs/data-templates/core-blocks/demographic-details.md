

# Demographic Details (`demographicDetails`)

## Overview

The **Demographic Details** block captures core identity, contact, and socio-demographic information about a client or patient.

It ensures that:

- Each client can be uniquely identified within and across health systems  
- Demographic attributes required for clinical care, reporting, and analytics are consistently captured  
- Integration with national systems such as DHIS2, IDSR, CRVS, and EMR/LIMS platforms is supported  

This block appears within each record in the `listGrid` array and represents **one individual client**.



## Object Structure (Conceptual)

```text
demographicDetails
├── mrn
├── identifiers
│   ├── type
│   ├── id
│   └── preferred
├── firstName
├── middleName
├── lastName
├── ethnicGroup
├── gender
├── dateOfBirth
├── phoneNumbers
├── emails
├── maritalStatus
├── nationality
├── occupation
├── addresses
│   ├── village
│   ├── ward
│   ├── district
│   ├── region
│   ├── country
│   └── category
└── contactPeople
    ├── firstName
    ├── lastName
    ├── phoneNumbers
    └── relationShip
```

## Parameters

### `demographicDetails`

* **Data type:** `object`  
* **Description:**  
  Root container holding personal identification, contact, and demographic attributes of a client.  
  The following parameters are defined within this object.



#### `mrn`

* **Data type:** `string`  
* **Description:**  
  Medical Record Number uniquely identifying the client within the health facility.  
* **Usage note:**  
  Often used as the primary identifier for longitudinal tracking.  
* **Example value:**  
  `109601-5-129022102/2023`



## Identifiers

#### `identifiers`

* **Data type:** `array<object>`  
* **Description:**  
  Captures alternative or additional identifiers associated with the client, such as national IDs or insurance numbers.  
  The following parameters are defined within this object.



##### `type`

* **Data type:** `string`  
* **Description:**  
  The type of identifier.  
* **Example value:**  
  `MRN`, `NIDA`, `LICENSE_ID`



##### `id`

* **Data type:** `string`  
* **Description:**  
  The identifier value corresponding to the specified type.  
* **Example value:**  
  `109601-5-129022102/2023`



##### `preferred`

* **Data type:** `boolean`  
* **Description:**  
  Indicates whether this identifier is the preferred identifier for the client.  
* **Example value:**  
  `true`



## Personal Names

#### `firstName`

* **Data type:** `string`  
* **Description:**  
  The given (first) name of the client.  
* **Example value:**  
  `Aminata`



#### `middleName`

* **Data type:** `string | null`  
* **Description:**  
  The middle name of the client, if available.  
* **Example value:**  
  `Ahmed`



#### `lastName`

* **Data type:** `string`  
* **Description:**  
  The family or surname of the client.  
* **Example value:**  
  `Haule`



## Demographic Attributes

#### `ethnicGroup`

* **Data type:** `string`  
* **Description:**  
  The ethnic or cultural group to which the client belongs.  
* **Example value:**  
  `Nyamwezi`



#### `gender`

* **Data type:** `string`  
* **Description:**  
  The biological sex or gender of the client.  
* **Example value:**  
  `female`



#### `dateOfBirth`

* **Data type:** `date-time`  
* **Description:**  
  The client’s date of birth.  
* **Usage note:**  
  Used to calculate age for age-based indicators and reporting.  
* **Example value:**  
  `1998-02-15`



## Contact Information

#### `phoneNumbers`

* **Data type:** `array<string>`  
* **Description:**  
  List of phone numbers associated with the client.  
* **Example value:**  
  `+255787656431`



#### `emails`

* **Data type:** `array<string>`  
* **Description:**  
  List of email addresses associated with the client.  
* **Example value:**  
  `test@moh.go.tz`



## Socio-economic Attributes

#### `maritalStatus`

* **Data type:** `string | null`  
* **Description:**  
  The marital status of the client, represented using coded values.  
* **Example value:**  
  `Single`, `Married`, `Divorced`, `Widowed`



#### `nationality`

* **Data type:** `string | null`  
* **Description:**  
  The nationality of the client.  
* **Example value:**  
  `Tanzanian`



#### `occupation`

* **Data type:** `string | null`  
* **Description:**  
  The occupation or profession of the client.  
* **Example value:**  
  `Teacher`



## Addresses

#### `addresses`

* **Data type:** `array<object>`  
* **Description:**  
  Captures physical address information for the client, supporting geographical analysis and IDSR integration.  
  The following parameters are defined within this object.



##### `village`

* **Data type:** `string | null`  
* **Description:**  
  Village or street name.  
* **Example value:**  
  `Mbezi`



##### `ward`

* **Data type:** `string | null`  
* **Description:**  
  Ward of residence.  
* **Example value:**  
  `Makumbusho`



##### `district`

* **Data type:** `string`  
* **Description:**  
  District of residence.  
* **Example value:**  
  `Ubungo`



##### `region`

* **Data type:** `string`  
* **Description:**  
  Region of residence.  
* **Example value:**  
  `Dar es Salaam`



##### `country`

* **Data type:** `string`  
* **Description:**  
  Country of residence.  
* **Example value:**  
  `Tanzania`



##### `category`

* **Data type:** `string`  
* **Description:**  
  Address category indicating permanence.  
* **Example value:**  
  `Permanent`



## Contact People

#### `contactPeople`

* **Data type:** `array<object>`  
* **Description:**  
  Captures emergency or next-of-kin contact details for the client.  
  The following parameters are defined within this object.



##### `firstName`

* **Data type:** `string`  
* **Description:**  
  First name of the contact person.  
* **Example value:**  
  `Richard`



##### `lastName`

* **Data type:** `string`  
* **Description:**  
  Last name of the contact person.  
* **Example value:**  
  `Haule`



##### `phoneNumbers`

* **Data type:** `array<string>`  
* **Description:**  
  Phone numbers of the contact person.  
* **Example value:**  
  `+255767652234`



##### `relationShip`

* **Data type:** `string`  
* **Description:**  
  Relationship of the contact person to the client.  
* **Example value:**  
  `Father`

## Example JSON
```json
{
  "demographicDetails": {
    "mrn": "109601-5-129022102/2023",
    "identifiers": [
      {
        "type": "MRN",
        "id": "109601-5-129022102/2023",
        "preferred": true
      }
    ],
    "firstName": "Aminata",
    "middleName": "Ahmed",
    "lastName": "Haule",
    "ethnicGroup": "Nyamwezi",
    "gender": "female",
    "dateOfBirth": "1998-02-15",
    "phoneNumbers": ["+255787656431"],
    "emails": ["test@moh.go.tz"],
    "maritalStatus": "Single",
    "nationality": "Tanzanian",
    "occupation": "Teacher",
    "addresses": [
      {
        "village": "Mbezi",
        "ward": "Makumbusho",
        "district": "Ubungo",
        "region": "Dar es Salaam",
        "country": "Tanzania",
        "category": "Permanent"
      }
    ],
    "contactPeople": [
      {
        "firstName": "Richard",
        "lastName": "Haule",
        "phoneNumbers": ["+255767652234"],
        "relationShip": "Father"
      }
    ]
  }
}



```