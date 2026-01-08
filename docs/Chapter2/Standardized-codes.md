# Standardized Codes

HDU API supports standard codes that allow interoperability across systems. Currently, it supports ICD, LOINC, general codes, and data templates.

### ICD 10 APIs

### Table 2.4.1.1: List of ICD APIs

| API                                                                                     | Request Type | Description                                                                                                     |
|-----------------------------------------------------------------------------------------|--------------|-----------------------------------------------------------------------------------------------------------------|
| `https://<him-domain>:<port>/api/v1/hduApi/codeSystems`                                 | GET          | Retrieving standard codes available. Serves for all standard codes stored.                                      |
| `https://<him-domain>:<port>/api/v1/hduApi/codeSystems/icd`                             | GET          | Retrieving available ICD versions.                                                                              |
| `https://<him-domain>:<port>/api/v1/hduApi/codeSystems/icd?version={version}`           | GET          | Retrieving ICD version details.                                                                                 |
| `https://<him-domain>:<port>/api/v1/hduApi/codeSystems/icd?chapter={chapter}`           | GET          | Retrieving chapter details.                                                                                     |
| `https://<him-domain>:<port>/api/v1/hduApi/codeSystems/icd?chapter={chapter}&block={block}` | GET       | Retrieving block details by chapter.                                                                           |
| `https://<him-domain>:<port>/api/v1/hduApi/codeSystems/icd?chapter={chapter}&category={category}` | GET    | Retrieve category details by chapter.                                                                          |
| `https://<him-domain>:<port>/api/v1/hduApi/codeSystems/icd?code={code}&version={version}` | GET       | Retrieving ICD code details. You can filter by different parameters such as code, name, version, release, etc. |
| `https://<him-domain>:<port>/api/v1/hduApi/codeSystems/icd/codes?q=cholera&page=0&pageSize=10&code=A01.1` | GET | Retrieving codes by pagination. You can filter by different parameters such as q (search), code, name, version, release, etc. |
| `https://<him-domain>:<port>/api/v1/hduApi/codeSystems/icd/chapters?q=infectious&code=I` | GET       | Retrieving specific chapters by pagination. You can filter by different parameters such as q (search), code, name, version, release, etc. |
| `https://<him-domain>:<port>/api/v1/hduApi/codeSystems/icd/blocks?q=spirochaetal`       | GET          | Retrieving specific blocks by pagination. You can filter by different parameters such as q (search), code, name, version, release, etc. |
| `https://<him-domain>:<port>/api/v1/hduApi/codeSystems/icd/categories?q=spirochaetal`   | GET          | Retrieving specific categories by pagination. You can filter by different parameters such as q (search), code, name, version, release, etc. |
### SNOMED Standard Codes

### Table 2.4.2.1: List of SNOMED APIs

| S/N | API                                                             | Request Type | Description                  |
|-----|-----------------------------------------------------------------|--------------|------------------------------|
| 1   | `https://<him-domain>:<port>/api/v1/hduApi/codeSystems/specimenSource` | GET          | Get SNOMED – specimen source |


### LOINC Standard Codes

### Table 2.4.2.2: List of LOINC APIs

| S/N | API                                                                      | Request Type | Description                                                                                          |
|-----|--------------------------------------------------------------------------|--------------|------------------------------------------------------------------------------------------------------|
| 1   | `https://<him-domain>:<port>/api/v1/hduApi/codeSystems/loinc`            | GET          | Get LOINC standard codes by pagination. You can filter by parameters: code, q (search), release, version, etc |
| 2   | `https://<him-domain>:<port>/api/v1/hduApi/standardCodes/labTest`        | GET          | Get lab test                                                                                         |
| 3   | `https://<him-domain>:<port>/api/v1/hduApi/standardCodes/resultAnswerType` | GET        | Get results answer type                                                                               |
| 4   | `https://<him-domain>:<port>/api/v1/hduApi/standardCodes/observation`    | GET          | Get observation                                                                                      |
| 5   | `https://<him-domain>:<port>/api/v1/hduApi/standardCodes/labResult`      | GET          | Get lab result                                                                                        

### HL7 Standard Codes

### Table 2.4.3.1: HL7 Standard Codes APIs

| S/N | API URL                                                                                       | Request Type | Description       |
|-----|------------------------------------------------------------------------------------------------|--------------|-----------------|
| 1   | `https://&lt;him-domain&gt;:&lt;port&gt;/api/v1/hduApi/standardCodes/resultStatus`            | GET          | Get result status |
| 2   | `https://&lt;him-domain&gt;:&lt;port&gt;/api/v1/hduApi/standardCodes/resultType`              | GET          | Get result type   |
| 3   | `https://&lt;him-domain&gt;:&lt;port&gt;/api/v1/hduApi/standardCodes/abnormalFlags`          | GET          | Get abnormal flags|
| 4   | `https://&lt;him-domain&gt;:&lt;port&gt;/api/v1/hduApi/standardCodes/sex`                     | GET          | Get sex           |
| 5   | `https://&lt;him-domain&gt;:&lt;port&gt;/api/v1/hduApi/standardCodes/race`                    | GET          | Get race          |
| 6   | `https://&lt;him-domain&gt;:&lt;port&gt;/api/v1/hduApi/standardCodes/priority`                | GET          | Get priority      |
| 7   | `https://&lt;him-domain&gt;:&lt;port&gt;/api/v1/hduApi/standardCodes/patientClass`            | GET          | Get patient class |


### General Standard Codes

### Table 2.4.4.1: General Standard Codes APIs

| S/N | API URL                                                                                               | Request Type | Description                                             |
|-----|------------------------------------------------------------------------------------------------------|--------------|---------------------------------------------------------|
| 1   | `https://&lt;him-domain&gt;:&lt;port&gt;/api/v1/hduApi/generalCodes/insurances`                      | GET          | Get a list of Insurances                                |
| 2   | `https://&lt;him-domain&gt;:&lt;port&gt;/api/v1/hduApi/generalCodes/exemptions`                      | GET          | Get a list of exemptions                                |
| 3   | `https://&lt;him-domain&gt;:&lt;port&gt;/api/v1/hduApi/generalCodes/billings`                        | GET          | Get a list of standard billing codes for billable items|
| 4   | `https://&lt;him-domain&gt;:&lt;port&gt;/api/v1/hduApi/generalCodes/radiology`                       | GET          | Get list of standard radiology tests                    |
| 5   | `https://&lt;him-domain&gt;:&lt;port&gt;/api/v1/hduApi/generalCodes/vaccinations`                    | GET          | Get Vaccination standard codes, coded by LOINC         |
| 6   | `https://&lt;him-domain&gt;:&lt;port&gt;/api/v1/hduApi/generalCodes/prophylaxes`                     | GET          | Get prophylaxes standard codes, coded by LOINC         |
| 7   | `https://&lt;him-domain&gt;:&lt;port&gt;/api/v1/hduApi/generalCodes/allergies`                       | GET          | Get allergies standard codes, coded by LOINC           |
| 8   | `https://&lt;him-domain&gt;:&lt;port&gt;/api/v1/hduApi/generalCodes/chronicConditions`               | GET          | Get chronic conditions standard codes, coded by LOINC  |
| 9   | `https://&lt;him-domain&gt;:&lt;port&gt;/api/v1/hduApi/generalCodes/deliveryMethods`                 | GET          | Get delivery methods standard codes, coded by LOINC    |
| 10  | `https://&lt;him-domain&gt;:&lt;port&gt;/api/v1/hduApi/generalCodes/birthComplications`              | GET          | Get birth complications standard codes, coded by LOINC |
| 11  | `https://&lt;him-domain&gt;:&lt;port&gt;/api/v1/hduApi/generalCodes/familyPlanningMethods`           | GET          | Get family planning methods standard codes, coded by LOINC |
| 12  | `https://&lt;him-domain&gt;:&lt;port&gt;/api/v1/hduApi/generalCodes/productLists`                    | GET          | Get product lists (e.g., MSD codes)                    |
| 13  | `https://&lt;him-domain&gt;:&lt;port&gt;/api/v1/hduApi/generalCodes/providerSpecialities`            | GET          | Get provider specialities                                |
| 14  | `https://&lt;him-domain&gt;:&lt;port&gt;/api/v1/hduApi/generalCodes/standardBodySystems`             | GET          | Get Human Body Standard Systems references              |
| 15  | `https://&lt;him-domain&gt;:&lt;port&gt;/api/v1/hduApi/generalCodes/identifierTypes`                 | GET          | Get Identifier types                                     |
| 16  | `https://&lt;him-domain&gt;:&lt;port&gt;/api/v1/hduApi/generalCodes/analyzerCode`                    | GET          | Get analyzer codes                                       |
| 17  | `https://&lt;him-domain&gt;:&lt;port&gt;/api/v1/hduApi/resultAnswerType`                               | GET          | Get result answer type                                   |
| 18  | `https://&lt;him-domain&gt;:&lt;port&gt;/api/v1/hduApi/section`                                        | GET          | Get section                                              |
| 19  | `https://&lt;him-domain&gt;:&lt;port&gt;/api/v1/hduApi/ethnicGroup`                                    | GET          | Get ethnic group                                        |
| 20  | `https://&lt;him-domain&gt;:&lt;port&gt;/api/v1/hduApi/rejection`                                      | GET          | Get rejection reason                                    |
| 21  | `https://&lt;him-domain&gt;:&lt;port&gt;/api/v1/hduApi/specimenSite`                                    | GET          | Get specimen site                                       |
| 22  | `https://&lt;him-domain&gt;:&lt;port&gt;/api/v1/hduApi/requestType`                                     | GET          | Get request type                                        |

### Table 2.4.4.2: General Standard Codes APIs Payload Information
*(Refer Appendix document Section: 1.1.14)*

| Object Name                  | Description                                         | Data Type   | Example                             |
|-------------------------------|-----------------------------------------------------|------------|-------------------------------------|
| pager                         | Block containing pagination metadata for the full result set | Object     |                                     |
| pager.total                   | Total number of records across all pages           | Integer    | 122                                 |
| pager.totalPages              | Total number of pages available                    | Integer    | 13                                  |
| pager.pageSize                | Number of records returned per page               | Integer    | 10                                  |
| pager.page                    | Current page index (1-based or 0-based per API contract) | Integer    | 1                                   |
| results[].attributes | Arbitrary metadata as key–value pairs | Object | `{ "color": "blue" }` |
| results[].relationships       | Related entities for this item, if any            | Array      | []                                  |
| results[].code                | Unique code/identifier for this item              | String     | ITEM001                             |
| results[].codeType            | Classifier/namespace for the code                 | String     | classification                       |
| results[].release             | Release label or timestamp string for this item   | String     | 2025-01                             |
| results[].name                | Human-readable name/title for the item            | String     | Sample Item                          |
| results[].organisation        | Organization responsible for this item            | String     | Organization A                       |
| results[].attributes | Arbitrary metadata as key–value pairs | Object | `{ "color": "blue" }` |
| results[].shortName           | Abbreviated name or short code                     | String     | SMP                                  |
| results[].version             | Version label of this item                         | String     | 1.0                                  |
| results[].url                 | Reference URL or API link for this item           | String/URL | https://example.org/items/ITEM001    |
