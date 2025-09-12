## Adding shared data

# Table 5.1.1:Adding Shared Laboratory Data


| Field             | Value                                                          |
|------------------|----------------------------------------------------------------|
| Message Type      | JSON                                                           |
| Message Category  | DATA                                                           |
| Request Type      | POST                                                           |
| API               | `https://<him-domain>:<port>/api/v1/hduApi/labDataTemplates`  |
| Authentication    | Basic Authentication                                           |
| Purpose           | For adding shared laboratory records                            |
| Payload           | Refer to the appendix document: Section 1.1.13                |

# Table 5.1.1: Adding Shared Laboratory Data API Information

| Object (key)                                                        | Description                                                    | Data type         | Possible example                                    |
|---------------------------------------------------------------------|----------------------------------------------------------------|-------------------|-----------------------------------------------------|
| templateDetails                                                     | Template Details (nested object)                               | object            | `{}`
| templateDetails.code                                                | Code                                                           | string            | `"LABORATORY_CODE"`
| templateDetails.id                                                  | Id                                                             | string            | `"laboratory_id"`
| templateDetails.name                                                | Name                                                           | string            | `"Laboratory_name"`
| templateDetails.codingVersions                                      | Coding versions (nested object)                                | object            | `{}`
| templateDetails.codingVersions.loincVersion                         | LOINC version                                                  | string            | `"2"`
| templateDetails.codingVersions.icdVersion                           | ICD version                                                    | string            | `"10"`
| templateDetails.codingVersions.gmdnVersion                          | GMDN version                                                   | string            | `""`
| templateDetails.codingVersions.hl7Version                           | HL7 version                                                    | string            | `""`
| templateDetails.codingVersions.SNOMEDVersion                        | SNOMED version                                                 | string            | `""`
| templateDetails.codingVersions.ucumVersion                          | UCUM version                                                   | string            | `""`
| templateDetails.workflow                                             | Workflow (nested object)                                       | object            | `{}`
| templateDetails.workflow.uuid                                       | Workflow UUID                                                  | string            | `"23750fc5-0867-4426-817a-89f155532fa1"`
| data                                                                | Data (root object)                                             | object            | `{}`
| data.facilityDetails                                                 | Facility details (nested object)                               | object            | `{}`
| data.facilityDetails.code                                            | Facility code                                                   | string            | `"109601-5"`
| data.facilityDetails.name                                            | Facility name                                                   | string            | `"Sample Health Facility"`
| data.facilityDetails.system                                          | System info (nested object)                                     | object            | `{}`
| data.facilityDetails.system.name                                     | System name                                                     | string            | `"LIMS Name"`
| data.facilityDetails.system.version                                  | System version                                                  | string            | `"v102.06"`
| data.labRequestDetails                                                | List of lab request detail entries                              | array of objects  | `[...]`
| data.labRequestDetails[]                                              | One lab request detail object                                   | object            | `{}`
| data.labRequestDetails[].dateOccurred                                 | Date specimen/test occurred                                      | string            | `"2024-08-03"`
| data.labRequestDetails[].specimenID                                   | Specimen ID                                                     | string            | `"Enter ID of specimen"`
| data.labRequestDetails[].typeOfSpecimen.code                          | Specimen code                                                   | string            | `"Specimen Code"`
| data.labRequestDetails[].typeOfSpecimen.codeType                      | Specimen code type                                              | string            | `"Specimen Code"`
| data.labRequestDetails[].specimenSite                                 | Specimen site (nested object)                                   | object            | `{}`
| data.labRequestDetails[].specimenSite.code                            | Specimen site code                                              | string            | `"Specimen Site Code"`
| data.labRequestDetails[].specimenSite.codeType                        | Specimen site code type                                         | string            | `"Specimen Site Code Type"`
| data.labRequestDetails[].specimenCollectedFrom                         | Specimen collected from (e.g., Recovered/Deceased/Patient)      | string            | `"Recovered/Deceased/Patient"`
| data.labRequestDetails[].specimenCollectionVolumeInMl                  | Specimen collection volume in mL                                | string            | `"Volume in Millilitre"`
| data.labRequestDetails[].specimenCollectorName                         | Specimen collector name                                          | string            | `"Specimen Collector Name"`
| data.labRequestDetails[].specimenCollectorContactNumber                | Specimen collector contact number                                | string            | `"Specimen Collector Phone Number"`
| data.labRequestDetails[].dateTimeSpecimenCollected                     | Date/time specimen collected                                     | string            | `YYYY-MM-DD`
| data.labRequestDetails[].dateTimeSpecimenReceived                      | Date/time specimen received                                      | string            | `YYYY-MM-DD`
| data.labRequestDetails[].specimenSentToLab                             | Specimen sent to lab (flag)                                      | boolean           | `true`
| data.labRequestDetails[].dateTimeSpecimenSentToLab                     | Date/time specimen sent to lab                                   | string            | `YYYY-MM-DD`
| data.labRequestDetails[].specimenRegisteredBy                          | Specimen registered by                                           | string            | `"Specimen Registered By Name"`
| data.labRequestDetails[].dateTimeSpecimenRegistered                    | Date/time specimen registered                                    | string            | `YYYY-MM-DD`
| data.labRequestDetails[].requestingFacility                            | Requesting facility (nested object)                              | object            | `{}`
| data.labRequestDetails[].requestingFacility.code                       | Requesting facility code                                          | string            | `"HFR Code"`
| data.labRequestDetails[].requestingFacility.careType                   | Care type at requesting facility (e.g., ANC/DENTAL/FP)           | string            | `"ANC"`
| data.labRequestDetails[].requestTypeCode                               | Request type code (Diagnostic / Non-Diagnostic)                  | string            | `"Diagnostic"`
| data.labRequestDetails[].referringSpecimenId                           | Referring specimen ID                                             | string            | `"Specimen ID"`
| data.labRequestDetails[].clinicalCodes                                 | Clinical codes (list)                                             | array of strings  | `["A01.1"]`
| data.labRequestDetails[].clinicalNotes                                 | Clinical notes                                                    | string            | `"Patient has been experiencing symptoms for 2 days."`
| data.labRequestDetails[].receivingFacility                              | Receiving facility (nested object)                                | object            | `{}`
| data.labRequestDetails[].receivingFacility.code                         | Receiving facility code                                            | string            | `"172-23"`
| data.labRequestDetails[].receivingFacility.section                      | Receiving facility section (e.g., Chemistry)                      | string            | `"Chemistry"`
| data.labRequestDetails[].requestedLabTests                              | List of requested lab tests                                        | array of objects  | `[...]`
| data.labRequestDetails[].requestedLabTests[]                            | One requested lab test object                                      | object            | `{}`
| data.labRequestDetails[].requestedLabTests[].obrSetId                   | OBR set id (order grouping)                                        | number            | `1`
| data.labRequestDetails[].requestedLabTests[].priority                    | Priority                                                            | string            | ``` `S | R | A | U | T | C | E` ```
| data.labRequestDetails[].requestedLabTests[].typeOfTest                  | Type of test (nested object)                                       | object            | `{}`
| data.labRequestDetails[].requestedLabTests[].typeOfTest.code             | Test code                                                           | string            | `"12345-6"`
| data.labRequestDetails[].requestedLabTests[].typeOfTest.codeType         | Test code type (e.g., LOINC)                                        | string            | `"LOINC"`
| data.labRequestDetails[].requestedLabTests[].repeated                    | Repeated count                                                      | number            | `0`
| data.labRequestDetails[].labTestResults                                   | List of lab test results                                            | array of objects  | `[...]`
| data.labRequestDetails[].labTestResults[]                                 | One lab test result object                                          | object            | `{}`
| data.labRequestDetails[].labTestResults[].typeOfTest.code                 | Lab test code                                                        | string            | `"12345-6"`
| data.labRequestDetails[].labTestResults[].typeOfTest.codeType             | Lab test code type                                                   | string            | `"LOINC"`
| data.labRequestDetails[].labTestResults[].specimenAcceptanceStatus        | Specimen acceptance status                                           | string            | `"ACCEPTED"`
| data.labRequestDetails[].labTestResults[].specimenRejectionCodes          | Specimen rejection codes (list)                                      | array of objects  | `[...]`
| data.labRequestDetails[].labTestResults[].specimenRejectionCodes[].code   | Specimen rejection code                                               | string            | `"SPRJ001"`
| data.labRequestDetails[].labTestResults[].specimenRejectionCodes[].codeType | Code type                                                           | string            | `"GENERAL"`
| data.labRequestDetails[].labTestResults[].testOrderDate                   | Test order date (timestamp)                                           | string            | `"2024-08-03T10:00:00Z"`
| data.labRequestDetails[].labTestResults[].obrSetId                        | OBR set id                                                            | number            | `1`
| data.labRequestDetails[].labTestResults[].analyzerCode                     | Analyzer code (nested object)                                         | object            | `{}`
| data.labRequestDetails[].labTestResults[].analyzerCode.code                | Analyzer code                                                         | string            | `"56322"`
| data.labRequestDetails[].labTestResults[].analyzerCode.codeType            | Analyzer code type                                                    | string            | `"GMDN"`
| data.labRequestDetails[].labTestResults[].dateTimeSpecimenAnalyzed         | Date/time specimen analyzed                                            | string            | `"2024-08-03T10:00:00Z"`
| data.labRequestDetails[].labTestResults[].resultStatus                     | Result status (nested object)                                          | object            | `{}`
| data.labRequestDetails[].labTestResults[].resultStatus.code                | Result status code                                                     | string            | `"R"`
| data.labRequestDetails[].labTestResults[].resultStatus.codeType            | Result status code type                                                | string            | `"HL7"`
| data.labRequestDetails[].labTestResults[].testResultDate                   | Test result date                                                        | string            | `"2024-08-03T10:00:00Z"`
| data.labRequestDetails[].labTestResults[].testingFacilityCode              | Testing facility code                                                   | string            | `"127-89-0"`
| data.labRequestDetails[].labTestResults[].referringSpecimenId              | Referring specimen id                                                    | string            | `"983776"`
| data.labRequestDetails[].labTestResults[].dateTimeResultsRegistered        | Date/time results registered                                             | string            | `"2024-08-03T10:00:00Z"`
| data.labRequestDetails[].labTestResults[].resultsAuthorisedBy              | Results authorised by                                                    | string            | `"Juma Haule"`
| data.labRequestDetails[].labTestResults[].dateTimeResultsAuthorized        | Date/time results authorised                                              | string            | `"2024-08-03T10:00:00Z"`
| data.labRequestDetails[].labTestResults[].specimenTestedBy                 | Specimen tested by                                                        | string            | `"Juma Haule"`
| data.labRequestDetails[].labTestResults[].targetTimeDays                   | Target time (days)                                                        | number            | `10`
| data.labRequestDetails[].labTestResults[].targetTimeMins                   | Target time (minutes)                                                     | number            | `10`
| data.labRequestDetails[].labTestResults[].results                          | List of individual results                                                | array of objects  | `[...]`
| data.labRequestDetails[].labTestResults[].results[]                        | One result object                                                          | object            | `{}`
| data.labRequestDetails[].labTestResults[].results[].parameter              | Result parameter                                                           | null              | `null`
| data.labRequestDetails[].labTestResults[].results[].releaseDate            | Release date                                                               | string            | `"2024-08-03T10:00:00Z"`
| data.labRequestDetails[].labTestResults[].results[].resultStatus           | Result status (nested)                                                     | object            | `{}`
| data.labRequestDetails[].labTestResults[].results[].resultStatus.code      | Result status code                                                          | string            | `"R"`
| data.labRequestDetails[].labTestResults[].results[].resultStatus.codeType  | Result status code type                                                     | string            | `"HL7"`
| data.labRequestDetails[].labTestResults[].results[].obrSetId               | OBR set id                                                                  | number            | `1`
| data.labRequestDetails[].labTestResults[].results[].obxSetId               | OBX set id                                                                  | number            | `1`
| data.labRequestDetails[].labTestResults[].results[].obxSubId               | OBX sub id                                                                  | number            | `1`
| data.labRequestDetails[].labTestResults[].results[].result                 | Result value                                                                | string            | `"Positive"`
| data.labRequestDetails[].labTestResults[].results[].codedValue             | Coded value (nested)                                                        | object            | `{}`
| data.labRequestDetails[].labTestResults[].results[].codedValue.code        | Coded value code                                                            | string            | `"LA6576-8"`
| data.labRequestDetails[].labTestResults[].results[].codedValue.type        | Coded value type                                                            | string            | `"LOINC"`
| data.labRequestDetails[].labTestResults[].results[].observation            | Observation (nested)                                                         | object            | `{}`
| data.labRequestDetails[].labTestResults[].results[].observation.code       | Observation code                                                             | string            | `"LA6576-8"`
| data.labRequestDetails[].labTestResults[].results[].observation.type       | Observation type                                                             | string            | `"LOINC"`
| data.labRequestDetails[].labTestResults[].results[].confirmedDiagnosis     | Confirmed diagnosis (nested)                                                 | object            | `{}`
| data.labRequestDetails[].labTestResults[].results[].confirmedDiagnosis.code| Confirmed diagnosis code                                                      | string            | `"A01.1"`
| data.labRequestDetails[].labTestResults[].results[].confirmedDiagnosis.codeType | Code type                                                              | string            | `"ICD-10"`
| data.labRequestDetails[].labTestResults[].results[].abnormalFlagCode       | Abnormal flag code                                                            | string            | `"AA"`
| data.labRequestDetails[].labTestResults[].results[].dateTimeValue         | Date/time value                                                               | string            | `"2024-08-03T10:00:00Z"`
| data.labRequestDetails[].labTestResults[].results[].resultSemiquantitive   | Semi-quantitative result                                                      | string            | `"1+"`
| data.labRequestDetails[].labTestResults[].results[].note                   | Note (boolean)                                                                | boolean           | `true`
| data.labRequestDetails[].labTestResults[].results[].workUnitsInMinutes     | Work units in minutes                                                         | number            | `45`
| data.labRequestDetails[].labTestResults[].results[].costUnits              | Cost units                                                                    | number            | `56700`
| data.labRequestDetails[].labTestResults[].results[].valueType              | Value type                                                                     | string            | `"NM"`
| data.labRequestDetails[].labTestResults[].results[].standardCode          | Standard code (flag)                                                          | boolean           | `true`
| data.labRequestDetails[].labTestResults[].results[].unit                   | Unit                                                                          | null              | `null`
| data.labRequestDetails[].labTestResults[].results[].lowRange               | Low range                                                                      | null              | `null`
| data.labRequestDetails[].labTestResults[].results[].highRange              | High range                                                                     | null              | `null`
| data.labRequestDetails[].labTestResults[].results[].remarks                | Remarks                                                                        | null              | `null`
| data.labRequestDetails[].postLabTestResults                              | Post lab test results (list)                                                   | array of objects  | `[...]`
| data.labRequestDetails[].postLabTestResults[]                            | One post-lab-test-result object                                                | object            | `{}`
| data.labRequestDetails[].postLabTestResults[].ObrSetId                    | OBR set id                                                                     | number            | `2`
| data.labRequestDetails[].postLabTestResults[].typeOfTest                  | Type of test                                                                   | string            | `"12345-6"`
| data.labRequestDetails[].postLabTestResults[].dateTimeResultsReceivedAtFacility | Date/time results received at facility                                    | string            | `"2024-08-03T10:00:00Z"`
| data.labRequestDetails[].postLabTestResults[].dateTimeResultsProvidedToClient | Date/time results provided to client                                         | string            | `"2024-08-03T10:00:00Z"`
| data.reportDetails                                                       | Report details (nested object)                                                 | object            | `{}`
| data.reportDetails.reportingDateTime                                     | Reporting date/time                                                             | string            | `"2024-08-07T00:00:00Z"`

