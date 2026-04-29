# DataTemplate Structure

The DataTemplate structure defines the standardized JSON format used to exchange health information with the HDU API. Every request submitted to the HDU platform must follow this structure to ensure consistent data validation, processing, and integration across health systems.

A DataTemplate payload is composed of several logical sections that describe the source of the data, the facility where the service was provided, and the clinical or administrative information being transmitted.

The main sections of a DataTemplate include:

- templateDetails
- facilityDetails
- listGrid
- reportDetails

These sections work together to organize and transmit health information in a structured format.

## DataTemplate Structure Overview

A typical DataTemplate payload follows the structure shown below.

### Example DataTemplate Payload
```json
{
  "templateDetails": {
    "templateName": "ClientRegistry",
    "templateVersion": "1.0",
    "submittedDate": "2024-06-12T09:30:00"
  },
  "facilityDetails": {
    "facilityCode": "109601",
    "facilityName": "Example District Hospital",
    "facilityType": "Hospital"
  },
  "listGrid": [
    {
      "demographicDetails": {
        "firstName": "John",
        "middleName": "A",
        "lastName": "Doe",
        "gender": "Male",
        "dateOfBirth": "1990-05-15"
      },
      "visitDetails": {
        "visitId": "VIS-10001",
        "visitDate": "2024-06-12",
        "visitType": "Outpatient"
      }
    }
  ],
  "reportDetails": {
    "submittedBy": "Facility System",
    "submissionDate": "2024-06-12T09:30:00"
  }
}
```
This structure allows multiple records to be transmitted within a single request while maintaining consistency across systems.

## DataTemplate Structure Components
| Component       | Description                                                          |
| --------------- | -------------------------------------------------------------------- |
| templateDetails | Contains metadata describing the template being submitted            |
| facilityDetails | Identifies the health facility submitting the data                   |
| listGrid        | Contains the main clinical or demographic data blocks                |
| reportDetails   | Contains submission metadata such as reporting system and timestamps |

## templateDetails
The `templateDetails` section contains metadata describing the template being used to submit data.

### Example JSON
```json
{
  "templateDetails": {
    "templateName": "ClientRegistry",
    "templateVersion": "1.0",
    "submittedDate": "2024-06-12T09:30:00"
  }
}
```
## facilityDetails

The `facilityDetails` block identifies the health facility where the service or data originated.

### Example JSON
```json
{
  "facilityDetails": {
    "facilityCode": "109601",
    "facilityName": "Example District Hospital",
    "facilityType": "Hospital"
  }
}
```
## listGrid

The `ListGrid` section contains the actual data blocks being transmitted. Each entry represents a record such as a client registration, visit record, laboratory request, or clinical event.

Within each entry, different blocks may appear depending on the type of DataTemplate being used.

Examples of blocks that may appear inside listGrid include:

- demographicDetails

- visitDetails

- clinicalInformation

- diagnosisDetails

- medicationDetails

- laboratoryRequestDetails

### Example JSON
```json
{
  "listGrid": [
    {
      "demographicDetails": {
        "firstName": "John",
        "lastName": "Doe"
      },
      "visitDetails": {
        "visitId": "VIS-10001",
        "visitDate": "2024-06-12"
      }
    }
  ]
}
```
Multiple records can be included in the same payload.

## reportDetails

The `reportDetails` section contains metadata describing the system submitting the data.

### Example JSON
```json
{
  "reportDetails": {
    "submittedBy": "Facility System",
    "submissionDate": "2024-06-12T09:30:00"
  }
}
```
## Important Note

Not all blocks appear in every DataTemplate. The blocks included in the listGrid section depend on the type of template being used, such as:

- Client Registry DataTemplate

- Shared Health Records DataTemplate

- Laboratory DataTemplate

Detailed descriptions of each available block are provided in the following section of this documentation.