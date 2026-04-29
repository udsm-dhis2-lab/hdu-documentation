# DataTemplate Overview

The **DataTemplate** is the standardized data structure used by the **HDU platform** to exchange health information between healthcare systems.

Healthcare facility systems such as **EMR**, **EHR**, and **Laboratory Information Systems** generate clinical and administrative data during service delivery. In order for this data to be transmitted and processed consistently across systems, it must follow a standardized format.

The HDU platform uses **DataTemplates** to ensure that health data from different systems is structured in a **uniform and interoperable way**.

A **DataTemplate** defines:

- The structure of health data being transmitted  
- The set of blocks that organize the data  
- The parameters contained within each block  

Using DataTemplates ensures that data from different healthcare systems can be **understood, validated, and processed** by the HDU platform and other national systems.



## Origin of the DataTemplate Structure

The structure of **HDU DataTemplates** is based on variables captured in **MTUHA health registers**, which are the official registers used in healthcare facilities across Tanzania.

Different **MTUHA registers** capture different types of health information such as:

- Outpatient services (**OPD**)  
- Inpatient services (**IPD**)  
- Antenatal care (**ANC**)  
- Child health services  
- Death registry records  
- Disease surveillance information  
- Dental services  

The **HDU DataTemplate structure** consolidates variables from these registers into a standardized format that can be transmitted electronically between systems.



## Why DataTemplates Are Important

DataTemplates provide several benefits for **digital health interoperability**:

- Standardized structure for health data exchange  
- Reduced data inconsistencies between systems  
- Improved validation of health information  
- Easier integration with national health platforms  
- Automated aggregation for reporting systems  

By using **DataTemplates**, healthcare systems can transmit structured data that can be directly processed by national health information systems.



## What Are DataTemplate Blocks

A **DataTemplate** is composed of multiple components called **template blocks**.

Each block represents a **specific category of health information** captured during healthcare service delivery.

Examples include:

- Patient demographic information  
- Visit information  
- Clinical observations  
- Laboratory requests and results  
- Diagnosis details  
- Billing information  
- Referral details  

Each block contains **parameters** that describe the data elements within that category.



## Example: Visit Details Block

The `visitDetails` block captures information related to a healthcare visit.

Example parameters within this block include:

| Parameter | Description |
|--|-|
| id | Unique visit identifier |
| visitDate | The date when the visit occurred |
| newThisYear | Indicates if the client is new for the reporting year |
| isNew | Indicates whether the visit is new or a revisit |
| visitType | Type of visit such as OPD, IPD, ANC |

These parameters allow healthcare systems to transmit **standardized visit information** to the HDU platform.



## Structure of a DataTemplate

A typical **DataTemplate** contains several major components:

- **Template details** – Metadata describing the template  
- **Facility details** – Information about the reporting facility  
- **Client data blocks** – Clinical and administrative information captured during services  
- **Reporting details** – Metadata about the reporting date or submission  

Each **client record** is transmitted using a set of blocks organized inside the template structure.



## Types of DataTemplate Blocks

DataTemplate blocks generally fall into several categories.

### Core Blocks

Blocks that capture **fundamental patient and visit information**.

Examples include:

```text
└── core-blocks
    ├── facility-details
    ├── demographic-details
    ├── visit-details
    ├── appointment
    ├── lifestyle-information
    ├── admission-details
    ├── outcome-details
    ├── visit-main-payment-details
    ├── billings-details
    ├── referral-details
    └── report-details
```


### Clinical and Diagnostic Blocks

Blocks that capture **clinical information and diagnostic activities**.

Examples include:

```text
└── clinical-diagnostic-blocks
    ├── self-monitoring-clinical-information
    ├── clinical-information
    ├── allergies
    ├── chronic-conditions
    ├── lab-request-details
    ├── diagnosis-details
    ├── medication-details
    ├── treatment-details
    └── radiology-details
```


### Program-Specific Blocks

Blocks that capture information related to **specific healthcare programs**.

Examples include:
```text
└── program-specific-blocks
    ├── eye-clinic-details
    ├── antenatal-care-details
    ├── labor-and-delivery-details
    ├── vaccination-details
    ├── prophylaxis-details
    ├── family-planning-details
    ├── child-health-details
    ├── cpac-details
    ├── cecap
    ├── postnatal-details
    ├── causes-of-death-details
    ├── death-registry-details
    ├── contraceptives
    └── other-information
```


## How Blocks Are Used

When a healthcare system sends data to the **HDU platform**:

1. The system generates a **DataTemplate payload**.  
2. The payload contains **one or more template blocks**.  
3. Each block contains **parameters describing health services provided to a client**.  

This structured payload allows **HDU to process, validate, and store the information in a standardized way**.