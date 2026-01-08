<!-- # HDU API Use case important information
Data templates are made of blocks called template blocks. Each block has variables or parameters constituting it. Blocks and their corresponding parameters are derived primarily from standard health registers, which served as the main reference for designing the data template structure. This structure aims to standardize the aggregation and processing of register-based data to ensure consistency across different sources.
Since registers vary in the parameters they capture, the data template was designed to harmonize these differences by consolidating parameters across multiple registers. For the current version of the data template, the reference registers included outpatient, inpatient, antenatal care, death registry, child health, surveillance, and dental.

 ### Table 2.2.1.1: Retrieving HDU Data Template API

| Field                | Value                                                                 |
|----------------------|-----------------------------------------------------------------------|
| **Message Type**     | JSON                                                                  |
| **Message Category** | MetaData                                                              |
| **Request type**     | GET                                                                   |
| **API**              | `…/../../api/v1/hduApi/dataTemplates`                                 |
| **Authentication**   | Basic authentication                                                  |
| **Response**         | Visit appendix document section: 1.1.1                                |
| **Error message for wrong API**    |                                               

```json
{
  "timestamp": "2024-08-02T06:04:19.900+00:00",
  "status": 404,
  "error": "Not Found",
  "message": "No message available",
  "path": "/adapter/api/v1/dataTemplatess"
}
``` |


## Table 2.2.1.2: Retrieving HDU Data Template API

| Field / Object Name            | Description                                      | Data Type | Example  |
|:-------------------------------|:-------------------------------------------------|:---------:|:--------:|
| *TEMPLATE DETAILS*           |                                                  |           |          |
| templateDetails                | Block containing metadata about the template     |  Object   |          |
| templateDetails.code           | Unique code for the template                     |  String   | GENERAL  |
| templateDetails.id             | Unique identifier of the template                |  String   | general  |
| templateDetails.name           | Human-readable template name                     |  String   | General  |
| templateDetails.codingVersions | Coding versions for standards like LOINC and ICD |  Object   |          |
| templateDetails                | Block containing metadata about the template     |  Object   |          |
| templateDetails.code           | Unique code for the template                     |  String   | GENERAL  |
| templateDetails.id             | Unique identifier of the template                |  String   | general  |
| templateDetails.name           | Human-readable template name                     |  String   | General  |
| templateDetails.codingVersions | Coding versions for standards like LOINC and ICD |  Object   |          |
| templateDetails                | Block containing metadata about the template     |  Object   |          |
| templateDetails.code           | Unique code for the template                     |  String   | GENERAL  |
| templateDetails.id             | Unique identifier of the template                |  String   | general  |
| templateDetails.name           | Human-readable template name                     |  String   | General  |
| templateDetails.codingVersions | Coding versions for standards like LOINC and ICD |  Object   |          |
| templateDetails                | Block containing metadata about the template     |  Object   |          |
| templateDetails.code           | Unique code for the template                     |  String   | GENERAL  |
| templateDetails.id             | Unique identifier of the template                |  String   | general  |
| templateDetails.name           | Human-readable template name                     |  String   | General  |
| templateDetails.codingVersions | Coding versions for standards like LOINC and ICD |  Object   |          |
| Field / Object Name            | Description                                      | Data Type | Example  |        
| templateDetails                | Block containing metadata about the template     |  Object   |          |
| templateDetails.code           | Unique code for the template                     |  String   | GENERAL  |
| templateDetails.id             | Unique identifier of the template                |  String   | general  |
| templateDetails.name           | Human-readable template name                     |  String   | General  |
| templateDetails.codingVersions | Coding versions for standards like LOINC and ICD |  Object   |          |
| templateDetails                | Block containing metadata about the template     |  Object   |          |
| templateDetails.code           | Unique code for the template                     |  String   | GENERAL  |
| templateDetails.id             | Unique identifier of the template                |  String   | general  |
| templateDetails.name           | Human-readable template name                     |  String   | General  |
| templateDetails.codingVersions | Coding versions for standards like LOINC and ICD |  Object   |          |
| templateDetails                | Block containing metadata about the template     |  Object   |          |
| templateDetails.code           | Unique code for the template                     |  String   | GENERAL  |
| templateDetails.id             | Unique identifier of the template                |  String   | general  |
| templateDetails.name           | Human-readable template name                     |  String   | General  |
| templateDetails.codingVersions | Coding versions for standards like LOINC and ICD |  Object   |          |
| templateDetails                | Block containing metadata about the template     |  Object   |          |
| templateDetails.code           | Unique code for the template                     |  String   | GENERAL  |
| templateDetails.id             | Unique identifier of the template                |  String   | general  |
| templateDetails.name           | Human-readable template name                     |  String   | General  |
| templateDetails.codingVersions | Coding versions for standards like LOINC and ICD |  Object   |          |
| templateDetails                | Block containing metadata about the template     |  Object   |          |
| templateDetails.code           | Unique code for the template                     |  String   | GENERAL  |
| templateDetails.id             | Unique identifier of the template                |  String   | general  |
| templateDetails.name           | Human-readable template name                     |  String   | General  |
| templateDetails.codingVersions | Coding versions for standards like LOINC and ICD |  Object   |          |
| templateDetails.code           | Unique code for the template                     |  String   | GENERAL  |
| templateDetails.id             | Unique identifier of the template                |  String   | general  |
| templateDetails.name           | Human-readable template name                     |  String   | General  |
| templateDetails.codingVersions | Coding versions for standards like LOINC and ICD |  Object   |          | -->
<!-- 
# HDU API Use case important information

Data templates are made of blocks called template blocks. Each block has variables or parameters constituting it. Blocks and their corresponding parameters are derived primarily from standard health registers, which served as the main reference for designing the data template structure. This structure aims to standardize the aggregation and processing of register-based data to ensure consistency across different sources.

Since registers vary in the parameters they capture, the data template was designed to harmonize these differences by consolidating parameters across multiple registers. For the current version of the data template, the reference registers included outpatient, inpatient, antenatal care, death registry, child health, surveillance, and dental.

---

### Table 2.2.1.1: Retrieving HDU Data Template API

| Field                         | Value |
|-------------------------------|-------|
| Message Type                | JSON |
| Message Category            | MetaData |
| Request type                | GET |
| API                         | …/../../api/v1/hduApi/dataTemplates |
| Authentication              | Basic authentication |
| Response                    | Visit appendix document section: 1.1.1 |
| Error message for wrong API | <pre><code>{
  "timestamp": "2024-08-02T06:04:19.900+00:00",
  "status": 404,
  "error": "Not Found",
  "message": "No message available",
  "path": "/adapter/api/v1/dataTemplatess"
}</code></pre> |

---

### Table 2.2.1.2: Retrieving HDU Data Template API

| Field / Object Name            | Description                                      | Data Type | Example  |
|:-------------------------------|:-------------------------------------------------|:---------:|:--------:|
| *TEMPLATE DETAILS*           |                                                  |           |          |
| templateDetails                | Block containing metadata about the template     |  Object   |          |
| templateDetails.code           | Unique code for the template                     |  String   | GENERAL  |
| templateDetails.id             | Unique identifier of the template                |  String   | general  |
| templateDetails.name           | Human-readable template name                     |  String   | General  |
| templateDetails.codingVersions | Coding versions for standards like LOINC and ICD |  Object   |          | -->


# HDU API Use case important information

Data templates are made of blocks called template blocks. Each block has variables or parameters constituting it. Blocks and their corresponding parameters are derived primarily from standard health registers, which served as the main reference for designing the data template structure. This structure aims to standardize the aggregation and processing of register-based data to ensure consistency across different sources.
Since registers vary in the parameters they capture, the data template was designed to harmonize these differences by consolidating parameters across multiple registers. For the current version of the data template, the reference registers included outpatient, inpatient, antenatal care, death registry, child health, surveillance, and dental.

