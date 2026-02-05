# Template Structure

Each Data Template consists of the following components:

- Template metadata
- Template blocks
- Parameters under each block
- Trigger conditions

Templates are retrieved using the **Data Templates API endpoint**.

## Data Templates API – Retrieve Template Structure

### API Request Details

#### Message Type

* **Format:** `JSON`  
* **Description:**  
  Payload is transmitted in structured JSON format.


#### Request Type

* **Method:** `GET`  
* **Description:**  
  Retrieves available data templates configured in the HDU API.


#### Endpoint

* **URL:** `/api/v1/hduApi/dataTemplates`  
* **Description:**  
  API endpoint used to fetch data template definitions and metadata.



#### Authentication

* **Type:** `Basic Authentication`  
* **Description:**  
  Requires valid system credentials encoded in the request header to authorize access.



## Response from API
```json
[
  {
    "templateDetails": {
      "id": "general",
      "name": "General template",
      "workflow": {
        "id": "fa39a618-0bf0-4e9b-941e-a871876d9bec",
        "name": "General workflow for processing template data"
      }
    },
    "metaData": {
      "reportDetails": {
        "description": "For reporting date capturing",
        "parameters": [
          {
            "name": "reportingDate",
            "valueType": "Date",
            "format": "YYYY-MM-DD",
            "example": "2024-04-12"
          }
        ]
      },
      "facilityDetails": {
        "description": "For HFR Code capturing",
        "parameters": [
          {
            "name": "HFRCode",
            "valueType": "Text",
            "format": "MOHHFRCODE",
            "example": "20232-1"
          }
        ]
      },
      "visitDetails": {
        "description": "Visit information",
        "parameters": [
          {
            "name": "id",
            "valueType": "Number",
            "format": "AsYouCapture",
            "example": 12345
          },
          {
            "name": "visitDate",
            "valueType": "Date",
            "format": "YYYY-MM-DD",
            "example": "2024-08-03"
          },
          {
            "name": "newThisYear",
            "valueType": "Boolean",
            "format": "AsYouCapture",
            "example": false
          },
          {
            "name": "isNew",
            "valueType": "Boolean",
            "format": "AsYouCapture",
            "example": false
          },
          {
            "name": "closedDate",
            "valueType": "Date",
            "format": "YYYY-MM-DD",
            "example": "2024-08-07"
          }
        ]
      },
      "demographicDetails": {
        "description": "Patient information",
        "parameters": [
          {
            "name": "mrn",
            "valueType": "Text",
            "format": "AsYouCapture",
            "example": "20232-1/2023/00021"
          },
          {
            "name": "firstName",
            "valueType": "Text",
            "format": "AsYouCapture",
            "example": "John"
          },
          {
            "name": "middleName",
            "valueType": "Text",
            "format": "AsYouCapture",
            "example": "Sam"
          },
          {
            "name": "lastName",
            "valueType": "Text",
            "format": "AsYouCapture",
            "example": "Doe"
          },
          {
            "name": "dateOfBirth",
            "valueType": "Date",
            "format": "YYYY-MM-DD",
            "example": "2000-10-12"
          },
          {
            "name": "gender",
            "valueType": "Text",
            "format": "AsYouCapture",
            "example": "male"
          },
          {
            "name": "phoneNumbers",
            "valueType": "Array",
            "format": "AsYouCapture",
            "example": [
              "+255787656431"
            ]
          },
          {
            "name": "emails",
            "valueType": "Array",
            "format": "AsYouCapture",
            "example": [
              "test@moh.go.tz"
            ]
          },
          {
            "name": "occupation",
            "valueType": "Text",
            "format": "AsYouCapture",
            "example": "Engineer"
          },
          {
            "name": "maritalStatus",
            "valueType": "Text",
            "format": "AsYouCapture",
            "example": "Single"
          },
          {
            "name": "nationality",
            "valueType": "Text",
            "format": "AsYouCapture",
            "example": "Tanzanian"
          },
          {
            "name": "addresses",
            "valueType": "Array",
            "format": "AsYouCapture",
            "example": [
              {
                "village": "Example Village",
                "ward": "Example Ward",
                "district": "Ubungo",
                "region": "Dar es Salaam",
                "country": "Tanzania",
                "category": "Permanent"
              }
            ]
          },
          {
            "name": "identifiers",
            "valueType": "Array",
            "format": "AsYouCapture",
            "example": [
              {
                "type": "MRN",
                "id": "109601-5-029022102/2023",
                "preferred": true
              },
              {
                "type": "NIDA",
                "id": "19980215-03453-00004-21",
                "preferred": false
              }
            ]
          },
          {
            "name": "contactPeople",
            "valueType": "Array",
            "format": "AsYouCapture",
            "example": [
              {
                "firstName": "Richard",
                "lastName": "Haule",
                "phoneNumbers": [
                  "+255767652234"
                ],
                "relationShip": "Father"
              }
            ]
          },
          {
            "name": "paymentDetails",
            "valueType": "Array",
            "format": "AsYouCapture",
            "example": [
              {
                "shortName": "NHIF",
                "type": "INSURANCE",
                "insuranceCode": "INS001",
                "name": "National Health Insurance Fund",
                "insuranceId": "7383738389393",
                "policyNumber": null,
                "groupNumber": null
              }
            ]
          }
        ]
      },
      "admissionDetails": {
        "description": "Admission and Discharge Information",
        "parameters": [
          {
            "name": "admissionDate",
            "valueType": "Date",
            "format": "YYYY-MM-DD",
            "example": "2024-08-06"
          },
          {
            "name": "admissionDiagnosis",
            "valueType": "Text",
            "format": "AsYouCapture",
            "example": "A01.1"
          },
          {
            "name": "dischargedOn",
            "valueType": "Date",
            "format": "YYYY-MM-DD",
            "example": "2024-08-09"
          },
          {
            "name": "dischargeStatus",
            "valueType": "Text",
            "format": "AsYouCapture",
            "example": "Alive"
          }
        ]
      },
      "billingsDetails": {
        "description": "Billing Information",
        "parameters": [
          {
            "name": "billID",
            "valueType": "Text",
            "format": "AsYouCapture",
            "example": "2939"
          },
          {
            "name": "billingCode",
            "valueType": "Text",
            "format": "AsYouCapture",
            "example": "7328TY"
          },
          {
            "name": "billType",
            "valueType": "Text",
            "format": "AsYouCapture",
            "example": "Insurance"
          },
          {
            "name": "insuranceName",
            "valueType": "Text",
            "format": "AsYouCapture",
            "example": "NHIF"
          },
          {
            "name": "insuranceCode",
            "valueType": "Text",
            "format": "AsYouCapture",
            "example": "INS001"
          },
          {
            "name": "amountBilled",
            "valueType": "Number",
            "format": "AsYouCapture",
            "example": 24000
          },
          {
            "name": "exemptionType",
            "valueType": "Text",
            "format": "AsYouCapture",
            "example": ""
          },
          {
            "name": "wavedAmount",
            "valueType": "Text",
            "format": "AsYouCapture",
            "example": ""
          },
          {
            "name": "billDate",
            "valueType": "Date",
            "format": "YYYY-MM-DD",
            "example": "2024-08-06"
          }
        ]
      }
    },
    "data": {
      "reportDetails": "Object of parameters",
      "facilityDetails": "Object of parameters for facilityDetails",
      "listGrid": []
    },
    "triggers": [
      {
        "name": "On diagnosis change",
        "condition": "OnDiagnosisChange",
        "code": "ON_DIAGNOSIS_CHANGE"
      },
      {
        "name": "On discharge",
        "condition": "OnDischarge"
      }
    ],
    "uuid": "dd3d6054-524d-4463-ae8a-eb41c5007147"
  }
]
```

## Error message for wrong API
```json
{
	"timestamp": "2024-08-02T06:04:19.900+00:00",
	"status": 404,
	"error": "Not Found",
	"message": "No message available",
	"path": "/adapter/api/v1/dataTemplatess"
}
```



