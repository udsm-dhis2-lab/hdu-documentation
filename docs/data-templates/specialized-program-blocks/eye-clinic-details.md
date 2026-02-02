# Eye Clinic Details (`eyeClinicDetails`)

### Overview

The **Eye Clinic Details** block captures ophthalmology-specific clinical outcomes related to vision assessment, refraction, prescription, and low-vision care.

It ensures that:

- Eye examination outcomes are clearly documented.
- Vision correction services (spectacles, contact lenses, and low-vision devices) are traceable.
- Eye clinic data can be used for service reporting, referrals, and continuity of care.

This block appears within each patient record in the `listGrid` array and is populated only when eye care services are provided.



### Object Structure (Conceptual)

```text
eyeClinicDetails
├── refracted
├── spectaclesPrescribed
├── spectacleDispensed
├── contactLenseDispensed
├── prescribedWithLowVision
├── diagnosedWithLowVisionI
├── diagnosedWithLowVisionII
└── isDispensedWithLowVisionDevice
```
## Parameters

### `eyeClinicDetails`

* **Data type:** `object`  
* **Description:**  
  Root container holding eye clinic-specific examination and treatment outcomes.  
  The following parameters are defined within this object.



#### `refracted`

* **Data type:** `boolean`  
* **Description:**  
  Indicates whether the patient underwent an eye refraction test to assess visual acuity and prescription needs.  
* **Example value:**  
  `true`



#### `spectaclesPrescribed`

* **Data type:** `boolean`  
* **Description:**  
  Indicates whether spectacles were prescribed based on refraction findings.  
* **Example value:**  
  `true`



#### `spectacleDispensed`

* **Data type:** `boolean`  
* **Description:**  
  Indicates whether the prescribed spectacles were physically provided to the patient.  
* **Example value:**  
  `true`



#### `contactLenseDispensed`

* **Data type:** `boolean`  
* **Description:**  
  Indicates whether contact lenses were dispensed to the patient.  
* **Example value:**  
  `false`



#### `prescribedWithLowVision`

* **Data type:** `boolean`  
* **Description:**  
  Indicates whether the patient was assessed and prescribed low-vision care or aids.  
* **Example value:**  
  `true`



#### `diagnosedWithLowVisionI`

* **Data type:** `boolean`  
* **Description:**  
  Indicates whether the patient was diagnosed with Low Vision Category I.  
* **Example value:**  
  `true`



#### `diagnosedWithLowVisionII`

* **Data type:** `boolean`  
* **Description:**  
  Indicates whether the patient was diagnosed with Low Vision Category II.  
* **Example value:**  
  `false`



#### `isDispensedWithLowVisionDevice`

* **Data type:** `boolean`  
* **Description:**  
  Indicates whether a low-vision assistive device (e.g., magnifiers, special glasses) was provided to the patient.  
* **Example value:**  
  `true`

## Example JSON
```json
{
  "eyeClinicDetails": {
    "refracted": true,
    "spectaclesPrescribed": true,
    "spectacleDispensed": true,
    "contactLenseDispensed": false,
    "prescribedWithLowVision": true,
    "diagnosedWithLowVisionI": true,
    "diagnosedWithLowVisionII": false,
    "isDispensedWithLowVisionDevice": true
  }
}
```
