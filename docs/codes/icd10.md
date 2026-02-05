# ICD-10 Standard Codes

The HDU API provides access to ICD-10 disease classification codes to support diagnosis reporting, morbidity and mortality records, and standardized clinical data exchange across systems.

These APIs allow systems to browse ICD versions, chapters, blocks, categories, and individual diagnosis codes.

| API Endpoint | Request Type | Description |
|-------------|-------------|-------------|
| https://&lt;him-domain&gt;:&lt;port&gt;/api/v1/hduApi/codeSystems | GET | Retrieving standard codes available. Serves all standard codes stored. |
| https://&lt;him-domain&gt;:&lt;port&gt;/api/v1/hduApi/codeSystems/icd | GET | Retrieving available ICD versions. |
| https://&lt;him-domain&gt;:&lt;port&gt;/api/v1/hduApi/codeSystems/icd?version=&#123;version&#125; | GET | Retrieving ICD version details. |
| https://&lt;him-domain&gt;:&lt;port&gt;/api/v1/hduApi/codeSystems/icd?chapter=&#123;chapter&#125; | GET | Retrieving chapter details. |
| https://&lt;him-domain&gt;:&lt;port&gt;/api/v1/hduApi/codeSystems/icd?chapter=&#123;chapter&#125;&block=&#123;block&#125; | GET | Retrieving block details by chapter. |
| https://&lt;him-domain&gt;:&lt;port&gt;/api/v1/hduApi/codeSystems/icd?chapter=&#123;chapter&#125;&category=&#123;category&#125; | GET | Retrieving category details by chapter. |
| https://&lt;him-domain&gt;:&lt;port&gt;/api/v1/hduApi/codeSystems/icd?code=&#123;code&#125;&version=&#123;version&#125; | GET | Retrieving ICD code details. Filters include code, name, version, release, etc. |
| https://&lt;him-domain&gt;:&lt;port&gt;/api/v1/hduApi/codeSystems/icd/codes?q=cholera&page=0&pageSize=10&code=A01.1 | GET | Retrieving ICD codes by pagination and search filters. |
| https://&lt;him-domain&gt;:&lt;port&gt;/api/v1/hduApi/codeSystems/icd/chapters?q=infectious&code=I | GET | Retrieving specific ICD chapters by pagination and filters. |
| https://&lt;him-domain&gt;:&lt;port&gt;/api/v1/hduApi/codeSystems/icd/blocks?q=spirochaetal | GET | Retrieving specific ICD blocks by pagination and filters. |
| https://&lt;him-domain&gt;:&lt;port&gt;/api/v1/hduApi/codeSystems/icd/categories?q=spirochaetal | GET | Retrieving specific ICD categories by pagination and filters. |

