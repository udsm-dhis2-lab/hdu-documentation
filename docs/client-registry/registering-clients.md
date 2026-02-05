# Registering New Clients

This endpoint is used to register new clients into the Client Registry.



## Register Client API

### Request Type

* **Method:** `POST`  
* **Description:**  
  Submits a new client record into the Client Registry system.



### Endpoint

* **URL:** `/api/v1/hduApi/cr/clients`  
* **Description:**  
  API endpoint used to create and store new client profiles.



### Authentication

* **Type:** `Basic Authentication`  
* **Description:**  
  Requires authorized credentials to securely register clients.



## Implementation Notes

- Ensure all mandatory demographic and facility fields are populated.  
- Preferred identifiers should be clearly marked in the payload.  


## Payload Structure
```json
{
 "facilityDetails": {
   "code": "109601-5",
   "name": "Sample Health Facility"
 },
 "demographicDetails": {
    "mrn": "109601-5-029022102/2023",
    "firstName": "Jumanne",
    "middleName": "",
    "lastName": "Haule",
    "dateOfBirth": "1998-02-15",
    "gender": "male",
    "phoneNumbers": [
      "+255787656431"
    ],
    "emails": [
      "test@moh.go.tz"
    ],
    "occupation": null,
    "maritalStatus": null,
    "nationality": null,
    "addresses": [
      {
        "village": null,
        "ward": null,
        "district": "Ubungo",
        "region": "Dar es Salaam",
        "country": "Tanzania",
        "category": "Permanent"
      }
    ],
    "identifiers": [
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
    ],
    "contactPeople": [
      {
        "firstName": "Richard",
        "lastName": "Haule",
        "phoneNumbers": [
          "+255767652234"
        ],
        "relationShip": "Father"
      }
    ],
    "paymentDetails": [
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
}
```

## Response [For successful operation]
```json
{
  "status": "SUCCESS",
  "statusCode": 200,
  "newClients": 1,
  "updatedClients": 0,
  "failedClients": 0,
  "ignoredClients": 0,
  "summary": [
    {
      "hcrCode": "HCR-M-00099-15021998",
      "message": "Client registered successfully",
      "identifiers": [
        {
          "type": "MRN",
          "value": "109601-5-223022102/2023"
        },
        {
          "type": "HCRCODE",
          "value": "HCR-M-00099-15021998"
        },
        {
          "type": "NIDA",
          "value": "19980215-23353-00004-21"
        },
        {
          "type": "INS001",
          "value": "7383738389393"
        }
      ]
    }
  ]
}

```