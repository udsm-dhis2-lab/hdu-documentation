# API Messages


### Table 2.2.1.1: Retrieving HDU Data Template API

<table>
  <thead>
    <tr>
      <th>Field</th>
      <th>Value</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><em>Message Type</em></td>
      <td>JSON</td>
    </tr>
    <tr>
      <td><em>Message Category</em></td>
      <td>MetaData</td>
    </tr>
    <tr>
      <td><em>Request type</em></td>
      <td>GET</td>
    </tr>
    <tr>
      <td><em>API</em></td>
      <td>…/../../api/v1/hduApi/dataTemplates</td>
    </tr>
    <tr>
      <td><em>Authentication</em></td>
      <td>Basic authentication</td>
    </tr>
    <tr>
      <td><em>Response</em></td>
      <td>Visit appendix document section: 1.1.1</td>
    </tr>
    <tr>
      <td><em>Error message for wrong API</em></td>
      <td>
        <pre>&#123;
  "timestamp": "2024-08-02T06:04:19.900+00:00",
  "status": 404,
  "error": "Not Found",
  "message": "No message available",
  "path": "/adapter/api/v1/dataTemplatess"
&#125;</pre>
      </td>
    </tr>
  </tbody>
</table>

## Table 2.2.1.2: Retrieving HDU Data Template API

| Field / Object Name            | Description                                      | Data Type | Example |
|:-------------------------------|:-------------------------------------------------|:---------:|:------:|
| *TEMPLATE DETAILS*           |                                                  |           |        |
| templateDetails                | Block containing metadata about the template     | Object    |        |
| templateDetails.code           | Unique code for the template                     | String    | GENERAL |
| templateDetails.id             | Unique identifier of the template                | String    | general |
| templateDetails.name           | Human-readable template name                     | String    | General |
| templateDetails.codingVersions | Coding versions for standards like LOINC and ICD | Object    |        |
| templateDetails.workflow.uuid | Unique workflow identifier | UUID | 23750fc5-0867-4426-817a-89f155532fa1 |
| **FACILITY DETAILS** | | | |
| facilityDetails | Information about the health facility | Object | — |
| facilityDetails.code | Facility code | String | 109601-5 |
| facilityDetails.name | Facility name | String | Sample Health Facility |
| facilityDetails.system | System details used in the facility | Object | — |
| facilityDetails.system.name | System name | String | LIMS Name |
| facilityDetails.system.version | System version | String | v102.06 |
| facilityDetails.bloodBags[] | Array of available blood bag records | Array | `[{"bloodType": "A+", "quantity": 10}]` |
| data.facilityDetails.bloodBags[].bloodType | Blood Type | String | "A+" |
| **DEMOGRAPHIC DETAILS** | | | |
| demographicDetails | Patient demographic information | Object | — |
| demographicDetails.mrn | Medical Record Number | String | 109601-5-129022102/2023 |
| demographicDetails.firstName | Patient's first name | String | Aminata |
| demographicDetails.lastName | Patient's last name | String | Haule |
| demographicDetails.phoneNumbers[] | Array of patient phone numbers | Array of Strings | ["+255787656431"] |
| demographicDetails.emails[] | Array of patient email addresses | Array of Strings | ["test@moh.go.tz"] |
| demographicDetails.addresses[] | Array of patient addresses with village, ward, district, etc. | Array of Objects | `[{"district": "Ubungo", "region": "Dar es Salaam"}]` |
| demographicDetails.identifiers[] | Array of identifiers (MRN, Insurance ID, etc.) | Array of Objects | `[{"type": "MRN", "id": "109601..."}]` |
| demographicDetails.contactPeople[] | Array of patient contact persons | Array of Objects | `[{"firstName": "Richard", "relationShip": "Father"}] `|
| demographicDetails.paymentDetails[] | Array of insurance/payment details | Array of Objects | `[{"shortName": "NHIF", "insuranceCode": "INS001"}] `|
| **VISIT DETAILS** | | | |
| visitDetails | Details of a patient visit | Object | — |
| visitDetails.id | Visit identifier | Integer | 400388 |
| visitDetails.visitDate | Date of visit | Date | 2024-08-03 |
| visitDetails.careServices[] | Array of services provided in the visit | Array of Objects | `[{"careType": "ANC", "visitNumber": 2}]` |
| appointment[] | Array of appointments with payment and services | Array of Objects |`[{"appointmentId": "394383938"}] `|
| **CLINICAL INFORMATION** | | | |
| selfMonitoringClinicalInformation.vitalSigns[] | Array of self-monitored vital signs | Array of Objects |` [{"bloodPressure": "89/90"}] `|
| clinicalInformation.vitalSigns[] | Array of clinician-recorded vital signs | Array of Objects | `[{"bloodPressure": "89/90"}]` |
| clinicalInformation.visitNotes[] | Array of visit notes recorded by providers | Array of Objects | `[{"date": "2024-11-12", "chiefComplaints": ["headache for 2 days"]}] `|
| allergies[] | Array of recorded allergies | Array of Objects | `[{"code": "123", "name": "Penicillin"}]` |
| chronicConditions[] | Array of chronic conditions | Array of Objects |` [{"code": "C50", "name": "Breast Cancer"}] `|
| **LAB REQUEST DETAILS** | | | |
| labRequestDetails[] | Array of laboratory request details | Array of Objects |` [{"specimenID": "9839030", "typeOfSpecimen": {}}]` |
| labRequestDetails.requestedLabTests[] | Array of requested lab tests | Array of Objects |` [{"obrSetId": 1, "typeOfTest": {}}] `|
| labRequestDetails.labTestResults[] | Array of lab test results | Array of Objects |` [{"specimenAcceptanceStatus": "ACCEPTED"}] `|
| labRequestDetails.postLabTestResults[] | Array of post-lab test results | Array of Objects |` [{"ObrSetId": 2}]` |
| diagnosisDetails[] | Array of diagnosis records | Array of Objects |` [{"diagnosis": "Typhoid"}]` |
| medicationDetails[] | Array of prescribed medications | Array of Objects | `[{"name": "Tramadol HCL 50mg"}]` |
| treatmentDetails | Details of treatments like chemo, radio, surgery | Object | — |
| treatmentDetails.chemoTherapy[] | Array of chemotherapy treatment cycles | Array of Objects |` [{"diagnosis": "C50"}]` |
| vaccinationDetails[] | Array of vaccination records | Array of Objects |` [{"type": "BCG", "date": "2024-08-07"}]` |
| prophylAxisDetails[] | Array of prophylaxis details | Array of Objects |` [{"type": "PrEP", "status": "Completed"}]` |
| billingsDetails[] | Array of billing records | Array of Objects | `[{"billID": "2939", "amountBilled": 24000}]` |
| referralDetails | Details of referrals made | Object | `[{"referralDate": "2024-08-07"}] `|
| deathRegistryDetails | Details for death registry records | Object |` [{"dateOfDeath": "2024-08-07"}]` |
| reportDetails.reportingDateTime | Reporting date of the payload | DateTime | 2024-08-07T00:00:00Z |

Mandatory blocks and parameters when sending data for a client whose data have already been sent before.  

Table 2.2.1.3: Special case: Updating HDU Data Template through API  

| Block             | Parameter                                     |
|-------------------|-----------------------------------------------|
| Facility details  | HFR Code                                      |
| Demographic details | mrn or identifier for preferred identifier  |
| Visit details     | id                                            |


HDU data sharing  

Table 2.2.2.1: Sending data to HDU API Information  

| Item              | Value                                         |
|-------------------|-----------------------------------------------|
| Message Type      | JSON                                          |
| Message Category  | MetaData                                      |
| Request type      | POST                                          |
| API               | …/../../api/v1/hduApi/dataTemplates           |
| Authentication    | Basic authentication                         |
| Response payload  | Visit appendix document section: 1.1.2        |


For the HDU data and data template, one can refer to the table below to understand what is expected when requesting a data template where we expect one to use the GET method type/POST method data method type when one wants to send data to the HDU.  

| Object              | Description                                      | Data type | Possible example |
|---------------------|--------------------------------------------------|-----------|------------------|
| TEMPLATE DETAILS    | templateDetails                                  | Template Details object containing nested fields. | object | {} |
| templateDetails.code | Code.                                           | string    | "GENERAL"        |
| templateDetails.id   | Id.                                             | string    | "general"        |
| templateDetails.code                     | Code.                                           | string    | "GENERAL"                      |
| templateDetails.id                       | Id.                                             | string    | "general"                      |
| templateDetails.name                     | Name.                                           | string    | "General"                      |
| templateDetails.codingVersions           | Coding Versions object containing nested fields. | object    | {}                             |
| templateDetails.codingVersions.loincVersion | LOINC Version.                                 | string    | "2"                            |
| templateDetails.codingVersions.icdVersion | ICD Version.                                   | string    | "10"                           |
| templateDetails.workflow                 | Workflow object containing nested fields.        | object    | {}                             |
| templateDetails.workflow.uuid            | UUID.                                           | string    | "23750fc5-0867-4426-817a-89f155532fa1" |
| data                                     | Data object containing nested fields.            | object    | {}                             |
| FACILITY DETAILS                 | data.facilityDetails         | Facility Details object containing nested fields. | object        | {}                        |
| data.facilityDetails.code        | Code.                        | string                                           | "109601-5"               |
| data.facilityDetails.name        | Name.                        | string                                           | "Sample Health Facility" |
| data.facilityDetails.system      | System object containing nested fields. | object                                | {}                        |
| data.facilityDetails.system.name | Name.                        | string                                           | "LIMS Name"               |
| data.facilityDetails.system.version | Version.                   | string                                           | "v102.06"                 |
| data.facilityDetails.bloodBags   | List of Blood Bags entries.  | array<object/>                                   | […]                        |
| data.facilityDetails.bloodBags[]          | Blood Bags[] object containing nested fields. | object | {} |
| data.facilityDetails.bloodBags[].bloodType | Blood Type                                   | string | "A+" |
| data.facilityDetails.bloodBags[].quantity  | Quantity                                     | number | 10   |
| LISTGRID                                  |                                               |       |       |
| data.listGrid                             | List of List Grid entries.                      | array<object/> | […] |
| data.listGrid[]                           | List Grid[] object containing nested fields.   | object        | {}  |
| DEMOGRAPHIC DETAILS                        |                                                |               |     |
| data.listGrid[].demographicDetails        | Demographic Details object containing nested fields. | object | {}  |
| data.listGrid[].demographicDetails.mrn    | Diagnosis Details[] object containing nested fields. | object | {}  |
| data.listGrid[].demographicDetails.mrn    | MRN.                                           | string        | "109601-5-129022102/2023" |
| data.listGrid[].demographicDetails.firstName | First Name.                                   | string        | "Aminata" |
| data.listGrid[].demographicDetails.middleName | Middle Name.                                  | null         | null                       |
| data.listGrid[].demographicDetails.lastName   | Last Name.                                    | string       | "Haule"                    |
| data.listGrid[].demographicDetails.ethnicGroup | Ethnic Group.                                | string       | "Nyamwezi"                 |
| data.listGrid[].demographicDetails.dateOfBirth | Date Of Birth.                               | date-time    | "1998-02-15"               |
| data.listGrid[].demographicDetails.gender     | Gender.                                      | string       | "female"                   |
| data.listGrid[].demographicDetails.phoneNumbers | List of Phone Numbers entries.              | array<string/>| […]                        |
| data.listGrid[].demographicDetails.phoneNumbers[] | Phone Numbers[].                            | string       | "+255787656431"            |
| data.listGrid[].demographicDetails.emails[]  | Emails[].                                     | string       | "test@moh.go.tz"           |
| data.listGrid[].demographicDetails.emails    | List of Emails entries.                       | array<string/>| […]                        |
| data.listGrid[].demographicDetails.occupation | Occupation.                                  | null         | null                       |
| data.listGrid[].demographicDetails.maritalStatus | Marital Status.                             | null         | null                       |
| data.listGrid[].demographicDetails.nationality            | Nationality.                                     | null         | null |
| data.listGrid[].demographicDetails.addresses[]            | Addresses[] object containing nested fields.    | object       | {}   |
| data.listGrid[].demographicDetails.addresses              | List of Addresses entries.                       | array<object/>| […]   |
| data.listGrid[].demographicDetails.addresses[].village   | Village.                                        | null         | null |
| data.listGrid[].demographicDetails.addresses[].ward      | Ward.                                           | null         | null |
| data.listGrid[].demographicDetails.addresses[].district  | District.                                       | string       | "Ubungo" |
| data.listGrid[].demographicDetails.addresses[].region    | Region.                                         | string       | "Dar es Salaam" |
| data.listGrid[].demographicDetails.addresses[].country              | Country.                                         | string       | "Tanzania" |
| data.listGrid[].demographicDetails.addresses[].category             | Category.                                        | string       | "Permanent" |
| data.listGrid[].demographicDetails.identifiers                     | List of Identifiers entries.                     | array<object/>| […] |
| data.listGrid[].demographicDetails.identifiers[]                   | Identifiers[] object containing nested fields.  | object       | {}  |
| data.listGrid[].demographicDetails.identifiers[].type              | Type.                                            | string       | "MRN" |
| data.listGrid[].demographicDetails.identifiers[].id                | Id.                                              | string       | "109601-5-129022102/2023" |
| data.listGrid[].demographicDetails.identifiers[].preferred         | Preferred.                                       | boolean      | true |
| data.listGrid[].demographicDetails.contactPeople                   | List of Contact People entries.                  | array<object/>| […] |
| data.listGrid[].demographicDetails.contactPeople[]                 | Contact People[] object containing nested fields.| object      | {}  |
| data.listGrid[].demographicDetails.contactPeople[].firstName      | First Name.                                     | string       | "Richard" |
| data.listGrid[].demographicDetails.contactPeople[].lastName       | Last Name.                                      | string       | "Haule" |
| data.listGrid[].demographicDetails.contactPeople[].phoneNumbers   | List of Phone Numbers entries.                  | array<string/>| […] |
| data.listGrid[].demographicDetails.contactPeople[].phoneNumbers[] | Phone Numbers[].                                | string       | "+255767652234" |
| data.listGrid[].demographicDetails.contactPeople[].relationShip   | Relationship of the contact person to the client | string     | "Father" |
| data.listGrid[].demographicDetails.paymentDetails                   | List of Payment Details entries.                | array<object/> | […] |
| data.listGrid[].demographicDetails.paymentDetails[].shortName       | Short Name                                     | string        | "NHIF" |
| data.listGrid[].demographicDetails.paymentDetails[].type            | Type.                                          | string        | "INSURANCE" |
| data.listGrid[].demographicDetails.paymentDetails[].insuranceCode   | Insurance Code                                 | string        | "INS001" |
| data.listGrid[].demographicDetails.paymentDetails[].name            | Name.                                          | string        | "National Health Insurance Fund" |
| data.listGrid[].demographicDetails.paymentDetails[].insuranceId     | Insurance Id                                   | string        | "9093738389393" |
| data.listGrid[].demographicDetails.paymentDetails[].policyNumber    | Policy Number                                  | null          | null |
| data.listGrid[].demographicDetails.paymentDetails[].groupNumber     | Group Number.                                  | null          | null |
| VISIT DETAILS                                                        |                                                |               |      |
| data.listGrid[].visitDetails                                         | Visit Details object containing nested fields.| object        | {}   |
| data.listGrid[].visitDetails.id                                      | Id.                                            | number        | 400388 |
| data.listGrid[].visitDetails.visitDate       | Visit Date.                                   | date-time | "2024-08-03" |
| data.listGrid[].visitDetails.newThisYear     | New This Year.                                | boolean   | false        |
| data.listGrid[].visitDetails.isNew           | Is New.                                       | boolean   | false        |
| data.listGrid[].visitDetails.referredIn      | Referred In.                                  | boolean   | true         |
| data.listGrid[].visitDetails.closedDate      | Closed Date.                                  | date-time | "2024-08-07" |
| data.listGrid[].visitDetails.visitType       | Visit Type.                                   | string    | "OPD"        |
| data.listGrid[].visitDetails.disabled                        | Disabled.                                   | boolean      | false |
| data.listGrid[].visitDetails.careServices                    | List of Care Services entries.              | array<object/>| […]  |
| data.listGrid[].visitDetails.careServices[]                  | Care Services[] object containing nested fields. | object   | {}   |
| data.listGrid[].visitDetails.careServices[].careType         | Care Type.                                  | string       | "ANC | DENTAL | EYE | FP" |
| data.listGrid[].visitDetails.careServices[].visitNumber      | Visit Number.                               | number       | 2 |
| data.listGrid[].visitDetails.attendedSpecialist              | List of Attended Specialist entries.        | array<object/>| […] |
| data.listGrid[].visitDetails.attendedSpecialist[]            | Attended Specialist[] object containing nested fields. | object    | {}      |
| data.listGrid[].visitDetails.attendedSpecialist[].superSpecialist | Super Specialist. | boolean   | false   |
| data.listGrid[].visitDetails.serviceComplaints               | Service Complaints object containing nested fields. | object | {} |
| data.listGrid[].visitDetails.serviceComplaints.providedComplaints | Provided Complaints.                          | boolean      | true  |
| data.listGrid[].visitDetails.serviceComplaints.complaints         | Complaints.                                   | string       | ""    |
| APPOINTMENT                                                      |                                               |              |      |
| data.listGrid[].appointment                                       | List of Appointment entries.                  | array<object/>| […]  |
| data.listGrid[].appointment[]                             | Appointment[] object containing nested fields.| object       | {} |
| data.listGrid[].appointment[].appointmentId                       | Appointment Id.                               | string       | "394383938" |
| data.listGrid[].appointment[].hfrCode                             | HFR Code.                                     | string       | "34893" |
| data.listGrid[].appointment[].appointmentStatus                   | Appointment Status.                           | string       | "booked" |
| data.listGrid[].appointment[].paymentDetails                      | List of Payment Details entries.              | array<object/>| {} / […] |
| data.listGrid[].appointment[].paymentDetails[].controlNumber      | Control Number.                               | string       | "89385928359" |
| data.listGrid[].appointment[].paymentDetails[].statusCode         | Status Code.                                  | string       | "200" |
| data.listGrid[].appointment[].paymentDetails[].description        | Description.                                  | string       | "This was successful" |
| data.listGrid[].appointment[].serviceDetails[]                    | Service Details[] object containing nested fields. | object   | {} |
| data.listGrid[].appointment[].serviceDetails[].serviceCode        | Service Code.                                 | string       | "012" |
| data.listGrid[].appointment[].serviceDetails[].serviceName | Service Name                                  | string       | "Service A" |
| data.listGrid[].appointment[].serviceDetails[].shortName   | Short Name                                    | string       | "S012" |
| data.listGrid[].appointment[].serviceDetails[].serviceName | Service Name. | string | "Service A" |
| SelfMonitoringClinical Information                                        |                                              |             |      |
| data.listGrid[].selfMonitoringClinicalInformation                         | Self Monitoring Clinical Information object containing nested fields. | object       | {}   |
| data.listGrid[].selfMonitoringClinicalInformation.vitalSigns              | List of Vital Signs entries.                 | array<object/>| […] |
| data.listGrid[].selfMonitoringClinicalInformation.vitalSigns[]            | Vital Signs[] object containing nested fields.| object      | {}   |
| data.listGrid[].selfMonitoringClinicalInformation.vitalSigns[].bloodPressure | Blood Pressure.                            | string       | "89/90" |
| data.listGrid[].selfMonitoringClinicalInformation.vitalSigns[].weight     | Weight.                                      | number       | 80   |
| data.listGrid[].selfMonitoringClinicalInformation.vitalSigns[].temperature | Temperature. | number    | 37 |
| data.listGrid[].selfMonitoringClinicalInformation.vitalSigns[].height      | Height.      | number    | 89 |
| data.listGrid[].selfMonitoringClinicalInformation.vitalSigns[].respiration | Respiration. | number    | 90 |
| data.listGrid[].selfMonitoringClinicalInformation.vitalSigns[].pulseRate   | Pulse Rate.  | number    | 89 |
| data.listGrid[].selfMonitoringClinicalInformation.vitalSigns[].dateTime    | Date Time.   | date-time | "2025-03-04" |
| data.listGrid[].selfMonitoringClinicalInformation.vitalSigns[].notes       | Notes.       | string    | "Mild headache in the morning, resolved after medication." |
| Clinical Information                                                       |              |           |    |
| data.listGrid[].clinicalInformation                       | Clinical Information object containing nested fields. | object       | {}  |
| data.listGrid[].clinicalInformation.vitalSigns            | List of Vital Signs entries.                          | array<object/>| […] |
| data.listGrid[].clinicalInformation.vitalSigns[].bloodPressure | Blood Pressure.                                   | string       | "89/90" |
| data.listGrid[].clinicalInformation.vitalSigns[].weight   | Weight.                                              | number       | 80 |
| data.listGrid[].clinicalInformation.vitalSigns[].temperature | Temperature.                                       | number       | 37 |
| data.listGrid[].clinicalInformation.vitalSigns[].height   | Height.                                              | number       | 89 |
| data.listGrid[].clinicalInformation.vitalSigns[].respiration | Respiration.                                      | number       | 90 |
| data.listGrid[].clinicalInformation.vitalSigns[].pulseRate | Pulse Rate.                                        | number       | 89 |
| data.listGrid[].clinicalInformation.vitalSigns[].dateTime   | Date Time.   | string     | "2025-03-04" |
| data.listGrid[].clinicalInformation.vitalSigns[].notes      | Notes.       | string     | "Mild headache in the morning, resolved after medication." |
| VISITNOTES                                                  |              |            |    |
| data.listGrid[].clinicalInformation.visitNotes | List of Visit Notes entries.                 | array<object/>  | […]     |
| data.listGrid[].clinicalInformation.visitNotes[] | Visit Notes[] object containing nested fields. | object         | {}      |
| data.listGrid[].clinicalInformation.visitNotes[].date               | Date.                                      | date-time      | "2024-11-12"           |
| data.listGrid[].clinicalInformation.visitNotes[].chiefComplaints    | List of Chief Complaints entries.          | array<string/>  | […]                    |
| data.listGrid[].clinicalInformation.visitNotes[].chiefComplaints[]  | Chief Complaints[].                        | string         | "headache for 2 days"  |
| data.listGrid[].clinicalInformation.visitNotes[].injured            | Injured.                                   | boolean        | true                   |
| data.listGrid[].clinicalInformation.visitNotes[].historyOfPresentIllness | List of History Of Present Illness entries. | array<string/>  | […]                    |
| data.listGrid[].clinicalInformation.visitNotes[].historyOfPresentIllness[] | History Of Present Illness[].             | string         | ""                     |
| data.listGrid[].clinicalInformation.visitNotes[].reviewOfOtherSystems | List of Review Of Other Systems entries.  | array<object/>  | […]                    |
| data.listGrid[].clinicalInformation.visitNotes[].reviewOfOtherSystems[] | Review Of Other Systems[] object containing nested fields. | object         | {}          |
| data.listGrid[].clinicalInformation.visitNotes[].reviewOfOtherSystems[].notes | Notes.                                               | string         | "CNS notes" |
| data.listGrid[].clinicalInformation.visitNotes[].pastMedicalHistory    | List of Past Medical History entries.                 | array<string/>  | […]         |
| data.listGrid[].clinicalInformation.visitNotes[].pastMedicalHistory[]  | Past Medical History[].                               | string         | ""          |
| data.listGrid[].clinicalInformation.visitNotes[].familyAndSocialHistory | List of Family And Social History entries.            | array<string/>  | […]         |
| data.listGrid[].clinicalInformation.visitNotes[].familyAndSocialHistory[] | Family And Social History[].                         | string         | ""          |
| data.listGrid[].clinicalInformation.visitNotes[].generalExaminationObservation | General Examination Observation.                     | null           | null        |
| data.listGrid[].clinicalInformation.visitNotes[].localExamination      | Local Examination.                                    | null           | null        |
| data.listGrid[].clinicalInformation.visitNotes[].systemicExaminationObservation        | List of Systemic Examination Observation entries.          | array<object/>  | […]                      |
| data.listGrid[].clinicalInformation.visitNotes[].systemicExaminationObservation[]       | Systemic Examination Observation[] object containing nested fields. | object         | {}                       |
| data.listGrid[].clinicalInformation.visitNotes[].systemicExaminationObservation[].code  | Code.                                                      | string         | "CVS"                    |
| data.listGrid[].clinicalInformation.visitNotes[].systemicExaminationObservation[].name  | Name.                                                      | string         | "Cardiovascular System"  |
| data.listGrid[].clinicalInformation.visitNotes[].systemicExaminationObservation[].notes | Notes.                                                     | string         | "CNS notes"              |
| data.listGrid[].clinicalInformation.visitNotes[].doctorPlanOrSuggestion                 | Doctor Plan Or Suggestion.                                 | null           | null                     |
| data.listGrid[].clinicalInformation.visitNotes[].providerSpeciality                     | Provider Speciality.                                       | string         | "Pediatrician" |
ALLERGIES                                               |         |        |    |
| data.listGrid[].allergies                               | List of Allergies entries.                         | array<object/> | […] |
| data.listGrid[].allergies[]                             | Allergies[] object containing nested fields.       | object        | {} |
| data.listGrid[].allergies[].code                        | Code.                                              | null          | null |
| data.listGrid[].allergies[].category                    | Category.                                          | null          | null |
| data.listGrid[].allergies[].name                        | Name.                                              | null          | null |
| data.listGrid[].allergies[].criticality                | Criticality.                                       | null          | null |
| data.listGrid[].allergies[].verificationStatus          | Verification Status                                | null          | null |
| CHRONIC CONDITION                                         |         |        |    |
| data.listGrid[].chronicConditions                         | List of Chronic Conditions entries.              | array<object/> | […] |
| data.listGrid[].chronicConditions[]                       | Chronic Conditions[] object containing nested fields. | object | {} |
| data.listGrid[].chronicConditions[].code                  | Code.                                           | null          | null |
| data.listGrid[].chronicConditions[].category              | Category.                                       | null          | null |
| data.listGrid[].chronicConditions[].name                  | Name.                                           | null          | null |
| data.listGrid[].chronicConditions[].criticality           | Criticality.                                    | null          | null |
| data.listGrid[].chronicConditions[].verificationStatus    | Verification Status.                            | null          | null |
| LIFESTYLE INFORMATION                                     |         |        |    |
| data.listGrid[].lifeStyleInformation                   | Life Style Information object containing nested fields. | object | {} |
| data.listGrid[].lifeStyleInformation.smoking           | Smoking object containing nested fields.                | object | {} |
| data.listGrid[].lifeStyleInformation.smoking.using     | Using.                                                  | boolean| false |
| data.listGrid[].lifeStyleInformation.smoking.notes     | Notes.                                                  | null   | null |
| data.listGrid[].lifeStyleInformation.alcoholUse        | Alcohol Use object containing nested fields.           | object | {} |
| data.listGrid[].lifeStyleInformation.alcoholUse.using  | Using.                                                  | boolean| false |
| data.listGrid[].lifeStyleInformation.alcoholUse.notes  | Notes.                                                  | null   | null |
| data.listGrid[].lifeStyleInformation.drugUse           | Drug Use object containing nested fields.              | object | {} |
| data.listGrid[].lifeStyleInformation.drugUse.using     | Using.                                                  | boolean| true |
| data.listGrid[].lifeStyleInformation.drugUse.notes     | Notes.                                                  | null   | null |
| LAB REQUEST DETAILS                                        |                                                  |              |      |
| data.listGrid[].labRequestDetails[]                        | Lab Request Details[] object containing nested fields. | object   | {}   |
| data.listGrid[].labRequestDetails[].dateOccurred           | Date Occurred.                                   | date-time    | "2024-08-03" |
| data.listGrid[].labRequestDetails[].typeOfSpecimen        | Type Of Specimen object containing nested fields.| object       | {}   |
| data.listGrid[].labRequestDetails[].typeOfSpecimen.code   | Code.                                            | string       | "119300005" |
| data.listGrid[].labRequestDetails[].typeOfSpecimen.codeType | Code Type.                                     | string       | "SNOMED" |
| data.listGrid[].labRequestDetails[].specimenSite          | Specimen Site object containing nested fields.  | object       | {}   |
| data.listGrid[].labRequestDetails[].specimenSite.code     | Code.                                            | string       | "JNT" |
| data.listGrid[].labRequestDetails[].specimenSite.codeType | Code Type.                                     | string       | "SNOMED" |
| data.listGrid[].labRequestDetails[].specimenCollectedFrom | Specimen Collected From.                         | string       | "Recovered | Deceased | Patient" |
| data.listGrid[].labRequestDetails[].specimenCollectionVolumeInMl       | Specimen Collection Volume In Ml.        | string    | "500" |
| data.listGrid[].labRequestDetails[].specimenCollectorName               | Specimen Collector Name.                 | string    | "Juma Haule" |
| data.listGrid[].labRequestDetails[].specimenCollectorContactNumber      | Specimen Collector Contact Number.      | string    | "+255767652234" |
| data.listGrid[].labRequestDetails[].dateTimeSpecimenCollected           | DateTime Specimen Collected.             | date-time | "2024-08-03T10:00:00Z" |
| data.listGrid[].labRequestDetails[].dateTimeSpecimenReceived            | Date Time Specimen Received.             | date-time | "2024-08-03T10:00:00Z" |
| data.listGrid[].labRequestDetails[].specimenSentToLab                   | Specimen Sent To Lab.                    | boolean   | true |
| data.listGrid[].labRequestDetails[].dateTimeSpecimenSentToLab           | Date Time Specimen Sent To Lab.          | date-time | "2024-08-03T10:00:00Z" |
| data.listGrid[].labRequestDetails[].specimenRegisteredBy                | Specimen Registered By.                  | string    | "Juma Haule" |
| data.listGrid[].labRequestDetails[].dateTimeSpecimenRegistered          | Date Time Specimen Registered.           | date-time | "2024-08-03T10:00:00Z" |
| data.listGrid[].labRequestDetails[].requestingFacility                  | Requesting Facility object containing nested fields. | object | {} |
| data.listGrid[].labRequestDetails[].requestingFacility.code       | Code.       | string | "172-23" |
| data.listGrid[].labRequestDetails[].requestingFacility.careType   | Care Type.  | string | "ANC | DENTAL | EYE | FP" |
| data.listGrid[].labRequestDetails[].requestTypeCode               | Request Type Code. | string | "Diagnostic | Non-Diagnostic" |
| data.listGrid[].labRequestDetails[].clinicalCodes                 | List of Clinical Codes entries. | array<string/> | […] |
| data.listGrid[].labRequestDetails[].clinicalCodes[]               | Clinical Codes[]. | string | "A01.1" |
| data.listGrid[].labRequestDetails[].clinicalNotes                 | Clinical Notes. | string | "Patient has been experiencing symptoms for 2 days." |
| data.listGrid[].labRequestDetails[].receivingFacility             | Receiving Facility object containing nested fields. | object | {} |
| data.listGrid[].labRequestDetails[].receivingFacility.code        | Code.       | string | "172-23" |
| data.listGrid[].labRequestDetails[].receivingFacility.section     | Section.    | string | "Chemistry" |
| data.listGrid[].labRequestDetails[].requestedLabTests                 | List of Requested Lab Tests entries. | array<object/> | […] |
| data.listGrid[].labRequestDetails[].requestedLabTests[]               | Requested Lab Tests[] object containing nested fields. | object | {} |
| data.listGrid[].labRequestDetails[].requestedLabTests[].priority      | Priority.                            | string        | "S | R | A | U | T | C | E" |
| data.listGrid[].labRequestDetails[].requestedLabTests[].typeOfTest    | Type Of Test object containing nested fields. | object | {} |
| data.listGrid[].labRequestDetails[].requestedLabTests[].typeOfTest.code | Code.                              | string        | "12345-6" |
| data.listGrid[].labRequestDetails[].requestedLabTests[].typeOfTest.codeType | Code Type.                       | string        | "LOINC" |
| data.listGrid[].labRequestDetails[].requestedLabTests[].repeated      | Repeated.                            | number        | 0 |
| data.listGrid[].labRequestDetails[].labTestResults[]                  | Lab Test Results[] object containing nested fields. | object | {} |
| data.listGrid[].labRequestDetails[].labTestResults[].specimenAcceptanceStatus | Specimen Acceptance Status. | string        | "REJECTED /ACCEPTED" |
| data.listGrid[].labRequestDetails[].labTestResults[].specimenRejectionCodes[]           | Specimen Rejection Codes[] object containing nested fields. | object | {} |
| data.listGrid[].labRequestDetails[].labTestResults[].specimenRejectionCodes[].code     | Code.                                                       | string | "SPRJ001" |
| data.listGrid[].labRequestDetails[].labTestResults[].specimenRejectionCodes[].codeType | Code Type.                                                  | string | "GENERAL" |
| data.listGrid[].labRequestDetails[].labTestResults[].typeOfTest                         | Type Of Test object containing nested fields.               | object | {} |
| data.listGrid[].labRequestDetails[].labTestResults[].typeOfTest.code                    | Code.                                                       | string | "12345-6" |
| data.listGrid[].labRequestDetails[].labTestResults[].typeOfTest.codeType                | Code Type.                                                  | string | "LOINC" |
| data.listGrid[].labRequestDetails[].labTestResults[].testOrderDate                      | Test Order Date.                                            | date-time | "2024-08-03T10:00:00Z" |
| data.listGrid[].labRequestDetails[].requestedLabTests[].obrSetId                        | Obr Set Id.                                                 | number | 1 |
| data.listGrid[].labRequestDetails[].labTestResults[].analyzerCode                   | Analyzer Code object containing nested fields. | object | {} |
| data.listGrid[].labRequestDetails[].labTestResults[].analyzerCode.code              | Code.                                           | string | "56322" |
| data.listGrid[].labRequestDetails[].labTestResults[].analyzerCode.codeType          | Code Type.                                     | string | "GMDN" |
| data.listGrid[].labRequestDetails[].labTestResults[].testResultDate                 | Test Result Date.                              | date-time | "2024-08-03T10:00:00Z" |
| data.listGrid[].labRequestDetails[].labTestResults[].testingFacilityCode            | Testing Facility Code.                          | string | "127-89-0" |
| data.listGrid[].labRequestDetails[].referringSpecimenId                             | Referring Specimen Id.                          | string | "983776" |
| data.listGrid[].labRequestDetails[].labTestResults[].dateTimeResultsRegistered      | Date Time Results Registered                   | date-time | "2024-08-03T10:00:00Z" |
| data.listGrid[].labRequestDetails[].labTestResults[].resultsAuthorisedBy            | Results Authorised By.                          | string | "Juma Haule" |
| data.listGrid[].labRequestDetails[].labTestResults[].dateTimeResultsAuthorized      | Date Time Results Authorized.                  | date-time | "2024-08-03T10:00:00Z" |
| data.listGrid[].labRequestDetails[].labTestResults[].specimenTestedBy               | Specimen Tested By.                             | string | "Juma Haule" |
| data.listGrid[].labRequestDetails[].labTestResults[].targetTimeDays                 | Target Time Days.                               | number | 10 |
| data.listGrid[].labRequestDetails[].labTestResults[].targetTimeMins                 | Target Time Mins.                               | number | 10 |
| data.listGrid[].labRequestDetails[].labTestResults[].results                         | List of Results entries.                        | array<object/> | […] |
| data.listGrid[].labRequestDetails[].labTestResults[].results[]                       | Results[] object containing nested fields.     | object | {} |
| data.listGrid[].labRequestDetails[].labTestResults[].results[].parameter         | Parameter.                                      | null   | null |
| data.listGrid[].labRequestDetails[].labTestResults[].results[].releaseDate       | Release Date.                                  | date-time | "2024-08-03T10:00:00Z" |
| data.listGrid[].labRequestDetails[].labTestResults[].resultStatus                | Result Status object containing nested fields. | object | {} |
| data.listGrid[].labRequestDetails[].labTestResults[].resultStatus.code           | Code.                                          | string | "R" |
| data.listGrid[].labRequestDetails[].labTestResults[].resultStatus.codeType       | Code Type.                                     | string | "HL7" |
| data.listGrid[].labRequestDetails[].labTestResults[].results[].obrSetId          | Obr Set Id.                                    | number | 1 |
| data.listGrid[].labRequestDetails[].labTestResults[].results[].obxSetId          | Obx Set Id.                                    | number | 1 |
| data.listGrid[].labRequestDetails[].labTestResults[].results[].obxSubId          | Obx Sub Id.                                    | number | 1 |
| data.listGrid[].labRequestDetails[].labTestResults[].results[].result                 | Result.                                     | string | "Positive" |
| data.listGrid[].labRequestDetails[].labTestResults[].results[].codedValue             | Coded Value object containing nested fields. | object | {} |
| data.listGrid[].labRequestDetails[].labTestResults[].results[].codedValue.code        | Code.                                       | string | "LA6576-8" |
| data.listGrid[].labRequestDetails[].labTestResults[].results[].codedValue.type        | Type                                        | string | "LOINC" |
| data.listGrid[].labRequestDetails[].labTestResults[].results[].observation            | Observation object containing nested fields. | object | {} |
| data.listGrid[].labRequestDetails[].labTestResults[].results[].observation.code       | Code.                                       | string | "LA6576-8" |
| data.listGrid[].labRequestDetails[].labTestResults[].results[].observation.type       | Type.                                       | string | "LOINC" |
| data.listGrid[].labRequestDetails[].labTestResults[].results[].confirmedDiagnosis     | Confirmed Diagnosis object containing nested fields. | object | {} |
| data.listGrid[].labRequestDetails[].labTestResults[].results[].confirmedDiagnosis.code       | Code.                  | string | "A01.1" |
| data.listGrid[].labRequestDetails[].labTestResults[].results[].confirmedDiagnosis.codeType   | Code Type.             | string | "ICD-10" |
| data.listGrid[].labRequestDetails[].labTestResults[].results[].abnormalFlagCode              | Abnormal Flag Code.    | string | "AA" |
| data.listGrid[].labRequestDetails[].labTestResults[].results[].dateTimeValue                 | Date Time Value.       | date-time | "2024-08-03T10:00:00Z" |
| data.listGrid[].labRequestDetails[].labTestResults[].results[].resultSemiquantitive           | Result Semiquantitive. | string | "1+" |
| data.listGrid[].labRequestDetails[].labTestResults[].results[].note                           | Note.                  | boolean | true |
| data.listGrid[].labRequestDetails[].labTestResults[].results[].workUnitsInMinutes             | Work Units In Minutes. | number | 45 |
| data.listGrid[].labRequestDetails[].labTestResults[].results[].costUnits           | Cost Units.       | number | 56700 |
| data.listGrid[].labRequestDetails[].labTestResults[].results[].valueType           | Value Type.       | string | "NM" |
| data.listGrid[].labRequestDetails[].labTestResults[].results[].standardCode       | Standard Code.    | boolean | true |
| data.listGrid[].labRequestDetails[].labTestResults[].results[].unit                | Unit.             | null   | null |
| data.listGrid[].labRequestDetails[].labTestResults[].results[].lowRange            | Low Range.        | null   | null |
| data.listGrid[].labRequestDetails[].labTestResults[].results[].highRange           | High Range.       | null   | null |
| data.listGrid[].labRequestDetails[].labTestResults[].results[].remarks             | Remarks           | null   | null |
| data.listGrid[].labRequestDetails[].postLabTestResults                             | List of Post Lab Test Results entries. | array<object/> | […] |
| data.listGrid[].labRequestDetails[].postLabTestResults[]                                         | Post Lab Test Results[] object containing nested fields. | object | {} |
| data.listGrid[].labRequestDetails[].postLabTestResults[].ObrSetId                                | Obr Set Id.                                             | number | 2 |
| data.listGrid[].labRequestDetails[].postLabTestResults[].typeOfTest                              | Type Of Test.                                          | string | "12345-6" |
| data.listGrid[].labRequestDetails[].postLabTestResults[].dateTimeResultsReceivedAtFacility       | Date Time Results Received At Facility.               | date-time | "2024-08-03T10:00:00Z" |
| data.listGrid[].labRequestDetails[].postLabTestResults[].dateTimeResultsprovidedToClient         | Date Time Resultsprovided To Client.                  | date-time | "2024-08-03T10:00:00Z" |
| data.listGrid[].diagnosisDetails                                                                 | List of Diagnosis Details entries.                     | array<object/> | […] |
| data.listGrid[].diagnosisDetails[].certainty                                                    | Certainty.                                             | string | "CONFIRMED" |
| data.listGrid[].diagnosisDetails[].diagnosis                                                    | Diagnosis.                                             | string | "A01.1 Typhoid" |
| data.listGrid[].diagnosisDetails[].diagnosisCode                                                | Diagnosis Code.                                        | string | "A01.1" |
| data.listGrid[].diagnosisDetails[].diagnosisDate                                                | Diagnosis Date.                                        | date-time | "2024-08-01" |
| data.listGrid[].diagnosisDetails[].dateOfSymptomsOnset                                          | Date Of Symptoms Onset.                                | date-time | "2024-07-30" |
| data.listGrid[].diagnosisDetails[].diagnosisDescription                                         | Diagnosis Description.                                 | string | "CONFIRMED" |
| data.listGrid[].medicationDetails                                                                | List of Medication Details entries.                    | array<object/> | […] |
| data.listGrid[].medicationDetails[].name                                                        | Name.                                                  | string | "TRAMADOL HCL  50 MG CAP" |
| data.listGrid[].medicationDetails[].code                                                        | Code.                                                  | string | "2.01.0131" |
| data.listGrid[].medicationDetails[].codeStandard                                                | Code Standard.                                        | string | "MNH CODE”" |
| data.listGrid[].medicationDetails[].dosage                                          | Dosage object containing nested fields. | object | {} |
| data.listGrid[].medicationDetails[].dosage.dose                                     | Dose.                                   | string | "600mg/dl" |
| data.listGrid[].medicationDetails[].dosage.frequency                                | Frequency                               | string | "twice daily" |
| data.listGrid[].medicationDetails[].dosage.route                                    | Route                                   | string | "intravenous" |
| data.listGrid[].medicationDetails[].dosage.instructions                             | Instructions.                            | string | "" |
| data.listGrid[].medicationDetails[].dosage.quantity                                 | Quantity                                | string | "60" |
| data.listGrid[].medicationDetails[].dosage.duration                                 | Duration                                | string | "30 Days" |
| data.listGrid[].medicationDetails[].dosage.days                                     | List of Days entries.                   | array<number/> | […] |
| data.listGrid[].medicationDetails[].dosage.days[]                                   | Days[]                                  | number | 1 |
| data.listGrid[].medicationDetails[].dosage.schedule                        | List of Schedule entries.         | array<date-time/> | […] |
| data.listGrid[].medicationDetails[].dosage.schedule[]                      | Schedule[]                        | string           | "2024-01-01" |
| data.listGrid[].medicationDetails[].dosage.dosageDates                     | List of Dosage Dates entries.     | array<date-time/> | […] |
| data.listGrid[].medicationDetails[].dosage.dosageDates[]                   | Dosage Dates[].                    | date-time        | "2024-01-01" |
| data.listGrid[].medicationDetails[].issued                                 | Issued object containing nested fields. | object | {} |
| data.listGrid[].medicationDetails[].issued.quantity                        | Quantity.                         | string           | "60.000" |
| data.listGrid[].medicationDetails[].orderDate                               | Order Date.                        | date-time        | "2024-01-01" |
| data.listGrid[].medicationDetails[].treatmentType                           | Treatment Type                     | string           | "chemoTherapy" |
| data.listGrid[].medicationDetails[].refillStatus                             | Refill Status                      | string           | "served" |
| data.listGrid[].medicationDetails[].currentRefill                            | Current Refill                     | number           | 2 |
| data.listGrid[].medicationDetails[].maxRefill                                | Max Refill                          | number           | 5 |
| data.listGrid[].medicationDetails[].paymentDetails                           | Payment Details object containing nested fields. | object | {} |
| data.listGrid[].medicationDetails[].paymentDetails.controlNumber            | Control Number                      | string           | "96999484838829394" |
| data.listGrid[].medicationDetails[].paymentDetails.statusCode               | Status Code                         | string           | "200" |
| data.listGrid[].medicationDetails[].paymentDetails.status                | Status                              | string | "Successful" |
| data.listGrid[].medicationDetails[].paymentDetails.type    | Type.       | string    | "CASH"  |
| data.listGrid[].medicationDetails[].paymentDetails.description           | Description                         | string | "This was successful" |
| data.listGrid[].treatmentDetails                                         | Treatment Details object containing nested fields | object | {} |
| data.listGrid[].treatmentDetails.surgery                                  | List of Surgery entries             | array<object/> | […] |
| data.listGrid[].treatmentDetails.surgery[]                                | Surgery[] object containing nested fields | object | {} |
| data.listGrid[].treatmentDetails.symptomatic                              | Symptomatic                          | null  | null |
| data.listGrid[].treatmentDetails.hormoneTherapy[]                         | Hormone Therapy[] object containing nested fields | object | {} |
| data.listGrid[].treatmentDetails.surgery[].reason                         | Reason                               | string | "remove tumor" |
| data.listGrid[].treatmentDetails.surgery[].report                         | Report object containing nested fields | object | {} |
| data.listGrid[].treatmentDetails.chemoTherapy[]                            | Chemo Therapy[] object containing nested fields | object | {} |
| data.listGrid[].treatmentDetails.hormoneTherapy                           | List of Hormone Therapy entries     | array<object/> | […] |
| data.listGrid[].treatmentDetails.radioTherapy[]                            | Radio Therapy[] object containing nested fields | object | {} |
| data.listGrid[].treatmentDetails.alternativeTreatment                     | Alternative Treatment                | null  | null |
| data.listGrid[].treatmentDetails.chemoTherapy[].stage                      | Stage                                | number | 2 |
| data.listGrid[].treatmentDetails.surgery[].diagnosis                       | Diagnosis                            | string | "C50" |
| data.listGrid[].treatmentDetails.chemoTherapy                              | List of Chemo Therapy entries       | array<object/> | […] |
| data.listGrid[].treatmentDetails.radioTherapy                              | List of Radio Therapy entries       | array<object/> | […] |
| data.listGrid[].treatmentDetails.radioTherapy[].report                     | List of Report entries              | array<object/> | […] |
| data.listGrid[].treatmentDetails.hormoneTherapy[].stage                    | Stage                                | number | 2 |
| data.listGrid[].treatmentDetails.surgery[].report.steps                     | Steps                                | null  | null |
| data.listGrid[].treatmentDetails.chemoTherapy[].regiment                   | Regiment                             | string | "1" |
| data.listGrid[].treatmentDetails.medicalProcedureDetails                  | List of Medical Procedure Details entries | array<object/> | […] |
| data.listGrid[].treatmentDetails.radioTherapy[].report[]                   | Report[] object containing nested fields | object | {} |
| data.listGrid[].treatmentDetails.surgery[].report.remarks                  | Remarks                               | null  | null |
| data.listGrid[].eyeClinicDetails                                  | Eye Clinic Details object containing nested fields | object | {} |
| data.listGrid[].eyeClinicDetails.Refracted                        | Refracted                                          | boolean | true |
| data.listGrid[].eyeClinicDetails.spectaclesPrescribed             | Spectacles Prescribed                               | boolean | true |
| data.listGrid[].eyeClinicDetails.spectacleDispensed               | Spectacle Dispensed                                 | boolean | true |
| data.listGrid[].eyeClinicDetails.contactLenseDispensed            | Contact Lense Dispensed                              | boolean | false |
| data.listGrid[].eyeClinicDetails.prescribedWithLowVision          | Prescribed With Low Vision                           | boolean | true |
| data.listGrid[].eyeClinicDetails.diagnosedWithLowVisionI          | Diagnosed With Low Vision I                           | boolean | true |
| data.listGrid[].eyeClinicDetails.diagnosedWithLowVisionII         | Diagnosed With Low Vision II                          | boolean | true |
| data.listGrid[].eyeClinicDetails.isDispensedWithLowVisionDevice   | Is Dispensed With Low Vision Device                   | boolean | true |
| data.listGrid[].radiologyDetails                 | List of Radiology Details entries | array<object/> | […] |
| data.listGrid[].radiologyDetails[]   | Radiology Details[] object containing nested fields | object    | {}            |
| data.listGrid[].radiologyDetails[].testDate      | Test Date                          | date-time   | "2024-08-08" |
| data.listGrid[].radiologyDetails[].testTypeName  | Test Type Name                     | string      | "MRI" |
| data.listGrid[].radiologyDetails[].testTypeCode  | Test Type Code                     | string      | "MRI" |
| data.listGrid[].radiologyDetails[].testReport    | Test Report                        | string      | "" |
| data.listGrid[].radiologyDetails[].bodySite      | Body Site                          | null        | null |
| data.listGrid[].radiologyDetails[].url           | Url                                | string      | "http://192.168.10.10/pacs/{mrn}-mri.dcm" |
| data.listGrid[].antenatalCareDetails.date                    | Date                                     | string    | "2024-11-01"       |
| data.listGrid[].antenatalCareDetails.pregnancyAgeInWeeks     | Pregnancy Age In Weeks                    | null      | null               |
| data.listGrid[].antenatalCareDetails.lastAncVisitDate        | Last ANC Visit Date                       | date-time | "2024-01-01"       |
| data.listGrid[].antenatalCareDetails.positiveHivStatusBeforeService | Positive HIV Status Before Service | boolean   | false              |
| data.listGrid[].antenatalCareDetails.referredToCTC           | Referred To CTC                           | boolean   | false              |
| data.listGrid[].antenatalCareDetails.referredIn              | Referred In                               | boolean   | false              |
| data.listGrid[].antenatalCareDetails.referredOut             | Referred Out                              | boolean   | false              |
| data.listGrid[].antenatalCareDetails.counselling[].name      | Name of counselling                       | string    | "Infant feeding"   |
| data.listGrid[].antenatalCareDetails.counselling[].code                   | Counselling code                                  | string    | "L35909"      |
| data.listGrid[].antenatalCareDetails.providedWithHivCounsellingBeforeLabTest | Provided With HIV Counselling Before Lab Test | boolean   | false         |
| data.listGrid[].antenatalCareDetails.prophylaxis.providedWithLLIN         | Provided With LLIN                                | boolean   | false         |
| data.listGrid[].antenatalCareDetails.prophylaxis.providedWithIPT2         | Provided With IPT2                                | boolean   | false         |
| data.listGrid[].antenatalCareDetails.prophylaxis.providedWithIPT3         | Provided With IPT3                                | boolean   | false         |
| data.listGrid[].antenatalCareDetails.prophylaxis.providedWithIPT4         | Provided With IPT4                                | boolean   | false         |
| data.listGrid[].antenatalCareDetails.prophylaxis.providedWithIFFolic60Tablets | Provided With IFFolic60 Tablets                | boolean   | false         |
| data.listGrid[].antenatalCareDetails.prophylaxis.providedWithMebendazoleOrAlbendazole | Provided With Mebendazole Or Albendazole | boolean   | false         |
| data.listGrid[].postnatalDetails.hivDetails.status                   | HIV Status                         | string    | "Negative"    |
| data.listGrid[].postnatalDetails.hivDetails.code                     | HIV Code                            | string    | "LA6577-6"    |
| data.listGrid[].postnatalDetails.hivDetails.hivTestNumber            | HIV Test Number                     | number    | 2             |
| data.listGrid[].antenatalCareDetails.syphilisDetails.status          | Syphilis Status                     | string    | "Negative"    |
| data.listGrid[].antenatalCareDetails.syphilisDetails.code            | Syphilis Code                       | string    | "LA6577-6"    |
| data.listGrid[].antenatalCareDetails.syphilisDetails.providedWithTreatment | Provided With Treatment          | boolean   | false         |
| data.listGrid[].familyPlanningDetails.spouseHivStatus.status         | Spouse HIV Status                  | string    | "Negative"            |
| data.listGrid[].familyPlanningDetails.spouseHivStatus.referredToCTC  | Referred to CTC                     | boolean   | false                 |
| data.listGrid[].familyPlanningDetails.breastFeeding                  | Breast Feeding                      | boolean   | true                  |
| data.listGrid[].familyPlanningDetails.sideEffects.bleeding           | Side Effect: Bleeding               | boolean   | true                  |
| data.listGrid[].familyPlanningDetails.sideEffects.headache           | Side Effect: Headache               | boolean   | true                  |
| data.listGrid[].familyPlanningDetails.sideEffects.gotPregnancy       | Side Effect: Got Pregnancy          | boolean   | true                  |
| data.listGrid[].childHealthDetails.serviceModality                   | Child Health Service Modality       | string    | "CAMPAIGN|ROUTINE"    |
| data.listGrid[].childHealthDetails.prophylaxis.albendazole            | Albendazole details                          | object    | {}                |
| data.listGrid[].childHealthDetails.prophylaxis.vitaminA               | Vitamin A details                            | object    | {}                |
| data.listGrid[].childHealthDetails.prophylaxis.vitaminA.administered  | Vitamin A Administered                       | boolean   | true              |
| data.listGrid[].childHealthDetails.prophylaxis.providedWithLLIN       | Provided With LLIN                            | boolean   | true              |
| data.listGrid[].childHealthDetails.infantFeeding                      | Infant Feeding Method                         | string    | "EBF|MF"          |
| data.listGrid[].childHealthDetails.providedWithInfantFeedingCounselling | Provided With Infant Feeding Counselling     | boolean   | true              |
| data.listGrid[].childHealthDetails.hasBeenBreastFedFor24Month         | Breastfed for 24 months                       | boolean   | true              |
| data.listGrid[].childHealthDetails.motherHivStatus                    | Mother's HIV Status                           | object    | {}                |
| data.listGrid[].childHealthDetails.motherHivStatus.status     | Mother's HIV Status                         | string    | "Negative"                                           |
| data.listGrid[].childHealthDetails.motherHivStatus.testingDate| Date of Mother's HIV Test                   | date-time | "2021-04-09"                                        |
| data.listGrid[].childHealthDetails.referredToCTC             | Referred to CTC                             | boolean   | true                                                  |
| data.listGrid[].cpacDetails.pregnancyAgeInWeeks              | Pregnancy Age in Weeks                       | number    | 12                                                    |
| data.listGrid[].cpacDetails.causeOfAbortion                  | Cause of Abortion                            | string    | "SPONTANEOUS|SAVELIFE|DRUGUSESIDEEFFECTS|OTHERS"    |
| data.listGrid[].cpacDetails.afterAbortionServices            | After Abortion Services                      | string    | "MVA|MEDICALTREATMENT|SHARPCURRATAGE"               |
| data.listGrid[].cpacDetails.positiveHIVStatusBeforeAbortion  | Positive HIV Status Before Abortion          | boolean   | true                                                  |
| data.listGrid[].cpacDetails.hivTest                          | HIV Test Details                             | object    | {}                                                    |
| data.listGrid[].cpacDetails.hivTest.status                   | HIV Test Status                              | string    | "Negative"                                           |
| data.listGrid[].cecap.cancerScreeningDetails.cervicalCancer.suspected          | Suspected Cervical Cancer              | boolean   | true          |
| data.listGrid[].cecap.cancerScreeningDetails.cervicalCancer.screenedWithVIA   | Screened with VIA                      | boolean   | true          |
| data.listGrid[].cecap.cancerScreeningDetails.cervicalCancer.screenedWithHPVDNA| Screened with HPV DNA                  | boolean   | true          |
| data.listGrid[].cecap.cancerScreeningDetails.cervicalCancer.viaTestPositive    | VIA Test Positive                       | boolean   | false         |
| data.listGrid[].cecap.cancerScreeningDetails.cervicalCancer.hpvDNAPositive     | HPV DNA Test Positive                   | boolean   | false         |
| data.listGrid[].cecap.cancerScreeningDetails.cervicalCancer.diagnosedWithLargeLesion | Diagnosed with Large Lesion       | boolean   | true          |
| data.listGrid[].cecap.cancerScreeningDetails.cervicalCancer.diagnosedWithSmallOrModerateLesion | Diagnosed with Small or Moderate Lesion | boolean   | true          |
| data.listGrid[].cecap.cancerScreeningDetails.cervicalCancer.treatedWithCryo | Treated with Cryotherapy            | boolean   | true          |
| data.listGrid[].cecap.cancerScreeningDetails.cervicalCancer.treatedWithThermo | Treated with Thermotherapy          | boolean   | false         |
| data.listGrid[].cecap.cancerScreeningDetails.cervicalCancer.treatedWithLEEP | Treated with LEEP                  | boolean   | true          |
| data.listGrid[].cecap.cancerScreeningDetails.cervicalCancer.firstTimeScreening | First Time Screening               | boolean   | false         |
| data.listGrid[].cecap.cancerScreeningDetails.cervicalCancer.treatedOnTheSameDay | Treated on the Same Day            | boolean   | false         |
| data.listGrid[].cecap.cancerScreeningDetails.cervicalCancer.complicationsAfterTreatment | Complications After Treatment            | boolean   | true          |
| data.listGrid[].cecap.cancerScreeningDetails.cervicalCancer.foundWithHivAndReferredToCTC | Found With HIV and Referred to CTC       | boolean   | true          |
| data.listGrid[].postnatalDetails.date | Date | string | "2024-11-01" |
| data.listGrid[].postnatalDetails.positiveHivStatusBeforeService | Positive HIV Status Before Service | boolean | false |
| data.listGrid[].postnatalDetails.hivStatusAsSeenFromAncCard | HIV Status As Seen From ANC Card | string | "Negative" |
| data.listGrid[].postnatalDetails.hivDetails.status | Status | string | "Negative" |
| data.listGrid[].postnatalDetails.hivDetails.code | Code | string | "LA6577-6" |
| data.listGrid[].postnatalDetails.hivDetails.hivTestNumber | HIV Test Number | number | 2 |
| data.listGrid[].postnatalDetails.motherAndChildOrigin | Mother And Child Origin | string | "LD/TBA/H/RD/RHC/RHS" |
| data.listGrid[].postnatalDetails.placeOfBirth | Place Of Birth | string | "TBA/H/BBA" |
| data.listGrid[].antenatalCareDetails.prophylaxis | Prophylaxis object containing nested fields | object | {} |
| data.listGrid[].postnatalDetails.prophylaxis.providedWithAntenatalCorticosteroids | Provided With Antenatal Corticosteroids | boolean | false |
| data.listGrid[].postnatalDetails.prophylaxis.provideWithVitaminA | Provide With Vitamin A | boolean | false |
| data.listGrid[].postnatalDetails.prophylaxis.providedWithFEFO | Provided With FEFO | boolean | false |
| data.listGrid[].antenatalCareDetails.counselling | List of Counselling entries | array<object/> | […] |
| data.listGrid[].postnatalDetails.counselling[].name | Name | string | "Infant feeding" |
| data.listGrid[].postnatalDetails.counselling[].code | Code | string | "L35909" |
| data.listGrid[].postnatalDetails.referredToClinicForFurtherServices | Referred To Clinic For Further Services | boolean | true |
| data.listGrid[].postnatalDetails.demagedNipples | Demaged Nipples object containing nested fields | object | {} |
| data.listGrid[].postnatalDetails.demagedNipples.provided | Provided | boolean | true |
| data.listGrid[].postnatalDetails.demagedNipples.code | Code | string | "61149-1" |
| data.listGrid[].postnatalDetails.mastitis.provided | Provided | boolean | true |
| data.listGrid[].postnatalDetails.mastitis.code | Code | string | "77392-7" |
| data.listGrid[].postnatalDetails.breastAbscess.provided | Provided | boolean | true |
| data.listGrid[].postnatalDetails.breastAbscess.code | Code | string | "77391-9" |
| data.listGrid[].postnatalDetails.fistula | Fistula object containing nested fields | object | {} |
| data.listGrid[].postnatalDetails.fistula.provided | Provided | boolean | true |
| data.listGrid[].postnatalDetails.fistula.code | Code | string | "37104-4" |
| data.listGrid[].postnatalDetails.puerperalPsychosis | Puerperal Psychosis object containing nested fields | object | {} |
| data.listGrid[].postnatalDetails.puerperalPsychosis.provided | Provided | boolean | true |
| data.listGrid[].postnatalDetails.puerperalPsychosis.code | Code | string | "77385-1" |
| data.listGrid[].postnatalDetails.daysSinceDelivery | Days Since Delivery | number | 2 |
| data.listGrid[].postnatalDetails.breastFeedingDetails | Breast Feeding Details | null | null |
| data.listGrid[].postnatalDetails.neonatalDeathDetails | List of Neonatal Death Details entries | array<object/> | […] |
| data.listGrid[].postnatalDetails.neonatalDeathDetails[].dateOfDeath | Date Of Death | date-time | "2024-08-07" |
| data.listGrid[].postnatalDetails.neonatalDeathDetails[].lineA | Line A | string | "A01.1" |
| data.listGrid[].postnatalDetails.neonatalDeathDetails[].lineB | Line B | string | "A01.1" |
| data.listGrid[].postnatalDetails.neonatalDeathDetails[].lineC | Line C | null | null |
| data.listGrid[].postnatalDetails.neonatalDeathDetails[].lineD | Line D | null | null |
| data.listGrid[].postnatalDetails.neonatalDeathDetails[].causeOfDeathOther | Cause Of Death Other | null | null |
| data.listGrid[].postnatalDetails.neonatalDeathDetails[].mannerOfDeath | Manner Of Death | null | null |
| data.listGrid[].postnatalDetails.neonatalDeathDetails[].placeOfDeath | Place Of Death | string | "On the route to health facility" |
| data.listGrid[].postnatalDetails.birthDetails[] | Birth Details[] object containing nested fields | object | {} |
| data.listGrid[].postnatalDetails.birthDetails[].dateOfBirth | Date Of Birth | null | null |
| data.listGrid[].postnatalDetails.birthDetails[].weightInKgs | Weight In Kgs | null | null |
| data.listGrid[].postnatalDetails.birthDetails[].multipleBirth | Multiple Birth | boolean | false |
| data.listGrid[].postnatalDetails.birthDetails[].birthOrder | Birth Order | null | null |
| data.listGrid[].childHealthDetails.infantFeeding | Infant Feeding | string | "EBF|MF" |
| data.listGrid[].postnatalDetails.birthDetails[].gender | Gender | string | "female" |
| data.listGrid[].postnatalDetails.birthDetails[].macerated | Macerated | boolean | false |
| data.listGrid[].postnatalDetails.birthDetails[].fresh | Fresh | boolean | false |
| data.listGrid[].postnatalDetails.birthDetails[].providedWithKmc | Provided With KMC | boolean | true |
| data.listGrid[].postnatalDetails.birthDetails[].hb | Hb | string | "12" |
| data.listGrid[].postnatalDetails.birthDetails[].hbigTested | HBIG Tested | boolean | true |
| data.listGrid[].postnatalDetails.birthDetails[].hivDnaPCRTested | HIV DNA PCR Tested | boolean | true |
| data.listGrid[].postnatalDetails.birthDetails[].childHivStatus | Child HIV Status | string | "Negative" |
| data.listGrid[].postnatalDetails.birthDetails[].infections | Infections object containing nested fields | object | {} |
| data.listGrid[].postnatalDetails.birthDetails[].infections.hasSepticaemia | Has Septicaemia | boolean | true |
| data.listGrid[].postnatalDetails.birthDetails[].infections.hasOmphalitis | Has Omphalitis | boolean | true |
| data.listGrid[].postnatalDetails.birthDetails[].infections.hasSkinInfection | Has Skin Infection | boolean | true |
| data.listGrid[].postnatalDetails.birthDetails[].infections.hasOcularInfection | Has Ocular Infection | boolean | true |
| data.listGrid[].postnatalDetails.birthDetails[].infections.hasJaundice | Has Jaundice | boolean | true |
| data.listGrid[].postnatalDetails.birthDetails[].outcomeDetails | Outcome Details object containing nested fields | object | {} |
| data.listGrid[].postnatalDetails.birthDetails[].outcomeDetails.dischargedHome | Discharged Home | boolean | false |
| data.listGrid[].postnatalDetails.birthDetails[].outcomeDetails.referredToNCU | Referred To NCU | boolean | false |
| data.listGrid[].postnatalDetails.birthDetails[].outcomeDetails.referredToHospital | Referred To Hospital | boolean | false |
| data.listGrid[].postnatalDetails.birthDetails[].outcomeDetails.referredToHealthFacility | Referred To Health Facility | boolean | false |
| data.listGrid[].childHealthDetails.motherHivStatus | Mother HIV Status object containing nested fields | object | {} |
| data.listGrid[].postnatalDetails.birthDetails[].motherHivStatus.name | Name | null | null |
| data.listGrid[].postnatalDetails.birthDetails[].motherHivStatus.code | Code | null | null |
| data.listGrid[].postnatalDetails.birthDetails[].providedWithARV | Provided With ARV | null | null |
| data.listGrid[].postnatalDetails.birthDetails[].vaccinationDetails | List of Vaccination Details entries | array<object/> | […] |
| data.listGrid[].postnatalDetails.birthDetails[].vaccinationDetails[].code | Code | null | null |
| data.listGrid[].postnatalDetails.birthDetails[].vaccinationDetails[].date | Date | date-time | "2024-08-07" |
| data.listGrid[].postnatalDetails.birthDetails[].vaccinationDetails[].type | Type | string | "BCG" |
| data.listGrid[].postnatalDetails.birthDetails[].vaccinationDetails[].name | Name | string | " " |
| data.listGrid[].vaccinationDetails[].vaccinationModality | Vaccination Modality | null | null |
| data.listGrid[].postnatalDetails.birthDetails[].vaccinationDetails[].status | Status | string | "Completed" |
| data.listGrid[].postnatalDetails.birthDetails[].vaccinationDetails[].notes | Notes | null | null |
| data.listGrid[].postnatalDetails.birthDetails[].vaccinationDetails[].dosage | Dosage | number | 1 |
| data.listGrid[].vaccinationDetails[].reaction.reactionDate | Reaction Date | null | null |
| data.listGrid[].vaccinationDetails[].reaction.notes | Notes | null | null |
| data.listGrid[].vaccinationDetails[].reaction.reported | Reported | boolean | false |
| data.listGrid[].postnatalDetails.birthDetails[].breatheAssistance | Breathe Assistance object containing nested fields | object | {} |
| data.listGrid[].postnatalDetails.birthDetails[].breatheAssistance.provided | Provided | boolean | true |
| data.listGrid[].postnatalDetails.birthDetails[].breatheAssistance.code | Code | string | "73764-0" |
| data.listGrid[].postnatalDetails.birthDetails[].otherServices | List of Other Services entries | array<unknown/> | […] |
| data.listGrid[].laborAndDeliveryDetails.birthDetails[].otherServices | List of Other Services entries | array<unknown/> | […] |
| data.listGrid[].billingsDetails | List of Billings Details entries | array<object/> | […] |
| data.listGrid[].billingsDetails[].billID | Bill Id | string | "2939" |
| data.listGrid[].billingsDetails[].billingCode | Billing Code | string | "7328TY" |
| data.listGrid[].billingsDetails[].billType | Bill Type | string | "Insurance" |
| data.listGrid[].billingsDetails[].insuranceCode | Insurance Code | string | "INS001" |
| data.listGrid[].billingsDetails[].insuranceName | Insurance Name | string | "NHIF" |
| data.listGrid[].billingsDetails[].amountBilled | Amount Billed | number | 24000 |
| data.listGrid[].billingsDetails[].exemptionType | Exemption Type | null | null |
| data.listGrid[].billingsDetails[].wavedAmount | Waved Amount | null | null |
| data.listGrid[].billingsDetails[].billDate | Bill Date | null | null |
| data.listGrid[].billingsDetails[].standardCode | Standard Code | string | "LOINC" |
| data.listGrid[].referralDetails.referralDate | Referral Date | string | "24-08-07" |
| data.listGrid[].outcomeDetails.referred | Referred | boolean | false |
| data.listGrid[].referralDetails.reason[] | Reason | string | "Specialized Surgery Required" |
| data.listGrid[].referralDetails.referralNumber | Referral Number | string | "56430-096-2024" |
| data.listGrid[].referralDetails.hfrCode | HFR Code | string | "111890-0" |
| data.listGrid[].referralDetails.referringClinician.name | Name of Referring Clinician | string | "Dr. John Doe" |
| data.listGrid[].referralDetails.referringClinician.phoneNumber | Phone Number | string | "+255712345678" |
| data.listGrid[].referralDetails.referringClinician.MCTCode | MCT Code | string | "MCT123456" |
| data.listGrid[].deathRegistryDetails.dateOfDeath | Date Of Death | date-time | "2024-08-07" |
| data.listGrid[].deathRegistryDetails.lineA | Line A | string | "A01.1" |
| data.listGrid[].deathRegistryDetails.lineB | Line B | string | "A01.1" |
| data.listGrid[].deathRegistryDetails.lineC | Line C | string | "A89.1" |
| data.listGrid[].deathRegistryDetails.lineD | Line D | string | "A89.1" |
| data.listGrid[].deathRegistryDetails.causeOfDeathOther | Cause Of Death Other | string | "string" |
| data.listGrid[].deathRegistryDetails.mannerOfDeath | Manner Of Death | string | "DISEASE \| ACCIDENT \| WAR \| SUICIDE \| UNKNOWN \| DEATH" |
| data.listGrid[].deathRegistryDetails.placeOfDeath | Place Of Death | string | "ACCIDENT \| COMMUNITY \| EN_ROUTE_TO_HEALTH_FACILITY \| HEALTH_FACILITY \| HOUSEHOLD" |
| data.listGrid[].deathRegistryDetails.otherDeathDetails | Other Death Details | object | {} |
| data.listGrid[].deathRegistryDetails.otherDeathDetails.postmortemDetails | Postmortem Details | object | {} |
| data.listGrid[].deathRegistryDetails.otherDeathDetails.postmortemDetails.wasPostmortemDone | Was Postmortem Done | string | "YES \| NO \| UNKNOWN" |
| data.listGrid[].deathRegistryDetails.otherDeathDetails.postmortemDetails.wasPostmortemResultsUsedToDetermineCauseOfDeath | Was Postmortem Results Used To Determine Cause Of Death | string | "YES \| NO \| UNKNOWN" |
| data.listGrid[].deathRegistryDetails.otherDeathDetails.postmortemDetails.dateOfExternalDeathCauseOccurred | Date Of External Death Cause Occurred | string | "YYYY-MM-DD" |
| data.listGrid[].deathRegistryDetails.otherDeathDetails.postmortemDetails.externalCauseOfDeathExplanation | External Cause Of Death Explanation | string | "text" |
| data.listGrid[].deathRegistryDetails.otherDeathDetails.postmortemDetails.placeExternalCauseOfDeath | Place External Cause Of Death | string | "HOME \| ORGANIZATION_RESIDENCE \| OTHERS \| COMMUNITY \| WORK_AREA \| INDUSTRIAL_AREAS \| SPORTS_PLAYGROUND \| SCHOOL \| FARM" |
| data.listGrid[].deathRegistryDetails.otherDeathDetails.neonatalDetails | Neonatal Details | object | {} |
| data.listGrid[].deathRegistryDetails.otherDeathDetails.neonatalDetails.wasMultipleBirth | Was Multiple Birth | string | "YES \| NO \| UNKNOWN" |
| data.listGrid[].deathRegistryDetails.otherDeathDetails.neonatalDetails.stillbirth | Stillbirth | string | "YES \| NO \| UNKNOWN" |
| data.listGrid[].deathRegistryDetails.otherDeathDetails.neonatalDetails.motherAge | Mother Age | number | 30 |
| data.listGrid[].deathRegistryDetails.otherDeathDetails.neonatalDetails.pregnancyAgeInWeeks | Pregnancy Age In Weeks | number | 38 |
| data.listGrid[].deathRegistryDetails.otherDeathDetails.neonatalDetails.childWeightAfterBirthInKg | Child Weight After Birth In Kg | number | 2.5 |
| data.listGrid[].deathRegistryDetails.otherDeathDetails.neonatalDetails.hrsSinceBirthWithin24hrsBeforeDeath | Hrs Since Birth Within 24hrs Before Death | number | 14 |
| data.listGrid[].deathRegistryDetails.otherDeathDetails.neonatalDetails.motherConditionsThatLedToChildDeath | Mother Conditions That Led To Child Death | string | "text" |
| data.listGrid[].deathRegistryDetails.otherDeathDetails.maternalDeathDetails.wasDeathAfterOrDuringPregnancy | Was Death After Or During Pregnancy | string | "DURING_DELIVERY \| WITHIN_FORTY_TWO_DAYS_DAYS \| FORTY_TWO_DAYS_TO_ONE_YEAR \| UNKNOWN" |
| data.listGrid[].deathRegistryDetails.otherDeathDetails.maternalDeathDetails.wasPregnancyContributedToDeath | Was Pregnancy Contributed To Death | string | "YES \| NO \| UNKNOWN" |
| data.listGrid[].deathRegistryDetails.otherDeathDetails.maternalDeathDetails.wasDeathAudited | Was Death Audited | string | "YES \| NO \| UNKNOWN" |
| data.listGrid[].contraceptives.popCyclesProvided | POP Cycles Provided | number | 4 |
| data.listGrid[].cpacDetails.contraceptives.cocCyclesProvided | COC Cycles Provided | number | 4 |
| data.listGrid[].contraceptives.didReceiveSDM | Did Receive SDM | boolean | false |
| data.listGrid[].contraceptives.didHaveVasectomy | Did Have Vasectomy | boolean | false |
| data.listGrid[].contraceptives.didUseLAM | Did Use LAM | boolean | false |
| data.listGrid[].contraceptives.didOptToUseEmergencyMethods | Did Opt To Use Emergency Methods | boolean | false |
| data.listGrid[].contraceptives.wasInsertedWithImplanon | Was Inserted With Implanon | boolean | false |
| data.listGrid[].cpacDetails.contraceptives.wasInsertedWithJadelle | Was Inserted With Jadelle | boolean | false |
| data.listGrid[].contraceptives.didRemoveImplanon | Did Remove Implanon | boolean | false |
| data.listGrid[].contraceptives.didRemoveJadelle | Did Remove Jadelle | boolean | false |
| data.listGrid[].cpacDetails.contraceptives.didReceiveIUD | Did Receive IUD | boolean | false |
| data.listGrid[].contraceptives.didRemoveIUD | Did Remove IUD | boolean | false |
| data.listGrid[].contraceptives.didHaveTubalLigation | Did Have Tubal Ligation | boolean | false |
| data.listGrid[].contraceptives.didHaveVasectomy | Did Have Vasectomy | boolean | false |
| data.listGrid[].contraceptives.didReceiveInjection | Did Receive Injection | boolean | true |
| data.listGrid[].contraceptives.numberOfFemaleCondomsProvided | Number Of Female Condoms Provided | number | 0 |
| data.listGrid[].contraceptives.numberOfMaleCondomsProvided | Number Of Male Condoms Provided | number | 5 |
| data.reportDetails                   | Report Details object containing nested fields. | object    | {}                       |
| data.reportDetails.reportingDateTime | Reporting Date Time.                         | date-time | "2024-08-07T00:00:00Z"   |

### Table 3.2.2.3: Successful HDU Data Sharing
*(Refer section 1.1.3)*

| Object | Description | Data type | Possible example |
|--------|-------------|-----------|-----------------|
| status | Status. | string | "SUCCESS" |
| statusCode | Status Code. | number | 200 |
| newClients | New Clients. | number | 0 |
| updatedClients | Updated Clients. | number | 1 |
| failedClients | Failed Clients. | number | 0 |
| ignoredClients | Ignored Clients. | number | 0 |
| summary |List of Summary entries.| array<object/> | […] |
| summary[] | Summary[] object containing nested fields. | object | {} |
| summary[].hcrCode | HCR Code. | string | "HCR-F-546928-15021998" |
| summary[].success | Success. | boolean | true |
| summary[].message | Message. | string | "Client updated successfully" |
| summary[].identifiers | List of Identifiers entries. | array<object/> | […] |
| summary[].identifiers[] | Identifiers[] object containing nested fields. | object | {} |
| summary[].identifiers[].type | Type. | string | "MRN" |
| summary[].identifiers[].value | Value. | string | "109601-5-129022102/2023" |

#### Table 2.2.3.1: Sending Lab Data (Without Patient Information) to HDU API

| Field | Description |
|-------|-------------|
| **Message Type** | JSON |
| **Message Category** | DATA |
| **Request type** | POST |
| **API** | …/../../api/v1/hduApi/labDataTemplates |
| **Authentication** | Basic authentication |
| **Payload** | Visit appendix document section: 1.1.4 |

#### Table 2.2.3.2: Sending Lab Data (Without Patient Information) to HDU API Information

| Object | Description | Data type | Possible example |
|--------|-------------|-----------|------------------|
| templateDetails | Template Details object containing nested fields. | object | {} |
| templateDetails.code | Code. | string | "LABORATORY_CODE" |
| templateDetails.id | Id. | string | "laboratory_id" |
| templateDetails.name | Name. | string | "Laboratory_name" |
| templateDetails.codingVersions | Coding Versions object containing nested fields. | object | {} |
| templateDetails.codingVersions.loincVersion | LOINC Version. | string | "2" |
| templateDetails.codingVersions.icdVersion | ICD Version. | string | "10" |
| templateDetails.codingVersions.gmdnVersion | GMDN Version. | string | "" |
| templateDetails.codingVersions.hl7Version | HL7 Version. | string | "" |
| templateDetails.codingVersions.SNOMEDVersion | Snomedversion. | string | "" |
| templateDetails.codingVersions.ucumVersion | Ucum Version. | string | "" |
| templateDetails.workflow | Workflow object containing nested fields. | object | {} |
| templateDetails.workflow.uuid | UUID. | string | "24750fc5-0867-4526-817a-89f165532za1" |
| data | Data object containing nested fields. | object | {} |
| data.facilityDetails | Facility Details object containing nested fields. | object | {} |
| data.facilityDetails.code | Code. | string | "109601-5" |
| data.facilityDetails.name | Name. | string | "Sample Health Facility" |
| data.facilityDetails.system | System object containing nested fields. | object | {} |
| data.facilityDetails.system.name | Name. | string | "LIMS Name" |
| data.facilityDetails.system.version | Version. | string | "v102.06" |
| data.labRequestDetails | List of Lab Request Details entries. | array<object/> | […] |
| data.labRequestDetails[] | Lab Request Details[] object containing nested fields. | object | {} |
| data.labRequestDetails[].dateOccurred | Date Occurred. | date-time | "2024-08-03" |
| data.labRequestDetails[].specimenID | Specimen Id. | string | "Enter ID of specimen" |
| data.labRequestDetails[].typeOfSpecimen.code | Code. | string | "Specimen Code" |
| data.labRequestDetails[].typeOfSpecimen.codeType | Code Type. | string | "Specimen Code" |
| data.labRequestDetails[].specimenSite.code | Code. | string | "Specimen Site Code" |
| data.labRequestDetails[].specimenSite.codeType | Code Type. | string | "Specimen Site Code Type" |
| data.labRequestDetails[].specimenCollectedFrom | Specimen Collected From. | string | "Recovered/Deceased/Patient" |
| data.labRequestDetails[].specimenCollectionVolumeInMl | Specimen Collection Volume In Ml. | string | "Volume in Millilitre" |
| data.labRequestDetails[].specimenCollectorName | Specimen Collector Name. | string | "Specimen Collector Name" |
| data.labRequestDetails[].specimenCollectorContactNumber | Specimen Collector Contact Number. | string | "Specimen Collector Phone Number" |
| data.labRequestDetails[].dateTimeSpecimenCollected | Date Time Specimen Collected. | string | "YYYY-MM-DD" |
| data.labRequestDetails[].dateTimeSpecimenReceived | Date Time Specimen Received. | string | "YYYY-MM-DD" |
| data.labRequestDetails[].specimenSentToLab | Specimen Sent To Lab. | boolean | true |
| data.labRequestDetails[].dateTimeSpecimenSentToLab | Date Time Specimen Sent To Lab. | string | "YYYY-MM-DD" |
| data.labRequestDetails[].specimenRegisteredBy | Specimen Registered By. | string | "Specimen Registered By Name" |
| data.labRequestDetails[].dateTimeSpecimenRegistered | Date Time Specimen Registered. | string | "YYYY-MM-DD" |
| data.labRequestDetails[].requestingFacility | Requesting Facility object containing nested fields. | object | {} |
| data.labRequestDetails[].requestingFacility.careType | Care Type. | string | "Facility Care Type: ANC/DENTAL/EYE/FP" |
| data.labRequestDetails[].requestingFacility.code | Code. | string | "HFR Code" |
| data.labRequestDetails[].requestTypeCode | Request Type Code. | string | "Diagnostic \| Non-Diagnostic" |
| data.labRequestDetails[].referringSpecimenId | Referring Specimen Id. | string | "Specimen ID" |
| data.labRequestDetails[].clinicalCodes[] | Clinical Codes[]. | string | "A01.1" |
| data.labRequestDetails[].clinicalNotes | Clinical Notes. | string | "Patient has been experiencing symptoms for 2 days." |
| data.labRequestDetails[].receivingFacility | Receiving Facility object containing nested fields. | object | {} |
| data.labRequestDetails[].receivingFacility.code | Code. | string | "172-23" |
| data.labRequestDetails[].receivingFacility.section | Section. | string | "Chemistry" |
| data.labRequestDetails[].requestedLabTests | List of Requested Lab Tests entries. | array<object/> | […] |
| data.labRequestDetails[].requestedLabTests[] | Requested Lab Tests[] object containing nested fields. | object | {} |
| data.labRequestDetails[].requestedLabTests[].obrSetId | Obr Set Id. | number | 1 |
| data.labRequestDetails[].requestedLabTests[].priority | Priority. | string | "S \| R \| A \| U \| T \| C \| E" |
| data.labRequestDetails[].requestedLabTests[].typeOfTest | Type Of Test object containing nested fields. | object | {} |
| data.labRequestDetails[].requestedLabTests[].typeOfTest.code | Code. | string | "12345-6" |
| data.labRequestDetails[].requestedLabTests[].typeOfTest.codeType | Code Type. | string | "LOINC" |
| data.labRequestDetails[].requestedLabTests[].repeated | Repeated. | number | 0 |
| data.labRequestDetails[].labTestResults | List of Lab Test Results entries. | array<object/> | […] |
| data.labRequestDetails[].labTestResults[] | Lab Test Results[] object containing nested fields. | object | {} |
| data.labRequestDetails[].labTestResults[].specimenAcceptanceStatus | Specimen Acceptance Status. | string | "REJECTED \| ACCEPTED" |
| data.labRequestDetails[].labTestResults[].specimenRejectionCodes | List of Specimen Rejection Codes entries. | array<object/> | […] |
| data.labRequestDetails[].labTestResults[].specimenRejectionCodes[] | Specimen Rejection Codes[] object containing nested fields. | object | {} |
| data.labRequestDetails[].labTestResults[].specimenRejectionCodes[].code | Code. | string | "SPRJ001" |
| data.labRequestDetails[].labTestResults[].specimenRejectionCodes[].codeType | Code Type. | string | "GENERAL" |
| data.labRequestDetails[].labTestResults[].typeOfTest | Type Of Test object containing nested fields. | object | {} |
| data.labRequestDetails[].labTestResults[].typeOfTest.code | Code. | string | "12345-6" |
| data.labRequestDetails[].labTestResults[].typeOfTest.codeType | Code Type. | string | "LOINC" |
| data.labRequestDetails[].labTestResults[].testOrderDate | Test Order Date. | date-time | "2024-08-03T10:00:00Z" |
| data.labRequestDetails[].labTestResults[].obrSetId | Obr Set Id. | number | 1 |
| data.labRequestDetails[].labTestResults[].analyzerCode | Analyzer Code object containing nested fields. | object | {} |
| data.labRequestDetails[].labTestResults[].analyzerCode.code | Code. | string | "56322" |
| data.labRequestDetails[].labTestResults[].analyzerCode.codeType | Code Type. | string | "GMDN" |
| data.labRequestDetails[].labTestResults[].dateTimeSpecimenAnalyzed | Date Time Specimen Analyzed. | date-time | "2024-08-03T10:00:00Z" |
| data.labRequestDetails[].labTestResults[].resultStatus | Result Status object containing nested fields. | object | {} |
| data.labRequestDetails[].labTestResults[].resultStatus.code | Code. | string | "R" |
| data.labRequestDetails[].labTestResults[].resultStatus.codeType | Code Type. | string | "HL7" |
| data.labRequestDetails[].labTestResults[].testResultDate | Test Result Date. | date-time | "2024-08-03T10:00:00Z" |
| data.labRequestDetails[].labTestResults[].testingFacilityCode | Testing Facility Code. | string | "127-89-0" |
| data.labRequestDetails[].labTestResults[].referringSpecimenId | Referring Specimen Id. | string | "983776" |
| data.labRequestDetails[].labTestResults[].dateTimeResultsRegistered | Date Time Results Registered. | date-time | "2024-08-03T10:00:00Z" |
| data.labRequestDetails[].labTestResults[].resultsAuthorisedBy | Results Authorised By. | string | "Juma Haule" |
| data.labRequestDetails[].labTestResults[].dateTimeResultsAuthorized | Date Time Results Authorized. | date-time | "2024-08-03T10:00:00Z" |
| data.labRequestDetails[].labTestResults[].specimenTestedBy | Specimen Tested By. | string | "Juma Haule" |
| data.labRequestDetails[].labTestResults[].targetTimeDays | Target Time Days. | number | 10 |
| data.labRequestDetails[].labTestResults[].targetTimeMins | Target Time Mins. | number | 10 |
| data.labRequestDetails[].labTestResults[].results | List of Results entries. | array<object/> | […] |
| data.labRequestDetails[].labTestResults[].results[] | Results[] object containing nested fields. | object | {} |
| data.labRequestDetails[].labTestResults[].results[].parameter | Parameter. | null | null |
| data.labRequestDetails[].labTestResults[].results[].releaseDate | Release Date. | date-time | "2024-08-03T10:00:00Z" |
| data.labRequestDetails[].labTestResults[].results[].resultStatus | Result Status object containing nested fields. | object | {} |
| data.labRequestDetails[].labTestResults[].results[].resultStatus.code | Code. | string | "R" |
| data.labRequestDetails[].labTestResults[].results[].resultStatus.codeType | Code Type. | string | "HL7" |
| data.labRequestDetails[].labTestResults[].results[].obrSetId | Obr Set Id. | number | 1 |
| data.labRequestDetails[].labTestResults[].results[].obxSetId | Obx Set Id. | number | 1 |
| data.labRequestDetails[].labTestResults[].results[].obxSubId | Obx Sub Id. | number | 1 |
| data.labRequestDetails[].labTestResults[].results[].result | Result. | string | "Positive" |
| data.labRequestDetails[].labTestResults[].results[].codedValue | Coded Value object containing nested fields. | object | {} |
| data.labRequestDetails[].labTestResults[].results[].codedValue.code | Code. | string | "LA6576-8" |
| data.labRequestDetails[].labTestResults[].results[].codedValue.type | Type. | string | "LOINC" |
| data.labRequestDetails[].labTestResults[].results[].observation | Observation object containing nested fields. | object | {} |
| data.labRequestDetails[].labTestResults[].results[].observation.code | Code. | string | "LA6576-8" |
| data.labRequestDetails[].labTestResults[].results[].observation.type | Type. | string | "LOINC" |
| data.labRequestDetails[].labTestResults[].results[].confirmedDiagnosis | Confirmed Diagnosis object containing nested fields. | object | {} |
| data.labRequestDetails[].labTestResults[].results[].confirmedDiagnosis.code | Code. | string | "A01.1" |
| data.labRequestDetails[].labTestResults[].results[onfirmedDiagnosis.codeType | Code Type. | string | "ICD-10" |
| data.labRequestDetails[].labTestResults[].results[].abnormalFlagCode | Abnormal Flag Code. | string | "AA" |
| data.labRequestDetails[].labTestResults[].results[].dateTimeValue | Date Time Value. | date-time | "2024-08-03T10:00:00Z" |
| data.labRequestDetails[].labTestResults[].results[].resultSemiquantitive | Result Semiquantitive. | string | "1+" |
| data.labRequestDetails[].labTestResults[].results[].note | Note. | boolean | true |
| data.labRequestDetails[].labTestResults[].results[].workUnitsInMinutes | Work Units In Minutes. | number | 45 |
| data.labRequestDetails[].labTestResults[].results[].costUnits | Cost Units. | number | 56700 |
| data.labRequestDetails[].labTestResults[].results[].valueType | Value Type. | string | "NM" |
| data.labRequestDetails[].labTestResults[].results[].standardCode | Standard Code. | boolean | true |
| data.labRequestDetails[].labTestResults[].results[].unit | Unit. | null | null |
| data.labRequestDetails[].labTestResults[].results[].lowRange | Low Range. | null | null |
| data.labRequestDetails[].labTestResults[].results[].highRange | High Range. | null | null |
| data.labRequestDetails[].labTestResults[].results[].remarks | Remarks. | null | null |
| data.labRequestDetails[].postLabTestResults | List of Post Lab Test Results entries. | array<object/> | […] |
| data.labRequestDetails[].postLabTestResults[] | Post Lab Test Results[] object containing nested fields. | object | {} |
| data.labRequestDetails[].postLabTestResults[].ObrSetId | Obr Set Id. | number | 2 |
| data.labRequestDetails[].postLabTestResults[].typeOfTest | Type Of Test. | string | "12345-6" |
| data.labRequestDetails[].postLabTestResults[].dateTimeResultsReceivedAtFacility | Date Time Results Received At Facility. | date-time | "2024-08-03T10:00:00Z" |
| data.labRequestDetails[].postLabTestResults[].dateTimeResultsprovidedToClient | Date Time Resultsprovided To Client. | date-time | "2024-08-03T10:00:00Z" |
| data.reportDetails | Report Details object containing nested fields. | object | {} |
| data.reportDetails.reportingDateTime | Reporting Date Time. | date-time | "2024-08-07T00:00:00Z" |

#### Table 2.2.3.3: Successful HDU Data Sharing With No Patient Records (Refer Appendix document Section 1.1.5)

| Object                | Description                          | Data type     | Possible example                 |
|-----------------------|--------------------------------------|---------------|----------------------------------|
| status                | status.                              | string        | SUCCESS                          |
| statusCode            | statusCode.                          | number        | 200                              |
| newRequests           | newRequests.                         | number        | 1                                |
| updatedRequests       | updatedRequests.                     | number        | 0                                |
| failedRequests        | failedRequests.                      | number        | 0                                |
| ignoredRequests       | ignoredRequests.                     | number        | 0                                |
| summary               | summary list of entries.             | array<object/> | `[…]`                              |
| summary[]             | summary[] object containing nested fields. | object        | {}                               |
| summary[].specimen    | specimen.                            | string        | 4567890876545678                 |
| summary[].message     | message.                             | string        | Lab details created successfully |

#### Table 2.2.4.1: Updating HDU Data through API

| Field | Description |
|-------|-------------|
| **Message Type** | JSON |
| **Message Category** | DATA |
| **Request type** | POST |
| **API** | …/../../api/v1/hduApi/dataTemplates |
| **Authentication** | Basic authentication |
| **Payload response** | Refer to the appendix document Section 1.1.6 |

#### Table 2.2.4.2: Updating HDU Data through API Payload Information

| Object | Description | Data type | Possible example |
|--------|-------------|-----------|-----------------|
| `templateDetails` | `templateDetails` object containing nested fields. | object | `{}` |
| `templateDetails.code` | Code. | string | `GENERAL` |
| `templateDetails.id` | ID. | string | `general` |
| `templateDetails.name` | Name. | string | `General` |
| `templateDetails.workflow` | `workflow` object containing nested fields. | object | `{}` |
| `templateDetails.workflow.uuid` | UUID. | string | `23750fc5-0867-4426-817a-89f155532fa1` |
| `data` | `data` object containing nested fields. | object | `{}` |
| `data.facilityDetails` | `facilityDetails` object containing nested fields. | object | `{}` |
| `data.facilityDetails.code` | Facility code. | string | `109601-5` |
| `data.facilityDetails.name` | Facility name. | string | `Health Facility` |
| `data.listGrid` | `listGrid` list of entries. | array<object/> | `[…]` |
| `data.listGrid[]` | `listGrid[]` object containing nested fields. | object | `{}` |
| `data.listGrid[].demographicDetails` | `demographicDetails` object containing nested fields. | object | `{}` |
| `data.listGrid[].demographicDetails.mrn` | MRN (Medical Record Number). | string | `109601-5-029022102/2023` |
| `data.listGrid[].demographicDetails.identifiers` | Identifiers list of entries. | array<object/> | `[…]` |
| `data.listGrid[].demographicDetails.identifiers[]` | `identifiers[]` object containing nested fields. | object | `{}` |
| `data.listGrid[].demographicDetails.identifiers[].type` | Identifier type. | string | `MRN` |
| `data.listGrid[].demographicDetails.identifiers[].id` | Identifier value. | string | `109601-5-029022102/2023` |
| `data.listGrid[].demographicDetails.identifiers[].preferred` | Whether this identifier is preferred. | boolean | `True` |
| `data.listGrid[].visitDetails` | `visitDetails` object containing nested fields. | object | `{}` |
| `data.listGrid[].visitDetails.id` | Visit ID. | number | `400388` |
| `data.listGrid[].admissionDetails` | `admissionDetails` object containing nested fields. | object | `{}` |
| `data.listGrid[].admissionDetails.dischargedOn` | Discharged date. | string | `2024-08-09` |
| `data.listGrid[].admissionDetails.dischargeStatus` | Discharge status. | string | `Alive` |
| `data.reportDetails` | `reportDetails` object containing nested fields. | object | `{}` |
| `data.reportDetails.reportingDate` | Reporting date. | string | `2024-08-07` |

Note 1: Req: If there is no data then zero should be filled  
Note 2 : When referral block is filled, HDU API will send referral notification to stated referral hospital.  

Authentication Methods:  
Basic/Token/Bearer/Certificate etc  
Basic authentication is currently being supported
