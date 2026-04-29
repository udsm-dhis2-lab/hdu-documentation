# Shared Health Records DataTemplate

The Shared Health Records (SHR) DataTemplate is used to store and exchange clinical information related to a client across healthcare facilities.

While the Client Registry manages client identity and demographic information, the Shared Health Records system manages the clinical data generated during healthcare services.

This allows healthcare providers to access a client's medical history even if the client visits different facilities.

## Purpose of Shared Health Records

Shared Health Records enable healthcare systems to:

- Store clinical information associated with a client
- Share health records between healthcare facilities
- Retrieve historical clinical records for patient care
- Maintain continuity of care across service providers

This ensures that healthcare providers can access relevant medical information when treating patients.

## Core Blocks Used in Shared Health Records

Shared Health Records primarily rely on the following blocks within the DataTemplate structure.

| Block | Description |
|------|-------------|
| identifiers | Identifies the client whose records are being shared |
| visitDetails | Identifies the specific healthcare encounter |
| clinical blocks | Contains clinical service information |

The visitDetails block plays a key role because it connects clinical information to a specific healthcare encounter.

## Visit Details and Record Updates

The visitDetails block is used to track healthcare encounters.

When updating existing Shared Health Records, systems should use the same visit identifier to attach additional clinical information to the existing visit record.

This allows the HDU platform to correctly associate new data with an existing clinical encounter.

## Optional Shared Health Record Blocks

The Shared Health Records DataTemplate may include several optional blocks depending on the type of healthcare service provided.

Examples include:

| Block | Description |
|------|-------------|
| clinicalInformation | Clinical observations and notes |
| diagnosisDetails | Diagnoses assigned during a visit |
| medicationDetails | Prescribed medications |
| treatmentDetails | Treatment procedures |
| labRequestDetails | Laboratory requests and results |
| radiologyDetails | Radiology services |
| referralDetails | Client referral information |
| billingsDetails | Billing and payment information |

These blocks allow healthcare systems to submit detailed clinical data associated with a client's visit.

## Example Shared Health Record Payload
```json
{
  "templateDetails": {
    "code": "GENERAL",
    "id": "general",
    "name": "General"
  },
  "data": {
    "facilityDetails": {
      "code": "109601-5"
    },
    "listGrid": [
      {
        "demographicDetails": {
          "mrn": "109601-5-129022102/2023"
        },
        "visitDetails": {
          "id": 400388,
          "visitDate": "2024-08-03"
        },
        "diagnosisDetails": [
          {
            "diagnosis": "Typhoid",
            "diagnosisCode": "A01.1"
          }
        ]
      }
    ]
  }
}
```
This payload demonstrates how clinical data such as diagnoses can be linked to a client and a specific visit.

## Example API Response
```json
{
  "status": "SUCCESS",
  "statusCode": 200,
  "newVisits": 1,
  "updatedVisits": 0,
  "failedVisits": 0,
  "ignoredVisits": 0,
  "summary": [
    {
      "visitId": 400388,
      "clientIdentifier": "109601-5-129022102/2023",
      "message": "Shared health record processed successfully"
    }
  ]
}
```
When clinical data is submitted using the Shared Health Records DataTemplate, the HDU API returns a response summarizing the processed visit records.

### Response Fields
| Field         | Description                                              |
| ------------- | -------------------------------------------------------- |
| status        | Indicates whether the request was processed successfully |
| statusCode    | HTTP status code returned by the API                     |
| newVisits     | Number of new clinical visit records created             |
| updatedVisits | Number of existing visit records updated                 |
| failedVisits  | Number of records that failed validation                 |
| ignoredVisits | Records skipped due to duplication or validation rules   |
| summary       | Detailed processing results for each visit               |

This response confirms whether the clinical records associated with a visit were successfully stored in the Shared Health Records system.


# Relationship Between Client Registry and Shared Health Records

The Client Registry and Shared Health Records work together to manage patient information.

| Component | Role |
|-----------|------|
| Client Registry | Manages client identity and demographic information |
| Shared Health Records | Stores clinical records associated with the client |

This separation ensures that:

- Client identity is centrally managed
- Clinical records can be securely shared between healthcare facilities

## Important Integration Guidance

⚠️ **Important:**  
Developers are strongly advised to use the **Client Registry DataTemplate** when performing client-related operations such as:

- Creating new clients
- Updating client demographic information
- Managing client identifiers

Shared Health Records should only be used to store clinical data associated with an existing client.