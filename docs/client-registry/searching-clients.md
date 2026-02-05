# Searching and Retrieving Clients

This section explains how to retrieve client records using identifiers and filtering parameters.

### Description

* **Purpose:**  
  Retrieves client demographic and facility-related information from the Client Registry (CR).  
* **Usage context:**  
  Used for searching, validating, and viewing client profiles across systems.



### Message Type

* **Format:** `JSON`  
* **Description:**  
  Response and request payloads are exchanged in JSON format.



### Message Category

* **Category:** `DATA`  
* **Description:**  
  Indicates transactional client data retrieval.



### Request Type

* **Method:** `GET`  
* **Description:**  
  Fetches client records based on provided query parameters.



### API Endpoint

* **Base URL:**  
  `/api/v1/hduApi/cr/clients`



### Query Parameters

| Parameter | Description |
|----------|-------------|
| `id` | Primary identifier used to retrieve a specific client |
| `idType` | Type of identifier used with `id` (e.g., MRN, NIDA) |
| `gender` | Filters clients by gender |
| `hfrCode` | Filters clients by health facility code |


**Priority rule:**  
If `id` and `idType` are provided, they are used first for retrieval.


### Authentication

* **Type:** `Basic Authentication`  
* **Description:**  
  Requires valid credentials to access client registry data.


## Response [If the id is specified, response will be the matched client]
```json
{
 "pager": {
   "page": 0,
   "totalPages": 1,
   "total": 1
 },
 "results": [
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
 ]
}
```




