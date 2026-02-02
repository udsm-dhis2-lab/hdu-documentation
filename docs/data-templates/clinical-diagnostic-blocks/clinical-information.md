# Clinical Information (`clinicalInformation`)

### Overview

The **Clinical Information** block captures clinician-recorded clinical findings, observations, and notes associated with a client visit.

It ensures that:

- Clinical assessments and observations made by health professionals are systematically documented.
- A complete clinical picture of the visit is available for diagnosis, treatment, and follow-up.
- Both structured and unstructured clinical information can be used for care continuity, reporting, and analytics.

This block appears within each record in the `listGrid` array and represents facility-based clinical documentation for a visit.



### Object Structure (Conceptual)

```text
clinicalInformation
├── vitalSigns
│   ├── bloodPressure
│   ├── weight
│   ├── temperature
│   ├── height
│   ├── respiration
│   ├── pulseRate
│   ├── dateTime
│   └── notes
└── visitNotes
    ├── date
    ├── chiefComplaints
    ├── injured
    ├── historyOfPresentIllness
    ├── reviewOfOtherSystems
    │   ├── code
    │   ├── name
    │   └── notes
    ├── pastMedicalHistory
    ├── familyAndSocialHistory
    ├── generalExaminationObservation
    ├── localExamination
    ├── systemicExaminationObservation
    │   ├── code
    │   ├── name
    │   └── notes
    ├── doctorPlanOrSuggestion
    └── providerSpeciality
```
## Parameters

### `clinicalInformation`

* **Data type:** `object`  
* **Description:**  
  Root container holding clinical observations, assessments, and notes recorded by a healthcare provider during a visit.  
  The following parameters are defined within this object.



## Vital Signs

#### `vitalSigns`

* **Data type:** `array<object>`  
* **Description:**  
  Captures vital sign measurements recorded by a healthcare provider during the visit.  
  Each entry represents a single vital sign recording event.



##### `bloodPressure`

* **Data type:** `string`  
* **Description:**  
  Blood pressure reading recorded during the clinical encounter.  
* **Example value:**  
  `89/90`



##### `weight`

* **Data type:** `number`  
* **Description:**  
  Body weight of the client at the time of examination.  
* **Example value:**  
  `80`



##### `temperature`

* **Data type:** `number`  
* **Description:**  
  Body temperature measured during the visit.  
* **Example value:**  
  `37`



##### `height`

* **Data type:** `number`  
* **Description:**  
  Height of the client as measured during the visit.  
* **Example value:**  
  `89`



##### `respiration`

* **Data type:** `number`  
* **Description:**  
  Respiratory rate measured during examination.  
* **Example value:**  
  `90`



##### `pulseRate`

* **Data type:** `number`  
* **Description:**  
  Heart rate measured during examination.  
* **Example value:**  
  `89`



##### `dateTime`

* **Data type:** `date-time`  
* **Description:**  
  Date and time when the vital signs were recorded.  
* **Example value:**  
  `2025-03-04`



##### `notes`

* **Data type:** `string`  
* **Description:**  
  Additional clinical notes related to the recorded vital signs.  
* **Example value:**  
  `Mild headache in the morning, resolved after medication.`



## Visit Notes

#### `visitNotes`

* **Data type:** `array<object>`  
* **Description:**  
  Captures structured clinical notes and assessments documented by the clinician for the visit.  
  Each entry represents a single clinical note.



##### `date`

* **Data type:** `date-time`  
* **Description:**  
  Date when the clinical note was recorded.  
* **Example value:**  
  `2024-11-12`



##### `chiefComplaints`

* **Data type:** `array<string>`  
* **Description:**  
  List of primary complaints reported by the client.  
* **Example value:**  
  `headache for 2 days`, `chest pain`



##### `injured`

* **Data type:** `boolean`  
* **Description:**  
  Indicates whether the visit was related to an injury.  
* **Example value:**  
  `true`



##### `historyOfPresentIllness`

* **Data type:** `array<string>`  
* **Description:**  
  Narrative description of the current illness or condition.  
* **Example value:**  
  `Fever and headache started two days prior to visit`



##### `reviewOfOtherSystems`

* **Data type:** `array<object>`  
* **Description:**  
  Clinical review findings of other body systems.

**Review Entry Fields:**
- `code` – system code (example., `CVS`)  
- `name` – system name (example., `Cardiovascular System`)  
- `notes` – clinical notes related to the system



##### `pastMedicalHistory`

* **Data type:** `array<string>`  
* **Description:**  
  Summary of the client’s past medical conditions.  
* **Example value:**  
  `Diabetes mellitus`



##### `familyAndSocialHistory`

* **Data type:** `array<string>`  
* **Description:**  
  Relevant family and social history influencing clinical care.  
* **Example value:**  
  `Family history of hypertension`



##### `generalExaminationObservation`

* **Data type:** `string | null`  
* **Description:**  
  Findings from general physical examination.  
* **Example value:**  
  `Patient appears weak but stable`



##### `localExamination`

* **Data type:** `string | null`  
* **Description:**  
  Findings from focused local examination.  
* **Example value:**  
  `Tenderness noted in the chest wall`



##### `systemicExaminationObservation`

* **Data type:** `array<object>`  
* **Description:**  
  Findings from detailed systemic examination.

**Systemic Examination Entry Fields:**
- `code` – system code (example., `ENT`)  
- `name` – system name (example., `ENT`)  
- `notes` – examination findings (example., `ENT notes`)



##### `doctorPlanOrSuggestion`

* **Data type:** `string | null`  
* **Description:**  
  Clinical plan, treatment strategy, or recommendations made by the clinician.  
* **Example value:**  
  `Start analgesics and review after 3 days`



##### `providerSpeciality`

* **Data type:** `string`  
* **Description:**  
  Speciality of the healthcare provider attending the client.  
* **Example value:**  
  `Pediatrician`
```json
{
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
          }
        ],
        "pastMedicalHistory": [
          ""
        ],
        "familyAndSocialHistory": [
          ""
        ],
        "generalExaminationObservation": "Patient appears weak but stable",
        "localExamination": "Tenderness noted in the chest wall",
        "systemicExaminationObservation": [
          {
            "code": "ENT",
            "name": "ENT",
            "notes": "ENT notes"
          }
        ],
        "doctorPlanOrSuggestion": "Start analgesics and review after 3 days",
        "providerSpeciality": "Pediatrician"
      }
    ]
  }
}
```