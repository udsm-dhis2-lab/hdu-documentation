### Application Programming Interface’s url (API’s)  
Main API for EMRs/EHRs on sending data for integrating with central-level systems

### Table 2.3.1: Main API for EMRs/EHRs

| Channel via HIM         | Method | API & Credentials |
|------------------------|--------|-----------------|
| **Data Template - HIM** | GET    | `https://<him-domain>:<port>/emr-get-data-templates`<br/>`username: xxxx, password: xxxx` |
| **Data Template - HDU** | GET    | ALL: `https://<him-domain>:<port>/adapter/api/v1/dataTemplates`<br/>Specific: `https://<him-domain>:<port>/adapter/api/v1/dataTemplates?id=xxxxxxxx`<br/>`username: xxxxx, password: xxxxxx` |
| **EMR-HIM**             | POST   | `https://<him-domain>:<port>/emr-hdu-data`<br/>`username: xxxxxx, password: xxxxxx` |
