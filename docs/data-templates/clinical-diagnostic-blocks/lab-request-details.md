# Laboratory Request Details (`labRequestDetails`)

### Overview

The **Laboratory Request Details** block captures the end-to-end lifecycle of a laboratory investigation, from specimen collection to test results and post-result actions.

It ensures that:

- Laboratory requests are fully traceable from ordering to reporting.
- Specimen handling, testing, and results follow standardized workflows.
- Interoperability is supported across LIMS, EMR, DHIS2, and national laboratory systems.
- Auditability and quality assurance requirements are met.

This block appears within each record in the `listGrid` array and may contain one or more laboratory requests for a visit.



### Object Structure (Conceptual)

```text
labRequestDetails
├── dateOccurred
├── specimenID
├── typeOfSpecimen
│   ├── code
│   └── codeType
├── specimenSite
│   ├── code
│   └── codeType
├── specimenCollectedFrom
├── specimenCollectionVolumeInMl
├── specimenCollectorName
├── specimenCollectorContactNumber
├── dateTimeSpecimenCollected
├── dateTimeSpecimenReceived
├── specimenSentToLab
├── dateTimeSpecimenSentToLab
├── specimenRegisteredBy
├── dateTimeSpecimenRegistered
├── requestingFacility
│   ├── code
│   └── careType
├── requestTypeCode
├── referringSpecimenId
├── clinicalCodes
├── clinicalNotes
├── receivingFacility
│   ├── code
│   └── section
├── requestedLabTests
│   ├── obrSetId
│   ├── priority
│   ├── typeOfTest
│   │   ├── code
│   │   └── codeType
│   └── repeated
├── labTestResults
│   ├── specimenAcceptanceStatus
│   ├── specimenRejectionCodes
│   │   ├── code
│   │   └── codeType
│   ├── typeOfTest
│   │   ├── code
│   │   └── codeType
│   ├── testOrderDate
│   ├── obrSetId
│   ├── analyzerCode
│   │   ├── code
│   │   └── codeType
│   ├── dateTimeSpecimenAnalyzed
│   ├── resultStatus
│   │   ├── code
│   │   └── codeType
│   ├── testResultDate
│   ├── testingFacilityCode
│   ├── referringSpecimenId
│   ├── dateTimeResultsRegistered
│   ├── resultsAuthorisedBy
│   ├── dateTimeResultsAuthorized
│   ├── specimenTestedBy
│   ├── targetTimeDays
│   ├── targetTimeMins
│   └── results
│       ├── parameter
│       ├── releaseDate
│       ├── resultStatus
│       │   ├── code
│       │   └── codeType
│       ├── obrSetId
│       ├── obxSetId
│       ├── obxSubId
│       ├── result
│       ├── codedValue
│       │   ├── code
│       │   └── type
│       ├── observation
│       │   ├── code
│       │   └── type
│       ├── confirmedDiagnosis
│       │   ├── code
│       │   └── codeType
│       ├── abnormalFlagCode
│       ├── dateTimeValue
│       ├── resultSemiquantitive
│       ├── note
│       ├── workUnitsInMinutes
│       ├── costUnits
│       ├── valueType
│       ├── standardCode
│       ├── unit
│       ├── lowRange
│       ├── highRange
│       └── remarks
└── postLabTestResults
    ├── ObrSetId
    ├── typeOfTest
    ├── dateTimeResultsReceivedAtFacility
    └── dateTimeResultsprovidedToClient

```
## Parameters

### `labRequestDetails`

* **Data type:** `array<object>`  
* **Description:**  
  Container holding one or more laboratory request records associated with a visit.  
  Each entry represents a single laboratory request.



## Core Request Information

#### `dateOccurred`

* **Data type:** `date`  
* **Description:**  
  Date when the laboratory request was initiated.  
* **Example value:**  
  `2024-08-03`



#### `specimenID`

* **Data type:** `string`  
* **Description:**  
  Unique identifier assigned to the specimen.  
* **Usage note:**  
  Used for specimen tracking across facilities and systems.  
* **Example value:**  
  `9839030`



## Specimen Classification

#### `typeOfSpecimen`

* **Data type:** `object`  
* **Description:**  
  Identifies the type of specimen collected.  
* **Usage note:**  
  Uses standardized clinical coding systems.  
  The following parameters are defined within this object.



##### `code`

* **Data type:** `string`  
* **Description:**  
  Code representing the specimen type.  
* **Example value:**  
  `119300005`



##### `codeType`

* **Data type:** `string`  
* **Description:**  
  Coding standard used for the specimen type.  
* **Example value:**  
  `SNOMED`



#### `specimenSite`

* **Data type:** `object`  
* **Description:**  
  Identifies the anatomical site from which the specimen was collected.  
  The following parameters are defined within this object.



##### `code`

* **Data type:** `string`  
* **Example value:**  
  `JNT`



##### `codeType`

* **Data type:** `string`  
* **Example value:**  
  `SNOMED`



#### `specimenCollectedFrom`

* **Data type:** `string`  
* **Description:**  
  Indicates the source of the specimen.  
* **Usage note:**  
  Values are constrained to predefined categories.  
* **Example value:**  
  `Patient`



#### `specimenCollectionVolumeInMl`

* **Data type:** `string`  
* **Description:**  
  Volume of specimen collected, expressed in milliliters.  
* **Example value:**  
  `500`



## Specimen Collection Metadata

#### `specimenCollectorName`

* **Data type:** `string`  
* **Description:**  
  Name of the person who collected the specimen.  
* **Example value:**  
  `Juma Haule`



#### `specimenCollectorContactNumber`

* **Data type:** `string`  
* **Description:**  
  Contact number of the specimen collector.  
* **Example value:**  
  `+255767652234`



#### `dateTimeSpecimenCollected`

* **Data type:** `date-time`  
* **Description:**  
  Date and time when the specimen was collected.  
* **Example value:**  
  `2024-08-03T10:00:00Z`



#### `dateTimeSpecimenReceived`

* **Data type:** `date-time`  
* **Description:**  
  Date and time when the specimen was received at the laboratory.  
* **Example value:**  
  `2024-08-03T10:00:00Z`



#### `specimenSentToLab`

* **Data type:** `boolean`  
* **Description:**  
  Indicates whether the specimen was sent to a laboratory.  
* **Example value:**  
  `true`



#### `dateTimeSpecimenSentToLab`

* **Data type:** `date-time`  
* **Description:**  
  Date and time when the specimen was dispatched to the laboratory.  
* **Example value:**  
  `2024-08-03T10:00:00Z`



#### `specimenRegisteredBy`

* **Data type:** `string`  
* **Description:**  
  Name of the individual who registered the specimen in the system.  
* **Example value:**  
  `Juma Haule`



#### `dateTimeSpecimenRegistered`

* **Data type:** `date-time`  
* **Description:**  
  Date and time when the specimen was registered.  
* **Example value:**  
  `2024-08-03T10:00:00Z`



## Requesting and Receiving Facilities

#### `requestingFacility`

* **Data type:** `object`  
* **Description:**  
  Facility that initiated the laboratory request.  
  The following parameters are defined within this object.



##### `code`

* **Data type:** `string`  
* **Example value:**  
  `172-23`



##### `careType`

* **Data type:** `string`  
* **Example value:**  
  `ANC`



##### `requestTypeCode`

* **Data type:** `string`  
* **Description:**  
  Indicates whether the request is diagnostic or non-diagnostic.  
* **Example value:**  
  `Diagnostic`



##### `referringSpecimenId`

* **Data type:** `string`  
* **Description:**  
  Identifier used when a specimen is referred between facilities.  
* **Example value:**  
  `983776`



##### `clinicalCodes`

* **Data type:** `array<string>`  
* **Description:**  
  Clinical diagnosis codes associated with the request.  
* **Example value:**  
  `A01.1`



##### `clinicalNotes`

* **Data type:** `string`  
* **Description:**  
  Clinical notes supporting the laboratory request.  
* **Example value:**  
  `Patient has been experiencing symptoms for 2 days.`



#### `receivingFacility`

* **Data type:** `object`  
* **Description:**  
  Facility or laboratory section receiving the specimen.  
  The following parameters are defined within this object.



##### `code`

* **Data type:** `string`  
* **Example value:**  
  `172-23`



##### `section`

* **Data type:** `string`  
* **Example value:**  
  `Chemistry`



## Requested Laboratory Tests

#### `requestedLabTests`

* **Data type:** `array<object>`  
* **Description:**  
  List of laboratory tests requested for the specimen.



##### `obrSetId`

* **Data type:** `number`  
* **Description:**  
  Order group identifier linking requests and results.  
* **Example value:**  
  `1`



##### `priority`

* **Data type:** `string`  
* **Description:**  
  Priority level of the test request.  
* **Example value:**  
  `S`



##### `typeOfTest`

* **Data type:** `object`  
* **Description:**  
  Identifies the laboratory test being requested.  
  The following parameters are defined within this object.



###### `code`

* **Data type:** `string`  
* **Example value:**  
  `12345-6`



###### `codeType`

* **Data type:** `string`  
* **Example value:**  
  `LOINC`



##### `repeated`

* **Data type:** `number`  
* **Description:**  
  Number of times the test has been repeated.  
* **Example value:**  
  `0`



## Laboratory Test Results

### `labTestResults`

* **Data type:** `array<object>`  
* **Description:**  
  Container holding one or more laboratory test result records for a specimen.  
  Each entry represents a performed laboratory test and its associated outcomes.
  The following are the parameters of lab test results;

## Specimen Acceptance

#### `specimenAcceptanceStatus`

* **Data type:** `string`  
* **Description:**  
  Indicates whether the specimen was accepted or rejected for testing.  
* **Usage note:**  
  Determines whether results can be generated.  
* **Example value:**  
  `ACCEPTED`



#### `specimenRejectionCodes`

* **Data type:** `array<object>`  
* **Description:**  
  Captures standardized reasons for specimen rejection, if applicable.



##### Rejection Code Entry

##### `code`

* **Data type:** `string`  
* **Description:**  
  Code representing the reason for rejection.  
* **Example value:**  
  `SPRJ001`



##### `codeType`

* **Data type:** `string`  
* **Description:**  
  Coding system used for the rejection reason.  
* **Example value:**  
  `GENERAL`



## Test Identification

#### `typeOfTest`

* **Data type:** `object`  
* **Description:**  
  Identifies the laboratory test that was performed.  
  The following parameters are defined within this object.



##### `code`

* **Data type:** `string`  
* **Description:**  
  Standardized test code.  
* **Example value:**  
  `12345-6`



##### `codeType`

* **Data type:** `string`  
* **Description:**  
  Coding system used to represent the test.  
* **Example value:**  
  `LOINC`



#### `testOrderDate`

* **Data type:** `date-time`  
* **Description:**  
  Date and time when the test was ordered.  
* **Example value:**  
  `2024-08-03T10:00:00Z`



#### `obrSetId`

* **Data type:** `number`  
* **Description:**  
  Order group identifier linking test requests and results.  
* **Usage note:**  
  Used to associate OBR and OBX segments conceptually.  
* **Example value:**  
  `1`



## Analyzer Information

#### `analyzerCode`

* **Data type:** `object`  
* **Description:**  
  Identifies the laboratory analyzer or equipment used.  
  The following parameters are defined within this object.



##### `code`

* **Data type:** `string`  
* **Example value:**  
  `56322`



##### `codeType`

* **Data type:** `string`  
* **Description:**  
  Coding system for the analyzer.  
* **Example value:**  
  `GMDN`



## Test Processing Metadata

#### `dateTimeSpecimenAnalyzed`

* **Data type:** `date-time`  
* **Description:**  
  Date and time when specimen analysis was performed.  
* **Example value:**  
  `2024-08-03T10:00:00Z`



#### `resultStatus`

* **Data type:** `object`  
* **Description:**  
  Indicates the current status of the test result.  
  The following parameters are defined within this object.



##### `code`

* **Data type:** `string`  
* **Description:**  
  Status code representing the result state.  
* **Example value:**  
  `R`



##### `codeType`

* **Data type:** `string`  
* **Description:**  
  Coding system used for the result status.  
* **Example value:**  
  `HL7`



#### `testResultDate`

* **Data type:** `date-time`  
* **Description:**  
  Date and time when the test result was generated.  
* **Example value:**  
  `2024-08-03T10:00:00Z`



#### `testingFacilityCode`

* **Data type:** `string`  
* **Description:**  
  Code identifying the facility where the test was performed.  
* **Example value:**  
  `127-89-0`



#### `referringSpecimenId`

* **Data type:** `string`  
* **Description:**  
  Identifier linking the result to the original specimen.  
* **Example value:**  
  `983776`



## Result Registration and Authorization

#### `dateTimeResultsRegistered`

* **Data type:** `date-time`  
* **Description:**  
  Date and time when the result was registered in the system.  
* **Example value:**  
  `2024-08-03T10:00:00Z`



#### `resultsAuthorisedBy`

* **Data type:** `string`  
* **Description:**  
  Name of the individual who authorized the test results.  
* **Example value:**  
  `Juma Haule`



#### `dateTimeResultsAuthorized`

* **Data type:** `date-time`  
* **Description:**  
  Date and time when the results were authorized.  
* **Example value:**  
  `2024-08-03T10:00:00Z`



#### `specimenTestedBy`

* **Data type:** `string`  
* **Description:**  
  Name of the laboratory personnel who performed the test.  
* **Example value:**  
  `Juma Haule`



## Turnaround Time Targets

#### `targetTimeDays`

* **Data type:** `number`  
* **Description:**  
  Expected turnaround time in days.  
* **Example value:**  
  `10`



#### `targetTimeMins`

* **Data type:** `number`  
* **Description:**  
  Expected turnaround time in minutes.  
* **Example value:**  
  `10`



## Test Result Values (OBX-Level)

#### `results`

* **Data type:** `array<object>`  
* **Description:**  
  Captures individual observation results produced by the test.



##### Result Entry

##### `parameter`

* **Data type:** `string | null`  
* **Description:**  
  Name of the measured parameter, if applicable.  
* **Example value:**  
  `Salmonella Antigen`



##### `releaseDate`

* **Data type:** `date-time`  
* **Description:**  
  Date and time when the result was released.  
* **Example value:**  
  `2024-08-03T10:00:00Z`



##### `resultStatus`

* **Data type:** `object`  
* **Description:**  
  Status of the individual observation result.

**Fields:**
- `code` → `R`  
- `codeType` → `HL7`



##### `obrSetId`

* **Data type:** `number`  
* **Example value:**  
  `1`



##### `obxSetId`

* **Data type:** `number`  
* **Description:**  
  Identifier for the observation result.  
* **Example value:**  
  `1`



##### `obxSubId`

* **Data type:** `number`  
* **Description:**  
  Sub-identifier for composite results.  
* **Example value:**  
  `1`



##### `result`

* **Data type:** `string`  
* **Description:**  
  The observed result value.  
* **Example value:**  
  `Positive`



##### `codedValue`

* **Data type:** `object`  
* **Description:**  
  Standardized coded representation of the result.

**Fields:**
- `code` → `LA6576-8`  
- `type` → `LOINC`



##### `observation`

* **Data type:** `object`  
* **Description:**  
  Standardized code describing the observation performed.

**Fields:**
- `code` → `LA6576-8`  
- `type` → `LOINC`



##### `confirmedDiagnosis`

* **Data type:** `object`  
* **Description:**  
  Diagnosis confirmed based on laboratory findings.

**Fields:**
- `code` → `A01.1`  
- `codeType` → `ICD-10`



##### `abnormalFlagCode`

* **Data type:** `string`  
* **Description:**  
  Indicates abnormality status of the result.  
* **Example value:**  
  `AA`



##### `dateTimeValue`

* **Data type:** `date-time`  
* **Description:**  
  Date and time associated with the observed value.  
* **Example value:**  
  `2024-08-03T10:00:00Z`



##### `resultSemiquantitive`

* **Data type:** `string`  
* **Description:**  
  Semi-quantitative interpretation of the result.  
* **Example value:**  
  `1+`



##### `note`

* **Data type:** `boolean`  
* **Description:**  
  Indicates whether additional notes are associated with the result.  
* **Example value:**  
  `true`



##### `workUnitsInMinutes`

* **Data type:** `number`  
* **Description:**  
  Time spent performing the test.  
* **Example value:**  
  `45`



##### `costUnits`

* **Data type:** `number`  
* **Description:**  
  Cost associated with the test.  
* **Example value:**  
  `56700`



##### `valueType`

* **Data type:** `string`  
* **Description:**  
  Data type of the result value.  
* **Example value:**  
  `NM`



##### `standardCode`

* **Data type:** `boolean`  
* **Description:**  
  Indicates whether standardized coding was used.  
* **Example value:**  
  `true`



##### `unit`

* **Data type:** `string | null`  
* **Description:**  
  Unit of measurement for the result.  
* **Example value:**  
  `mg/dL`



##### `lowRange`

* **Data type:** `string | null`  
* **Description:**  
  Lower reference range.  
* **Example value:**  
  `3.5`



##### `highRange`

* **Data type:** `string | null`  
* **Description:**  
  Upper reference range.  
* **Example value:**  
  `5.5`



##### `remarks`

* **Data type:** `string | null`  
* **Description:**  
  Additional remarks or comments related to the result.  
* **Example value:**  
  `Result consistent with clinical findings`




## Post-Laboratory Actions

#### `postLabTestResults`

* **Data type:** `array<object>`  
* **Description:**  
  Captures post-result handling, including when results were received and communicated to the client.



##### `obrSetId`

* **Data type:** `number`  
* **Example value:**  
  `2`



##### `typeOfTest`

* **Data type:** `string`  
* **Example value:**  
  `12345-6`



##### `dateTimeResultsReceivedAtFacility`

* **Data type:** `date-time`  
* **Example value:**  
  `2024-08-03T10:00:00Z`



##### `dateTimeResultsprovidedToClient`

* **Data type:** `date-time`  
* **Example value:**  
  `2024-08-03T10:00:00Z`


## Example JSON
```json
{
    "labRequestDetails": [
         {
           "dateOccurred": "2024-08-03",
           "specimenID": "9839030",
           "typeOfSpecimen": {
             "code": "119300005",
             "codeType": "SNOMED"
           },
           "specimenSite": {
             "code": "JNT",
             "codeType": "SNOMED"
           },
           "specimenCollectedFrom": "Recovered | Deceased | Patient",
           "specimenCollectionVolumeInMl": "500",
           "specimenCollectorName": "Juma Haule",
           "specimenCollectorContactNumber": "+255767652234",
           "dateTimeSpecimenCollected": "2024-08-03T10:00:00Z",
           "dateTimeSpecimenReceived": "2024-08-03T10:00:00Z",
           "specimenSentToLab": true,
           "dateTimeSpecimenSentToLab": "2024-08-03T10:00:00Z",
           "specimenRegisteredBy": "Juma Haule",
           "dateTimeSpecimenRegistered": "2024-08-03T10:00:00Z",
           "requestingFacility": {
             "code": "172-23",
             "careType": "ANC | DENTAL | EYE | FP"
           },
           "requestTypeCode": "Diagnostic | Non-Diagnostic",
           "referringSpecimenId": "983776",
           "clinicalCodes": [
             "A01.1"
           ],
           "clinicalNotes": "Patient has been experiencing symptoms for 2 days.",
           "receivingFacility": {
             "code": "172-23",
             "section": "Chemistry"
           },
           "requestedLabTests": [
             {
               "obrSetId": 1,
               "priority": "S | R | A | U | T | C | E",
               "typeOfTest": {
                 "code": "12345-6",
                 "codeType": "LOINC"
               },
               "repeated": 0
             }
           ],
           "labTestResults": [
             {
               "specimenAcceptanceStatus": "REJECTED | ACCEPTED",
               "specimenRejectionCodes": [
                 {
                   "code": "SPRJ001",
                   "codeType": "GENERAL"
                 }
               ],
               "typeOfTest": {
                 "code": "12345-6",
                 "codeType": "LOINC"
               },
               "testOrderDate": "2024-08-03T10:00:00Z",
               "obrSetId": 1,
               "analyzerCode": {
                 "code": "56322",
                 "codeType": "GMDN"
               },
               "dateTimeSpecimenAnalyzed": "2024-08-03T10:00:00Z",
               "resultStatus": {
                 "code": "R",
                 "codeType": "HL7"
               },
               "testResultDate": "2024-08-03T10:00:00Z",
               "testingFacilityCode": "127-89-0",
               "referringSpecimenId": "983776",
               "dateTimeResultsRegistered": "2024-08-03T10:00:00Z",
               "resultsAuthorisedBy": "Juma Haule",
               "dateTimeResultsAuthorized": "2024-08-03T10:00:00Z",
               "specimenTestedBy": "Juma Haule",
               "targetTimeDays": 10,
               "targetTimeMins": 10,
               "results": [
                 {
                   "parameter": "Salmonella Antigen",
                   "releaseDate": "2024-08-03T10:00:00Z",
                   "resultStatus": {
                     "code": "R",
                     "codeType": "HL7"
                   },
                   "obrSetId": 1,
                   "obxSetId": 1,
                   "obxSubId": 1,
                   "result": "Positive",
                   "codedValue": {
                     "code": "LA6576-8",
                     "type": "LOINC"
                   },
                   "observation": {
                     "code": "LA6576-8",
                     "type": "LOINC"
                   },
                   "confirmedDiagnosis": {
                     "code": "A01.1",
                     "codeType": "ICD-10"
                   },
                   "abnormalFlagCode": "AA",
                   "dateTimeValue": "2024-08-03T10:00:00Z",
                   "resultSemiquantitive": "1+",
                   "note": true,
                   "workUnitsInMinutes": 45,
                   "costUnits": 56700,
                   "valueType": "NM",
                   "standardCode": true,
                   "unit": "mg/dL",
                   "lowRange": "3.5",
                   "highRange": "5.5",
                   "remarks": "Result consistent with clinical findings"
                 }
               ]
             }
           ],
           "postLabTestResults": [
             {
               "ObrSetId": 2,
               "typeOfTest": "12345-6",
               "dateTimeResultsReceivedAtFacility": "2024-08-03T10:00:00Z",
               "dateTimeResultsprovidedToClient": "2024-08-03T10:00:00Z"
             }
           ]
         }
       ]
}
```
