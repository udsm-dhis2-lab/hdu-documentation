# Contraceptives (`contraceptives`)

### Overview

The **Contraceptives** block captures information about family planning methods provided or used by a patient during a healthcare visit.

It ensures that:

- Contraceptive uptake is accurately recorded.
- Family planning indicators support RCH, FP, and reproductive health reporting.
- Short-term, long-term, permanent, and emergency methods are consistently documented.

This block may appear independently or linked to CPAC, postnatal, or routine family planning services.



### Object Structure (Conceptual)

```text
contraceptives
├── didReceiveOralPillsPOP
├── popCyclesProvided
├── didReceiveOralPillsCOC
├── cocCyclesProvided
├── didReceivePillCycles
├── didReceiveSDM
├── didUseLAM
├── didOptToUseEmergencyMethods
├── wasInsertedWithImplanon
├── wasInsertedWithJadelle
├── didRemoveImplanon
├── didRemoveJadelle
├── didReceiveIUD
├── didRemoveIUD
├── didHaveTubalLigation
├── didHaveVasectomy
├── didReceiveInjection
├── numberOfFemaleCondomsProvided
└── numberOfMaleCondomsProvided
```

## Parameters

### `contraceptives`

* **Data type:** `object`  
* **Description:**  
  Root container holding all contraceptive and family planning method details.



## Oral Contraceptives

#### `didReceiveOralPillsPOP`

* **Data type:** `boolean`  
* **Description:**  
  Indicates whether Progestin-Only Pills (POP) were provided.  
* **Usage note:**  
  Commonly used for breastfeeding mothers.  
* **Example value:**  
  `true`



#### `popCyclesProvided`

* **Data type:** `number`  
* **Description:**  
  Number of POP pill cycles issued.  
* **Usage note:**  
  Used to calculate commodity distribution.  
* **Example value:**  
  `4`



#### `didReceiveOralPillsCOC`

* **Data type:** `boolean`  
* **Description:**  
  Indicates whether Combined Oral Contraceptives (COC) were provided.  
* **Example value:**  
  `true`



#### `cocCyclesProvided`

* **Data type:** `number`  
* **Description:**  
  Number of COC cycles issued.  
* **Example value:**  
  `4`



#### `didReceivePillCycles`

* **Data type:** `boolean`  
* **Description:**  
  Indicates whether any oral contraceptive pill cycles (POP or COC) were provided.  
* **Example value:**  
  `true`



## Natural & Emergency Methods

#### `didReceiveSDM`

* **Data type:** `boolean`  
* **Description:**  
  Indicates whether the Standard Days Method (SDM) was provided.  
* **Example value:**  
  `false`



#### `didUseLAM`

* **Data type:** `boolean`  
* **Description:**  
  Indicates whether the Lactational Amenorrhea Method (LAM) is being used.  
* **Usage note:**  
  Applicable for breastfeeding women within six months postpartum.  
* **Example value:**  
  `false`



#### `didOptToUseEmergencyMethods`

* **Data type:** `boolean`  
* **Description:**  
  Indicates whether emergency contraception was used.  
* **Example value:**  
  `false`



## Long-Acting Reversible Contraceptives (LARC)

#### `wasInsertedWithImplanon`

* **Data type:** `boolean`  
* **Description:**  
  Indicates whether an Implanon implant was inserted.  
* **Example value:**  
  `false`



#### `wasInsertedWithJadelle`

* **Data type:** `boolean`  
* **Description:**  
  Indicates whether a Jadelle implant was inserted.  
* **Example value:**  
  `false`



#### `didRemoveImplanon`

* **Data type:** `boolean`  
* **Description:**  
  Indicates whether an Implanon implant was removed.  
* **Example value:**  
  `false`



#### `didRemoveJadelle`

* **Data type:** `boolean`  
* **Description:**  
  Indicates whether a Jadelle implant was removed.  
* **Example value:**  
  `false`



#### `didReceiveIUD`

* **Data type:** `boolean`  
* **Description:**  
  Indicates whether an Intrauterine Device (IUD) was provided.  
* **Example value:**  
  `false`



#### `didRemoveIUD`

* **Data type:** `boolean`  
* **Description:**  
  Indicates whether an IUD was removed.  
* **Example value:**  
  `false`



## Permanent Methods

#### `didHaveTubalLigation`

* **Data type:** `boolean`  
* **Description:**  
  Indicates whether tubal ligation was performed.  
* **Example value:**  
  `false`



#### `didHaveVasectomy`

* **Data type:** `boolean`  
* **Description:**  
  Indicates whether vasectomy was performed.  
* **Example value:**  
  `false`



## Injectable & Barrier Methods

#### `didReceiveInjection`

* **Data type:** `boolean`  
* **Description:**  
  Indicates whether an injectable contraceptive was administered.  
* **Example value:**  
  `true`



#### `numberOfFemaleCondomsProvided`

* **Data type:** `number`  
* **Description:**  
  Number of female condoms provided.  
* **Example value:**  
  `0`



#### `numberOfMaleCondomsProvided`

* **Data type:** `number`  
* **Description:**  
  Number of male condoms provided.  
* **Example value:**  
  `5`



## Example JSON
```json
{
  "contraceptives": {
    "didReceiveOralPillsPOP": true,
    "popCyclesProvided": 4,
    "didReceiveOralPillsCOC": true,
    "cocCyclesProvided": 4,
    "didReceivePillCycles": true,
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
```


## Implementation Notes

- Methods should be recorded only if provided or confirmed during the visit.  
- Quantities support family planning commodity logistics and reporting.  
- Permanent methods should be recorded with appropriate consent workflows.
