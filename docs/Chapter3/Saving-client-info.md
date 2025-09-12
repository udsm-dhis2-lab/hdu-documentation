# Saving Client Information

### Table 4.1.1: Registry Proposed API

| S/n | Proposed API                                                                 | Request type | Description                                                                 |
|-----|-------------------------------------------------------------------------------|--------------|-----------------------------------------------------------------------------|
| 1   | `https://<him-domain>:<port>/api/v1/hduApi/cr/clients`                       | POST         | For registering clients                                                     |
| 2   | `https://<him-domain>:<port>/api/v1/hduApi/cr/clients`                       | GET          | For requesting clients. Uses parameters to filter clients. Parameters: `id`, `idType`, `hfrCode`, etc. |
| 3   | `https://<him-domain>:<port>/api/v1/hduApi/cr/clients/metaData`              | GET          | For retrieving the structure of the CR payload                              |
| 4   | `https://<him-domain>:<port>/api/v1/hduApi/cr/clients?idType={idType}`       | GET          | Retrieve client by specified params (`id`, `idType`) as mandatory           |
| 5   | `https://<him-domain>:<port>/api/v1/hduApi/cr/clients/{hcr-id}?idType={idType}` | PUT          | Update the existing client                                                  |
| 6   | `https://<him-domain>:<port>/api/v1/hduApi/cr/clients/{hcr-id}?idType={idType}` | PATCH        | For updating specific attributes                                            |
| 7   | `https://<him-domain>:<port>/api/v1/hduApi/cr/requests`                      | POST         | For requesting client delete operation                                      |

### Saving Client Information

#### Table 3.1.1: Saving Client API Information

| Field            | Value                                               |
|------------------|-----------------------------------------------------|
| Message Type     | JSON                                                |
| Message Category | DATA                                                |
| Request type     | POST                                                |
| API              | `../../../api/v1/hduApi/cr/clients`                 |
| Authentication   | Basic authentication                                |
| Payload          | Visit the appendix document section **1.1.7**       |

#### Table 3.1.2: Saving Client Details API Payload Information

| Object                                        | Description                                                 | Data type | Possible example                 |
|-----------------------------------------------|-------------------------------------------------------------|-----------|---------------------------------|
| facilityDetails.code                          | Unique code identifying the facility (HFR Code).            | string    | 109601-5                        |
| facilityDetails.name                          | Name of the health facility.                                | string    | Sample Health Facility          |
| demographicDetails.mrn                        | Medical Record Number (MRN) assigned to the client.         | string    | 109601-5-029022102/2023         |
| demographicDetails.firstName                  | First name of the client.                                   | string    | Jumanne                         |
| demographicDetails.middleName                 | Middle name of the client (if any).                         | string    | *(blank)*                       |
| demographicDetails.lastName                   | Last name or surname of the client.                         | string    | Haule                           |
| demographicDetails.dateOfBirth                | Client’s date of birth.                                     | string    | 1998-02-15                      |
| demographicDetails.gender                     | Gender of the client (e.g., male, female).                  | string    | male                            |
| demographicDetails.phoneNumbers[]             | List of phone numbers.                                      | string    | +255787656431                   |
| demographicDetails.emails[]                   | List of emails.                                             | string    | test@moh.go.tz                  |
| demographicDetails.occupation                 | Occupation of the client.                                   | null      | None                            |
| demographicDetails.maritalStatus              | Marital status of the client.                               | null      | None                            |
| demographicDetails.nationality                | Nationality of the client.                                  | null      | None                            |
| demographicDetails.addresses[].village        | Village where the client lives.                             | null      | None                            |
| demographicDetails.addresses[].ward           | Ward of residence.                                          | null      | None                            |
| demographicDetails.addresses[].district       | District of residence.                                      | string    | Ubungo                          |
| demographicDetails.addresses[].region         | Region of residence.                                        | string    | Dar es Salaam                   |
| demographicDetails.addresses[].country        | Country of residence.                                       | string    | Tanzania                        |
| demographicDetails.addresses[].category       | Category of the address (e.g., Permanent, Temporary).       | string    | Permanent                       |
| demographicDetails.identifiers[].type         | Type of identifier (e.g., MRN, NIDA).                       | string    | MRN                             |
| demographicDetails.identifiers[].id           | Identifier value.                                           | string    | 109601-5-029022102/2023         |
| demographicDetails.identifiers[].preferred    | Boolean flag indicating whether this is the preferred ID.   | boolean   | True                            |
| demographicDetails.contactPeople[].firstName  | First name of the contact person.                           | string    | Richard                         |
| demographicDetails.contactPeople[].lastName   | Last name of the contact person.                            | string    | Haule                           |
| demographicDetails.contactPeople[].phoneNumbers[] | Phone numbers of the contact person.                      | string    | +255767652234                   |
| demographicDetails.contactPeople[].relationShip | Relationship of the contact person to the client.          | string    | Father                          |
| demographicDetails.paymentDetails[].shortName | Short name of the insurance scheme or payer.                | string    | NHIF                            |
| demographicDetails.paymentDetails[].type      | Type of payment (e.g., INSURANCE, CASH).                    | string    | INSURANCE                       |
| demographicDetails.paymentDetails[].insuranceCode | Unique code of the insurance provider.                     | string    | INS001                          |
| demographicDetails.paymentDetails[].name      | Full name of the insurance scheme.                          | string    | National Health Insurance Fund  |
| demographicDetails.paymentDetails[].insuranceId | Insurance identification number.                           | string    | 7383738389393                   |
| demographicDetails.paymentDetails[].policyNumber | Policy number (if available).                              | null      | None                            |
| demographicDetails.paymentDetails[].groupNumber  | Group number (if applicable).                              | null      | None                            |

##### Table 3.1.3: Saving Client Details API Response Information
*(Refer Appendix document section 1.1.8)*

| Object | Description | Data type | Possible example |
|--------|-------------|-----------|-----------------|
| status | Overall status of the operation (e.g., SUCCESS, FAILURE). | string | SUCCESS |
| statusCode | HTTP-like status code representing the result (e.g., 200 = OK). | number | 200 |
| newClients | Number of new client records successfully created. | number | 1 |
| updatedClients | Number of existing client records updated. | number | 0 |
| failedClients | Number of client records that failed to process. | number | 0 |
| ignoredClients | Number of client records ignored by the system. | number | 0 |
| summary[].hcrCode | Unique system-generated Health Client Registry (HCR) code. | string | HCR-M-00099-15021998 |
| summary[].message | Message describing the outcome of processing this client. | string | Client registered successfully |
| summary[].identifiers[].type | Type of identifier (e.g., MRN, HCRCODE, NIDA, Insurance code). | string | MRN |
| summary[].identifiers[].value | Value of the identifier. | string | 109601-5-223022102/2023 |
