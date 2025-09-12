## Retrieving Shared Laboratory Data

# Table 5.3.1: Retrieving Shared Laboratory Data Template API Information

| Field            | Value                                                                 |
|------------------|----------------------------------------------------------------------|
| **Message Type** | JSON                                                                 |
| **Message Category** | DATA                                                             |
| **Request Type** | GET                                                                  |
| **API**          | `https://<him-domain>:<port>/api/v1/hduApi/labData`                  |
| **Authentication** | Basic Authentication                                               |
| **Purpose**      | For getting shared laboratory records                                |
| **Payload**      | Refer to the appendix document: Section 1.1.13                       |


### Table 5.3.2: Retrieving Shared Laboratory Data Payload Information

| **Key Name** | **Description** | **Data Type (expected)** | **Example** |
|--------------|-----------------|--------------------------|-------------|
| pager | Pager | Object | `{}` |
| pager.total | Total | Number | 3 |
| pager.totalPages | Total Pages | Null |  |
| pager.pageSize | Page Size | Number | 10 |
| pager.page | Page | Number | 1 |
| results | Results | Array | `[…]` |
| results[].clinicalCodes | Clinical Codes | Null |  |
| results[].dateOccurred | Date Occurred | String |  |
| results[].dateTimeSpecimenCollected | Date Time Specimen Collected | Null |  |
| results[].dateTimeSpecimenReceived | Date Time Specimen Received | Null |  |
| results[].dateTimeSpecimenRegistered | Date Time Specimen Registered | Null |  |
| results[].dateTimeSpecimenSentToLab | Date Time Specimen Sent To Lab | Null |  |
| results[].labTestResults | Lab Test Results | Array |  |
| results[].postLabTestResults | Post Lab Test Results | Array |  |
| results[].referringSpecimenId | Referring Specimen Id | String | TZDISATMB1378510 |
| results[].requestTypeCode | Request Type Code | Null |  |
| results[].requestedLabTests | Requested Lab Tests | Array |  |
| results[].requestingFacility | Requesting Facility | Object |  |
| results[].specimenCollectedFrom | Specimen Collected From | Null |  |
| results[].specimenCollectionVolumeInMl | Specimen Collection Volume In Ml | Number | 0.0 |
| results[].specimenCollectorContactNumber | Specimen Collector Contact Number | Null |  |
| results[].specimenCollectorName | Specimen Collector Name | Null |  |
| results[].specimenID | Specimen ID | String | TZDISATMB1378510 |
| results[].specimenRegisteredBy | Specimen Registered By | String | JDR |
| results[].specimenSentToLab | Specimen Sent To Lab | Boolean | True |
| results[].specimenSite | Specimen Site | Object |  |
| results[].typeOfSpecimen | Type Of Specimen | Object |  |
| results[].labTestResults[].analyzerCode | Analyzer Code | Null |  |
| results[].labTestResults[].dateTimeResultsAuthorized | Date Time Results Authorized | Null |  |
| results[].labTestResults[].dateTimeResultsRegistered | Date Time Results Registered | Null |  |
| results[].labTestResults[].dateTimeSpecimenAnalyzed | Date Time Specimen Analyzed | Null |  |
| results[].labTestResults[].obrSetId | Obr Set Id | Number | 3 |
| results[].labTestResults[].referringSpecimenId | Referring Specimen Id | String | TZDISATMB1378510 |
| results[].labTestResults[].resultStatus | Result Status | Object |  |
| results[].labTestResults[].results | Results | Array |  |
| results[].labTestResults[].resultsAuthorisedBy | Results Authorised By | String | PDN |
| results[].labTestResults[].specimenAcceptanceStatus | Specimen Acceptance Status | String | ACCEPTED |
| results[].labTestResults[].specimenTestedBy | Specimen Tested By | String | JDR |
| results[].labTestResults[].targetTimeDays | Target Time Days | Number | 0 |
| results[].labTestResults[].targetTimeMins | Target Time Mins | Number | 0 |
| results[].labTestResults[].testOrderDate | Test Order Date | Null |  |
| results[].labTestResults[].testResultDate | Test Result Date | Null |  |
| results[].labTestResults[].testingFacilityCode | Testing Facility Code | String | 104601-0 |
| results[].labTestResults[].typeOfTest | Type Of Test | Object |  |
| results[].requestedLabTests[].obrSetId | Obr Set Id | Number | 3 |
| results[].requestedLabTests[].priority | Priority | String | R |
| results[].requestedLabTests[].repeated | Repeated | Number | 0 |
| results[].requestedLabTests[].typeOfTest | Type Of Test | Object |  |
| results[].requestingFacility.careType | Care Type | Null |  |
| results[].requestingFacility.code | Code | String | 104601-0 |
| results[].specimenSite.code | Code | Null |  |
| results[].specimenSite.codeType | Code Type | Null |  |
| results[].typeOfSpecimen.code | Code | String | LA14518-7 |
| results[].typeOfSpecimen.codeType | Code Type | String | LOINC |
| results[].labTestResults[].resultStatus.code | Code | String | final |
| results[].labTestResults[].resultStatus.codeType | Code Type | String | HL7FHIR |
| results[].labTestResults[].results[].abnormalFlagCode | Abnormal Flag Code | String | N |
| results[].labTestResults[].results[].codedValue | Coded Value | Object |  |
| results[].labTestResults[].results[].costUnits | Cost Units | Number | 0.0 |
| results[].labTestResults[].results[].dateTimeValue | Date Time Value | DateTime | 1999-12-30T00:00:00Z |
| results[].labTestResults[].results[].highRange | High Range | Number | 39.6 |
| results[].labTestResults[].results[].lowRange | Low Range | Number | 25.5 |
| results[].labTestResults[].results[].note | Note | Boolean | False |
| results[].labTestResults[].results[].obrSetId | Obr Set Id | Number | 3 |
| results[].labTestResults[].results[].observation | Observation | Object |  |
| results[].labTestResults[].results[].obxSetId | Obx Set Id | Number | 1 |
| results[].labTestResults[].results[].obxSubId | Obx Sub Id | Number | 0 |
| results[].labTestResults[].results[].parameter | Parameter | String |  |
| results[].labTestResults[].results[].releaseDate | Release Date | DateTime | 2024-01-01T19:22:00Z |
| results[].labTestResults[].results[].remarks | Remarks | String |  |
| results[].labTestResults[].results[].result | Result | String | 39.6 |
| results[].labTestResults[].results[].resultSemiquantitive | Result Semiquantitive | String |  |
| results[].labTestResults[].results[].resultStatus | Result Status | Object |  |
| results[].labTestResults[].results[].standardCode | Standard Code | Null |  |
| results[].labTestResults[].results[].unit | Unit | String | seconds |
| results[].labTestResults[].results[].valueType | Value Type | String | V |
| results[].labTestResults[].results[].workUnitsInMinutes | Work Units In Minutes | Number | 0 |
| results[].labTestResults[].typeOfTest.code | Code | String | 14979-9 |
| results[].labTestResults[].typeOfTest.codeType | Code Type | String | LOINC |
| results[].requestedLabTests[].typeOfTest.code | Code | String | 14979-9 |
| results[].requestedLabTests[].typeOfTest.codeType | Code Type | String | LOINC |
| results[].labTestResults[].results[].codedValue.code | Code | Null |  |
| results[].labTestResults[].results[].codedValue.codeType | Code Type | Null |  |
| results[].labTestResults[].results[].observation.code | Code | String | 14979-9 |
| results[].labTestResults[].results[].observation.type | Type | String | LOINC |
| results[].labTestResults[].results[].resultStatus.code | Code | String | final |
| results[].labTestResults[].results[].resultStatus.codeType | Code Type | String | HL7FHIR |

## Important: API Extension Options

| Case                                      | Endpoint                                                                 |
|-------------------------------------------|--------------------------------------------------------------------------|
| Both Facility (HFR code) & Specimen ID    | `https://<him-domain>:<port>/api/v1/hduApi/labData?facility=**&specimenId=5789876` |
| Only Facility (HFR code) is known         | `https://<him-domain>:<port>/api/v1/hduApi/labData?facility=**`           |
| Only Specimen ID is known                 | `https://<him-domain>:<port>/api/v1/hduApi/labData?specimenId=******`     |

