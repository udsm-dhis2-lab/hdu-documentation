# Client Registry DataTemplate

The Client Registry DataTemplate is used to register and manage client demographic information within the HDU platform.

The Client Registry enables healthcare systems to uniquely identify individuals across multiple health facilities and ensures that patient records can be linked correctly when exchanging health data.

This allows healthcare providers to maintain consistent client identification when sharing records between systems.

## Purpose of the Client Registry

- The Client Registry supports the following core functions:

- Registering new clients in the national registry

- Managing client demographic information

- Linking client identifiers across systems

- Preventing duplicate client records

- Enabling cross-facility patient identification

Through the Client Registry, healthcare systems can ensure that client data is consistently referenced across the HDU ecosystem.

## Client Registry DataTemplate Structure

The Client Registry DataTemplate focuses primarily on demographic information and client identifiers.

The most important blocks used when registering a client include:

| Block | Description |
|------|-------------|
| facilityDetails | Identifies the health facility submitting the record |
| demographicDetails | Contains the client's personal information |
| visitDetails | Identifies the client encounter or visit |

These blocks allow the system to correctly associate a client with a facility and a specific healthcare encounter.

## Demographic Details Block

The demographicDetails block captures identifying information about the client.

Typical demographic information includes:

- Medical Record Number (MRN)

- Client name

- Date of birth

- Gender

- Contact information

- Addresses

- National identifiers (such as NIDA)

- Emergency contacts

This information allows the Client Registry to uniquely identify clients and maintain consistent records across facilities.

## Example Client Registry DataTemplate Payload
```json
{
  "templateDetails": {
    "code": "GENERAL",
    "id": "general",
    "name": "General"
  },
  "data": {
    "facilityDetails": {
      "code": "109601-5",
      "name": "Sample Health Facility"
    },
    "listGrid": [
      {
        "demographicDetails": {
          "mrn": "109601-5-129022102/2023",
          "firstName": "Aminata",
          "lastName": "Haule",
          "dateOfBirth": "1998-02-15",
          "gender": "female"
        },
        "visitDetails": {
          "id": 400388,
          "visitDate": "2024-08-03"
        }
      }
    ]
  }
}
```
This payload registers a client in the system and associates the client with a facility and visit record.

# Client Identifiers

Client identification in the HDU system may include multiple identifiers.

Examples include:

| Identifier Type | Description |
|-----------------|-------------|
| MRN | Medical Record Number assigned by the facility |
| NIDA | National Identification Number |
| HCR Code | HDU-generated unique client identifier |
| Insurance ID | Identifier associated with health insurance |

These identifiers help ensure that the same client can be recognized across different health systems.

## Example API Response

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
      "clientIdentifier": "109601-5-129022102/2023",
      "message": "Client registered successfully"
    }
  ]
}
```
After submitting a Client Registry DataTemplate, the HDU API returns a response indicating whether the client record was successfully created or updated.

### Response Fields
| Field          | Description                                            |
|----------------|--------------------------------------------------------|
| status         | Indicates whether the request was successful           |
| statusCode     | HTTP status code returned by the API                   |
| newClients     | Number of newly created client records                 |
| updatedClients | Number of client records updated                       |
| failedClients  | Number of client records that failed to process        |
| ignoredClients | Records ignored due to duplication or validation rules |
| summary        | Detailed result of each processed client               |

This response allows integrating systems to verify whether the client registration was successfully processed.

# Relationship with Shared Health Records

The Client Registry manages client identity, while the Shared Health Records (SHR) system manages the clinical records associated with the client.

In practice:

- A client is first registered in the Client Registry
- Clinical data is then stored and shared using Shared Health Records

This separation ensures that client identity and clinical data can be managed independently while still remaining linked.



# When to Use the Client Registry DataTemplate

The Client Registry DataTemplate should be used when:

- Registering a new client
- Updating client demographic information
- Linking client identifiers
- Preparing to submit clinical records for the client

Once a client has been registered, clinical data can be submitted using the appropriate DataTemplate APIs.