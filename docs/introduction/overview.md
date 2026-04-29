# Documentation Overview

This documentation is designed to support **system developers and implementers** who need to integrate healthcare applications with the **Health Data Universal (HDU)** platform.

It provides the technical information required to connect facility-level systems with the national digital health ecosystem through the **HDU API**.

The documentation explains how to:

- Understand the **HDU interoperability architecture**
- Use **Data Templates** for structured data exchange
- Integrate systems with the **HDU API**
- Submit and retrieve health data through standardized APIs
- Implement **Client Registry** and **Shared Health Records** functionality
- Use standardized health coding systems such as **ICD** and **LOINC**



# Who Should Use This Documentation

This documentation is primarily intended for professionals responsible for integrating health information systems with the HDU platform, including:

- Software developers integrating **EMR/EHR systems**
- System integrators working with national health platforms
- Digital health solution providers
- Health information system administrators
- Technical teams supporting **health data interoperability**



# Systems That Can Integrate with HDU

The HDU platform supports integration with various types of healthcare information systems, including:

- **Electronic Medical Record (EMR)** systems
- **Electronic Health Record (EHR)** systems
- **Laboratory Information Systems (LIMS)**
- Specialized clinical systems
- Public health reporting systems

These systems generate **structured health data** that can be transmitted to the HDU platform using standardized **Data Templates**.



# What You Will Learn in This Documentation

The sections in this documentation guide developers through the **full integration process**.

Key topics covered include:

- Getting started with the **HDU API**
- Understanding the **Data Template structure**
- Working with **Data Template blocks**
- Sending data to the **HDU platform**
- Integrating **Client Registry** and **Shared Health Records**
- Using standardized **coding systems**
- Handling **API responses and validation errors**



# How to Use This Documentation

Developers integrating with HDU are encouraged to read the documentation in the following order:

1. **Gettting Started** – Understand prerequisites, authentication, and integration workflow.  
2. **DataTemplate Overview** – Learn how health data is structured for transmission.  
3. **Core Data Sending APIs** – Understand the main APIs used to send health data.  
4. **Client Registry and Shared Records** – Learn how patient data is managed across facilities.  
5. **Submitting Data** – Review examples of sending structured health data payloads.  
6. **Standardized Codes Reference** – Understand coding standards used in HDU integrations.

Following this sequence will help implementers understand both the **conceptual model** and the **technical integration process**.



# Next Section

The next section, **Gettting Started**, introduces the basic requirements and workflow needed to begin integrating systems with the **HDU API**.

It covers:

- Prerequisite knowledge
- The **HDU integration workflow**
- Authentication requirements
- Initial interaction with the **API**