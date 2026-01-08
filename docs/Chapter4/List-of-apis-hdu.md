## List of APIs Provided by HDU API
This module enables EMRs to retrieve patient information from other EMR systems connected through the HDU API, using multiple identifiers for data sharing.



# Table 4.1.1: Shared records proposed APIs
| S/n | Proposed API                                                                                          | Request Type | Description                                                                                     |
|-----|-------------------------------------------------------------------------------------------------------|--------------|-------------------------------------------------------------------------------------------------|
| 1   | `https://<him-domain>:<port>/api/v1/hduApi/shr/sharedRecords`                                         | POST         | For adding shared health records                                                               |
| 2   | `https://<him-domain>:<port>/api/v1/hduApi/shr/sharedRecords`                                         | GET          | For retrieving shared records using query parameters `[id, idType, hfrCode, referralNumber]`    |
| 3   | `https://<him-domain>:<port>/api/v1/hduApi/shr/sharedRecords/metaData` <br /> *(DATA TEMPLATE API)*    | GET          | For retrieving shared record metadata                                                          |
| 4   | `https://<him-domain>:<port>/api/v1/hduApi/shr/sharedRecords/{hcr-id}`                                | GET          | For retrieving specific client shared records                                                  |
| 5   | `https://<him-domain>:<port>/api/v1/hduApi/shr/sharedRecords/{hcr-id}`                                | PUT          | For updating specific client shared records                                                    |
| 6   | `https://<him-domain>:<port>/api/v1/hduApi/shr/sharedRecords/{identifier}?identifierType={identifierType}` | PATCH        | For updating or adding specific shared records attributes                                      |
