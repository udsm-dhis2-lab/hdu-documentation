# Causes of Death Details (`causesOfDeathDetails`)

### Overview

The **Causes of Death Details** block captures medical certification of cause of death information for a deceased patient, following internationally recognized death certification structures.

It ensures that:

- Causes of death are systematically documented using a multi-line causal sequence.
- Mortality data supports civil registration, vital statistics (CRVS), and surveillance.
- Additional contextual details (maternal, neonatal, postmortem) are preserved for audit and reporting.

This block appears within a patient record when the outcome of care is death and complements the `outcomeDetails` block.



### Object Structure (Conceptual)

```text
causesOfDeathDetails
├── dateOfDeath
├── lineA
├── lineB
├── lineC
├── lineD
├── causeOfDeathOther
├── mannerOfDeath
├── placeOfDeath
└── otherDeathDetails
    ├── postmortemDetails
    │   ├── postmortemDetails
    │   ├── marcerated
    │   ├── fresh
    │   └── motherCondition
```
## Parameters

### `causesOfDeathDetails`

* **Data type:** `object`  
* **Description:**  
  Root container holding certified cause-of-death information for the patient.  
  The following parameters are defined within this object.



#### `dateOfDeath`

* **Data type:** `date-time`  
* **Description:**  
  The date on which death occurred.  
* **Example value:**  
  `2024-08-07`



## Cause of Death Certification (Causal Chain)

#### `lineA`

* **Data type:** `string`  
* **Description:**  
  The immediate cause of death (final disease or condition resulting in death).  
* **Example value:**  
  `A01.1`



#### `lineB`

* **Data type:** `string`  
* **Description:**  
  The condition leading to the cause listed in Line A.  
* **Example value:**  
  `A01.1`



#### `lineC`

* **Data type:** `string | null`  
* **Description:**  
  The condition leading to the cause listed in Line B.  
* **Example value:**  
  `Sepsis`



#### `lineD`

* **Data type:** `string | null`  
* **Description:**  
  The underlying cause of death (the disease or injury that initiated the chain of events).  
* **Example value:**  
  `Typhoid fever`



#### `causeOfDeathOther`

* **Data type:** `string | null`  
* **Description:**  
  Any other significant condition contributing to death but not part of the direct causal chain.  
* **Example value:**  
  `Severe dehydration`



## Circumstances of Death

#### `mannerOfDeath`

* **Data type:** `string`  
* **Description:**  
  Describes the manner in which death occurred.  
* **Example values:**  
  `DISEASE`  
  `ACCIDENT`  
  `WAR`  
  `SUICIDE`  
  `UNKNOWN`



#### `placeOfDeath`

* **Data type:** `string`  
* **Description:**  
  Location where death occurred.  
* **Example values:**  
  `HEALTH_FACILITY`  
  `HOME`  
  `EN_ROUTE_TO_HEALTH_FACILITY`



## Additional Death Details

#### `otherDeathDetails`

* **Data type:** `object`  
* **Description:**  
  Captures additional clinical and contextual information related to the death.  
  The following parameters are defined within this object.



## Postmortem and Maternal / Neonatal Context

#### `postmortemDetails`

* **Data type:** `string | null`  
* **Description:**  
  Indicates whether postmortem details are available.  
* **Example value:**  
  `Not performed`



#### `marcerated`

* **Data type:** `boolean`  
* **Description:**  
  Indicates whether the fetus or newborn was macerated (applicable for perinatal deaths).  
* **Example value:**  
  `false`



#### `fresh`

* **Data type:** `boolean`  
* **Description:**  
  Indicates whether the death was classified as fresh (perinatal context).  
* **Example value:**  
  `false`



#### `motherCondition`

* **Data type:** `string | null`  
* **Description:**  
  Maternal condition relevant to the death (if applicable).  
* **Example value:**  
  `Severe anemia`



## Example JSON
```json
{
  "causesOfDeathDetails": {
    "dateOfDeath": "2024-08-07",
    "lineA": "A01.1",
    "lineB": "Septic shock",
    "lineC": "Severe dehydration",
    "lineD": "Typhoid fever",
    "causeOfDeathOther": "Electrolyte imbalance",
    "mannerOfDeath": "DISEASE",
    "placeOfDeath": "EN_ROUTE_TO_HEALTH_FACILITY",
    "otherDeathDetails": {
      "postmortemDetails": "Not performed",
      "marcerated": false,
      "fresh": false,
      "motherCondition": "Severe anemia"
    }
  }
}
```

## Implementation Notes

- The causal chain (`lineA` → `lineD`) should follow **WHO medical certification of cause of death** principles.  
- This block should be populated **only when death has occurred**.  
- Detailed death registry data may be captured separately in `deathRegistryDetails`.

