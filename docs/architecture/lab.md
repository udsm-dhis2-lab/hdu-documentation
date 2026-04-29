# Lab DataTemplate

The Lab DataTemplate is used to transmit laboratory-related information to the HDU platform. This includes laboratory requests, specimen information, laboratory test results, and post-test reporting.

Laboratory systems such as Laboratory Information Management Systems (LIMS) or hospital EMR systems can use this template to submit laboratory data to the national health data ecosystem.

In some cases, laboratory results may be reported without an associated patient record, such as during surveillance activities or external laboratory processing. The Lab DataTemplate supports this workflow.

## Lab DataTemplate API

Laboratory data is submitted using the Lab DataTemplate API.

Table: Lab DataTemplate Submission API

| Field | Value |
|------|------|
| Message Type | JSON |
| Message Category | DATA |
| Request Method | POST |
| Endpoint | /api/v1/hduApi/labDataTemplates |
| Authentication | Basic Authentication |

This API allows systems to submit laboratory data structured using the DataTemplate format.

## Lab DataTemplate Structure

A Lab DataTemplate payload typically contains the following components:

| Component | Description |
|-----------|-------------|
| templateDetails | Metadata describing the template |
| facilityDetails | Information about the reporting laboratory or facility |
| labRequestDetails | Specimen information, requested tests, and laboratory results |
| reportDetails | Metadata describing the reporting date |

These components allow laboratory systems to transmit structured test requests and results.

## Example Lab DataTemplate Payload
```json
{
  "templateDetails": {
    "code": "LABORATORY_CODE",
    "id": "laboratory_id",
    "name": "Laboratory_name",
    "codingVersions": {
      "loincVersion": "2",
      "icdVersion": "10"
    }
  },
  "data": {
    "facilityDetails": {
      "code": "109601-5",
      "name": "Sample Health Facility",
      "system": {
        "name": "LIMS Name",
        "version": "v102.06"
      }
    },
    "labRequestDetails": [
      {
        "dateOccurred": "2024-08-03",
        "specimenID": "9839030",
        "specimenCollectedFrom": "Patient",
        "requestedLabTests": [
          {
            "obrSetId": 1,
            "typeOfTest": {
              "code": "12345-6",
              "codeType": "LOINC"
            }
          }
        ],
        "labTestResults": [
          {
            "typeOfTest": {
              "code": "12345-6",
              "codeType": "LOINC"
            },
            "testResultDate": "2024-08-03T10:00:00Z",
            "results": [
              {
                "result": "Positive",
                "codedValue": {
                  "code": "LA6576-8",
                  "type": "LOINC"
                }
              }
            ]
          }
        ]
      }
    ],
    "reportDetails": {
      "reportingDateTime": "2024-08-07T00:00:00Z"
    }
  }
}
```

This payload shows how laboratory systems submit structured laboratory requests and results using the Lab DataTemplate.

## Example API Response
```json
{
  "status": "SUCCESS",
  "statusCode": 200,
  "newRequests": 1,
  "updatedRequests": 0,
  "failedRequests": 0,
  "ignoredRequests": 0,
  "summary": [
    {
      "specimen": "4567890876545678",
      "message": "Lab details created successfully"
    }
  ]
}
```

After successful submission, the HDU API returns a response summarizing the processed laboratory requests.

This response indicates whether the submitted laboratory data was successfully processed.

## When to Use the Lab DataTemplate

The Lab DataTemplate should be used in the following situations:

- Submitting laboratory test requests

- Reporting laboratory test results

- Transmitting specimen information

- Sharing laboratory findings between systems

- Reporting laboratory surveillance data

This template ensures that laboratory information is transmitted in a standardized format compatible with national health information systems.