# Create Client and Submit Shared Health Records

In most implementations, health systems must first register a client in the Client Registry before submitting clinical or visit-related information to the Shared Health Records (SHR) system.

This ensures that all clinical records are correctly linked to a unique individual in the national health information ecosystem.

The typical workflow follows these steps:

- Register the client in the Client Registry

- Send clinical or visit data to Shared Health Records

- Link all records using the client identifier and visit details

## Step 1: Register Client in Client Registry

The first step is to submit a Client Registry DataTemplate containing the client’s demographic information.

This block typically includes:

- `demographicDetails`

- `facilityDetails`

- `identifiers`

### Example Client Registration Payload
```json
{
  "facilityDetails": {
    "facilityCode": "109601"
  },
  "listGrid": [
    {
      "demographicDetails": {
        "firstName": "Amina",
        "lastName": "Mussa",
        "gender": "Female",
        "dateOfBirth": "1995-03-14"
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
  "newClients": 1,
  "updatedClients": 0,
  "failedClients": 0,
  "summary": [
    {
      "clientIdentifier": "109601-5-129022102/2023",
      "message": "Client registered successfully"
    }
  ]
}
```
The `clientIdentifier` returned in the response uniquely identifies the client and must be used when submitting shared health records.

## Step 2: Submit Shared Health Records

After a client is registered, health systems can submit clinical visit information to the Shared Health Records system.

These records may include blocks such as:

- `visitDetails`

- `clinicalInformation`

- `diagnosisDetails`

- `medicationDetails`

- `laboratoryRequestDetails`

### Example Shared Health Record Payload
```json
{
  "facilityDetails": {
    "facilityCode": "109601"
  },
  "listGrid": [
    {
      "demographicDetails": {
        "clientIdentifier": "109601-5-129022102/2023"
      },
      "visitDetails": {
        "visitId": "VIS-20001",
        "visitDate": "2024-06-12"
      },
      "clinicalInformation": {
        "chiefComplaint": "Persistent cough"
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
  "newVisits": 1,
  "updatedVisits": 0,
  "failedVisits": 0,
  "summary": [
    {
      "visitId": "VIS-20001",
      "message": "Shared health record processed successfully"
    }
  ]
}
```
## Important Integration Notes

Developers should follow these guidelines when integrating with the HDU API:

- Always register the client first before submitting clinical records.

- Use the client identifier returned by the Client Registry when submitting shared health records.

- Each clinical interaction should be associated with a unique visit identifier.

- Multiple clinical blocks can be included within the same visit record.

This workflow ensures that patient records remain consistent, traceable, and interoperable across health systems.