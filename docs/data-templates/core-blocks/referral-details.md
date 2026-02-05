# Referral Details (`referralDetails`)

### Overview

The **Referral Details** block captures information related to the formal referral of a patient from one health facility or provider to another for further management, investigation, or specialized care.

It ensures that:

- Referral reasons and destinations are clearly documented.
- Continuity of care across facilities is traceable.
- Data supports referral tracking, service coordination, and reporting.

This block appears when a patient is referred during or after a visit.



### Object Structure (Conceptual)

```text
referralDetails
├── referralDate
├── referredToOtherCountry
├── reason
├── referralNumber
├── hfrCode
└── referringClinician
    ├── name
    ├── phoneNumber
    └── MCTCode
```

## Parameters

### `referralDetails`

* **Data type:** `object`  
* **Description:**  
  Root container holding all referral-related information for the patient.  
* **Usage note:**  
  This block should be populated whenever a formal referral is made.



## Referral Information

#### `referralDate`

* **Data type:** `string`  
* **Description:**  
  Date on which the referral was made.  
* **Usage note:**  
  The format may follow facility or national referral documentation standards.  
* **Example value:**  
  `24-08-07`



#### `referredToOtherCountry`

* **Data type:** `boolean`  
* **Description:**  
  Indicates whether the patient was referred to a health facility outside the country.  
* **Usage note:**  
  Supports cross-border referral tracking.  
* **Example value:**  
  `false`



#### `reason`

* **Data type:** `array<string>`  
* **Description:**  
  List of reasons explaining why the referral was made.  
* **Usage note:**  
  Multiple reasons may be recorded for a single referral.  
* **Example value:**  
  `["Specialized Surgery Required"]`



#### `referralNumber`

* **Data type:** `string`  
* **Description:**  
  Unique identifier assigned to the referral.  
* **Usage note:**  
  Used for referral tracking and follow-up.  
* **Example value:**  
  `56430-096-2024`



#### `hfrCode`

* **Data type:** `string`  
* **Description:**  
  Health Facility Registry (HFR) code of the receiving facility.  
* **Usage note:**  
  Enables linkage to national facility registries.  
* **Example value:**  
  `111890-0`



## Referring Clinician

#### `referringClinician`

* **Data type:** `object`  
* **Description:**  
  Container holding identification details of the clinician who initiated the referral.  
  The following parameters are defined within this object.



##### `name`

* **Data type:** `string`  
* **Description:**  
  Full name of the referring clinician.  
* **Usage note:**  
  Supports accountability and follow-up communication.  
* **Example value:**  
  `Dr. John Doe`



##### `phoneNumber`

* **Data type:** `string`  
* **Description:**  
  Contact phone number of the referring clinician.  
* **Usage note:**  
  Used for coordination between referring and receiving facilities.  
* **Example value:**  
  `+255712345678`



##### `MCTCode`

* **Data type:** `string`  
* **Description:**  
  Medical Council or professional registration code of the clinician.  
* **Usage note:**  
  Supports professional verification and audit requirements.  
* **Example value:**  
  `MCT123456`



## Example JSON
```json
{
  "referralDetails": {
    "referralDate": "24-08-07",
    "referredToOtherCountry": false,
    "reason": [
      "Specialized Surgery Required"
    ],
    "referralNumber": "56430-096-2024",
    "hfrCode": "111890-0",
    "referringClinician": {
      "name": "Dr. John Doe",
      "phoneNumber": "+255712345678",
      "MCTCode": "MCT123456"
    }
  }
}
```

## Implementation Notes

- Referral dates and numbers should align with paper or electronic referral forms.  
- Reasons should be descriptive enough to support clinical decision-making at the receiving facility.  
- Clinician identifiers improve traceability and accountability across the referral chain.
