# Updating Client and Shared Health Records

Health information systems often need to update previously submitted data. This may occur when correcting demographic information, updating visit records, or adding new clinical data after a consultation.

The HDU API supports updating records through two main approaches:

- Updating client demographic information  
- Updating or adding shared health records  

These updates ensure that health data remains accurate, complete, and up to date across integrated systems.



## Updating Client Demographic Information

Client demographic information stored in the Client Registry can be updated if changes occur or corrections are needed.

Common scenarios include:

- Correcting spelling errors in names  
- Updating contact information  
- Updating marital status or occupation  
- Updating identification details  

Updates can be performed using the Client Registry update endpoints.

### Example Endpoints

| Method | Endpoint                                             | Description                       |
| ------ | ---------------------------------------------------- | --------------------------------- |
| PUT    | `/api/v1/hduApi/cr/clients/{hcr-id}?idType={idType}` | Update the full client profile    |
| PATCH  | `/api/v1/hduApi/cr/clients/{hcr-id}?idType={idType}` | Update specific client attributes |

### Example Update Payload
```json
{
  "demographicDetails": {
    "firstName": "Amina",
    "lastName": "Mussa",
    "maritalStatus": "Married"
  }
}
```
### Example Response
```json
{
  "status": "SUCCESS",
  "statusCode": 200,
  "message": "Client record updated successfully"
}
```
## Updating Existing Shared Health Records

Shared health records can also be updated when additional information becomes available for an existing visit.

To update an existing record, the integrating system must send the same visit identifier (`visitDetails.visitId`) used during the original submission.

This allows the HDU system to identify and update the correct visit record.

### Example Upload Payload
```json
{
  "facilityDetails": {
    "facilityCode": "109601"
  },
  "listGrid": [
    {
      "visitDetails": {
        "visitId": "VIS-20001"
      },
      "diagnosisDetails": {
        "diagnosisCode": "J18",
        "diagnosisName": "Pneumonia"
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
  "updatedVisits": 1,
  "message": "Shared health record updated successfully"
}
```

## Adding New Shared Health Records

In addition to updating existing visits, systems can also submit new clinical records for future visits.

To do this, the system simply provides a new visit identifier in the `visitDetails` block. The HDU platform will treat the record as a new visit.


### Example Payload
```json
{
  "facilityDetails": {
    "facilityCode": "109601"
  },
  "listGrid": [
    {
      "visitDetails": {
        "visitId": "VIS-20002",
        "visitDate": "2024-06-15"
      },
      "clinicalInformation": {
        "chiefComplaint": "Headache"
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
  "newVisits": 1,
  "message": "New shared health record created"
}
```

## Important Notes for Updates

Developers should observe the following rules when updating records:

- Use PUT when replacing the full client record.
- Use PATCH when updating specific client attributes.
- Use the same visit identifier to update an existing visit.
- Use a new visit identifier to create a new clinical record.

These practices ensure proper versioning and consistency of health records across integrated systems.




