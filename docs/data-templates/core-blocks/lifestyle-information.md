# Lifestyle Information (`lifeStyleInformation`)

### Overview

The **Lifestyle Information** block captures information about behavioral and lifestyle factors that may influence a client’s health status and clinical outcomes.

It ensures that:

- Risk factors related to smoking, alcohol use, and drug use are consistently documented.
- Clinicians can factor lifestyle behaviors into clinical assessment and treatment planning.
- Lifestyle data can support preventive care, counseling, and public health reporting.

This block appears within each record in the `listGrid` array and represents client lifestyle characteristics.



### Object Structure (Conceptual)

```text
lifeStyleInformation
├── smoking
│   ├── using
│   └── notes
├── alcoholUse
│   ├── using
│   └── notes
└── drugUse
    ├── using
    └── notes
```
## Parameters

### `lifeStyleInformation`

* **Data type:** `object`  
* **Description:**  
  Root container holding lifestyle-related information for the client.  
  The following parameters are defined within this object.



## Smoking Information

#### `smoking`

* **Data type:** `object`  
* **Description:**  
  Captures information related to the client’s tobacco smoking behavior.  
  The following parameters are defined within this object.



##### `using`

* **Data type:** `boolean`  
* **Description:**  
  Indicates whether the client currently uses tobacco products.  
* **Example value:**  
  `false`



##### `notes`

* **Data type:** `string | null`  
* **Description:**  
  Additional information related to smoking behavior.  
* **Usage note:**  
  May include frequency, duration, or cessation notes.  
* **Example value:**  
  `Stopped smoking two years ago`



## Alcohol Use Information

#### `alcoholUse`

* **Data type:** `object`  
* **Description:**  
  Captures information related to the client’s alcohol consumption.  
  The following parameters are defined within this object.



##### `using`

* **Data type:** `boolean`  
* **Description:**  
  Indicates whether the client consumes alcohol.  
* **Example value:**  
  `false`



##### `notes`

* **Data type:** `string | null`  
* **Description:**  
  Additional information related to alcohol consumption.  
* **Usage note:**  
  May include frequency or quantity of intake.  
* **Example value:**  
  `Occasional social drinking`



## Drug Use Information

#### `drugUse`

* **Data type:** `object`  
* **Description:**  
  Captures information related to the client’s use of recreational or non-prescribed drugs.  
  The following parameters are defined within this object.



##### `using`

* **Data type:** `boolean`  
* **Description:**  
  Indicates whether the client uses drugs.  
* **Example value:**  
  `true`



##### `notes`

* **Data type:** `string | null`  
* **Description:**  
  Additional information related to drug use.  
* **Usage note:**  
  May include type, frequency, or history of use.  
* **Example value:**  
  `Occasional cannabis use`
## Example JSON
```json
{
  "lifeStyleInformation": {
    "smoking": {
      "using": false,
      "notes": "Stopped smoking two years ago"
    },
    "alcoholUse": {
      "using": false,
      "notes": "Occasional social drinking"
    },
    "drugUse": {
      "using": true,
      "notes": "Occasional cannabis use"
    }
  }
}
```
