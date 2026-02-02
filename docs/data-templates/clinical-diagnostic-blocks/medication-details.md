# Medication Details (`medicationDetails`)

### Overview

The **Medication Details** block captures information about medications prescribed, dispensed, or administered to a client during a visit or episode of care.

It ensures that:

- Prescribed medicines are clearly documented with dosage and administration details.
- Medication use can be tracked for treatment continuity, safety, and adherence.
- Medication data supports pharmacy operations, billing, and reporting.

This block appears within each record in the `listGrid` array and may contain one or more medication records for a client.



### Object Structure (Conceptual)

```text
medicationDetails
├── name
├── code
├── codeStandard
├── dosage
│   ├── dose
│   ├── frequency
│   ├── route
│   ├── instructions
│   ├── quantity
│   ├── duration
│   ├── days
│   ├── schedule
│   └── dosageDates
├── issued
│   └── quantity
├── orderDate
├── periodOfMedication
├── treatmentType
├── refillStatus
├── currentRefill
├── maxRefill
└── paymentDetails
    ├── controlNumber
    ├── statusCode
    ├── status
    ├── type
    └── description
```
## Parameters

### `medicationDetails`

* **Data type:** `array<object>`  
* **Description:**  
  Container holding one or more medication records associated with the client.  
  Each entry represents a single prescribed or dispensed medication.



#### `name`

* **Data type:** `string`  
* **Description:**  
  The full name of the medication.  
* **Usage note:**  
  May include formulation and strength.  
* **Example value:**  
  `TRAMADOL HCL 50 MG CAPSULE`



#### `code`

* **Data type:** `string`  
* **Description:**  
  A standardized or local code identifying the medication.  
* **Example value:**  
  `2.01.0131`



#### `codeStandard`

* **Data type:** `string`  
* **Description:**  
  The coding system or standard used for the medication code.  
* **Example value:**  
  `MNH CODE`



## Dosage Information

#### `dosage`

* **Data type:** `object`  
* **Description:**  
  Captures detailed instructions on how the medication should be taken or administered.  
  The following parameters are defined within this object.



##### `dose`

* **Data type:** `string`  
* **Description:**  
  Amount of medication per administration.  
* **Example value:**  
  `600 mg`



##### `frequency`

* **Data type:** `string`  
* **Description:**  
  How often the medication should be taken.  
* **Example value:**  
  `Twice daily`



##### `route`

* **Data type:** `string`  
* **Description:**  
  Route of administration.  
* **Example value:**  
  `Intravenous`



##### `instructions`

* **Data type:** `string`  
* **Description:**  
  Additional instructions related to medication intake.  
* **Example value:**  
  `Take after meals`



##### `quantity`

* **Data type:** `string`  
* **Description:**  
  Total quantity of medication prescribed.  
* **Example value:**  
  `60`



##### `duration`

* **Data type:** `string`  
* **Description:**  
  Total duration for which the medication should be taken.  
* **Example value:**  
  `30 Days`



##### `days`

* **Data type:** `array<number>`  
* **Description:**  
  Specific days on which the medication should be taken.  
* **Example value:**  
  `1, 8, 15, 21`



##### `schedule`

* **Data type:** `array<date-time>`  
* **Description:**  
  Planned schedule dates for medication administration.  
* **Example value:**  
  `2024-01-01`, `2024-01-08`



##### `dosageDates`

* **Data type:** `array<date-time>`  
* **Description:**  
  Actual dates when the medication was administered or taken.  
* **Example value:**  
  `2024-01-01`, `2024-01-08`



## Issued Information

#### `issued`

* **Data type:** `object`  
* **Description:**  
  Captures information about the quantity of medication issued or dispensed.  
  The following parameters are defined within this object.



##### `quantity`

* **Data type:** `string`  
* **Description:**  
  Quantity of medication issued.  
* **Example value:**  
  `60.000`



##### `orderDate`

* **Data type:** `date-time`  
* **Description:**  
  Date when the medication was prescribed or ordered.  
* **Example value:**  
  `2024-01-01`



##### `periodOfMedication`

* **Data type:** `string`  
* **Description:**  
  Period or phase during which the medication is intended to be taken.  
* **Example value:**  
  `Post-operative`



##### `treatmentType`

* **Data type:** `string`  
* **Description:**  
  Type of treatment the medication is associated with.  
* **Example value:**  
  `ChemoTherapy`



##### `refillStatus`

* **Data type:** `string`  
* **Description:**  
  Current refill status of the medication.  
* **Example value:**  
  `served`



##### `currentRefill`

* **Data type:** `number`  
* **Description:**  
  Number of refills already used.  
* **Example value:**  
  `2`



##### `maxRefill`

* **Data type:** `number`  
* **Description:**  
  Maximum number of refills allowed.  
* **Example value:**  
  `5`



## Payment Information

#### `paymentDetails`

* **Data type:** `object`  
* **Description:**  
  Captures payment transaction details related to the medication.  
  The following parameters are defined within this object.



##### `controlNumber`

* **Data type:** `string`  
* **Description:**  
  Payment control or reference number.  
* **Example value:**  
  `96999484838829394`



##### `statusCode`

* **Data type:** `string`  
* **Description:**  
  Payment processing status code.  
* **Example value:**  
  `200`



##### `status`

* **Data type:** `string`  
* **Description:**  
  Human-readable payment status.  
* **Example value:**  
  `Successful`



##### `type`

* **Data type:** `string`  
* **Description:**  
  Payment method used.  
* **Example value:**  
  `CASH`



##### `description`

* **Data type:** `string`  
* **Description:**  
  Additional description of the payment transaction.  
* **Example value:**  
  `This was successful`

## Example JSON
```json
{
  "medicationDetails": [
    {
      "name": "TRAMADOL HCL 50 MG CAPSULE",
      "code": "2.01.0131",
      "codeStandard": "MNH CODE",
      "dosage": {
        "dose": "600 mg",
        "frequency": "Twice daily",
        "route": "Intravenous",
        "instructions": "Take after meals",
        "quantity": "60",
        "duration": "30 Days",
        "days": [1, 8, 15, 21],
        "schedule": ["2024-01-01", "2024-01-08"],
        "dosageDates": ["2024-01-01", "2024-01-08"]
      },
      "issued": {
        "quantity": "60.000"
      },
      "orderDate": "2024-01-01",
      "periodOfMedication": "Post-operative",
      "treatmentType": "ChemoTherapy",
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
  ]
}
```