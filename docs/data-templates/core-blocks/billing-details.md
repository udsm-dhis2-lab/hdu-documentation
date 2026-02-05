# Billing Details (`billingsDetails`)

### Overview

The **Billing Details** block captures information related to financial charges raised for healthcare services provided to a patient during a visit or episode of care.

It ensures that:

- All billed services are financially traceable.
- Insurance and exemption handling is clearly documented.
- Billing data supports facility revenue tracking, insurance claims, and audits.

This block appears within a patient record and may contain one or more billing entries.



### Object Structure (Conceptual)

```text
billingsDetails
├── billID
├── billingCode
├── billType
├── insuranceCode
├── insuranceName
├── amountBilled
├── exemptionType
├── wavedAmount
├── billDate
└── standardCode
```

## Parameters

### `billingsDetails`

* **Data type:** `array<object>`  
* **Description:**  
  Root container holding billing records associated with the patient visit.  
* **Usage note:**  
  Multiple billing entries may exist for a single visit, depending on services rendered.



## Billing Entry

#### `billID`

* **Data type:** `string`  
* **Description:**  
  Unique identifier assigned to the billing record.  
* **Usage note:**  
  Used for billing reconciliation and audit trails.  
* **Example value:**  
  `2939`



#### `billingCode`

* **Data type:** `string`  
* **Description:**  
  Code representing the billed service or charge.  
* **Usage note:**  
  May correspond to a service catalogue, tariff, or billing system code.  
* **Example value:**  
  `7328TY`



#### `billType`

* **Data type:** `string`  
* **Description:**  
  Type of billing applied for the service.  
* **Usage note:**  
  Determines how payment is processed and reported.  
* **Example values:**  
  `Insurance`, `Cash`, `Exempted`



#### `insuranceCode`

* **Data type:** `string | null`  
* **Description:**  
  Code identifying the insurance scheme covering the bill.  
* **Usage note:**  
  Applicable only when `billType` is insurance-based.  
* **Example value:**  
  `INS001`



#### `insuranceName`

* **Data type:** `string | null`  
* **Description:**  
  Full name of the insurance provider.  
* **Usage note:**  
  Used for insurance claims and reporting.  
* **Example value:**  
  `NHIF`



#### `amountBilled`

* **Data type:** `number`  
* **Description:**  
  Total monetary amount charged for the billed service.  
* **Usage note:**  
  Expressed in the facility’s standard currency.  
* **Example value:**  
  `24000`



#### `exemptionType`

* **Data type:** `string | null`  
* **Description:**  
  Type of exemption applied to the bill, if any.  
* **Usage note:**  
  Supports exemption reporting and policy compliance.  
* **Example value:**  
  `Pregnant women`



#### `wavedAmount`

* **Data type:** `number | null`  
* **Description:**  
  Amount waived from the total bill.  
* **Usage note:**  
  Used when partial exemptions or waivers are applied.  
* **Example value:**  
  `5000`



#### `billDate`

* **Data type:** `date-time | null`  
* **Description:**  
  Date when the bill was generated.  
* **Usage note:**  
  Useful for financial period reporting.  
* **Example value:**  
  `2024-08-07`



#### `standardCode`

* **Data type:** `string`  
* **Description:**  
  Coding standard used to classify the billed service.  
* **Usage note:**  
  Supports interoperability and standardized service classification.  
* **Example value:**  
  `LOINC`



## Example JSON
```json
{
  "billingsDetails": [
    {
      "billID": "2939",
      "billingCode": "7328TY",
      "billType": "Insurance",
      "insuranceCode": "INS001",
      "insuranceName": "NHIF",
      "amountBilled": 24000,
      "exemptionType": "Pregnant women",
      "wavedAmount": 5000,
      "billDate": "2024-08-07",
      "standardCode": "LOINC"
    }
  ]
}
```

## Implementation Notes

- Billing records should align with facility billing and insurance claim systems.  
- `insuranceCode` and `insuranceName` should be populated only for insured services.  
- Waived and exempted amounts must be policy-compliant.
