## Retrieving Shared Laboratory Data Template

# Table 5.2.1: Retrieving Shared Laboratory Data Template API Information

| Field              | Value                                                                 |
|--------------------|----------------------------------------------------------------------|
| **Message Type**   | JSON                                                                 |
| **Message Category** | DATA                                                               |
| **Request Type**   | GET                                                                  |
| **API**            | `https://<him-domain>:<port>/api/v1/hduApi/labDataTemplates`         |
| **Authentication** | Basic Authentication                                                 |
| **Purpose**        | For getting shared laboratory records                                |
| **Payload**        | Refer appendix document: section 1.1.13                              |


### Table 5.2.2: Retrieving Shared Laboratory Data Template Payload Information

| **Object** | **Description** | **Data Type** | **Possible Example** |
|------------|-----------------|---------------|----------------------|
| templateDetails.id | Unique identifier for the template | Text | general |
| templateDetails.name | Human-readable name for the template | Text | General template |
| templateDetails.workflow.id | Unique identifier for the workflow | Text | fa39a618-0bf0-4e9b-941e-a871876d9bec |
| templateDetails.workflow.name | Name/description of the workflow | Text | General workflow for processing template data |
| metaData.reportDetails | Captures reporting date details | Object | See parameters |
| metaData.reportDetails.parameters[].name | Field name for reporting | Text | reportingDate |
| metaData.reportDetails.parameters[].valueType | Expected value type | Text | Date |
| metaData.reportDetails.parameters[].format | Value format | Text | YYYY-MM-DD |
| metaData.reportDetails.parameters[].example | Example value | Date | 2024-04-12 |
| metaData.facilityDetails | Captures facility HFR code | Object | See parameters |
| metaData.facilityDetails.parameters[].name | Field name | Text | HFRCode |
| metaData.facilityDetails.parameters[].valueType | Expected type | Text | Text |
| metaData.facilityDetails.parameters[].format | Format of the value | Text | MOHHFRCODE |
| metaData.facilityDetails.parameters[].example | Example value | Text | 20232-1 |
| metaData.visitDetails | Captures visit-related information | Object | See parameters |
| metaData.visitDetails.parameters[].id | Unique ID of the visit | Number | 12345 |
| metaData.visitDetails.parameters[].visitDate | Date of the visit | Date | 2024-08-03 |
| metaData.visitDetails.parameters[].newThisYear | If this is a new visit for the year | Boolean | false |
| metaData.visitDetails.parameters[].new | If this is the first visit | Boolean | false |
| metaData.visitDetails.parameters[].closedDate | Date when the visit closed | Date | 2024-08-07 |
| metaData.demographicDetails | Captures patient demographic information | Object | See parameters |
| metaData.demographicDetails.mrn | Medical Record Number | Text | 20232-1/2023/00021 |
| metaData.demographicDetails.firstName | Patient's first name | Text | John |
| metaData.demographicDetails.middleName | Patient's middle name | Text | Sam |
| metaData.demographicDetails.lastName | Patient's last name | Text | Doe |
| metaData.demographicDetails.dateOfBirth | Patient's date of birth | Date | 2000-10-12 |
| metaData.demographicDetails.gender | Patient's gender | Text | male |
| metaData.demographicDetails.phoneNumbers | List of patient phone numbers | Array | +255787656431 |
| metaData.demographicDetails.emails | List of patient emails | Array | test@moh.go.tz |
| metaData.demographicDetails.occupation | Patient's occupation | Text | Engineer |
| metaData.demographicDetails.maritalStatus | Patient's marital status | Text | Single |
| metaData.demographicDetails.nationality | Patient's nationality | Text | Tanzanian |
| metaData.demographicDetails.addresses | Patient addresses | Array | `{'village': 'Example Village', 'district': 'Ubungo'}` |
| metaData.demographicDetails.identifiers | Identifiers for the patient | Array | `{'type': 'MRN', 'id': '109601-5-029022102/2023'}` |
| metaData.demographicDetails.contactPeople | Emergency or contact persons | Array | `{'firstName': 'Richard', 'relationShip': 'Father'}` |
| metaData.demographicDetails.paymentDetails | Payment/insurance details | Array | `{'shortName': 'NHIF', 'insuranceId': '7383738389393'}` |
| metaData.admissionDetails | Admission and discharge details | Object | See parameters |
| metaData.admissionDetails.admissionDate | Date of admission | Date | 2024-08-06 |
| metaData.admissionDetails.admissionDiagnosis | Diagnosis at admission | Text | A01.1 |
| metaData.admissionDetails.dischargedOn | Discharge date | Date | 2024-08-09 |
| metaData.admissionDetails.dischargeStatus | Discharge status | Text | Alive |
| metaData.billingsDetails | Billing and invoice details | Object | See parameters |
| metaData.billingsDetails.billID | Unique ID for the bill | Text | 2939 |
| metaData.billingsDetails.billingCode | Billing code | Text | 7328TY |
| metaData.billingsDetails.billType | Type of billing | Text | Insurance |
| metaData.billingsDetails.insuranceName | Insurance provider name | Text | NHIF |
| metaData.billingsDetails.insuranceCode | Insurance code | Text | INS001 |
| metaData.billingsDetails.amountBilled | Amount billed | Number | 24000 |
| metaData.billingsDetails.exemptionType | Exemption category if any | Text |  |
| metaData.billingsDetails.wavedAmount | Waived amount if applicable | Text |  |
| metaData.billingsDetails.billDate | Date of billing | Date | 2024-08-06 |
| data.reportDetails | Data section placeholder for reporting details | Object | Object of parameters |
| data.facilityDetails | Data section placeholder for facility details | Object | Object of parameters for facilityDetails |
| data.listGrid | Holds patient or encounter records | Array | [] |
| triggers | Workflow triggers for events | Array | See examples |
| triggers[].name | Name of the trigger | Text | On diagnosis change |
| triggers[].condition | Condition for the trigger | Text | OnDiagnosisChange |
| triggers[].code | Code identifier for the trigger | Text | ON_DIAGNOSIS_CHANGE |
| uuid | Unique identifier for this template definition | Text | dd3d6054-524d-4463-ae8a-eb41c5007147 |

