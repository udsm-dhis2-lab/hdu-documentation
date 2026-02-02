# Visit Main Payment Details (`visitMainPaymentDetails`)

### Overview

The **Visit Main Payment Details** block captures the primary payment or financing mechanism used to cover services provided during a patient visit or episode of care.

It ensures that:

- The main payer for the visit is clearly identified.
- Insurance and payment details are traceable for billing and reimbursement.
- Financial data aligns with facility billing systems, insurance schemes, and reporting requirements.

This block appears within each patient record in the `listGrid` array and represents the overall payment method for the visit.



### Object Structure (Conceptual)

```text
visitMainPaymentDetails
├── shortName
├── type
├── insuranceCode
├── name
└── insuranceId
```
## Parameters

### `visitMainPaymentDetails`

* **Data type:** `object`  
* **Description:**  
  Root container holding the primary payment details for the patient visit.  
  The following parameters are defined within this object.



#### `shortName`

* **Data type:** `string`  
* **Description:**  
  A short or abbreviated name of the payer or payment scheme.  
* **Usage note:**  
  Often used for quick identification in user interfaces and reports.  
* **Example value:**  
  `NHIF`



#### `type`

* **Data type:** `string`  
* **Description:**  
  Indicates the type of payment method used for the visit.  
* **Usage note:**  
  Helps distinguish between insured and non-insured visits.  
* **Example values:**  
  `INSURANCE`  
  `CASH`  
  `EXEMPTION`



#### `insuranceCode`

* **Data type:** `string`  
* **Description:**  
  A system or scheme-specific code identifying the insurance provider.  
* **Example value:**  
  `INS001`



#### `name`

* **Data type:** `string`  
* **Description:**  
  The full official name of the insurance provider or payer.  
* **Example value:**  
  `National Health Insurance Fund`



#### `insuranceId`

* **Data type:** `string`  
* **Description:**  
  The patient’s unique membership or policy identifier under the payment scheme.  
* **Example value:**  
  `7383738389393`



## Example JSON
```json
{
  "visitMainPaymentDetails": {
    "shortName": "NHIF",
    "type": "INSURANCE",
    "insuranceCode": "INS001",
    "name": "National Health Insurance Fund",
    "insuranceId": "7383738389393"
  }
}
```

## Implementation Notes

- This block represents the **primary payer** for the visit and should be populated even if other payment details exist elsewhere.  
- Detailed, transaction-level payments (e.g., medication or service payments) should be captured in their respective blocks.  
- Consistent use of payer codes supports billing reconciliation and national health financing reports.