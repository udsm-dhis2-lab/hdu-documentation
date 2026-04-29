# Submitting Data to the HDU API

After constructing a valid DataTemplate payload, integrating systems can submit health data to the HDU platform through the available Web APIs.

The HDU API supports two primary methods of data submission:

- Submitting a complete DataTemplate payload
- Submitting selected DataTemplate blocks using triggers

These methods allow systems such as EMRs, EHRs, Laboratory Systems, and Facility Systems to transmit health data efficiently depending on the integration workflow.

## Submitting a Complete DataTemplate Payload

In most integrations, systems send the entire DataTemplate payload in a single request. This includes all relevant blocks such as:

- facilityDetails
- demographicDetails
- visitDetails
- clinicalInformation
- diagnosisDetails
- laboratoryRequestDetails
- medicationDetails

The HDU API processes the payload and stores the information in the appropriate components such as Client Registry, Shared Health Records, or Laboratory Systems.

### Example API Endpoint
| Method | Endpoint                       | Description                            |
| ------ | ------------------------------ | -------------------------------------- |
| POST   | `/api/v1/hduApi/dataTemplates` | Submit a complete DataTemplate payload |

### Example Request Payload
```json
{
  "facilityDetails": {
    "facilityCode": "109601"
  },
  "listGrid": [
    {
      "demographicDetails": {
        "firstName": "John",
        "lastName": "Doe",
        "gender": "Male"
      },
      "visitDetails": {
        "visitId": "VIS-1001",
        "visitDate": "2024-06-12"
      },
      "clinicalInformation": {
        "chiefComplaint": "Fever and headache"
      }
    }
  ]
}
```

### Example Response
```json
{
  "status": "SUCCESS",
  "statusCode": 200,
  "processedRecords": 1,
  "failedRecords": 0,
  "message": "DataTemplate processed successfully"
}
```
This response confirms that the payload has been received and processed by the HDU platform.

## Submitting Selected Template Blocks via Triggers

In some integration scenarios, systems may only need to submit specific blocks of information instead of sending the full DataTemplate payload.

This commonly occurs when **data updates are triggered by events within the source system.**

For example:

- A laboratory system sends lab results after a test is completed

- A pharmacy system sends medication details after a prescription is issued

- A clinical system sends diagnosis details after a consultation

Using triggers allows systems to transmit **incremental updates** without resending the entire client record.

### Example API Endpoint
| Method | Endpoint                               | Description                         |
| ------ | -------------------------------------- | ----------------------------------- |
| POST   | `/api/v1/hduApi/dataTemplates/trigger` | Submit selected DataTemplate blocks |

### Example Trigger Payload
```json
{
  "facilityDetails": {
    "facilityCode": "109601"
  },
  "listGrid": [
    {
      "visitDetails": {
        "visitId": "VIS-1001"
      },
      "laboratoryRequestDetails": {
        "testCode": "LOINC-1234",
        "testName": "Malaria Test"
      }
    }
  ]
}
```
###  Example Response
```json
{
  "status": "SUCCESS",
  "statusCode": 200,
  "processedBlocks": 1,
  "message": "Selected DataTemplate blocks processed successfully"
}
```
## When to Use Each Method
| Method                           | Recommended Use                                                   |
| -------------------------------- | ----------------------------------------------------------------- |
| Complete DataTemplate submission | When sending full client records or full visit data               |
| Trigger-based block submission   | When sending incremental updates such as lab results or diagnoses |

## Important Notes

- Each request must be **authenticated** using the supported authentication mechanism.

- Payloads must follow the DataTemplate structure described in earlier sections.

- Required blocks such as `facilityDetails` and `visitDetails` must always be included depending on the template type.