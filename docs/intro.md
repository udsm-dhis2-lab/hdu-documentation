# Health Data Universal (HDU)

## Introduction

The **Health Data Universal (HDU)** is a national interoperability platform designed to enable seamless data exchange between facility-level health systems and national health information systems in Tanzania.

It was developed to address long-standing challenges of fragmented digital health systems, where:

- Electronic Medical Records (EMRs)  
- Laboratory Information Systems (LIMS)  
- Other client-level applications  

operate in silos using different data standards, codes, and reporting structures.

This fragmentation limited the effective use of health data for:

- Routine health reporting  
- Disease surveillance  
- Program monitoring  
- Evidence-based decision-making  

HDU provides a secure, standards-based integration layer that unifies these systems and automates data flow to national platforms such as **HMIS DHIS2** and **eIDSR**.



## Why HDU Was Created

Over the past years, Tanzania has scaled multiple digital health systems across public and private health facilities. While these systems improved clinical data capture, they introduced new interoperability challenges:

- Different coding systems for diagnoses, laboratory tests, and services  
- Manual mapping of indicators and reports  
- Repeated data aggregation at facility level  
- High risk of errors and data duplication  
- Delayed routine and surveillance reporting  

To overcome these challenges, HDU was developed as a centralized interoperability mechanism to:

- Standardize data exchange  
- Enforce national coding standards  
- Improve data quality and completeness  
- Reduce reporting burden  
- Support real-time and automated reporting  



## What Is the HDU API?

The **HDU API** is the technical backbone of the HDU platform. It enables secure data sharing between health facilities and national systems using standardized data templates.

The API supports data exchange from:

- Public health facilities  
- Private health facilities  
- Hospitals  
- Laboratories  
- Other client-level health systems  



## Core Modules of the HDU Platform

The HDU API consists of four main modules:

### 1. Client Registry (CR)

- Registers clients across health facilities  
- Supports unique client identification  
- Reduces duplication of patient records  

### 2. Shared Health Records (SHR)

- Stores patient-level health data  
- Enables retrieval across facilities  
- Supports continuity of care  

### 3. Integration Module

- Receives standardized data templates  
- Validates payloads  
- Applies code mapping and business rules  
- Routes data to beneficiary systems  

### 4. Dashboard Module

- Monitors data exchanges in real time  
- Tracks successes and failures  
- Supports operational oversight  



## Standardized Data Templates

Health facilities share data using structured **Data Templates** developed from:

- Ministry of Health HMIS (MTUHA) registers  
- National routine reporting variables  

These templates:

- Standardize service capture  
- Ensure system-to-system consistency  
- Enable automated aggregation and reporting  

Each payload may include:

- Client demographics  
- Clinical services  
- Laboratory results  
- Encounters across OPD, IPD, Laboratory, and other service points  



## How Data Flows Through the HDU

**Workflow:**

```text
EMR/EHR → Health Information Mediator (HIM) → HDU API → Beneficiary Systems
```

## Step-by-Step Flow

1. EMR/EHR systems generate standardized Data Template payloads  
2. Payloads are sent to the Health Information Mediator (HIM)  
3. HIM validates and forwards data to the HDU API  
4. HDU processes, stores, aggregates, and routes data to:

   - HMIS DHIS2  
   - eIDSR  
   - Other beneficiary systems  



## Core Functions of the HDU API

The HDU API supports:

- Client registration across facilities  
- Storage of health records  
- Cross-facility health record retrieval  
- Data validation and standardization  
- Automated aggregation and reporting  
- Secure system-to-system exchange  



## Scope of This Documentation

### Supported Systems

- EMR/EHR systems  
- Client-level health applications  
- Laboratory Information Systems (LIMS)  

### Covered Topics

- Data template structure  
- Client Registry integration  
- Shared Health Records integration  
- Standardized codes and mappings  
- API workflows and endpoints  
- Error handling and validation  
- Authentication and security  



 






