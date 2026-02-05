# Client Registry Overview

The Client Registry (CR) enables unique identification and management of clients across health facilities within the HDU ecosystem.

It supports client registration, search, updates, and identifier standardization to ensure continuity of care.

---

## Client Registry API Summary

| # | API | Method | Description |
|---|-----|--------|-------------|
| 1 | `/api/v1/hduApi/cr/clients` | `POST` | Register new client |
| 2 | `/api/v1/hduApi/cr/clients` | `GET` | Search clients |
| 3 | `/api/v1/hduApi/cr/clients/metaData` | `GET` | Retrieve CR payload structure |
| 4 | `/api/v1/hduApi/cr/clients?idType=&#123;idType&#125;` | `GET` | Retrieve client by ID |
| 5 | `/api/v1/hduApi/cr/clients/&#123;hcr-id&#125;?idType=&#123;idType&#125;` | `PUT` | Update full client record |
| 6 | `/api/v1/hduApi/cr/clients/&#123;hcr-id&#125;?idType=&#123;idType&#125;` | `PATCH` | Update specific fields |
| 7 | `/api/v1/hduApi/cr/requests` | `POST` | Request client deletion |
