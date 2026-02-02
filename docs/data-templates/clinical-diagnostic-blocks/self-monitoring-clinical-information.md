# Self-Monitoring Clinical Information (`selfMonitoringClinicalInformation`)

## Overview

The **Self-Monitoring Clinical Information** block captures clinical measurements and observations recorded directly by the client or outside a formal clinical encounter.

It ensures that:

- Client-reported or self-measured vital signs are captured and traceable  
- Longitudinal monitoring of health indicators outside facility visits is supported  
- Supplementary clinical data can be integrated with facility-based records  

This block appears within each record in the `listGrid` array and may contain **one or more self-recorded measurements**.



## Object Structure (Conceptual)

```text
selfMonitoringClinicalInformation
└── vitalSigns
    ├── bloodPressure
    ├── weight
    ├── temperature
    ├── height
    ├── respiration
    ├── pulseRate
    ├── dateTime
    └── notes
```
## Parameters

### `selfMonitoringClinicalInformation`

* **Data type:** `object`  
* **Description:**  
  Root container holding clinical observations and measurements recorded by the client.  
  The following parameters are defined within this object.



### Vital Signs

#### `vitalSigns`

* **Data type:** `array<object>`  
* **Description:**  
  Captures self-recorded vital sign measurements.  
  Each entry represents a single measurement event.



##### `bloodPressure`

* **Data type:** `string`  
* **Description:**  
  Blood pressure reading recorded by the client.  
* **Usage note:**  
  Typically recorded as systolic/diastolic.  
* **Example value:**  
  `89/90`



##### `weight`

* **Data type:** `number`  
* **Description:**  
  Body weight of the client at the time of measurement.  
* **Usage note:**  
  Expected unit is kilograms unless otherwise specified.  
* **Example value:**  
  `80`



##### `temperature`

* **Data type:** `number`  
* **Description:**  
  Body temperature recorded by the client.  
* **Usage note:**  
  Expected unit is degrees Celsius.  
* **Example value:**  
  `37`



##### `height`

* **Data type:** `number`  
* **Description:**  
  Height of the client.  
* **Usage note:**  
  Expected unit is centimeters.  
* **Example value:**  
  `89`



##### `respiration`

* **Data type:** `number`  
* **Description:**  
  Respiratory rate measured by the client.  
* **Usage note:**  
  Typically recorded as breaths per minute.  
* **Example value:**  
  `90`



##### `pulseRate`

* **Data type:** `number`  
* **Description:**  
  Heart rate measured by the client.  
* **Usage note:**  
  Typically recorded as beats per minute.  
* **Example value:**  
  `89`



##### `dateTime`

* **Data type:** `date-time`  
* **Description:**  
  Date and time when the measurements were taken.  
* **Example value:**  
  `2025-03-04`



##### `notes`

* **Data type:** `string`  
* **Description:**  
  Additional notes or observations provided by the client.  
* **Usage note:**  
  Can be used to capture symptoms or context around the measurement.  
* **Example value:**  
  `Mild headache in the morning, resolved after medication.`



```json
{
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
  }
}
```
