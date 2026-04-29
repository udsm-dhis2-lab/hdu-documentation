# Retrieving History

### Message Type

* **Format:** `JSON`  
* **Description:**  
  Response and request payloads are exchanged in JSON format.



### Message Category

* **Category:** `DATA`  
* **Description:**  
  Indicates transactional client data retrieval.



### Request Type

* **Method:** `GET`  
* **Description:**  
  Fetches client records based on provided query parameters.



### API Endpoint

* **Base URL:**  
  `/api/v1/hduApi/cr/clients`



### Query Parameters

| Parameter | Description |
|----------|-------------|
| `id` | Primary identifier used to retrieve a specific client |
| `idType` | Type of identifier used with `id` (e.g., MRN, NIDA) |
| `gender` | Filters clients by gender |
| `hfrCode` | Filters clients by health facility code |


**Priority rule:**  
If `id` and `idType` are provided, they are used first for retrieval.


### Authentication

* **Type:** `Basic Authentication`  
* **Description:**  
  Requires valid credentials to access client registry data.


## Response [If the id is specified, response will be the matched latest shared health record]
```json
{
 "pager": {
   "page": 0,
   "totalPages": 1,
   "total": 1
 },
 "results": [
   {
     "facilityDetails": {
       "code": "109601-5",
       "name": "Sample Health Facility"
     },
     "reportDetails": {
       "reportingDate": "2024-08-07"
     },
     "mrn": "109601-5-129022102/2023",
     "visitDetails": {
       "id": 400388,
       "visitDate": "2024-08-03",
       "newThisYear": false,
       "isNew": false,
       "closedDate": "2024-08-07",
       "visitType": "General",
       "careServices": [
         {
           "careType": "ANC",
           "visitNumber": 2
         }
       ]
     },
     "appointment": [
          {
            "appointmentId": "",
            "hfrCode": "",
            "appointmentStatus": "",
            "paymentDetails": [
              {
                "controlNumber": "",
                "statusCode": "",
                "description": ""
              }
            ],
            "serviceDetails": [
              {
                "serviceCode": "",
                "serviceName": "",
                "shortName": ""
              }
            ]
          }
        ],
     "clinicalInformation": {
       "vitalSigns": [
         {
           "bloodPressure": null,
           "weight": null,
           "temperature": null,
           "height": null,
           "respiration": null,
           "pulseRate": null,
           "dateTime": null
         }
       ],
       "visitNotes": [
         {
             "date": "2024-11-12",
           "chiefComplaints": ["headache for 2 days", "chest pain"],
           "historyOfPresentIllness": null,
           "reviewOfOtherSystems": [
             {
               "code": "CVS",
               "name": "Cardiovascular System",
               "notes": "CNS notes"
             },
             {
               "code": "ENT",
               "name": "ENT",
               "notes": "ENT notes"
             }
           ],
           "pastMedicalHistory": null,
           "familyAndSocialHistory": null,
           "generalExaminationObservation": null,
           "localExamination": null,
           "systemicExaminationObservation": [
             {
               "code": "CVS",
               "name": "Cardiovascular System",
               "notes": "CNS notes"
             },
             {
               "code": "ENT",
               "name": "ENT",
               "notes": "ENT notes"
             }
           ],
           "doctorPlanOrSuggestion": null,
           "providerSpeciality": "Pediatrician"
         }
       ]
     },
     "allergies": [
       {
         "code": null,
         "category": null,
         "name": null,
         "criticality": null,
         "verificationStatus": null
       }
     ],
     "chronicConditions": [
       {
         "code": null,
         "category": null,
         "name": null,
         "criticality": null,
         "verificationStatus": null
       }
     ],
     "lifeStyleInformation": {
       "smoking": {
         "using": false,
         "notes": null
       },
       "alcoholUse": {
         "using": false,
         "notes": null
       },
       "drugUse": {
         "using": true,
         "notes": null
       }
     },
     "investigationDetails": [
       {
         "caseClassification": "Suspect",
         "dateOccurred": "2024-08-04",
         "daysSinceSymptoms": "1",
         "diseaseCode": "A01.1",
         "labSpecimenTaken": "Yes",
         "specimenSentTo": null,
         "vaccinated": "No"
       }
     ],
     "labInvestigationDetails": [
       {
         "testCode": "12345-6",
         "testOrderDate": "2024-08-02",
         "testSampleId": "INV123",
         "testOrderId": "Order123",
         "testResultDate": "2024-08-01",
         "testStatus": "Completed",
         "testType": "Lab Test",
         "standardCode": true,
         "codeType": "LOINC",
         "testResults": [
           {
             "parameter": null,
             "releaseDate": "2024-08-08",
             "result": "Positive",
             "codedValue": "LA6576-8",
             "valueType": "TEXT",
             "standardCode": true,
             "codeType": "LOINC",
             "unit": null,
             "lowRange": null,
             "hiRange": null,
             "remarks": null
           }
         ]
       }
     ],
     "diagnosisDetails": [
       {
         "certainty": "CONFIRMED",
         "diagnosis": "A01.1 Typhoid",
         "diagnosisCode": "A01.1",
         "diagnosisDate": "2024-08-01",
         "diagnosisDescription": "CONFIRMED"
       }
     ],
     "medicationDetails": [
       {
         "name": null,
         "code": null,
         "codeStandard": "MSD CODE",
         "dosage": {
           "dose": "600mg/dl",
           "frequency": "twice daily",
           "route": "intravenous",
           "instructions": null,
           "quantity": null,
           "duration": "21 days",
           "days": [1, 8, 15, 21],
           "schedule": ["2024-01-01", "2024-01-08"],
           "dosageDates": ["2024-01-01", "2024-01-08"]
         },
         "orderDate": "2024-01-03",
         "periodOfMedication": null,
         "treatmentType": "chemoTherapy"
       }
     ],
     "treatmentDetails": {
       "chemoTherapy": [
         {
           "diagnosis": "C50",
           "regiment": "1",
           "stage": 2,
           "totalNumberOfExpectedCycles": 10,
           "currentChemotherapeuticCycles": 2
         }
       ],
       "radioTherapy": [
         {
           "prescription": {
             "type": "3D",
             "intention": "Clinical",
             "technique": "EBRT",
             "site": "Upper Quadrant Breast",
             "dailyDose": 3,
             "totalDose": 30,
             "startDate": "2024-01-01",
             "dosageDates": ["2024-01-01", "2024-01-09", "2024-01-17"],
             "administrationDates": [],
             "remarks": null
           },
           "report": [
             {
               "date": "2024-01-01",
               "MU": 23,
               "attachments": "[https://inaya.orci.or.tz/images/1.jpg]"
             }
           ]
         }
       ],
       "palliativeCare": null,
       "surgery": [
         {
           "diagnosis": "C50",
           "reason": "remove tumor",
           "report": {
             "indication": null,
             "steps": null,
             "remarks": null
           }
         }
       ],
       "hormoneTherapy": [
         {
           "diagnosis": "C50",
           "regiment": "1",
           "stage": 2,
           "totalNumberOfExpectedCycles": 10,
           "currentChemotherapeuticCycles": 2
         }
       ],
       "symptomatic": null,
       "alternativeTreatment": null,
       "medicalProcedureDetails": [
         {
           "procedureDate": null,
           "procedureType": null,
           "findings": null,
           "diagnosis": null
         }
       ]
     },
     "radiologyDetails": [
       {
         "testDate": "2024-08-08",
         "testTypeName": "MRI",
         "testTypeCode": "MRI",
         "testReport": "",
         "bodySite": null,
         "url": "http://192.168.10.10/pacs/{mrn}-mri.dcm"
       }
     ],
     "admissionDetails": {
       "admissionDate": "2024-08-06",
       "admissionDiagnosis": "A01.1",
       "dischargedOn": "2024-08-09",
       "dischargeStatus": "Alive"
     },
     "outcomeDetails": {
       "isAlive": false,
       "deathLocation": null,
       "deathDate": null,
       "contactTracing": null,
       "investigationConducted": null,
       "quarantined": null,
       "referred": false
     },
     "otherInformation": {
       "cancerScreening": {
         "date": "2024-01-01",
         "method": "VIA",
         "code": "80358-7",
         "results": {
           "date": null,
           "value": "Positive",
           "code": "LA6576-8"
         }
       },
       "cancerDetails": [
         {
           "incidenceDate": null,
           "topography": null,
           "morphology": null,
           "basisOfDiagnosis": null,
           "stage": null
         }
       ]
     },
     "visitMainPaymentDetails": {
       "shortName": "NHIF",
       "type": "INSURANCE",
       "insuranceCode": "INS001",
       "name": "National Health Insurance Fund",
       "insuranceId": "7383738389393"
     },
     "causesOfDeathDetails": {
       "dateOfDeath": "2024-08-07",
       "lineA": "A01.1",
       "lineB": "A01.1",
       "lineC": null,
       "lineD": null,
       "causeOfDeathOther": null,
       "mannerOfDeath": null,
       "placeOfDeath": "On the route to health facility",
       "otherDeathDetails": {
         "postmortemDetails": null,
         "marcerated": false,
         "fresh": false,
         "motherCondition": null
       }
     },
     "antenatalCareDetails": {
       "date": "2024-11-01",
       "pregnancyAgeInWeeks": null,
       "positiveHivStatusBeforeService": false,
       "referredToCTC": false,
       "providedWithFamilyPlanningCounseling": false,
       "providedWithInfantFeedingCounseling": false,
       "hivDetails": {
         "status": "Negative",
         "code": "LA6577-6"
       },
       "syphilisDetails": {
         "status": "Negative",
         "code": "LA6577-6"
       },
       "gravidity": 2,
       "spouseDetails": {
         "hivDetails": {
           "status": "Negative",
           "code": "LA6577-6"
         },
         "syphilisDetails": {
           "status": "Negative",
           "code": "LA6577-6"
         },
         "otherSpouseDetails": []
       }
     },
     "laborAndDeliveryDetails": {
       "date": "2024-01-01",
       "deliveryMethod": {
         "name": "SVD",
         "code": "32482-0"
       },
       "placeOfBirth": null,
       "timeBetweenLaborPainAndDeliveryInHrs": null,
       "isAttendantSkilled": true,
       "providedWithFamilyPlanningCounseling": false,
       "providedWithInfantFeedingCounseling": false,
       "beforeBirthComplications": [
         {
           "name": null,
           "code": null
         }
       ],
       "birthComplications": [
         {
           "name": null,
           "code": null
         }
       ],
       "birthDetails": [
         {
           "dateOfBirth": null,
           "weightInKgs": null,
           "multipleBirth": false,
           "motherAgeInYears": null,
           "birthOrder": null,
           "exclusiveBreastFed": true,
           "motherHivStatus": "Negative",
           "providedWithARV": null,
           "vaccinationDetails": [
             {
               "code": null,
               "date": "2024-08-07",
               "type": "BCG",
               "name": "",
               "vaccinationModality": null,
               "status": "Completed",
               "notes": null,
               "dosage": 1,
               "reaction": {
                 "reactionDate": null,
                 "notes": null,
                 "reported": false
               }
             }
           ],
           "breatheAssistance": {
             "provided": true,
             "code": "73764-0"
           },
           "otherServices": []
         }
       ],
       "others": {
         "emoc": [],
         "amstl": [],
         "familyPlanning": []
       }
     },
     "vaccinationDetails": [
       {
         "code": null,
         "date": "2024-08-07",
         "type": "BCG",
         "name": "",
         "vaccinationModality": null,
         "status": "Completed",
         "notes": "",
         "dosage": 1,
         "reaction": {
           "reactionDate": null,
           "notes": null,
           "reported": false
         }
       }
     ],
     "prophylAxisDetails": [
       {
         "code": null,
         "date": "2024-08-07",
         "type": "PrEP",
         "name": "",
         "status": "Completed",
         "notes": null,
         "reaction": {
           "reactionDate": null,
           "notes": null,
           "reported": false
         }
       }
     ],
     "familyPlanningDetails": {
       "date": "2024-11-01",
       "longTermMethods": [
         {
           "provided": true,
           "type": "jadelle",
           "code": "55404-2"
         }
       ],
       "shortTermMethods": [
         {
           "provided": true,
           "code": "86605-8"
         }
       ]
     },
     "postnatalDetails": {
       "date": "2024-11-01",
       "positiveHivStatusBeforeService": false,
       "referredToCTC": false,
       "referredToClinicForFurtherServices": true,
       "outCome": "alive",
       "APGARScore": 7,
       "demagedNipples": {
         "provided": true,
         "code": "61149-1"
       },
       "mastitis": {
         "provided": true,
         "code": "77392-7"
       },
       "breastAbscess": {
         "provided": true,
         "code": "77391-9"
       },
       "fistula": {
         "provided": true,
         "code": "37104-4"
       },
       "puerperalPsychosis": {
         "provided": true,
         "code": "77385-1"
       },
       "hoursSinceDelivery": 12,
       "breastFeedingDetails": null,
       "birthDetails": [
         {
           "dateOfBirth": null,
           "weightInKgs": null,
           "multipleBirth": false,
           "birthOrder": null,
           "exclusiveBreastFed": true,
           "marcerated": false,
           "fresh": false,
           "motherHivStatus": {
             "name": null,
             "code": null
           },
           "providedWithARV": null,
           "referred": true,
           "vaccinationDetails": [
             {
               "code": null,
               "date": "2024-08-07",
               "type": "BCG",
               "name": "",
               "vaccinationModality": null,
               "status": "Completed",
               "notes": null,
               "dosage": 1,
               "reaction": {
                 "reactionDate": null,
                 "notes": null,
                 "reported": false
               }
             }
           ],
           "breatheAssistance": {
             "provided": true,
             "code": "73764-0"
           },
           "otherServices": []
         }
       ],
       "otherServices": []
     },
     "billingsDetails": [
       {
         "billID": "2939",
         "billingCode": "7328TY",
         "billType": "Insurance",
         "insuranceCode": "INS001",
         "insuranceName": "NHIF",
         "amountBilled": 24000,
         "exemptionType": null,
         "wavedAmount": null,
         "billDate": null,
         "standardCode": "LOINC"
       }
     ],
     "referralDetails": {
       "referralDate": null,
       "reason": [],
       "referralNumber": null,
       "hfrCode": null,
       "referringClinician": {
         "name": null,
         "phoneNumber": null,
         "MCTCode": null
       }
     }
   }
 ]
}
```

