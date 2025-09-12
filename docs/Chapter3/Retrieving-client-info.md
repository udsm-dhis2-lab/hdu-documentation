#### Table 3.2.1: Retrieving Client Information API

| Field            | Value                                                                                                   |
|------------------|---------------------------------------------------------------------------------------------------------|
| **Message Type** | JSON                                                                                                    |
| **Message Category** | DATA                                                                                                |
| **Request Type** | GET                                                                                                     |
| **API**          | `../../../api/v1/hduApi/cr/clients`                                                                     |
| **Parameters**   | ```json<br>[<br>  "id",       // if provided, will be a primary parameter to retrieve data in this order<br>  "idType",   // if provided, will be a primary parameter to retrieve data in this order using the parameter “id”<br>  "gender",<br>  "hfrCode"<br>]``` |
| **Example Request** | `../../../api/v1/hduApi/cr/clients?id=834884`                                                        |
| **Authentication** | Basic authentication                                                                                 |
| **Payload**      | Refer appendix document section 1.1.9                                                                   |


#### Table 3.2.1: Retrieving Client Details Payload Information

| Object                                             | Description                                                   | Data type | Possible example                |
|----------------------------------------------------|---------------------------------------------------------------|-----------|---------------------------------|
| pager.page                                         | Current page number of results being displayed.               | number    | 0                               |
| pager.totalPages                                   | Total number of pages available.                              | number    | 1                               |
| pager.total                                        | Total number of records available.                            | number    | 1                               |
| results[].facilityDetails.code                     | Unique code identifying the facility (HFR Code).              | string    | 109601-5                        |
| results[].facilityDetails.name                     | Name of the health facility.                                  | string    | Sample Health Facility          |
| results[].demographicDetails.mrn                   | Medical Record Number (MRN) assigned to the client.           | string    | 109601-5-029022102/2023         |
| results[].demographicDetails.firstName             | First name of the client.                                     | string    | Jumanne                         |
| results[].demographicDetails.middleName            | Middle name of the client (if any).                           | string    | —                               |
| results[].demographicDetails.lastName              | Last name or surname of the client.                           | string    | Haule                           |
| results[].demographicDetails.dateOfBirth           | Client’s date of birth.                                       | string    | 1998-02-15                      |
| results[].demographicDetails.gender                | Gender of the client (e.g., male, female).                    | string    | male                            |
| results[].demographicDetails.phoneNumbers[]        | Phone numbers.                                                | string    | +255787656431                   |
| results[].demographicDetails.emails[]              | Email addresses.                                              | string    | test@moh.go.tz                  |
| results[].demographicDetails.occupation            | Occupation of the client.                                     | null      | None                            |
| results[].demographicDetails.maritalStatus         | Marital status of the client.                                 | null      | None                            |
| results[].demographicDetails.nationality           | Nationality of the client.                                    | null      | None                            |
| results[].demographicDetails.addresses[].village   | Village where the client lives.                               | null      | None                            |
| results[].demographicDetails.addresses[].ward      | Ward of residence.                                            | null      | None                            |
| results[].demographicDetails.addresses[].district  | District of residence.                                        | string    | Ubungo                          |
| results[].demographicDetails.addresses[].region    | Region of residence.                                          | string    | Dar es Salaam                   |
| results[].demographicDetails.addresses[].country   | Country of residence.                                         | string    | Tanzania                        |
| results[].demographicDetails.addresses[].category  | Category of the address (e.g., Permanent, Temporary).         | string    | Permanent                       |
| results[].demographicDetails.identifiers[].type    | Type of identifier (e.g., MRN, NIDA).                         | string    | MRN                             |
| results[].demographicDetails.identifiers[].id      | Identifier value.                                             | string    | 109601-5-029022102/2023         |
| results[].demographicDetails.identifiers[].preferred | Boolean flag indicating whether this is the preferred identifier. | boolean   | True                            |
| results[].demographicDetails.contactPeople[].firstName | First name of the contact person.                           | string    | Richard                         |
| results[].demographicDetails.contactPeople[].lastName  | Last name of the contact person.                            | string    | Haule                           |
| results[].demographicDetails.contactPeople[].phoneNumbers[] | Phone numbers of contact person.                          | string    | +255767652234                   |
| results[].demographicDetails.contactPeople[].relationShip | Relationship of the contact person to the client.          | string    | Father                          |
| results[].demographicDetails.paymentDetails[].shortName | Short name of the insurance scheme or payer.               | string    | NHIF                            |
| results[].demographicDetails.paymentDetails[].type | Type of payment (e.g., INSURANCE, CASH).                     | string    | INSURANCE                       |
| results[].demographicDetails.paymentDetails[].insuranceCode | Unique code of the insurance provider.                    | string    | INS001                          |
| results[].demographicDetails.paymentDetails[].name | Full name of the insurance scheme.                           | string    | National Health Insurance Fund  |
| results[].demographicDetails.paymentDetails[].insuranceId | Insurance identification number.                           | string    | 7383738389393                   |
| results[].demographicDetails.paymentDetails[].policyNumber | Policy number (if available).                              | null      | None                            |
| results[].demographicDetails.paymentDetails[].groupNumber  | Group number (if applicable).                              | null      | None                            |

