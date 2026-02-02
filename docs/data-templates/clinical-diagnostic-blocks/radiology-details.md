# Radiology Details (`radiologyDetails`)

### Overview

The **Radiology Details** block captures information related to diagnostic imaging investigations performed for a patient, such as X-rays, CT scans, MRI, or ultrasound.

It ensures that:

- Imaging investigations are clearly documented and traceable.
- Radiology reports and associated images can be linked to the clinical encounter.
- Diagnostic imaging data can support clinical decision-making, referrals, and audits.

This block appears within each patient record in the `listGrid` array and may contain multiple imaging entries for a single visit.



### Object Structure (Conceptual)

```text
radiologyDetails
├── testDate
├── testTypeName
├── testTypeCode
├── testReport
├── bodySite
├── image
│   ├── url
│   └── base64
```
## Parameters

### `radiologyDetails`

* **Data type:** `array<object>`  
* **Description:**  
  Collection of radiology investigations performed during a visit.  
  Each entry represents one imaging test.



#### `testDate`

* **Data type:** `date-time`  
* **Description:**  
  The date on which the radiological examination was performed.  
* **Example value:**  
  `2024-08-08`



#### `testTypeName`

* **Data type:** `string`  
* **Description:**  
  The human-readable name of the imaging test performed.  
* **Example value:**  
  `MRI`



#### `testTypeCode`

* **Data type:** `string`  
* **Description:**  
  A standardized or facility-specific code representing the imaging test.  
* **Example value:**  
  `MRI`



#### `testReport`

* **Data type:** `string`  
* **Description:**  
  Narrative findings or conclusions from the radiology examination.  
* **Example value:**  
  `No abnormal intracranial findings detected.`



#### `bodySite`

* **Data type:** `string`  
* **Description:**  
  The anatomical location examined during imaging.  
* **Example value:**  
  `Brain`



## Imaging Reference

#### `image`

* **Data type:** `object`  
* **Description:**  
  Contains references to the radiology image or study output.  
  The following parameters are defined within this object.



##### `url`

* **Data type:** `string`  
* **Description:**  
  A link to the radiology image stored in PACS or another imaging system.  
* **Example value:**  
  `http://pacs.hospital.go.tz/images/mri-brain-001.dcm`



##### `base64`

* **Data type:** `string`  
* **Description:**  
  Base64-encoded representation of the radiology image (used only when URLs are unavailable).  
* **Example value:**  
  `iVBORw0KGgoAAAANSUhEUgAA...`

## Example JSON
```json
{
  "radiologyDetails": [
    {
      "testDate": "2024-08-08",
      "testTypeName": "MRI",
      "testTypeCode": "MRI",
      "testReport": "No abnormal intracranial findings detected.",
      "bodySite": "Brain",
      "image": {
        "url": "http://pacs.hospital.go.tz/images/mri-brain-001.dcm"
      }
    }
  ]
}
```
