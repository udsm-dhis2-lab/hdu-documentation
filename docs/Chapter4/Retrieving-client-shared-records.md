## Retrieving Client Shared Record

# Table 4.5.1: Retrieve shared records of a client

| Field             | Value                                                                                   |
|------------------|-----------------------------------------------------------------------------------------|
| Message Type      | JSON                                                                                    |
| Message Category  | DATA                                                                                    |
| Request Type      | GET                                                                                     |
| API               | `../../../api/v1/hduApi/shr/sharedRecords`                                              |
| Parameters        | `id`, `idType`, `code`, `hfCode`                                                       |
| Authentication    | Basic authentication                                                                    |
| Response Payload  | If the `id` is specified, response will be the matched latest shared health record.    |
| Reference         | Refer to the appendix document: Section 1.1.12                                         |

**Parameter Details:**

- `id` — if provided, used as the primary parameter to retrieve data in order.
- `idType` — if provided, used along with `id` to retrieve data in order.
- `code` — if provided, used as a primary parameter.
- `hfCode` — if provided, used as a primary parameter.

# Table 4.5.2: Retrieved Shared Client Records Payload

| Key | Description | Data Type | Example |
|-----|-------------|-----------|---------|
| pager | Pager | Object | {} |
| pager.page | Current page number in the response | Number | 0 |
| pager.totalPages | Total number of available pages | Number | 1 |
| pager.total | Total number of records found | Number | 1 |
| data.facilityDetails | Data section placeholder for facility details | Object | Object of parameters for facilityDetails |
| facilityDetails.code | Unique facility code | Text | 109601-5 |
| facilityDetails.name | Name of the facility | Text | Sample Health Facility |
| reportDetails.reportingDate | Date of report generation | Date | 2024-08-07 |
| mrn | Medical Record Number (MRN) | Text | 109601-5-129022102/2023 |
| visitDetails.id | Unique identifier of the visit | Number | 400388 |
| visitDetails.visitDate | Date of the visit | Date | 2024-08-03 |
| visitDetails.newThisYear | Indicates if this is a new visit within the year | Boolean | false |
| visitDetails.isNew | Indicates if this is a new visit record | Boolean | false |
| visitDetails.closedDate | Date when the visit was closed | Date | 2024-08-07 |
| visitDetails.visitType | Type/category of visit | Text | General |
| visitDetails.careServices[].careType | Type of care service provided | Text | ANC |
| visitDetails.careServices[].visitNumber | Visit sequence number for this care type | Number | 2 |
| appointment[].appointmentId | Unique identifier of the appointment | Text | — |
| appointment[].hfrCode | Health Facility Registry code | Text | — |
| appointment[].appointmentStatus | Status of appointment (booked, cancelled, etc.) | Text | — |
| appointment[].paymentDetails[].controlNumber | Payment control/reference number | Text | — |
| appointment[].paymentDetails[].statusCode | Payment transaction status code | Text | — |
| appointment[].paymentDetails[].description | Description of payment status | Text | — |
| appointment[].serviceDetails[].serviceCode | Unique code of service | Text | — |
| appointment[].serviceDetails[].serviceName | Name of service | Text | — |
| appointment[].serviceDetails[].shortName | Short name or alias of service | Text | — |

