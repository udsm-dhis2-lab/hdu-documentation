# Template Structure

Each Data Template consists of the following components:

- Template metadata
- Template blocks
- Parameters under each block
- Trigger conditions

Templates are retrieved using the **Data Templates API endpoint**.

## Mandatory vs Optional Blocks

Template data payloads are composed of multiple blocks. Some blocks are mandatory while others are optional.

### Mandatory Blocks and Parameters

When sending data for a client whose data has already been submitted previously, the following blocks and parameters are mandatory:

- **Facility Details**
  - HFCode

- **Demographic Details**
  - MRN or preferred identifier

- **Visit Details**
  - Visit ID

## Data Template Structure

```json
{
 "templateDetails": {
   "code": "GENERAL",
   "id": "general",
   "name": "General",
   "codingVersions": {
     "loincVersion": "2",
     "icdVersion": "10"
   },
   "workflow": {
     "uuid": "23750fc5-0867-4426-817a-89f155532fa1"
   }
 },
 "data": {
   "facilityDetails": {
     "code": "109601-5",
     "name": "Sample Health Facility",
     "system": {
       "name": "LIMS Name",
       "version": "v102.06"
     },
     "bloodBags": [
       {
         "bloodType": "A+",
         "quantity": 10
       },
       {
         "bloodType": "A-",
         "quantity": 5
       },
       {
         "bloodType": "B+",
         "quantity": 8
       },
       {
         "bloodType": "B-",
         "quantity": 3
       },
       {
         "bloodType": "O+",
         "quantity": 12
       },
       {
         "bloodType": "O-",
         "quantity": 4
       },
       {
         "bloodType": "AB+",
         "quantity": 6
       },
       {
         "bloodType": "AB-",
         "quantity": 2
       }
     ]
   },
   "listGrid": [
     {
       "demographicDetails": {
         "mrn": "109601-5-129022102/2023",
         "firstName": "Aminata",
         "middleName": null,
         "lastName": "Haule",
         "ethnicGroup": "Nyamwezi",
         "dateOfBirth": "1998-02-15",
         "gender": "female",
         "phoneNumbers": [
           "+255787656431"
         ],
         "emails": [
           "test@moh.go.tz"
         ],
         "occupation": null,
         "maritalStatus": null,
         "nationality": null,
         "addresses": [
           {
             "village": null,
             "ward": null,
             "district": "Ubungo",
             "region": "Dar es Salaam",
             "country": "Tanzania",
             "category": "Permanent"
           }
         ],
         "identifiers": [
           {
             "type": "MRN",
             "id": "109601-5-129022102/2023",
             "preferred": true
           },
           {
             "type": "NIDA",
             "id": "19980215-03993-00004-21",
             "preferred": false
           }
         ],
         "contactPeople": [
           {
             "firstName": "Richard",
             "lastName": "Haule",
             "phoneNumbers": [
               "+255767652234"
             ],
             "relationShip": "Father"
           }
         ],
         "paymentDetails": [
           {
             "shortName": "NHIF",
             "type": "INSURANCE",
             "insuranceCode": "INS001",
             "name": "National Health Insurance Fund",
             "insuranceId": "9093738389393",
             "policyNumber": null,
             "groupNumber": null
           }
         ]
       },
       "visitDetails": {
         "id": 400388,
         "visitDate": "2024-08-03",
         "newThisYear": false,
         "isNew": false,
         "referredIn": true,
         "closedDate": "2024-08-07",
         "visitType": "OPD",
         "disabled": false,
         "careServices": [
           {
             "careType": "ANC | DENTAL | EYE | FP",
             "visitNumber": 2
           }
         ],
         "attendedSpecialist": [
           {
             "superSpecialist": false
           },
           {
             "specialist": true
           }
         ],
         "serviceComplaints": {
           "providedComplaints": true,
           "complaints": ""
         }
       },
       "appointment": [
         {
           "appointmentId": "394383938",
           "hfrCode": "34893",
           "appointmentStatus": "booked",
           "paymentDetails": [
             {
               "controlNumber": "89385928359",
               "statusCode": "200",
               "description": "This was successful"
             }
           ],
           "serviceDetails": [
             {
               "serviceCode": "012",
               "serviceName": "Service A",
               "shortName": "S012"
             }
           ]
         }
       ],
       "selfMonitoringClinicalInformation": {
         "vitalSigns": [
           {
             "bloodPressure": "89/90",
             "weight": 80,
             "temperature": 37,
             "height": 89,
             "respiration": 90,
             "pulseRate": 89,
             "dateTime": "2025-03-04",
             "notes": "Mild headache in the morning, resolved after medication."
           }
         ]
       },
       "clinicalInformation": {
         "vitalSigns": [
           {
             "bloodPressure": "89/90",
             "weight": 80,
             "temperature": 37,
             "height": 89,
             "respiration": 90,
             "pulseRate": 89,
             "dateTime": "2025-03-04",
             "notes": "Mild headache in the morning, resolved after medication."
           }
         ],
         "visitNotes": [
           {
             "date": "2024-11-12",
             "chiefComplaints": [
               "headache for 2 days",
               "chest pain"
             ],
             "injured": true,
             "historyOfPresentIllness": [
               ""
             ],
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
             "pastMedicalHistory": [
               ""
             ],
             "familyAndSocialHistory": [
               ""
             ],
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
                   "parameter": null,
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
                   "unit": null,
                   "lowRange": null,
                   "highRange": null,
                   "remarks": null
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
       ],
       "diagnosisDetails": [
         {
           "certainty": "CONFIRMED",
           "diagnosis": "A01.1 Typhoid",
           "diagnosisCode": "A01.1",
           "diagnosisDate": "2024-08-01",
           "dateOfSymptomsOnset": "2024-07-30",
           "diagnosisDescription": "CONFIRMED"
         }
       ],
       "medicationDetails": [
         {
           "name": "TRAMADOL HCL  50 MG CAP",
           "code": "2.01.0131",
           "codeStandard": "MNH CODE",
           "dosage": {
             "dose": "600mg/dl",
             "frequency": "twice daily",
             "route": "intravenous",
             "instructions": "",
             "quantity": "60",
             "duration": "30 Days",
             "days": [
               1,
               8,
               15,
               21
             ],
             "schedule": [
               "2024-01-01",
               "2024-01-08"
             ],
             "dosageDates": [
               "2024-01-01",
               "2024-01-08"
             ]
           },
           "issued": {
             "quantity": "60.000"
           },
           "orderDate": "2024-01-01",
           "periodOfMedication": "",
           "treatmentType": "chemoTherapy",
           "refillStatus": "served",
           "currentRefill": 2,
           "maxRefill": 5,
           "paymentDetails": {
             "controlNumber": "96999484838829394",
             "statusCode": "200",
             "status": "Successful",
             "type": "CASH",
             "description": "This was successful"
           }
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
               "dosageDates": [
                 "2024-01-01",
                 "2024-01-09",
                 "2024-01-17"
               ],
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
       "eyeClinicDetails": {
         "Refracted": true,
         "spectaclesPrescribed": true,
         "spectacleDispensed": true,
         "contactLenseDispensed": false,
         "prescribedWithLowVision": true,
         "diagnosedWithLowVisionI": true,
         "diagnosedWithLowVisionII": true,
         "isDispensedWithLowVisionDevice": true
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
         "dischargedLocation": "H/RD/RHC/RHS/PNC",
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
         "lastAncVisitDate": "2024-01-01",
         "positiveHivStatusBeforeService": false,
         "referredToCTC": false,
         "referredIn": false,
         "referredOut": false,
         "counselling": [
           {
             "name": "Infant feeding",
             "code": "L35909"
           }
         ],
         "providedWithHivCounsellingBeforeLabTest": false,
         "providedWithHivCounsellingAfterLabTest": false,
         "prophylaxis": {
           "providedWithLLIN": false,
           "providedWithIPT2": false,
           "providedWithIPT3": false,
           "providedWithIPT4": false,
           "providedWithIFFolic60Tablets": false,
           "providedWithMebendazoleOrAlbendazole": false
         },
         "hivDetails": {
           "status": "Negative",
           "code": "LA6577-6",
           "hivTestNumber": 1
         },
         "syphilisDetails": {
           "status": "Negative",
           "code": "LA6577-6",
           "providedWithTreatment": false
         },
         "diagnosedWithOtherSTDs": false,
         "providedWithTreatmentForOtherSTDs": false,
         "gravidity": 2,
         "spouseDetails": {
           "hivDetails": {
             "status": "Negative",
             "code": "B16",
             "hivTestNumber": 1
           },
           "hepatitisB": {
             "status": "Negative",
             "code": "B16",
             "providedWithTreatments": false
           },
           "syphilisDetails": {
             "status": "Negative",
             "code": "A51",
             "providedWithTreatment": false
           },
           "diagnosedWithOtherSTDs": false,
           "providedWithTreatmentForOtherSTDs": false,
           "otherSpouseDetails": []
         }
       },
       "laborAndDeliveryDetails": {
         "date": "2024-01-01",
         "motherOrigin": "TBA/H/RD/D/HC/HS",
         "hasComeWithSpouse": true,
         "hasComeWithCompanion": false,
         "pregnancyAgeInWeeks": 4,
         "wasProvidedWithAntenatalCorticosteroid": true,
         "hasHistoryOfFGM": true,
         "hivDetails": {
           "status": "Negative",
           "hivTestNumber": 2,
           "referredToCTC": true,
           "ancHivStatus": {
             "numberOfTestsTaken": 2,
             "status": "Negative"
           }
         },
         "deliveryMethod": {
           "name": "SVD",
           "code": "32482-0"
         },
         "placeOfBirth": "H/BBA/TBA/HF",
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
             "gender": "male",
             "macerated": false,
             "fresh": false,
             "bornWithDisabilities": false,
             "hivDnaPCRTested": true,
             "childHivStatus": "Negative",
             "apgarScore": {
               "oneMinute": 6,
               "fiveMinute": 8
             },
             "wasBreastFedWithinOneHourAfterDelivery": true,
             "weightInKgs": null,
             "multipleBirth": false,
             "motherAgeInYears": null,
             "birthOrder": null,
             "exclusiveBreastFed": true,
             "motherHivStatus": true,
             "providedWithARV": null,
             "outcomeDetails": {
               "isAlive": false,
               "referredToPNC": false,
               "referredToHospital": false,
               "referredTohealthFacility": false
             },
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
             "methodOfResuscitation": "SUCTION/STIMULATION/BAGANDMASK",
             "otherServices": []
           }
         ],
         "others": {
           "emoc": {
             "providedAntibiotic": true,
             "providedUterotonic": true,
             "providedMagnesiumSulphate": true,
             "removedPlacenta": true,
             "performedMvaOrDc": true,
             "administeredBlood": true
           },
           "amstl": {
             "cordTractionUsed": true,
             "uterineMassageDone": true,
             "administeredOxytocin": false,
             "administeredEgometrine": true,
             "administeredMisoprostol": true
           },
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
         "positiveHivStatusBeforeService": true,
         "wasCounselled": true,
         "hasComeWithSpouse": true,
         "serviceLocation": "FOR/CBD/RCH/CTC/COR",
         "referred": false,
         "cancerScreeningDetails": {
           "breastCancer": {
             "foundWithBreastCancerSymptoms": true,
             "screened": true
           },
           "cervicalCancer": {
             "suspected": true,
             "screenedWithVIA": true,
             "viaTestPositive": false
           }
         },
         "hivStatus": {
           "status": "Negative",
           "referredToCTC": false
         },
         "spouseHivStatus": {
           "status": "Negative",
           "referredToCTC": false
         },
         "breastFeeding": true,
         "sideEffects": {
           "bleeding": true,
           "headache": true,
           "gotPregnancy": true
         }
       },
       "childHealthDetails": {
         "serviceModality": "CAMPAIGN|ROUTINE",
         "motherAge": 24,
         "prophylaxis": {
           "albendazole": {
             "administered": true
           },
           "vitaminA": {
             "administered": true
           },
           "providedWithLLIN": true
         },
         "infantFeeding": "EBF|MF",
         "providedWithInfantFeedingCounselling": true,
         "hasBeenBreastFedFor24Month": true,
         "motherHivStatus": {
           "status": "Negative",
           "testingDate": "2021-04-09"
         },
         "referredToCTC": true
       },
       "cpacDetails": {
         "pregnancyAgeInWeeks": 12,
         "causeOfAbortion": "SPONTANEOUS|SAVELIFE|DRUGUSESIDEEFFECTS|OTHERS",
         "afterAbortionServices": "MVA|MEDICALTREATMENT|SHARPCURRATAGE",
         "positiveHIVStatusBeforeAbortion": true,
         "hivTest": {
           "status": "Negative"
         },
         "referReason": "CPAC | OTHERS",
         "postAbortionsMedications": {
           "providedWithAntibiotics": true,
           "providedWithPainKillers": false,
           "providedWithOxytocin": false,
           "providedWithMisoprostol": true,
           "providedWithIvInfusion": true
         },
         "postAbortionCounselling": {
           "providedWithSTDsPreventionCounselling": false,
           "providedWithHIVCounselling": true,
           "providedWithFamilyPlanningCounselling": true
         },
         "contraceptives": {
           "didReceiveOralPillsPOP": true,
           "popCyclesProvided": 4,
           "didReceiveOralPillsCOC": true,
           "cocCyclesProvided": 4,
           "didReceivePillCycles": true,
           "wasInsertedWithImplanon": false,
           "wasInsertedWithJadelle": false,
           "didReceiveIUD": false,
           "didHaveTubalLigation": false,
           "didReceiveInjection": true,
           "numberOfFemaleCondomsProvided": 0,
           "numberOfMaleCondomsProvided": 5
         }
       },
       "cecap": {
         "hivStatus": "POSITIVE | NEGATIVE",
         "cancerScreeningDetails": {
           "breastCancer": {
             "foundWithBreastCancerSymptoms": true,
             "screened": true
           },
           "cervicalCancer": {
             "suspected": true,
             "screenedWithVIA": true,
             "screenedWithHPVDNA": true,
             "viaTestPositive": false,
             "hpvDNAPositive": false,
             "diagnosedWithLargeLesion": true,
             "diagnosedWithSmallOrModerateLesion": true,
             "treatedWithCryo": true,
             "treatedWithThermo": false,
             "treatedWithLEEP": true,
             "firstTimeScreening": false,
             "treatedOnTheSameDay": false,
             "complicationsAfterTreatment": true,
             "foundWithHivAndReferredToCTC": true
           }
         }
       },
       "postnatalDetails": {
         "date": "2024-11-01",
         "positiveHivStatusBeforeService": false,
         "hivStatusAsSeenFromAncCard": "Negative",
         "hivDetails": {
           "status": "Negative",
           "code": "LA6577-6",
           "hivTestNumber": 2
         },
         "motherAndChildOrigin": "LD/TBA/H/RD/RHC/RHS",
         "referredToCTC": false,
         "placeOfBirth": "TBA/H/BBA",
         "prophylaxis": {
           "providedWithAntenatalCorticosteroids": false,
           "provideWithVitaminA": false,
           "providedWithFEFO": false
         },
         "counselling": [
           {
             "name": "Infant feeding",
             "code": "L35909"
           }
         ],
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
         "daysSinceDelivery": 2,
         "breastFeedingDetails": null,
         "neonatalDeathDetails": [
           {
             "dateOfDeath": "2024-08-07",
             "lineA": "A01.1",
             "lineB": "A01.1",
             "lineC": null,
             "lineD": null,
             "causeOfDeathOther": null,
             "mannerOfDeath": null,
             "placeOfDeath": "On the route to health facility"
           }
         ],
         "birthDetails": [
           {
             "dateOfBirth": null,
             "weightInKgs": null,
             "multipleBirth": false,
             "birthOrder": null,
             "infantFeeding": "EBF/RF/MF",
             "gender": "female",
             "macerated": false,
             "fresh": false,
             "providedWithKmc": true,
             "hb": "12",
             "hbigTested": true,
             "hivDnaPCRTested": true,
             "childHivStatus": "Negative",
             "infections": {
               "hasSepticaemia": true,
               "hasOmphalitis": true,
               "hasSkinInfection": true,
               "hasOcularInfection": true,
               "hasJaundice": true
             },
             "outcomeDetails": {
               "dischargedHome": false,
               "referredToNCU": false,
               "referredToHospital": false,
               "referredToHealthFacility": false
             },
             "motherHivStatus": true,
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
         "referralDate": "24-08-07",
         "referredToOtherCountry": false,
         "reason": [
           "Specialized Surgery Required"
         ],
         "referralNumber": "56430-096-2024",
         "hfrCode": "111890-0",
         "referringClinician": {
           "name": "Dr. John Doe",
           "phoneNumber": "+255712345678",
           "MCTCode": "MCT123456"
         }
       },
       "deathRegistryDetails": {
       "dateOfDeath": "2024-08-07",
       "lineA": "A01.1",
       "lineB": "A01.1",
       "lineC": "A89.1",
       "lineD": "A89.1",
       "causeOfDeathOther": "string",
       "mannerOfDeath": "DISEASE | ACCIDENT | WAR | SUICIDE | UNKNOWN | DEATH_SENTENCE | ATTACKED | INVESTIGATION_IN_PROGRESS | TO_HANG_ONESELF_WITHOUT_KNOWN_CAUSES | UNRECOGNIZED_MANNER_OF_DEATH",
       "placeOfDeath": "ACCIDENT | COMMUNITY | EN_ROUTE_TO_HEALTH_FACILITY | HEALTH_FACILITY | HOUSEHOLD",
       "periodTypePatientWasSick": "DAY | YEAR | HOUR | MONTH | MINUTE",
       "timeInNumbersPatientWasSick": 5,
       "otherDeathDetails": {
           "wasSurgeryPerformedInTheLast4Weeks": "YES | NO | UNKNOWN",
           "dateOfSurgery": "YYYY-MM-DD",
           "surgeryReason": "string",
           "postmortemDetails": {
               "wasPostmortemDone": "YES | NO | UNKNOWN",
               "wasPostmortemResultsUsedToDetermineCauseOfDeath": "YES | NO | UNKNOWN",
               "dateOfExternalDeathCauseOccurred": "YYYY-MM-DD",
               "externalCauseOfDeathExplanation": "text",
               "placeExternalCauseOfDeath": "HOME | ORGANIZATION_RESIDENCE | OTHERS | COMMUNITY | WORK_AREA | INDUSTRIAL_AREAS | SPORTS_PLAYGROUND | SCHOOL | FARM"
           },
           "neonatalDetails": {
               "wasMultipleBirth": "YES | NO | UNKNOWN",
               "stillbirth": "YES | NO | UNKNOWN",
               "macerated": false,
               "fresh": false,
               "motherAge": 30,
               "pregnancyAgeInWeeks": 38,
               "childWeightAfterBirthInKg": 2.5,
               "hrsSinceBirthWithin24hrsBeforeDeath": 14,
               "motherConditionsThatLedToChildDeath": "text"
           },
           "maternalDeathDetails": {
               "wasPregnant": "YES | NO | UNKNOWN",
               "wasDeathAfterOrDuringPregnancy": "DURING_DELIVERY | WITHIN_FORTY_TWO_DAYS_DAYS | FORTY_TWO_DAYS_TO_ONE_YEAR | UNKNOWN",
               "wasPregnancyContributedToDeath": "YES | NO | UNKNOWN",
               "wasDeathAudited": "YES | NO | UNKNOWN"
           }
       }
   }
,
       "contraceptives": {
         "popCyclesProvided": 4,
         "cocCyclesProvided": 4,
         "didReceiveSDM": false,
         "didUseLAM": false,
         "didOptToUseEmergencyMethods": false,
         "wasInsertedWithImplanon": false,
         "wasInsertedWithJadelle": false,
         "didRemoveImplanon": false,
         "didRemoveJadelle": false,
         "didReceiveIUD": false,
         "didRemoveIUD": false,
         "didHaveTubalLigation": false,
         "didHaveVasectomy": false,
         "didReceiveInjection": true,
         "numberOfFemaleCondomsProvided": 0,
         "numberOfMaleCondomsProvided": 5
       }
     }
   ],
   "reportDetails": {
     "reportingDateTime": "2024-08-07T00:00:00Z"
   }
 }
}
